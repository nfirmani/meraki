"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_1 = require("@theia/core/shared/inversify");
const view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
const frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
const material_widget_1 = require("./material-widget");
const browser_1 = require("@theia/core/lib/browser");
const it_nelson_material_contribution_1 = require("./it-nelson-material-contribution");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here   
    (0, view_contribution_1.bindViewContribution)(bind, it_nelson_material_contribution_1.MaterialViewContribution);
    bind(frontend_application_1.FrontendApplicationContribution).toService(it_nelson_material_contribution_1.MaterialViewContribution);
    bind(material_widget_1.MaterialWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: material_widget_1.MaterialWidget.ID,
        createWidget: () => ctx.container.get(material_widget_1.MaterialWidget)
    }))
        .inSingletonScope();
});
//# sourceMappingURL=it-nelson-material-frontend-module.js.map