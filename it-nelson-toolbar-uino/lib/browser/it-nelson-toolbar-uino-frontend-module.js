"use strict";
/**
 * Generated using theia-extension-generator
*/
Object.defineProperty(exports, "__esModule", { value: true });
//import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
const inversify_1 = require("@theia/core/shared/inversify");
//import { TabBarToolbarContribution, TabBarToolbarFactory,} from '@theia/core/lib/browser/shell/tab-bar-toolbar';
const it_nelson_toolbar_uino_contribution_1 = require("./it-nelson-toolbar-uino-contribution");
const frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
const tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
//import { TabBarToolbarContribution } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
//import { ColorContribution } from '@theia/core/lib/browser/color-application-contribution';
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here
    //bind(CommandContribution).to(ItNelsonToolbarUinoCommandContribution);
    //bind(MenuContribution).to(ItNelsonToolbarUinoMenuContribution);
    // Commands and toolbar items
    //bind(ArduinoFrontendContribution).toSelf().inSingletonScope();
    //bind(CommandContribution).toService(ArduinoFrontendContribution);
    //bind(MenuContribution).toService(ArduinoFrontendContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).toService(it_nelson_toolbar_uino_contribution_1.ArduinoToolbarContribution);
    //bind(FrontendApplicationContribution).toService(ArduinoFrontendContribution);
    //bind(ColorContribution).toService(ArduinoFrontendContribution);
    bind(it_nelson_toolbar_uino_contribution_1.ArduinoToolbarContribution).toSelf().inSingletonScope();
    bind(frontend_application_1.FrontendApplicationContribution).toService(it_nelson_toolbar_uino_contribution_1.ArduinoToolbarContribution);
});
//# sourceMappingURL=it-nelson-toolbar-uino-frontend-module.js.map