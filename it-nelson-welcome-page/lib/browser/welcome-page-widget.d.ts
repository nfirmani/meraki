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
import { ApplicationShell, OpenerService, Widget } from '@theia/core/lib/browser';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { CommandRegistry } from '@theia/core/lib/common';
import { ApplicationInfo, ApplicationServer } from '@theia/core/lib/common/application-protocol';
import { DebugConfigurationManager } from '@theia/debug/lib/browser/debug-configuration-manager';
import { WorkspaceService } from '@theia/workspace/lib/browser';
import * as React from 'react';
export declare class WelcomePageWidget extends ReactWidget {
    static readonly ID = "welcome.page.widget";
    static readonly LABEL = "Getting Started";
    protected applicationInfo: ApplicationInfo | undefined;
    protected readonly appServer: ApplicationServer;
    protected readonly commandRegistry: CommandRegistry;
    protected readonly workspaceService: WorkspaceService;
    protected readonly openerService: OpenerService;
    protected readonly debugConfigurationManager: DebugConfigurationManager;
    protected readonly shell: ApplicationShell;
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
    protected renderHeader(): React.ReactNode;
    protected renderFeatureSection(title: string, icon: string, description: React.ReactNode, opener: () => void): React.ReactNode;
    protected renderHelp(): React.ReactNode;
    protected renderVersion(): React.ReactNode;
    private getSuperBrewer3000FileURI;
    protected openDiagram: () => Promise<object | undefined>;
    protected openTreeEditor: () => Promise<object | undefined>;
    protected openTextualDSL: () => Promise<object | undefined>;
    protected openFileExplorer: () => Promise<Widget | undefined>;
    protected runModelAnalysis: () => void;
    protected runJavaCodeGenerator: () => void;
    protected runCppCodeGenerator: () => void;
    private getJavaSuperBrewer3000RunnerFileURI;
    protected openJavaCode: () => void;
    private getCppSuperBrewer3000RunnerFileURI;
    protected openCppCode: () => void;
    protected startDebugJava: () => Promise<unknown>;
    protected startDebugCpp: () => Promise<unknown>;
    private startDebug;
}
//# sourceMappingURL=welcome-page-widget.d.ts.map