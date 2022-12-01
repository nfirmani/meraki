import { AbstractViewContribution } from "@theia/core/lib/browser";
import { FamilyTreeWidget } from "./family-tree-widget";
import { Command, CommandRegistry, MenuModelRegistry } from "@theia/core";
export declare const FamilyTreeWidgetCommand: Command;
export declare const HelloWorld01Command: Command;
export declare const HelloWorld02Command: Command;
export declare class FamilyTreeWidgetContribution extends AbstractViewContribution<FamilyTreeWidget> {
    constructor();
    private readonly messageService;
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=family-tree-contribution.d.ts.map