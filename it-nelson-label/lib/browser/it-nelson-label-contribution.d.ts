import { FileStatNode } from '@theia/filesystem/lib/browser/file-tree/file-tree';
import { FileTreeLabelProvider } from '@theia/filesystem/lib/browser/file-tree/file-tree-label-provider';
export declare class ItNelsonLabelLabelProviderContribution extends FileTreeLabelProvider {
    canHandle(element: object): number;
    getIcon(): string;
    getName(fileStatNode: FileStatNode): string;
}
//# sourceMappingURL=it-nelson-label-contribution.d.ts.map