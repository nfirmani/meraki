import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { CurveWidget } from './visx-widget';
export declare const ItNelsonVisxCommand: {
    id: string;
    label: string;
};
export declare class VisxViewContribution extends AbstractViewContribution<CurveWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-visx-contribution.d.ts.map