"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const it_nelson_form_contribution_1 = require("./it-nelson-form-contribution");
const inversify_1 = require("@theia/core/shared/inversify");
const view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
const frontend_application_1 = require("@theia/core/lib/browser/frontend-application");
const form_widget_1 = require("./form-widget");
const browser_1 = require("@theia/core/lib/browser");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here   
    (0, view_contribution_1.bindViewContribution)(bind, it_nelson_form_contribution_1.FormViewContribution);
    bind(frontend_application_1.FrontendApplicationContribution).toService(it_nelson_form_contribution_1.FormViewContribution);
    bind(form_widget_1.FormWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: form_widget_1.FormWidget.ID,
        createWidget: () => ctx.container.get(form_widget_1.FormWidget)
    }))
        .inSingletonScope();
});
//# sourceMappingURL=it-nelson-form-frontend-module.js.map