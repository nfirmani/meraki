import { WidgetOpenHandler, WidgetOpenerOptions } from '@theia/core/lib/browser';
import URI from '@theia/core/lib/common/uri';
import { CustomWidget } from './custom-widget';
export interface CustomWidgetOptions {
    text: string;
}
export declare class CustomOpenHandler extends WidgetOpenHandler<CustomWidget> {
    readonly id = "custom:widget";
    canHandle(uri: URI): number;
    createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): CustomWidgetOptions;
}
//# sourceMappingURL=custom-open-handler.d.ts.map