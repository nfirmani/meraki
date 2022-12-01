"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const it_nelson_gapi_contribution_1 = require("./it-nelson-gapi-contribution");
const inversify_1 = require("@theia/core/shared/inversify");
//import { GApiWidget } from './gapi-widget';
const view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
const browser_1 = require("@theia/core/lib/browser");
const gapi_widget_1 = require("./gapi-widget");
const srv_protocol_1 = require("../common/srv-protocol");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here
    (0, view_contribution_1.bindViewContribution)(bind, it_nelson_gapi_contribution_1.GApiViewContribution);
    bind(browser_1.FrontendApplicationContribution).toService(it_nelson_gapi_contribution_1.GApiViewContribution);
    bind(srv_protocol_1.MyService).toDynamicValue(context => browser_1.WebSocketConnectionProvider.createProxy(context.container, srv_protocol_1.MyServicePath)).inSingletonScope();
    bind(gapi_widget_1.GApiWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: gapi_widget_1.GApiWidget.ID,
        createWidget: () => ctx.container.get(gapi_widget_1.GApiWidget)
    }))
        .inSingletonScope();
});
//# sourceMappingURL=it-nelson-gapi-frontend-module.js.map