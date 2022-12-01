import { injectable, inject } from '@theia/core/shared/inversify';
import {  Command, CommandRegistry,   MessageService } from '@theia/core/lib/common';
import { AbstractViewContribution, codicon, Widget, } from '@theia/core/lib/browser';
import { SampleViewUnclosableView } from './sample-unclosable-view';
import { TabBarToolbarContribution, TabBarToolbarRegistry } from '@theia/core/lib/browser/shell/tab-bar-toolbar';

export const SampleToolBarCommand: Command = {
    id: 'sample.toggle.toolbarCommand',
    iconClass: codicon('add')
};

export const LocationToolBarCommand: Command = {
    id: 'location.toolbarCommand',
    iconClass: codicon('location')
};


@injectable()
export class ItNelsonViewToolbarCmdCommandContribution extends AbstractViewContribution<SampleViewUnclosableView> implements TabBarToolbarContribution {

    static readonly SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID = 'sampleUnclosableView:toggle';

    protected toolbarItemState = false;

    @inject(MessageService) protected readonly messageService: MessageService;

    constructor() {
        super({
            widgetId: SampleViewUnclosableView.ID,
            widgetName: 'PROVA',
            toggleCommandId: ItNelsonViewToolbarCmdCommandContribution.SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID,
            defaultWidgetOptions: {
                area: 'main'
            }
        });
    }

    registerCommands(registry: CommandRegistry): void {
        super.registerCommands(registry);
        registry.registerCommand(SampleToolBarCommand, {
            execute: () => {
                this.toolbarItemState = !this.toolbarItemState;
                this.messageService.info(`Sample Toolbar Command is toggled = ${this.toolbarItemState}`);
            },
            isEnabled: widget => this.withWidget(widget, () => true),
            isVisible: widget => this.withWidget(widget, () => true),
            isToggled: () => this.toolbarItemState
        });

        registry.registerCommand(LocationToolBarCommand, {
            execute: () => {
                this.toolbarItemState = !this.toolbarItemState;
                this.messageService.info(`Il commando location is toggled = ${this.toolbarItemState}`);
            },
            isEnabled: widget => this.withWidget(widget, () => true),
            isVisible: widget => this.withWidget(widget, () => true),
            isToggled: () => this.toolbarItemState
        });

    }

    
    
    async registerToolbarItems(toolbarRegistry: TabBarToolbarRegistry): Promise<void> {
        toolbarRegistry.registerItem({
            id: SampleToolBarCommand.id,
            command: SampleToolBarCommand.id,
            tooltip: 'Click to Toggle Toolbar Item',
            priority: 0
        });

        toolbarRegistry.registerItem({
            id: LocationToolBarCommand.id,
            command: LocationToolBarCommand.id,
            tooltip: 'Clicca per location',
            priority: 0
        });

    }

    protected withWidget<T>(widget: Widget | undefined = this.tryGetWidget(), cb: (sampleView: SampleViewUnclosableView) => T): T | false {
        if (widget instanceof SampleViewUnclosableView && widget.id === SampleViewUnclosableView.ID) {
            return cb(widget);
        }
        return false;
    }
}
