/// <reference types="react" />
import * as React from '@theia/core/shared/react';
import { ContextMenuRenderer, TreeModel, TreeProps, TreeWidget, TreeNode, ExpandableTreeNode, NodeProps } from "@theia/core/lib/browser";
import { CommandService } from "@theia/core/lib/common/command";
export declare class FamilyTreeWidget extends TreeWidget {
    readonly props: TreeProps;
    readonly model: TreeModel;
    static readonly ID = "family-tree-widget";
    static readonly LABEL = "Family Tree";
    protected readonly commandService: CommandService;
    constructor(props: TreeProps, model: TreeModel, contextMenuRenderer: ContextMenuRenderer);
    protected isExpandable(node: TreeNode): node is ExpandableTreeNode;
    protected handleDblClickEvent(node: TreeNode | undefined, event: React.MouseEvent<HTMLElement>): void;
    renderIcon(node: TreeNode, props: NodeProps): React.ReactNode;
}
//# sourceMappingURL=family-tree-widget.d.ts.map