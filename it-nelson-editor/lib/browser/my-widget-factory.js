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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var MyWidgetFactory_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MyWidgetFactory = void 0;
const core_1 = require("@theia/core");
const browser_1 = require("@theia/core/lib/browser");
const uri_1 = require("@theia/core/lib/common/uri");
const browser_2 = require("@theia/editor/lib/browser");
const inversify_1 = require("inversify");
const ReactDOM = require("react-dom");
//import { MyWidgetE1 } from './my-widget-e1';
const my_widget_1 = require("./my-widget");
const React = require("@theia/core/shared/react");
const mio_widget_1 = require("./mio-widget");
let MyWidgetFactory = MyWidgetFactory_1 = class MyWidgetFactory {
    constructor(labelProvider, editorProvider, selectionService) {
        this.labelProvider = labelProvider;
        this.editorProvider = editorProvider;
        this.selectionService = selectionService;
        this.id = MyWidgetFactory_1.ID;
    }
    createWidget(options) {
        const uri = new uri_1.default(options.uri);
        return this.createEditor(uri);
    }
    async createEditor(uri) {
        const icon = await this.labelProvider.getIcon(uri);
        return this.editorProvider(uri).then(textEditor => {
            const newEditor = new my_widget_1.MyWidget(textEditor, this.selectionService);
            newEditor.id = this.id + ':' + uri.toString();
            newEditor.title.closable = true;
            newEditor.title.label = 'My Editor for ' + this.labelProvider.getName(uri);
            newEditor.title.iconClass = icon + ' my-tab';
            newEditor.title.caption = 'My description for ' + this.labelProvider.getLongName(uri);
            //newEditor.node.innerHTML = '<H1>test </H1>';
            ReactDOM.render(React.createElement(mio_widget_1.MioWgProva, null), newEditor.node);
            return newEditor;
        });
    }
};
MyWidgetFactory.ID = 'my-editor-opener';
MyWidgetFactory = MyWidgetFactory_1 = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(browser_1.LabelProvider)),
    __param(1, (0, inversify_1.inject)(browser_2.TextEditorProvider)),
    __param(2, (0, inversify_1.inject)(core_1.SelectionService)),
    __metadata("design:paramtypes", [browser_1.LabelProvider, Function, core_1.SelectionService])
], MyWidgetFactory);
exports.MyWidgetFactory = MyWidgetFactory;
//# sourceMappingURL=my-widget-factory.js.map