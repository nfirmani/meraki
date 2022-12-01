import { Command, CommandRegistry, MessageService } from '@theia/core/lib/common';
import { AbstractViewContribution, Widget } from '@theia/core/lib/browser';
import { SampleViewUnclosableView } from './sample-unclosable-view';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
export declare const SampleToolBarCommand: Command;
export declare const LocationToolBarCommand: Command;
export declare class ItNelsonViewToolbarCmdCommandContribution extends AbstractViewContribution<SampleViewUnclosableView> implements TabBarToolbarContribution {
    static readonly SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID = "sampleUnclosableView:toggle";
    protected toolbarItemState: boolean;
    protected readonly messageService: MessageService;
    constructor();
    registerCommands(registry: CommandRegistry): void;
    registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void>;
    protected withWidget<T>(widget: Widget | undefined, cb: (sampleView: SampleViewUnclosableView) => T): T | false;
}
//# sourceMappingURL=it-nelson-view-toolbar-cmd-contribution.d.ts.map