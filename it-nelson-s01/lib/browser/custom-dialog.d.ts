import * as React from 'react';
import { ReactDialog } from '@theia/core/lib/browser/dialogs/react-dialog';
import { DialogProps } from '@theia/core/lib/browser/dialogs';
export declare class CustomDialogProps extends DialogProps {
    readonly text: string;
    readonly okValue: string;
    readonly cancelValue: string;
}
interface CustomDialogValue {
    text: string;
}
export declare class CustomDialog extends ReactDialog<CustomDialogValue> {
    protected readonly props: CustomDialogProps;
    protected readonly text: string;
    constructor(props: CustomDialogProps);
    protected render(): React.ReactNode;
    get value(): CustomDialogValue;
}
export {};
//# sourceMappingURL=custom-dialog.d.ts.map