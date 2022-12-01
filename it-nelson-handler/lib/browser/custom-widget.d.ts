import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
export declare class CustomWidget extends ReactWidget {
    static readonly ID = "custom:widget";
    static readonly LABEL = "Custom Editor";
    protected text: string;
    protected init(): Promise<void>;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=custom-widget.d.ts.map