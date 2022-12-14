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
import '../../src/browser/style/index.css';

import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';
import { ContainerModule } from 'inversify';

import { WelcomePageContribution } from './it-nelson-welcome-page-contribution';
import { WelcomePageWidget } from './welcome-page-widget';

/**
 * Generated using theia-extension-generator
 */
export default new ContainerModule(bind => {
    bindViewContribution(bind, WelcomePageContribution);
    bind(FrontendApplicationContribution).toService(WelcomePageContribution);
    bind(WelcomePageWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(context => ({
        id: WelcomePageWidget.ID,
        createWidget: () => context.container.get<WelcomePageWidget>(WelcomePageWidget)
    })).inSingletonScope();
});
