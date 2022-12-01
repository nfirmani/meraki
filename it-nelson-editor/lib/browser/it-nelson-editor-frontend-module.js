"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const my_openhandler_1 = require("./my-openhandler");
const my_widget_factory_1 = require("./my-widget-factory");
exports.default = new inversify_1.ContainerModule(bind => {
    // bind open handler    
    bind(browser_1.OpenHandler).to(my_openhandler_1.MyOpenHandler);
    //bind widget factory
    bind(browser_1.WidgetFactory).to(my_widget_factory_1.MyWidgetFactory);
});
//# sourceMappingURL=it-nelson-editor-frontend-module.js.map