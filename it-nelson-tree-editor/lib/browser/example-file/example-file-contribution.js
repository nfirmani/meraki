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
exports.NewTreeExampleFileMenuContribution = exports.NewTreeExampleFileCommandContribution = void 0;
const common_1 = require("@theia/core/lib/common");
const inversify_1 = require("@theia/core/shared/inversify");
const workspace_commands_1 = require("@theia/workspace/lib/browser/workspace-commands");
const browser_1 = require("@theia/workspace/lib/browser");
const example_file_command_1 = require("./example-file-command");
const TREE_EDITOR_MAIN_MENU = [...common_1.MAIN_MENU_BAR, '9_treeeditormenu'];
let NewTreeExampleFileCommandContribution = class NewTreeExampleFileCommandContribution {
    constructor(selectionService, workspaceService, newExampleFileHandler) {
        this.selectionService = selectionService;
        this.workspaceService = workspaceService;
        this.newExampleFileHandler = newExampleFileHandler;
    }
    registerCommands(registry) {
        registry.registerCommand(example_file_command_1.NewTreeExampleFileCommand, new workspace_commands_1.WorkspaceRootUriAwareCommandHandler(this.workspaceService, this.selectionService, this.newExampleFileHandler));
    }
};
NewTreeExampleFileCommandContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(common_1.SelectionService)),
    __param(1, (0, inversify_1.inject)(browser_1.WorkspaceService)),
    __param(2, (0, inversify_1.inject)(example_file_command_1.NewTreeExampleFileCommandHandler)),
    __metadata("design:paramtypes", [common_1.SelectionService,
        browser_1.WorkspaceService,
        example_file_command_1.NewTreeExampleFileCommandHandler])
], NewTreeExampleFileCommandContribution);
exports.NewTreeExampleFileCommandContribution = NewTreeExampleFileCommandContribution;
let NewTreeExampleFileMenuContribution = class NewTreeExampleFileMenuContribution {
    registerMenus(menus) {
        menus.registerSubmenu(TREE_EDITOR_MAIN_MENU, 'Tree Editor');
        menus.registerMenuAction(TREE_EDITOR_MAIN_MENU, {
            commandId: example_file_command_1.NewTreeExampleFileCommand.id,
            label: 'New Example File'
        });
    }
};
NewTreeExampleFileMenuContribution = __decorate([
    (0, inversify_1.injectable)()
], NewTreeExampleFileMenuContribution);
exports.NewTreeExampleFileMenuContribution = NewTreeExampleFileMenuContribution;
//# sourceMappingURL=example-file-contribution.js.map