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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WelcomePageContribution = exports.WelcomePageCommand = void 0;
/*!
 * Copyright (C) 2020 EclipseSource and others.
 *
 * This program and the accompanying materials are made available under the
 * terms of the Eclipse Public License v. 2.0 which is available at
 * http://www.eclipse.org/legal/epl-2.0.
 *
 * This Source Code may also be made available under the following Secondary
 * Licenses when the conditions for such availability set forth in the Eclipse
 * Public License v. 2.0 are satisfied: GNU General Public License, version 2
 * with the GNU Classpath Exception which is available at
 * https://www.gnu.org/software/classpath/license.html.
 *
 * SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
 */
const browser_1 = require("@theia/core/lib/browser");
const frontend_application_state_1 = require("@theia/core/lib/browser/frontend-application-state");
const navigator_contribution_1 = require("@theia/navigator/lib/browser/navigator-contribution");
const inversify_1 = require("inversify");
const welcome_page_widget_1 = require("./welcome-page-widget");
exports.WelcomePageCommand = {
    id: welcome_page_widget_1.WelcomePageWidget.ID,
    label: welcome_page_widget_1.WelcomePageWidget.LABEL
};
let WelcomePageContribution = class WelcomePageContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: welcome_page_widget_1.WelcomePageWidget.ID,
            widgetName: welcome_page_widget_1.WelcomePageWidget.LABEL,
            defaultWidgetOptions: {
                area: 'right',
                rank: 1000
            }
        });
    }
    async onStart(app) {
        this.stateService.reachedState('ready').then(a => this.openView({ reveal: true }));
    }
    initializeLayout(app) {
        this.fileNavigatorContribution.openView({ reveal: true });
    }
    registerCommands(registry) {
        registry.registerCommand(exports.WelcomePageCommand, {
            execute: () => this.openView({ reveal: true })
        });
    }
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.WelcomePageCommand.id,
            label: exports.WelcomePageCommand.label,
            order: 'a11'
        });
    }
};
__decorate([
    (0, inversify_1.inject)(frontend_application_state_1.FrontendApplicationStateService),
    __metadata("design:type", frontend_application_state_1.FrontendApplicationStateService)
], WelcomePageContribution.prototype, "stateService", void 0);
__decorate([
    (0, inversify_1.inject)(navigator_contribution_1.FileNavigatorContribution),
    __metadata("design:type", navigator_contribution_1.FileNavigatorContribution)
], WelcomePageContribution.prototype, "fileNavigatorContribution", void 0);
WelcomePageContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], WelcomePageContribution);
exports.WelcomePageContribution = WelcomePageContribution;
//# sourceMappingURL=it-nelson-welcome-page-contribution.js.map