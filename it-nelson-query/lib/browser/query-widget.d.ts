import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
export declare class QueryWidget extends ReactWidget {
    static readonly ID = "query:widget";
    static readonly LABEL = "Vista query";
    protected text: string;
    protected init(): Promise<void>;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=query-widget.d.ts.map