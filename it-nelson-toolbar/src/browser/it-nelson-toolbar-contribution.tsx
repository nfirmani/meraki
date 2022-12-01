import * as React from '@theia/core/shared/react';

import { injectable, inject } from '@theia/core/shared/inversify';
import { CommandContribution, CommandRegistry, CommandService, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import {  LabelProvider, quickCommand, QuickInputService, QuickPickItem } from '@theia/core/lib/browser';

import { AbstractToolbarContribution } from '@theia/toolbar/lib/browser/abstract-toolbar-contribution';
import { WorkspaceService } from '@theia/workspace/lib/browser'
import { SearchInWorkspaceCommands } from '@theia/search-in-workspace/lib/browser/search-in-workspace-frontend-contribution';


import { ToolbarMenus, ReactInteraction } from '@theia/toolbar/lib/browser/toolbar-constants';

import { quickFileOpen } from '@theia/file-search/lib/browser/quick-file-open';

import '../../src/browser/sample-toolbar-contribution.css';





export const FIND_IN_WORKSPACE_ROOT = {
    id: 'easy.search.find.in.workspace.root',
    category: 'Search',
    label: 'Search Workspace Root for Text',
};


export const MSG_HELLO = {
    id: 'theia-sample-helsp',    
    label: 'hello message',
};

@injectable()
export class SearchInWorkspaceQuickInputService {
    @inject(QuickInputService) protected readonly quickInputService: QuickInputService;
    @inject(WorkspaceService) protected readonly workspaceService: WorkspaceService;
    @inject(LabelProvider) protected readonly labelProvider: LabelProvider;
    @inject(CommandService) protected readonly commandService: CommandService;
    protected quickPickItems: QuickPickItem[] = [];

    open(): void {
        this.quickPickItems = this.createWorkspaceList();
        this.quickInputService.showQuickPick(this.quickPickItems, {
            placeholder: 'Workspace root to search',
        });
    }

    protected createWorkspaceList(): QuickPickItem[] {
        const roots = this.workspaceService.tryGetRoots();
        return roots.map(root => {
            const uri = root.resource;
            return {
                label: this.labelProvider.getName(uri),
                execute: (): Promise<void> => this.commandService.executeCommand(SearchInWorkspaceCommands.FIND_IN_FOLDER.id, [uri]),
            };
        });
    }
}

@injectable()
export class SampleToolbarContribution extends AbstractToolbarContribution  implements CommandContribution, MenuContribution {
    @inject(SearchInWorkspaceQuickInputService) protected readonly searchPickService: SearchInWorkspaceQuickInputService;
    @inject(WorkspaceService) protected readonly workspaceService: WorkspaceService;

    @inject(MessageService) private readonly messageService: MessageService

    static ID = 'theia-sample-toolbar-contribution';
    id = SampleToolbarContribution.ID;

    protected handleOnClick = (e: ReactInteraction<HTMLSpanElement>): void => this.doHandleOnClick(e);
    protected doHandleOnClick(e: ReactInteraction<HTMLSpanElement>): void {
        e.stopPropagation();
        const toolbar = document.querySelector<HTMLDivElement>('#main-toolbar');
        if (toolbar) {
            const { bottom } = toolbar.getBoundingClientRect();
            const { left } = e.currentTarget.getBoundingClientRect();
            this.contextMenuRenderer.render({
                includeAnchorArg: false,
                menuPath: ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU,
                anchor: { x: left, y: bottom },
            });
        }
    }

    render(): React.ReactNode {
        return (

            <div role='button'
            tabIndex={0}
            className='icon-wrapper action-label item enabled codicon codicon-search'
            id='easy-search-item-icon'
            onClick={this.handleOnClick}
            title='Search for files, text, commands, and more...'
            >
                <div className='codicon codicon-triangle-down' />
            </div>);

        ;
           
    }


   

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(FIND_IN_WORKSPACE_ROOT, {
            execute: async () => {
                const wsRoots = await this.workspaceService.roots;
                if (!wsRoots.length) {
                    await this.commandService.executeCommand(SearchInWorkspaceCommands.FIND_IN_FOLDER.id);
                } else if (wsRoots.length === 1) {
                    const { resource } = wsRoots[0];
                    await this.commandService.executeCommand(SearchInWorkspaceCommands.FIND_IN_FOLDER.id, [resource]);
                } else {
                    this.searchPickService.open();
                }
            },
        });


        registry.registerCommand(MSG_HELLO, {
            execute: () => this.messageService.info('Ciao!')
        });



    }

    registerMenus(registry: MenuModelRegistry): void {
        registry.registerMenuAction(ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: quickCommand.id,
            label: 'Find a Command',
            order: 'a',
        });
        registry.registerMenuAction(ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: quickFileOpen.id,
            order: 'b',
            label: 'Search for a file'
        });
        registry.registerMenuAction(ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: SearchInWorkspaceCommands.OPEN_SIW_WIDGET.id,
            label: 'Search Entire Workspace for Text',
            order: 'c',
        });
        registry.registerMenuAction(ToolbarMenus.SEARCH_WIDGET_DROPDOWN_MENU, {
            commandId: FIND_IN_WORKSPACE_ROOT.id,
            order: 'd',
        });
    }
}

