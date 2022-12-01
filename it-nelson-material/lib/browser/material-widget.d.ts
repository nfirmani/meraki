import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
export declare class MaterialWidget extends ReactWidget {
    static readonly ID = "material:widget";
    static readonly LABEL = "Material UI";
    protected text: string;
    protected init(): Promise<void>;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=material-widget.d.ts.map