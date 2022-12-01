"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlaceholderMenuNode = exports.ItNelsonS01MenuContribution = exports.ItNelsonS01CommandContribution = exports.FILE_120 = exports.CommonMenusEs = exports.SampleQuickInputCommand = exports.DIALOG_BOX = exports.CUSTOM_DIALOG = exports.SAVE_DIALOG = exports.FILE_DIALOG = exports.GEN_COMMAND = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const common_1 = require("@theia/core/lib/common");
const browser_1 = require("@theia/core/lib/browser");
const browser_2 = require("@theia/filesystem/lib/browser");
const custom_dialog_1 = require("./custom-dialog");
const browser_3 = require("@theia/editor/lib/browser");
const debug_frontend_application_contribution_1 = require("@theia/debug/lib/browser/debug-frontend-application-contribution");
const monaco_menu_1 = require("@theia/monaco/lib/browser/monaco-menu");
exports.GEN_COMMAND = {
    id: 'ItNelsonS01.command',
    label: 'Say Hello'
};
exports.FILE_DIALOG = {
    id: 'ItNelsonS01.file.dialog',
    label: 'Apri file',
    iconClass: (0, browser_1.codicon)('folder-opened')
};
exports.SAVE_DIALOG = {
    id: 'ItNelsonS01.save.dialog',
    label: 'Salva file',
    category: 'dialog'
};
exports.CUSTOM_DIALOG = {
    id: 'ItNelsonS01.custom.dialog',
    label: 'Custom dialogo',
    category: 'dialog'
};
exports.DIALOG_BOX = {
    id: 'ItNelsonS01.dialog.box',
    label: 'Box di conferma',
    category: 'dialog'
};
exports.SampleQuickInputCommand = {
    id: 'sample-quick-input-command',
    category: 'Quick Input',
    label: 'Test Positive Integer',
    iconClass: (0, browser_1.codicon)('github-action')
};
const SampleCommandWithProgressMessage = {
    id: 'sample-command-with-progress',
    label: 'Sample Command With Progress Message'
};
const SampleCommandWithIndeterminateProgressMessage = {
    id: 'sample-command-with-indeterminate-progress',
    label: 'Sample Command With Indeterminate Progress Message'
};
var CommonMenusEs;
(function (CommonMenusEs) {
    CommonMenusEs.ES_FILE = [...common_1.MAIN_MENU_BAR, '1_esfile'];
    CommonMenusEs.ES_FILE_NEW = [...CommonMenusEs.ES_FILE, 'gr1'];
    CommonMenusEs.ES_FILE_OPEN = [...CommonMenusEs.ES_FILE, 'gr1'];
    CommonMenusEs.ES_FILE_SAVE = [...CommonMenusEs.ES_FILE, 'gr2'];
    CommonMenusEs.ES_FILE_AUTOSAVE = [...CommonMenusEs.ES_FILE, 'gr2'];
    CommonMenusEs.ES_FILE_SETTINGS = [...CommonMenusEs.ES_FILE, 'gr2'];
    //   export const ES_FILE_SETTINGS_SUBMENU = [...ES_FILE_SETTINGS, '1_essettings_submenu'];
    //   export const ES_FILE_SETTINGS_SUBMENU_OPEN = [...ES_FILE_SETTINGS_SUBMENU, '1_essettings_submenu_open'];
    //   export const ES_FILE_SETTINGS_SUBMENU_THEME = [...ES_FILE_SETTINGS_SUBMENU, '2_essettings_submenu_theme'];
    //   export const ES_FILE_CLOSE = [...ES_FILE, '6_esclose'];
})(CommonMenusEs = exports.CommonMenusEs || (exports.CommonMenusEs = {}));
exports.FILE_120 = {
    id: 'ItNelsonS01.FILE_120',
    label: 'FILE 120'
};
let ItNelsonS01CommandContribution = class ItNelsonS01CommandContribution {
    constructor(messageService, fileDialogService, quickInputService) {
        this.messageService = messageService;
        this.fileDialogService = fileDialogService;
        this.quickInputService = quickInputService;
    }
    registerCommands(registry) {
        registry.registerCommand(exports.GEN_COMMAND, {
            execute: () => this.messageService.info('Hello World!')
        });
        registry.registerCommand(exports.FILE_DIALOG, {
            execute: async () => {
                const uri = await this.fileDialogService.showOpenDialog({
                    title: ' Choose a directory ',
                    canSelectFiles: false,
                    canSelectFolders: true,
                    openLabel: ' choice ',
                });
                console.log(' Choose the path ', uri);
            }
        });
        registry.registerCommand(exports.SAVE_DIALOG, {
            execute: async () => {
                const uri = await this.fileDialogService.showSaveDialog({
                    title: ' Select Save directory ',
                    saveLabel: ' preservation '
                });
                console.log(' Save the path ', uri);
            }
        });
        registry.registerCommand(exports.CUSTOM_DIALOG, {
            execute: async () => {
                const text = await new custom_dialog_1.CustomDialog({
                    title: ' Finestra di dialogo ',
                    text: ' contenuto della finestra ',
                    okValue: ' Invia ',
                    cancelValue: ' Cancella '
                }).open();
                console.log(' Return to text ', text);
            }
        });
        registry.registerCommand(exports.DIALOG_BOX, {
            execute: async () => {
                const confirmed = await new browser_1.ConfirmDialog({
                    title: ' This is a confirmation box ',
                    msg: ' Are you sure to execute ？',
                    ok: ' confirm ',
                    cancel: ' Cancel '
                }).open();
                console.log(' Are you sure ', confirmed);
            }
        });
        registry.registerCommand(exports.SampleQuickInputCommand, {
            isEnabled: selection => true,
            isVisible: selection => true,
            execute: async () => {
                const result = await this.quickInputService.input({
                    placeHolder: 'Please provide a positive integer',
                    validateInput: async (input) => {
                        const numericValue = Number(input);
                        if (isNaN(numericValue)) {
                            return 'Invalid: NaN';
                        }
                        else if (numericValue % 2 === 1) {
                            return 'Invalid: Odd Number';
                        }
                        else if (numericValue < 0) {
                            return 'Invalid: Negative Number';
                        }
                        else if (!Number.isInteger(numericValue)) {
                            return 'Invalid: Only Integers Allowed';
                        }
                    }
                });
                if (result) {
                    this.messageService.info(`Positive Integer: ${result}`);
                }
            }
        });
        registry.registerCommand(SampleCommandWithProgressMessage, {
            execute: () => {
                this.messageService
                    .showProgress({
                    text: 'Starting to report progress',
                })
                    .then(progress => {
                    window.setTimeout(() => {
                        progress.report({
                            message: 'First step completed',
                            work: { done: 25, total: 100 }
                        });
                    }, 2000);
                    window.setTimeout(() => {
                        progress.report({
                            message: 'Next step completed',
                            work: { done: 60, total: 100 }
                        });
                    }, 4000);
                    window.setTimeout(() => {
                        progress.report({
                            message: 'Complete',
                            work: { done: 100, total: 100 }
                        });
                    }, 6000);
                    window.setTimeout(() => progress.cancel(), 7000);
                });
            }
        });
        registry.registerCommand(SampleCommandWithIndeterminateProgressMessage, {
            execute: () => {
                this.messageService
                    .showProgress({
                    text: 'Starting to report indeterminate progress',
                })
                    .then(progress => {
                    window.setTimeout(() => {
                        progress.report({
                            message: 'First step completed',
                        });
                    }, 2000);
                    window.setTimeout(() => {
                        progress.report({
                            message: 'Next step completed',
                        });
                    }, 4000);
                    window.setTimeout(() => {
                        progress.report({
                            message: 'Complete',
                        });
                    }, 6000);
                    window.setTimeout(() => progress.cancel(), 7000);
                });
            }
        });
    }
};
ItNelsonS01CommandContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(common_1.MessageService)),
    __param(1, (0, inversify_1.inject)(browser_2.FileDialogService)),
    __param(2, (0, inversify_1.inject)(browser_1.QuickInputService)),
    __metadata("design:paramtypes", [common_1.MessageService, Object, Object])
], ItNelsonS01CommandContribution);
exports.ItNelsonS01CommandContribution = ItNelsonS01CommandContribution;
let ItNelsonS01MenuContribution = class ItNelsonS01MenuContribution {
    registerMenus(menus) {
        menus.registerSubmenu(CommonMenusEs.ES_FILE, 'test');
        menus.registerMenuAction(CommonMenusEs.ES_FILE_NEW, {
            commandId: exports.SampleQuickInputCommand.id
        });
        menus.registerMenuAction(CommonMenusEs.ES_FILE_OPEN, {
            commandId: exports.SampleQuickInputCommand.id
        });
        menus.registerMenuAction(CommonMenusEs.ES_FILE_SAVE, {
            commandId: exports.CUSTOM_DIALOG.id
        });
        menus.registerMenuAction(CommonMenusEs.ES_FILE_AUTOSAVE, {
            commandId: exports.DIALOG_BOX.id
        });
        menus.registerMenuAction(CommonMenusEs.ES_FILE_SETTINGS, {
            commandId: exports.FILE_DIALOG.id
        });
        const subMenuPath = [...common_1.MAIN_MENU_BAR, 'sample-menu'];
        menus.registerSubmenu(subMenuPath, 'Sample Menu', {
            order: '2' // ordine posizione voce menu a partire da destra (File Menu, Sample Menu)
        });
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: exports.GEN_COMMAND.id,
            label: exports.GEN_COMMAND.label
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: exports.FILE_DIALOG.id,
            order: '1'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: exports.SAVE_DIALOG.id,
            order: '2'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: exports.CUSTOM_DIALOG.id,
            order: '3'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: exports.DIALOG_BOX.id,
            order: '4'
        });
        menus.registerMenuAction(subMenuPath, {
            commandId: exports.SampleQuickInputCommand.id,
            order: '5'
        });
        const subSubMenuPath = [...subMenuPath, 'sample-sub-menu'];
        menus.registerSubmenu(subSubMenuPath, 'Sample sub menu', { order: '2' });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: SampleCommandWithProgressMessage.id,
            order: '1'
        });
        menus.registerMenuAction(subSubMenuPath, {
            commandId: SampleCommandWithIndeterminateProgressMessage.id,
            order: '3'
        });
        const placeholder = new PlaceholderMenuNode([...subSubMenuPath, 'placeholder'].join('-'), 'Placeholder', { order: '0' });
        menus.registerMenuNode(subSubMenuPath, placeholder);
        menus.registerMenuAction(subSubMenuPath, {
            commandId: exports.GEN_COMMAND.id,
            label: exports.GEN_COMMAND.label
        });
        menus.registerMenuAction(subSubMenuPath, { commandId: 'invalid-command' });
        //menus.unregisterMenuAction(CommonMenus.HELP[CommonMenus.HELP.length - 1], CommonMenus.HELP);
        //menus.unregisterMenuAction(CommonCommands.ABOUT_COMMAND);
        //menus.unregisterMenuAction(CommonMenus.HELP.slice(-1)[0]);
        //menus.unregisterMenuAction(CommonMenus.VIEW.slice(-1)[0]);
        //menus.unregisterMenuAction(CommonMenus.EDIT_UNDO[CommonMenus.EDIT_UNDO.length - 1]);
        menus.unregisterMenuAction(debug_frontend_application_contribution_1.DebugMenus.DEBUG.slice(-1)[0]);
        menus.unregisterMenuAction(browser_3.EditorMainMenu.GO.slice(-1)[0]);
        menus.unregisterMenuAction(monaco_menu_1.MonacoMenus.SELECTION.slice(-1)[0]);
    }
};
ItNelsonS01MenuContribution = __decorate([
    (0, inversify_1.injectable)()
], ItNelsonS01MenuContribution);
exports.ItNelsonS01MenuContribution = ItNelsonS01MenuContribution;
class PlaceholderMenuNode {
    constructor(id, label, options) {
        this.id = id;
        this.label = label;
        this.options = options;
    }
    get icon() {
        var _a;
        return (_a = this.options) === null || _a === void 0 ? void 0 : _a.iconClass;
    }
    get sortString() {
        var _a;
        return ((_a = this.options) === null || _a === void 0 ? void 0 : _a.order) || this.label;
    }
}
exports.PlaceholderMenuNode = PlaceholderMenuNode;
//# sourceMappingURL=it-nelson-s01-contribution.js.map