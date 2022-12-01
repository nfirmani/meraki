import { ILogger } from '@theia/core';
import { TreeLabelProvider } from './tree-label-provider';
import { TreeEditor } from '@eclipse-emfcloud/theia-tree-editor';
export declare class TreeNodeFactory implements TreeEditor.NodeFactory {
    private readonly labelProvider;
    private readonly logger;
    constructor(labelProvider: TreeLabelProvider, logger: ILogger);
    mapDataToNodes(treeData: TreeEditor.TreeData): TreeEditor.Node[];
    mapData(data: any, parent?: TreeEditor.Node, property?: string, indexOrKey?: number | string): TreeEditor.Node;
    hasCreatableChildren(node: TreeEditor.Node): boolean;
    protected defaultNode(): Omit<TreeEditor.Node, 'editorId'>;
    /** Derives the type id from the given data. */
    protected getTypeId(data: any): string;
}
//# sourceMappingURL=tree-node-factory.d.ts.map