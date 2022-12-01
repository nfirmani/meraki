"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var WelcomePageWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomePageWidget = void 0;
/********************************************************************************
 * Copyright (C) 2020-2022 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0, or the MIT License which is
 * available at https://opensource.org/licenses/MIT.
 *
 * SPDX-License-Identifier: EPL-2.0 OR MIT
 ********************************************************************************/
const browser_1 = require("@theia/core/lib/browser");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const common_1 = require("@theia/core/lib/common");
const application_protocol_1 = require("@theia/core/lib/common/application-protocol");
const uri_1 = require("@theia/core/lib/common/uri");
const debug_configuration_manager_1 = require("@theia/debug/lib/browser/debug-configuration-manager");
const debug_frontend_application_contribution_1 = require("@theia/debug/lib/browser/debug-frontend-application-contribution");
const browser_2 = require("@theia/navigator/lib/browser");
const browser_3 = require("@theia/workspace/lib/browser");
//import { CODEGEN_COMMAND as CODEGEN_CPP_COMMAND } from 'coffee-cpp-extension/lib/browser/command-contribution';
//import { CODEGEN_COMMAND as CODEGEN_JAVA_COMMAND } from 'coffee-java-extension/lib/browser/command-contribution';
//import { ANALYZE_COMMAND } from 'coffee-workflow-analyzer/lib/browser/command-contribution';
const inversify_1 = require("inversify");
const React = require("react");
/* eslint-disable no-invalid-this */
let WelcomePageWidget = WelcomePageWidget_1 = class WelcomePageWidget extends react_widget_1.ReactWidget {
    constructor() {
        super(...arguments);
        this.openDiagram = () => (0, browser_1.open)(this.openerService, this.getSuperBrewer3000FileURI('notation'));
        this.openTreeEditor = () => (0, browser_1.open)(this.openerService, this.getSuperBrewer3000FileURI('coffee'));
        this.openTextualDSL = () => (0, browser_1.open)(this.openerService, this.getSuperBrewer3000FileURI('wfconfig'));
        this.openFileExplorer = () => this.shell.revealWidget(browser_2.EXPLORER_VIEW_CONTAINER_ID);
        this.runModelAnalysis = () => {
            (0, browser_1.open)(this.openerService, this.getSuperBrewer3000FileURI('wfconfig')).then(() => {
                //            this.commandRegistry.executeCommand(ANALYZE_COMMAND.id);
            });
        };
        this.runJavaCodeGenerator = () => {
            this.shell.revealWidget(browser_2.FILE_NAVIGATOR_ID).then(widget => {
                const { model } = widget;
                const uri = this.getSuperBrewer3000FileURI('coffee');
                model.revealFile(uri).then(node => {
                    if (browser_1.SelectableTreeNode.is(node)) {
                        model.selectNode(node);
                    }
                    //               setTimeout(() => this.commandRegistry.executeCommand(CODEGEN_JAVA_COMMAND.id, uri), 1000);
                });
            });
        };
        this.runCppCodeGenerator = () => {
            this.shell.revealWidget(browser_2.FILE_NAVIGATOR_ID).then(widget => {
                const { model } = widget;
                const uri = this.getSuperBrewer3000FileURI('coffee');
                model.revealFile(uri).then(node => {
                    if (browser_1.SelectableTreeNode.is(node)) {
                        model.selectNode(node);
                    }
                    //                setTimeout(() => this.commandRegistry.executeCommand(CODEGEN_CPP_COMMAND.id, uri), 1000);
                });
            });
        };
        this.openJavaCode = () => {
            this.shell.revealWidget(browser_2.FILE_NAVIGATOR_ID).then(widget => {
                const { model } = widget;
                model.revealFile(this.getJavaSuperBrewer3000RunnerFileURI()).then(node => {
                    if (browser_1.SelectableTreeNode.is(node)) {
                        model.openNode(node);
                    }
                });
            });
        };
        this.openCppCode = () => {
            this.shell.revealWidget(browser_2.FILE_NAVIGATOR_ID).then(widget => {
                const { model } = widget;
                model.revealFile(this.getCppSuperBrewer3000RunnerFileURI()).then(node => {
                    if (browser_1.SelectableTreeNode.is(node)) {
                        model.openNode(node);
                    }
                });
            });
        };
        this.startDebugJava = () => this.startDebug('Debug SuperBrewer Java');
        this.startDebugCpp = () => this.startDebug('Debug SuperBrewer C++');
        this.startDebug = (configName) => {
            const config = Array.from(this.debugConfigurationManager.all).find(c => c.configuration.name === configName);
            return this.commandRegistry.executeCommand(debug_frontend_application_contribution_1.DebugCommands.START.id, config);
        };
    }
    async init() {
        this.id = WelcomePageWidget_1.ID;
        this.title.label = WelcomePageWidget_1.LABEL;
        this.title.caption = WelcomePageWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = (0, browser_1.codicon)('info');
        this.applicationInfo = await this.appServer.getApplicationInfo();
        this.update();
    }
    render() {
        return (React.createElement("div", { className: 'gs-container' },
            this.renderHeader(),
            React.createElement("hr", { className: 'gs-hr' }),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderHelp())),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Diagram Editor', 'codicon codicon-type-hierarchy-sub', React.createElement("p", null,
                    "The example diagram editor allows specifying the behavior of a coffee machine using a flow chart like notation. The diagram editor is based on",
                    ' ',
                    React.createElement("a", { href: 'https://www.eclipse.org/glsp/', target: '_blank', rel: 'noreferrer' }, "the graphical language server platform (Eclipse GLSP)"),
                    ". Double click the file \"superbrewer3000.coffeenotation\" in the file explorer or click the header try out the diagram editor!"), this.openDiagram))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Form/Tree Editor', 'codicon codicon-preview', React.createElement("p", null,
                    "This editor allows to edit elements in a form-based view along with a tree showing the hierarchy of the model instances. This allows to efficiently browse the model and enter data. The form editor is based on",
                    ' ',
                    React.createElement("a", { href: 'https://jsonforms.io', target: '_blank', rel: 'noreferrer' }, "JSON Forms"),
                    ". Double click the file \"superbrewer3000.coffee\" in the file explorer or click the header to try out the editor!"), this.openTreeEditor))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Textual DSL', 'codicon codicon-symbol-string', React.createElement("p", null,
                    "The textual DSL editor allows you to specify model constraints and supports syntax highlighting and auto completion. It is based on",
                    ' ',
                    React.createElement("a", { href: 'https://www.eclipse.org/Xtext/', target: '_blank', rel: 'noreferrer' }, "Xtext"),
                    ". Double click the file \"superbrewer3000.wfconfig\" in the file explorer or click the header to try out the textual DSl!"), this.openTextualDSL))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Model Analysis', 'codicon codicon-pie-chart', React.createElement("p", null, "Based on the constraints described in the textual DSL, the coffee editor provides an example model analysis. The result is visualized as a \"sun burst\" chart. The analysis is an external component written in Kotlin, the chart is based on D3. Select the file \"superbrewer3000.wfconfig\" in the file explorer, press F1, type \"Analyze workflow model\" and hit enter to see the model analysis in action. Alternatively do a right click in the open textual DSL editor or click the header above."), this.runModelAnalysis))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Java Code Generator', 'codicon codicon-github-action', React.createElement("p", null, "The coffee editor allows generating example code based on the current model. The code generator itself is written using Xtend. Right click the file \"superbrewer3000.coffee\" in the file explorer and select \"Generate Workflow code\". Browse the generated code in the \"src\" and \"src-gen\" folder, the coffee editor also provides extensive language support for Java!"), this.runJavaCodeGenerator))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Java Code Editing', 'codicon codicon-file-code', React.createElement("p", null, "The coffee editor provides full-fleged Java tooling including syntax highlighting and auto completion. This is based on the Monaco code editor and a Java language server connected via LSP. Make sure you have generated the code first (see above). Then, open any Java file in the src folder (or click above) and start modifying the code, e.g. by adding \"sysout\" statements."), this.openJavaCode))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('C++ Code Generator', 'codicon codicon-github-action', React.createElement("p", null, "The coffee editor allows generating example code based on the current model. The code generator itself is written using Xtend. Right click the file \"superbrewer3000.coffee\" in the file explorer and select \"Generate C++ Workflow code\". Browse the generated code in the \"cpp\" folder, the coffee editor also provides extensive language support for C++!"), this.runCppCodeGenerator))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('C++ Code Editing', 'codicon codicon-file-code', React.createElement("p", null, "The coffee editor provides full-fleged C++ tooling including syntax highlighting and auto completion. This is based on the Monaco code editor and the \"clangd\" C++ language server connected via LSP. Make sure you have generated the code first (see above). Then, open any C++ file in the cpp/src folder (or click above) and start modifying the code, e.g. by adding \"std::cout\" statements."), this.openCppCode))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('Java Debugging', 'codicon codicon-bug', React.createElement("p", null, "The coffee editor allows executing and debugging Java code by integrating the debug adapter protocol (DAP). Make sure you have generated the code (see above) and set a break point in any Java file by double clicking on the left border of the code editor. Press \"F5\" or click above to start debugging the example. This will automatically open the integrated debug view and show all outputs of the example code in the console!"), this.startDebugJava))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderFeatureSection('C++ Debugging', 'codicon codicon-bug', React.createElement("p", null, "The coffee editor allows executing and debugging C++ code by integrating the debug adapter protocol (DAP). Make sure you have generated the code (see above) and set a break point in any C++ file by double clicking on the left border of the code editor. Press \"F5\" or click above to start debugging the example. This will automatically open the integrated debug view and show all outputs of the example code in the console!"), this.startDebugCpp))),
            React.createElement("div", { className: 'flex-grid' },
                React.createElement("div", { className: 'col' }, this.renderVersion()))));
    }
    renderHeader() {
        return (React.createElement("div", { className: 'gs-header' },
            React.createElement("h1", null,
                "Coffee Editor ",
                React.createElement("span", { className: 'gs-sub-header' }, "Getting Started")),
            React.createElement("p", null,
                "The \"coffee editor\" is a comprehensive example of a web-based modeling tool based on\u00A0",
                React.createElement("a", { href: 'https://www.eclipse.org/emfcloud/', target: '_blank', rel: 'noreferrer' }, "EMF.cloud"),
                ' ',
                "and Eclipse Theia. Please see the sections below to get an overview of the available features and use the links to directly see them in action. Alternatively, ",
                React.createElement("a", { onClick: () => this.openFileExplorer() }, "open the file explorer"),
                " to the left and browse the example workspace. See the \"Help and more information\" section below for further pointers.")));
    }
    renderFeatureSection(title, icon, description, opener) {
        return (React.createElement("div", { className: 'gs-section' },
            React.createElement("a", { onClick: opener },
                ' ',
                React.createElement("h3", { className: 'gs-section-header' },
                    React.createElement("i", { className: icon }),
                    title,
                    React.createElement("span", { style: { marginLeft: '5px' } },
                        React.createElement("i", { className: 'codicon codicon-link-external' })))),
            description,
            React.createElement("div", { className: 'gs-action-container' })));
    }
    renderHelp() {
        return (React.createElement("div", { className: 'gs-section' },
            React.createElement("h3", { className: 'gs-section-header' },
                React.createElement("i", { className: 'codicon codicon-question' }),
                "Help and more information"),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: 'https://www.eclipse.org/emfcloud/contact/', target: '_blank', rel: 'noreferrer' }, "Ask a question")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: 'https://github.com/eclipsesource/coffee-editor/issues', target: '_blank', rel: 'noreferrer' }, "Report an issue")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: 'https://github.com/eclipsesource/coffee-editor/', target: '_blank', rel: 'noreferrer' }, "Github project with code and more info")),
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("a", { href: 'https://eclipsesource.com/technology/eclipse-theia/', target: '_blank', rel: 'noreferrer' }, "Get support for building your own custom tool based on Eclipse Theia"))));
    }
    renderVersion() {
        return (React.createElement("div", { className: 'gs-section' },
            React.createElement("div", { className: 'gs-action-container' },
                React.createElement("p", { className: 'gs-sub-header gs-version' },
                    " ",
                    this.applicationInfo ? 'Version ' + this.applicationInfo.version : ''))));
    }
    getSuperBrewer3000FileURI(extension) {
        var _a;
        return new uri_1.default(`${(_a = this.workspaceService.workspace) === null || _a === void 0 ? void 0 : _a.resource}/superbrewer3000.${extension}`);
    }
    getJavaSuperBrewer3000RunnerFileURI() {
        var _a;
        return new uri_1.default(`${(_a = this.workspaceService.workspace) === null || _a === void 0 ? void 0 : _a.resource}/src/SuperBrewer3000/tests/SuperBrewer3000Runner.java`);
    }
    getCppSuperBrewer3000RunnerFileURI() {
        var _a;
        return new uri_1.default(`${(_a = this.workspaceService.workspace) === null || _a === void 0 ? void 0 : _a.resource}/cpp/src/SuperBrewer3000Runner.cpp`);
    }
};
WelcomePageWidget.ID = 'welcome.page.widget';
WelcomePageWidget.LABEL = 'Getting Started';
__decorate([
    (0, inversify_1.inject)(application_protocol_1.ApplicationServer),
    __metadata("design:type", Object)
], WelcomePageWidget.prototype, "appServer", void 0);
__decorate([
    (0, inversify_1.inject)(common_1.CommandRegistry),
    __metadata("design:type", common_1.CommandRegistry)
], WelcomePageWidget.prototype, "commandRegistry", void 0);
__decorate([
    (0, inversify_1.inject)(browser_3.WorkspaceService),
    __metadata("design:type", browser_3.WorkspaceService)
], WelcomePageWidget.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.OpenerService),
    __metadata("design:type", Object)
], WelcomePageWidget.prototype, "openerService", void 0);
__decorate([
    (0, inversify_1.inject)(debug_configuration_manager_1.DebugConfigurationManager),
    __metadata("design:type", debug_configuration_manager_1.DebugConfigurationManager)
], WelcomePageWidget.prototype, "debugConfigurationManager", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.ApplicationShell),
    __metadata("design:type", browser_1.ApplicationShell)
], WelcomePageWidget.prototype, "shell", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], WelcomePageWidget.prototype, "init", null);
WelcomePageWidget = WelcomePageWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], WelcomePageWidget);
exports.WelcomePageWidget = WelcomePageWidget;
//# sourceMappingURL=welcome-page-widget.js.map