"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const it_nelson_view_toolbar_cmd_contribution_1 = require("./it-nelson-view-toolbar-cmd-contribution");
const inversify_1 = require("@theia/core/shared/inversify");
const tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
const sample_unclosable_view_1 = require("./sample-unclosable-view");
const widget_manager_1 = require("@theia/core/lib/browser/widget-manager");
const view_contribution_1 = require("@theia/core/lib/browser/shell/view-contribution");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here
    (0, view_contribution_1.bindViewContribution)(bind, it_nelson_view_toolbar_cmd_contribution_1.ItNelsonViewToolbarCmdCommandContribution);
    bind(tab_bar_toolbar_1.TabBarToolbarContribution).to(it_nelson_view_toolbar_cmd_contribution_1.ItNelsonViewToolbarCmdCommandContribution).inSingletonScope();
    bind(sample_unclosable_view_1.SampleViewUnclosableView).toSelf();
    bind(widget_manager_1.WidgetFactory).toDynamicValue(ctx => ({
        id: sample_unclosable_view_1.SampleViewUnclosableView.ID,
        createWidget: () => ctx.container.get(sample_unclosable_view_1.SampleViewUnclosableView)
    }));
});
//# sourceMappingURL=it-nelson-view-toolbar-cmd-frontend-module.js.map