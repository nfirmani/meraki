import { injectable } from '@theia/core/shared/inversify';
import {  CommandRegistry,  MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution, CommonMenus } from '@theia/core/lib/browser';
import { CurveWidget } from './visx-widget';


export const ItNelsonVisxCommand = {
    id: 'ItNelsonVisx.command',
    label: 'Visx'
};

@injectable()
export class VisxViewContribution extends AbstractViewContribution<CurveWidget> {

constructor() {
    super({
        widgetId: CurveWidget.ID,
        widgetName: CurveWidget.LABEL,
        defaultWidgetOptions: { area: 'main' },
        //toggleCommandId: TestWidgetCommand.id //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
    });
}


registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(ItNelsonVisxCommand, {
        execute: () => super.openView({ activate: false, reveal: true })
    });
}

registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
        commandId: ItNelsonVisxCommand.id,
        label: 'Visx-widget'
    });
}    
}