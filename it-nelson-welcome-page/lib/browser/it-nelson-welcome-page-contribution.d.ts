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
import { AbstractViewContribution, FrontendApplication, FrontendApplicationContribution } from '@theia/core/lib/browser';
import { FrontendApplicationStateService } from '@theia/core/lib/browser/frontend-application-state';
import { CommandRegistry, MaybePromise, MenuModelRegistry } from '@theia/core/lib/common';
import { FileNavigatorContribution } from '@theia/navigator/lib/browser/navigator-contribution';
import { WelcomePageWidget } from './welcome-page-widget';
export declare const WelcomePageCommand: {
    id: string;
    label: string;
};
export declare class WelcomePageContribution extends AbstractViewContribution<WelcomePageWidget> implements FrontendApplicationContribution {
    protected readonly stateService: FrontendApplicationStateService;
    protected readonly fileNavigatorContribution: FileNavigatorContribution;
    constructor();
    onStart(app: FrontendApplication): Promise<void>;
    initializeLayout(app: FrontendApplication): MaybePromise<void>;
    registerCommands(registry: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-welcome-page-contribution.d.ts.map