"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("@theia/core/shared/inversify");
const view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
const frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
const visx_widget_1 = require("./visx-widget");
const browser_1 = require("@theia/core/lib/browser");
const it_nelson_visx_contribution_1 = require("./it-nelson-visx-contribution");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here   
    (0, view_contribution_1.bindViewContribution)(bind, it_nelson_visx_contribution_1.VisxViewContribution);
    bind(frontend_application_1.FrontendApplicationContribution).toService(it_nelson_visx_contribution_1.VisxViewContribution);
    bind(visx_widget_1.CurveWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: visx_widget_1.CurveWidget.ID,
        createWidget: () => ctx.container.get(visx_widget_1.CurveWidget)
    }))
        .inSingletonScope();
});
//# sourceMappingURL=it-nelson-visx-frontend-module.js.map