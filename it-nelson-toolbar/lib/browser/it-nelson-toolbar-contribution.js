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
var SampleToolbarContribution_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleToolbarContribution = exports.SearchInWorkspaceQuickInputService = exports.MSG_HELLO = exports.FIND_IN_WORKSPACE_ROOT = void 0;
const React = require("@theia/core/shared/react");
const inversify_1 = require("@theia/core/shared/inversify");
const common_1 = require("@theia/core/lib/common");
const browser_1 = require("@theia/core/lib/browser");
const abstract_toolbar_contribution_1 = require("@theia/toolbar/lib/browser/abstract-toolbar-contribution");
const browser_2 = require("@theia/workspace/lib/browser");
const search_in_workspace_frontend_contribution_1 = require("@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution");
const toolbar_constants_1 = require("@theia/toolbar/lib/browser/toolbar-constants");
const quick_file_open_1 = require("@theia/file-search/lib/browser/quick-file-open");
require("../../src/browser/sample-toolbar-contribution.css");
exports.FIND_IN_WORKSPACE_ROOT = {
    id: 'easy.search.find.in.workspace.root',
    category: 'Search',
    label: 'Search Workspace Root for Text',
};
exports.MSG_HELLO = {
    id: 'theia-sample-helsp',
    label: 'hello message',
};
let SearchInWorkspaceQuickInputService = class SearchInWorkspaceQuickInputService {
    constructor() {
        this.quickPickItems = [];
    }
    open() {
        this.quickPickItems = this.createWorkspaceList();
        this.quickInputService.showQuickPick(this.quickPickItems, {
            placeholder: 'Workspace root to search',
        });
    }
    createWorkspaceList() {
        const roots = this.workspaceService.tryGetRoots();
        return roots.map(root => {
            const uri = root.resource;
            return {
                label: this.labelProvider.getName(uri),
                execute: () => this.commandService.executeCommand(search_in_workspace_frontend_contribution_1.SearchInWorkspaceCommands.FIND_IN_FOLDER.id, [uri]),
            };
        });
    }
};
__decorate([
    (0, inversify_1.inject)(browser_1.QuickInputService),
    __metadata("design:type", Object)
], SearchInWorkspaceQuickInputService.prototype, "quickInputService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_2.WorkspaceService),
    __metadata("design:type", browser_2.WorkspaceService)
], SearchInWorkspaceQuickInputService.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_1.LabelProvider),
    __metadata("design:type", browser_1.LabelProvider)
], SearchInWorkspaceQuickInputService.prototype, "labelProvider", void 0);
__decorate([
    (0, inversify_1.inject)(common_1.CommandService),
    __metadata("design:type", Object)
], SearchInWorkspaceQuickInputService.prototype, "commandService", void 0);
SearchInWorkspaceQuickInputService = __decorate([
    (0, inversify_1.injectable)()
], SearchInWorkspaceQuickInputService);
exports.SearchInWorkspaceQuickInputService = SearchInWorkspaceQuickInputService;
let SampleToolbarContribution = SampleToolbarContribution_1 = class SampleToolbarContribution extends abstract_toolbar_contribution_1.AbstractToolbarContribution {
    constructor() {
        super(...arguments);
        this.id = SampleToolbarContribution_1.ID;
        this.handleOnClick = (e) => this.doHandleOnClick(e);
    }
    doHandleOnClick(e) {
        e.stopPropagation();
        const toolbar = document.querySelector('#main-toolbar');
        if (toolbar) {
            const { bottom } = toolbar.getBoundingClientRect();
            const { left } = e.currentTarget.getBoundingClientRect();
            this.contextMenuRenderer.render({
                includeAnchorArg: false,
                menuPath: toolbar_constants_1.ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU,
                anchor: { x: left, y: bottom },
            });
        }
    }
    render() {
        return (React.createElement("div", { role: 'button', tabIndex: 0, className: 'icon-wrapper action-label item enabled codicon codicon-search', id: 'easy-search-item-icon', onClick: this.handleOnClick, title: 'Search for files, text, commands, and more...' },
            React.createElement("div", { className: 'codicon codicon-triangle-down' })));
        ;
    }
    registerCommands(registry) {
        registry.registerCommand(exports.FIND_IN_WORKSPACE_ROOT, {
            execute: async () => {
                const wsRoots = await this.workspaceService.roots;
                if (!wsRoots.length) {
                    await this.commandService.executeCommand(search_in_workspace_frontend_contribution_1.SearchInWorkspaceCommands.FIND_IN_FOLDER.id);
                }
                else if (wsRoots.length === 1) {
                    const { resource } = wsRoots[0];
                    await this.commandService.executeCommand(search_in_workspace_frontend_contribution_1.SearchInWorkspaceCommands.FIND_IN_FOLDER.id, [resource]);
                }
                else {
                    this.searchPickService.open();
                }
            },
        });
        registry.registerCommand(exports.MSG_HELLO, {
            execute: () => this.messageService.info('Ciao!')
        });
    }
    registerMenus(registry) {
        registry.registerMenuAction(toolbar_constants_1.ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: browser_1.quickCommand.id,
            label: 'Find a Command',
            order: 'a',
        });
        registry.registerMenuAction(toolbar_constants_1.ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: quick_file_open_1.quickFileOpen.id,
            order: 'b',
            label: 'Search for a file'
        });
        registry.registerMenuAction(toolbar_constants_1.ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: search_in_workspace_frontend_contribution_1.SearchInWorkspaceCommands.OPEN_SIW_WIDGET.id,
            label: 'Search Entire Workspace for Text',
            order: 'c',
        });
        registry.registerMenuAction(toolbar_constants_1.ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: exports.FIND_IN_WORKSPACE_ROOT.id,
            order: 'd',
        });
    }
};
SampleToolbarContribution.ID = 'theia-sample-toolbar-contribution';
__decorate([
    (0, inversify_1.inject)(SearchInWorkspaceQuickInputService),
    __metadata("design:type", SearchInWorkspaceQuickInputService)
], SampleToolbarContribution.prototype, "searchPickService", void 0);
__decorate([
    (0, inversify_1.inject)(browser_2.WorkspaceService),
    __metadata("design:type", browser_2.WorkspaceService)
], SampleToolbarContribution.prototype, "workspaceService", void 0);
__decorate([
    (0, inversify_1.inject)(common_1.MessageService),
    __metadata("design:type", common_1.MessageService)
], SampleToolbarContribution.prototype, "messageService", void 0);
SampleToolbarContribution = SampleToolbarContribution_1 = __decorate([
    (0, inversify_1.injectable)()
], SampleToolbarContribution);
exports.SampleToolbarContribution = SampleToolbarContribution;
//# sourceMappingURL=it-nelson-toolbar-contribution.js.map