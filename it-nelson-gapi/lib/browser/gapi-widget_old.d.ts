import * as React from 'react';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MyService } from '../common/srv-protocol';
export declare class GApiWidget extends ReactWidget {
    static readonly ID = "gapi:widget";
    static readonly LABEL = "Google api";
    protected text: string;
    titolo: string;
    protected readonly myService: MyService;
    protected init(): Promise<void>;
    setTitolo(arg0: string): void;
    setText(text: string): void;
    protected render(): React.ReactNode;
}
//# sourceMappingURL=gapi-widget_old.d.ts.map