import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import "@pankod/refine-antd/dist/styles.min.css";
export declare class ItNelsonAuthorizWidget extends ReactWidget {
    static readonly ID = "it-nelson-authoriz:widget";
    static readonly LABEL = "ItNelsonAuthoriz Widget";
    protected readonly messageService: MessageService;
    protected init(): Promise<void>;
    render(): React.ReactElement;
    protected displayMessage(): void;
}
//# sourceMappingURL=it-nelson-authoriz-widget.d.ts.map