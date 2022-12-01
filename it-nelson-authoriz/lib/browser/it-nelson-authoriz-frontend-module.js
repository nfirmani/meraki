"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("@theia/core/shared/inversify");
const it_nelson_authoriz_widget_1 = require("./it-nelson-authoriz-widget");
const it_nelson_authoriz_contribution_1 = require("./it-nelson-authoriz-contribution");
const browser_1 = require("@theia/core/lib/browser");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(bind => {
    (0, browser_1.bindViewContribution)(bind, it_nelson_authoriz_contribution_1.ItNelsonAuthorizContribution);
    bind(browser_1.FrontendApplicationContribution).toService(it_nelson_authoriz_contribution_1.ItNelsonAuthorizContribution);
    bind(it_nelson_authoriz_widget_1.ItNelsonAuthorizWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: it_nelson_authoriz_widget_1.ItNelsonAuthorizWidget.ID,
        createWidget: () => ctx.container.get(it_nelson_authoriz_widget_1.ItNelsonAuthorizWidget)
    })).inSingletonScope();
});
//# sourceMappingURL=it-nelson-authoriz-frontend-module.js.map