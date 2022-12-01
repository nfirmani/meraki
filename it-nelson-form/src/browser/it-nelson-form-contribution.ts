import { injectable } from '@theia/core/shared/inversify';
import {  CommandRegistry,  MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution, CommonMenus } from '@theia/core/lib/browser';
import { FormWidget } from './form-widget';


export const ItNelsonFormCommand = {
    id: 'ItNelsonForm.command',
    label: 'Form'
};

@injectable()
export class FormViewContribution extends AbstractViewContribution<FormWidget> {

constructor() {
    super({
        widgetId: FormWidget.ID,
        widgetName: FormWidget.LABEL,
        defaultWidgetOptions: { area: 'main' },
        //toggleCommandId: TestWidgetCommand.id //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
    });
}


registerCommands(commands: CommandRegistry): void {
    commands.registerCommand(ItNelsonFormCommand, {
        execute: () => super.openView({ activate: false, reveal: true })
    });
}

registerMenus(menus: MenuModelRegistry): void {
    super.registerMenus(menus);

    menus.registerMenuAction(CommonMenus.HELP, {
        commandId: ItNelsonFormCommand.id,
        label: 'form-widget'
    });
}    
}