import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
export declare class FormWidget extends ReactWidget {
    static readonly ID = "form:widget";
    static readonly LABEL = "Sample Form";
    protected text: string;
    protected init(): Promise<void>;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=form-widget.d.ts.map