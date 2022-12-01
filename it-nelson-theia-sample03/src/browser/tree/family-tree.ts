import {
  TreeImpl,
  CompositeTreeNode,
  TreeNode,
  ExpandableTreeNode,
  SelectableTreeNode
} from "@theia/core/lib/browser";
import { injectable } from "inversify";

@injectable()
export class FamilyTree extends TreeImpl {
  protected resolveChildren(parent: CompositeTreeNode): Promise<TreeNode[]> {
    if (FamilyRootNode.is(parent)) {
      return Promise.resolve(
        parent.family.members.map(m => this.makeMemberNode(m))
      );
    }

    if (MemberNode.is(parent) && parent.children) {
      return Promise.resolve(
        parent.member.children?.map(m => this.makeMemberNode(m)) || []
      );
    }

    return Promise.resolve(Array.from(parent.children));
  }

  makeMemberNode(m: Member) {
    const node: MemberNode = {
      id: m.firstName + m.nickName,
      //name: `${m.firstName} (${m.nickName})`, // Utilizzo del carattere backtick (usato nei Markdown per includere del codice e nelle template strings di Typescript)
      //name: m.firstName + ' ' + m.nickName,     // Senza utilizzare il carattere backtick
      name: `${m.firstName} ${m.nickName}`,   //Il carattere backtick ` (ALT+96) 
      
      parent: undefined,
      expanded: false,
      selected: false,
      children: [],
      member: m
    };
    return node;
  }
}

export interface FamilyRootNode extends CompositeTreeNode {
  family: Family;
}

export namespace FamilyRootNode {
  export function is(node: object): node is FamilyRootNode {
    return !!node && "family" in node;
  }
}

export interface MemberNode
  extends CompositeTreeNode,
    ExpandableTreeNode,
    SelectableTreeNode {
  member: Member;
}

export namespace MemberNode {
  export function is(node: object): node is MemberNode {
    return !!node && "member" in node;
  }
}
