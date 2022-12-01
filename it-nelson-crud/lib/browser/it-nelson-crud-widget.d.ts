import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';
import "@pankod/refine-antd/dist/styles.min.css";
export declare class ItNelsonCrudWidget extends ReactWidget {
    static readonly ID = "it-nelson-crud:widget";
    static readonly LABEL = "ItNelsonCrud Widget";
    protected readonly messageService: MessageService;
    protected init(): Promise<void>;
    render(): React.ReactElement;
    protected displayMessage(): void;
    protected onActivateRequest(msg: Message): void;
}
//# sourceMappingURL=it-nelson-crud-widget.d.ts.map