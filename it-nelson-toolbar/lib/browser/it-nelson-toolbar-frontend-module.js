"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const it_nelson_toolbar_contribution_1 = require("./it-nelson-toolbar-contribution");
//import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
const inversify_1 = require("@theia/core/shared/inversify");
const toolbar_interfaces_1 = require("@theia/toolbar/lib/browser/toolbar-interfaces");
const sample_toolbar_defaults_override_1 = require("./sample-toolbar-defaults-override");
const toolbar_defaults_1 = require("@theia/toolbar/lib/browser/toolbar-defaults");
const command_1 = require("@theia/core/lib/common/command");
const menu_1 = require("@theia/core/lib/common/menu");
exports.default = new inversify_1.ContainerModule((bind, unbind, isBound, rebind) => {
    // add your contribution bindings here
    bind(it_nelson_toolbar_contribution_1.SampleToolbarContribution).toSelf().inSingletonScope();
    bind(toolbar_interfaces_1.ToolbarContribution).to(it_nelson_toolbar_contribution_1.SampleToolbarContribution);
    bind(command_1.CommandContribution).to(it_nelson_toolbar_contribution_1.SampleToolbarContribution);
    bind(menu_1.MenuContribution).to(it_nelson_toolbar_contribution_1.SampleToolbarContribution);
    bind(it_nelson_toolbar_contribution_1.SearchInWorkspaceQuickInputService).toSelf().inSingletonScope();
    rebind(toolbar_defaults_1.ToolbarDefaultsFactory).toConstantValue(sample_toolbar_defaults_override_1.SampleToolbarDefaultsOverride);
});
//# sourceMappingURL=it-nelson-toolbar-frontend-module.js.map