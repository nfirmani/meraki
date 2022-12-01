"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
require("../../src/browser/style/index.css");
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
const it_nelson_welcome_page_contribution_1 = require("./it-nelson-welcome-page-contribution");
const welcome_page_widget_1 = require("./welcome-page-widget");
/**
 * Generated using theia-extension-generator
 */
exports.default = new inversify_1.ContainerModule(bind => {
    (0, browser_1.bindViewContribution)(bind, it_nelson_welcome_page_contribution_1.WelcomePageContribution);
    bind(browser_1.FrontendApplicationContribution).toService(it_nelson_welcome_page_contribution_1.WelcomePageContribution);
    bind(welcome_page_widget_1.WelcomePageWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(context => ({
        id: welcome_page_widget_1.WelcomePageWidget.ID,
        createWidget: () => context.container.get(welcome_page_widget_1.WelcomePageWidget)
    })).inSingletonScope();
});
//# sourceMappingURL=it-nelson-welcome-page-frontend-module.js.map