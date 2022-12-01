import * as React from 'react';
import { MyService } from '../common/srv-protocol';
import { ReactWidget } from '@theia/core/lib/browser';
declare type trighe = {
    id: number;
    lastName: string;
    firstName: string;
    age: number;
}[];
export declare class GApiWidget extends ReactWidget {
    static readonly ID = "gapi:widget";
    static readonly LABEL = "Google api";
    protected text: string;
    titolo: string;
    righe: trighe;
    protected readonly myService: MyService;
    private readonly messageService;
    handleTitClick(): Promise<void>;
    handleMergeClick(): Promise<void>;
    handleDocClick(): Promise<void>;
    handleSheetClick(): Promise<void>;
    handleListDocClick(): Promise<void>;
    handleGetJsonDocClick(): Promise<void>;
    handleTestClick(): Promise<void>;
    handleCreaReqClick(): Promise<void>;
    protected init(): Promise<void>;
    protected render(): React.ReactNode;
}
export {};
//# sourceMappingURL=gapi-widget.d.ts.map