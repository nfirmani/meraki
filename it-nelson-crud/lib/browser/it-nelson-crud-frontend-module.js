"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("@theia/core/shared/inversify");
const it_nelson_crud_widget_1 = require("./it-nelson-crud-widget");
const it_nelson_crud_contribution_1 = require("./it-nelson-crud-contribution");
const browser_1 = require("@theia/core/lib/browser");
require("../../src/browser/style/index.css");
exports.default = new inversify_1.ContainerModule(bind => {
    (0, browser_1.bindViewContribution)(bind, it_nelson_crud_contribution_1.ItNelsonCrudContribution);
    bind(browser_1.FrontendApplicationContribution).toService(it_nelson_crud_contribution_1.ItNelsonCrudContribution);
    bind(it_nelson_crud_widget_1.ItNelsonCrudWidget).toSelf();
    bind(browser_1.WidgetFactory).toDynamicValue(ctx => ({
        id: it_nelson_crud_widget_1.ItNelsonCrudWidget.ID,
        createWidget: () => ctx.container.get(it_nelson_crud_widget_1.ItNelsonCrudWidget)
    })).inSingletonScope();
});
//# sourceMappingURL=it-nelson-crud-frontend-module.js.map