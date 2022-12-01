import { TreeImpl, CompositeTreeNode, TreeNode, ExpandableTreeNode, SelectableTreeNode } from "@theia/core/lib/browser";
export declare class FamilyTree extends TreeImpl {
    protected resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]>;
    makeMemberNode(m: Member): MemberNode;
}
export interface FamilyRootNode extends CompositeTreeNode {
    family: Family;
}
export declare namespace FamilyRootNode {
    function is(node: object): node is FamilyRootNode;
}
export interface MemberNode extends CompositeTreeNode, ExpandableTreeNode, SelectableTreeNode {
    member: Member;
}
export declare namespace MemberNode {
    function is(node: object): node is MemberNode;
}
//# sourceMappingURL=family-tree.d.ts.map