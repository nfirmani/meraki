/**
 * Generated using theia-extension-generator
 */
import {   SampleToolbarContribution, SearchInWorkspaceQuickInputService } from './it-nelson-toolbar-contribution';
//import { CommandContribution, MenuContribution } from '@theia/core/lib/common';
import {  ContainerModule } from '@theia/core/shared/inversify';
import { ToolbarContribution } from '@theia/toolbar/lib/browser/toolbar-interfaces';
import { SampleToolbarDefaultsOverride } from './sample-toolbar-defaults-override';
import { ToolbarDefaultsFactory } from '@theia/toolbar/lib/browser/toolbar-defaults';
import { CommandContribution } from '@theia/core/lib/common/command';
import { MenuContribution } from '@theia/core/lib/common/menu';



    export default new ContainerModule((bind, unbind, isBound, rebind) => {
    // add your contribution bindings here
   

    bind(SampleToolbarContribution).toSelf().inSingletonScope();
    bind(ToolbarContribution).to(SampleToolbarContribution);
    bind(CommandContribution).to(SampleToolbarContribution);
    bind(MenuContribution).to(SampleToolbarContribution);
    bind(SearchInWorkspaceQuickInputService).toSelf().inSingletonScope();
    rebind(ToolbarDefaultsFactory).toConstantValue(SampleToolbarDefaultsOverride);
});
