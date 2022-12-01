import { SelectionService } from '@theia/core';
import { LabelProvider, NavigatableWidgetOptions, /*ReactWidget,*/ WidgetFactory } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { EditorWidget, TextEditorProvider } from '@theia/editor/lib/browser';
export declare class MyWidgetFactory implements WidgetFactory {
    private readonly labelProvider;
    private readonly editorProvider;
    private readonly selectionService;
    static ID: string;
    readonly id: string;
    constructor(labelProvider: LabelProvider, editorProvider: TextEditorProvider, selectionService: SelectionService);
    createWidget(options: NavigatableWidgetOptions): Promise<EditorWidget>;
    protected createEditor(uri: URI): Promise<EditorWidget>;
}
//# sourceMappingURL=my-widget-factory.d.ts.map