import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { FormWidget } from './form-widget';
export declare const ItNelsonFormCommand: {
    id: string;
    label: string;
};
export declare class FormViewContribution extends AbstractViewContribution<FormWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-form-contribution.d.ts.map