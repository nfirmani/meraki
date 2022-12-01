import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
export declare class CurveWidget extends ReactWidget {
    static readonly ID = "visx:widget";
    static readonly LABEL = "Visx";
    protected text: string;
    protected init(): Promise<void>;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=visx-widget.d.ts.map