import { CommandRegistry, MenuModelRegistry } from '@theia/core/lib/common';
import { AbstractViewContribution } from '@theia/core/lib/browser';
import { GApiWidget } from './gapi-widget';
export declare const ItNelsonGapiCommand: {
    id: string;
    label: string;
};
export declare class GApiViewContribution extends AbstractViewContribution<GApiWidget> {
    constructor();
    registerCommands(commands: CommandRegistry): void;
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-gapi-contribution.d.ts.map