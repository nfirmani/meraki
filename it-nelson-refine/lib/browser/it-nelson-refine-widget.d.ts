import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
export declare class ItNelsonRefineWidget extends ReactWidget {
    static readonly ID = "it-nelson-refine:widget";
    static readonly LABEL = "ItNelsonRefine Widget";
    protected readonly messageService: MessageService;
    protected init(): Promise<void>;
    render(): React.ReactElement;
    protected displayMessage(): void;
}
//# sourceMappingURL=it-nelson-refine-widget.d.ts.map