import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MenuNode, MessageService, SubMenuOptions } from '@theia/core/lib/common';
import { QuickInputService } from '@theia/core/lib/browser';
import { FileDialogService } from '@theia/filesystem/lib/browser';
export declare const GEN_COMMAND: {
    id: string;
    label: string;
};
export declare const FILE_DIALOG: {
    id: string;
    label: string;
    iconClass: string;
};
export declare const SAVE_DIALOG: {
    id: string;
    label: string;
    category: string;
};
export declare const CUSTOM_DIALOG: {
    id: string;
    label: string;
    category: string;
};
export declare const DIALOG_BOX: {
    id: string;
    label: string;
    category: string;
};
export declare const SampleQuickInputCommand: Command;
export declare namespace CommonMenusEs {
    const ES_FILE: string[];
    const ES_FILE_NEW: string[];
    const ES_FILE_OPEN: string[];
    const ES_FILE_SAVE: string[];
    const ES_FILE_AUTOSAVE: string[];
    const ES_FILE_SETTINGS: string[];
}
export declare const FILE_120: {
    id: string;
    label: string;
};
export declare class ItNelsonS01CommandContribution implements CommandContribution {
    private readonly messageService;
    protected readonly fileDialogService: FileDialogService;
    protected readonly quickInputService: QuickInputService;
    constructor(messageService: MessageService, fileDialogService: FileDialogService, quickInputService: QuickInputService);
    registerCommands(registry: CommandRegistry): void;
}
export declare class ItNelsonS01MenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
export declare class PlaceholderMenuNode implements MenuNode {
    readonly id: string;
    readonly label: string;
    protected options?: SubMenuOptions | undefined;
    constructor(id: string, label: string, options?: SubMenuOptions | undefined);
    get icon(): string | undefined;
    get sortString(): string;
}
//# sourceMappingURL=it-nelson-s01-contribution.d.ts.map