"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const it_nelson_query_contribution_1 = require("./it-nelson-query-contribution");
const inversify_1 = require("@theia/core/shared/inversify");
const view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
const frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
const query_widget_1 = require("./query-widget");
const browser_1 = require("@theia/core/lib/browser");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here   
    (0, view_contribution_1.bindViewContribution)(bind, it_nelson_query_contribution_1.QueryViewContribution);
    bind(frontend_application_1.FrontendApplicationContribution).toService(it_nelson_query_contribution_1.QueryViewContribution);
    bind(query_widget_1.QueryWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: query_widget_1.QueryWidget.ID,
        createWidget: () => ctx.container.get(query_widget_1.QueryWidget)
    }))
        .inSingletonScope();
});
//# sourceMappingURL=it-nelson-query-frontend-module.js.map