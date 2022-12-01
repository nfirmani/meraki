import { injectable } from '@theia/core/shared/inversify';
import {  CommandRegistry,  MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution, CommonMenus } from '@theia/core/lib/browser';
import { MaterialWidget } from './material-widget';


export const ItNelsonQueryCommand = {
    id: 'ItNelsonMaterial.command',
    label: 'Material UI'
};

@injectable()
export class MaterialViewContribution extends AbstractViewContribution<MaterialWidget> {

constructor() {
    super({
        widgetId: MaterialWidget.ID,
        widgetName: MaterialWidget.LABEL,
        defaultWidgetOptions: { area: 'main' },
        //toggleCommandId: TestWidgetCommand.id //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
    });
}




registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(ItNelsonQueryCommand, {
        execute: () => super.openView({ activate: false, reveal: true })
    });
}

registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
        commandId: ItNelsonQueryCommand.id,
        label: 'material-widget'
    });
}    
}