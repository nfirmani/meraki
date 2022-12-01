import { injectable } from '@theia/core/shared/inversify';
import {  CommandRegistry,  MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution, CommonMenus } from '@theia/core/lib/browser';
import { QueryWidget } from './query-widget';
//import { URI } from '@theia/core/lib/common/uri';

export const ItNelsonQueryCommand = {
    id: 'ItNelsonQuery.command',
    label: 'Apri vista query'
};

@injectable()
export class QueryViewContribution extends AbstractViewContribution<QueryWidget> {

constructor() {
    super({
        widgetId: QueryWidget.ID,
        widgetName: QueryWidget.LABEL,
        defaultWidgetOptions: { area: 'main' },
        //toggleCommandId: TestWidgetCommand.id //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
    });
}

/*
canHandle(uri: URI): number {
    console.log(uri.path.ext);
    if(uri.path.ext === '.json') {
        return 200;
    }
    return 0;
}
*/


registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(ItNelsonQueryCommand, {
        execute: () => super.openView({ activate: false, reveal: true })
    });
}

registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
        commandId: ItNelsonQueryCommand.id,
        label: 'query-widget'
    });
}    
}