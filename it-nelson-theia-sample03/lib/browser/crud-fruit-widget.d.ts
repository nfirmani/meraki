import { BaseWidget } from "@theia/core/lib/browser";
import { MessageService } from '@theia/core';
export declare class CRUDFruitWidget extends BaseWidget {
    static readonly ID = "crud-fruit-widget:widget";
    static readonly LABEL = "CRUD Fruit Widget";
    protected readonly messageService: MessageService;
    protected init(): Promise<void>;
}
//# sourceMappingURL=crud-fruit-widget.d.ts.map