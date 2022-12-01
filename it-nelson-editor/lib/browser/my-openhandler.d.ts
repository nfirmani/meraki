import { NavigatableWidgetOpenHandler } from "@theia/core/lib/browser";
import URI from "@theia/core/lib/common/uri";
import { MyWidget } from "./my-widget";
export declare class MyOpenHandler extends NavigatableWidgetOpenHandler<MyWidget> {
    readonly id: string;
    readonly label = "My Editor";
    readonly iconClass = "my-icon my-openhandler";
    canHandle(uri: URI): number;
}
//# sourceMappingURL=my-openhandler.d.ts.map