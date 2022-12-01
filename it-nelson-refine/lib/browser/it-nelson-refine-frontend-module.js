"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("@theia/core/shared/inversify");
const it_nelson_refine_widget_1 = require("./it-nelson-refine-widget");
const it_nelson_refine_contribution_1 = require("./it-nelson-refine-contribution");
const browser_1 = require("@theia/core/lib/browser");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(bind => {
    (0, browser_1.bindViewContribution)(bind, it_nelson_refine_contribution_1.ItNelsonRefineContribution);
    bind(browser_1.FrontendApplicationContribution).toService(it_nelson_refine_contribution_1.ItNelsonRefineContribution);
    bind(it_nelson_refine_widget_1.ItNelsonRefineWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: it_nelson_refine_widget_1.ItNelsonRefineWidget.ID,
        createWidget: () => ctx.container.get(it_nelson_refine_widget_1.ItNelsonRefineWidget)
    })).inSingletonScope();
});
//# sourceMappingURL=it-nelson-refine-frontend-module.js.map