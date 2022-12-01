import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { QueryWidget } from './query-widget';
export declare const ItNelsonQueryCommand: {
    id: string;
    label: string;
};
export declare class QueryViewContribution extends AbstractViewContribution<QueryWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-query-contribution.d.ts.map