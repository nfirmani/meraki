"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const custom_open_handler_1 = require("./custom-open-handler");
const custom_widget_1 = require("./custom-widget");
exports.default = new inversify_1.ContainerModule(bind => {
    bind(browser_1.OpenHandler).toService(custom_open_handler_1.CustomOpenHandler);
    bind(custom_open_handler_1.CustomOpenHandler).toSelf().inSingletonScope();
    bind(custom_widget_1.CustomWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: custom_widget_1.CustomWidget.ID,
        createWidget: (options) => {
            const widget = ctx.container.get(custom_widget_1.CustomWidget);
            console.log(options);
            widget.setText(options.text);
            return widget;
        }
    })).inSingletonScope();
});
//# sourceMappingURL=it-nelson-handler-frontend-module.js.map