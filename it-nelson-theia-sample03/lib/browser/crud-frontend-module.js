"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFamilyTreeWidget = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
//import "./style/index.css";
const crud_contribution_1 = require("./crud-contribution");
const crud_fruit_widget_1 = require("./crud-fruit-widget");
const family_tree_contribution_1 = require("./tree/family-tree-contribution");
const family_tree_widget_1 = require("./tree/family-tree-widget");
const family_tree_1 = require("./tree/family-tree");
exports.default = new inversify_1.ContainerModule(bind => {
    (0, browser_1.bindViewContribution)(bind, crud_contribution_1.CRUDFruitWidgetContribution);
    bind(browser_1.FrontendApplicationContribution).toService(crud_contribution_1.CRUDFruitWidgetContribution);
    bind(crud_fruit_widget_1.CRUDFruitWidget).toSelf();
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: crud_fruit_widget_1.CRUDFruitWidget.ID,
        createWidget: () => ctx.container.get(crud_fruit_widget_1.CRUDFruitWidget)
    }))
        .inSingletonScope();
    (0, browser_1.bindViewContribution)(bind, family_tree_contribution_1.FamilyTreeWidgetContribution);
    bind(browser_1.FrontendApplicationContribution).toService(family_tree_contribution_1.FamilyTreeWidgetContribution);
    bind(browser_1.WidgetFactory)
        .toDynamicValue(ctx => ({
        id: family_tree_widget_1.FamilyTreeWidget.ID,
        createWidget: () => createFamilyTreeWidget(ctx.container)
    }))
        .inSingletonScope();
});
function createFamilyTreeWidget(parent) {
    const child = (0, browser_1.createTreeContainer)(parent);
    child.unbind(browser_1.TreeImpl);
    child.bind(family_tree_1.FamilyTree).toSelf();
    child.rebind(browser_1.Tree).toService(family_tree_1.FamilyTree);
    child.unbind(browser_1.TreeWidget);
    child.bind(family_tree_widget_1.FamilyTreeWidget).toSelf();
    return child.get(family_tree_widget_1.FamilyTreeWidget);
}
exports.createFamilyTreeWidget = createFamilyTreeWidget;
//# sourceMappingURL=crud-frontend-module.js.map