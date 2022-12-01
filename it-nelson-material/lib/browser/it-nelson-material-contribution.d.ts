import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { MaterialWidget } from './material-widget';
export declare const ItNelsonQueryCommand: {
    id: string;
    label: string;
};
export declare class MaterialViewContribution extends AbstractViewContribution<MaterialWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-material-contribution.d.ts.map