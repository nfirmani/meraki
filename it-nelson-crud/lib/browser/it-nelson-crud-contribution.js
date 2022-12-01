"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItNelsonCrudContribution = exports.ItNelsonCrudCommand = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const it_nelson_crud_widget_1 = require("./it-nelson-crud-widget");
const browser_1 = require("@theia/core/lib/browser");
exports.ItNelsonCrudCommand = { id: 'it-nelson-crud:command' };
let ItNelsonCrudContribution = class ItNelsonCrudContribution extends browser_1.AbstractViewContribution {
    /**
     * `AbstractViewContribution` handles the creation and registering
     *  of the widget including commands, menus, and keybindings.
     *
     * We can pass `defaultWidgetOptions` which define widget properties such as
     * its location `area` (`main`, `left`, `right`, `bottom`), `mode`, and `ref`.
     *
     */
    constructor() {
        super({
            widgetId: it_nelson_crud_widget_1.ItNelsonCrudWidget.ID,
            widgetName: it_nelson_crud_widget_1.ItNelsonCrudWidget.LABEL,
            defaultWidgetOptions: { area: 'main' },
            //toggleCommandId: ItNelsonCrudCommand.id
        });
    }
    /**
     * Example command registration to open the widget from the menu, and quick-open.
     * For a simpler use case, it is possible to simply call:
     ```ts
        super.registerCommands(commands)
     ```
     *
     * For more flexibility, we can pass `OpenViewArguments` which define
     * options on how to handle opening the widget:
     *
     ```ts
        toggle?: boolean
        activate?: boolean;
        reveal?: boolean;
     ```
     *
     * @param commands
     */
    registerCommands(commands) {
        commands.registerCommand(exports.ItNelsonCrudCommand, {
            execute: () => super.openView({ activate: false, reveal: true })
        });
    }
    /**
     * Example menu registration to contribute a menu item used to open the widget.
     * Default location when extending the `AbstractViewContribution` is the `View` main-menu item.
     *
     * We can however define new menu path locations in the following way:
     ```ts
        menus.registerMenuAction(CommonMenus.HELP, {
            commandId: 'id',
            label: 'label'
        });
     ```
     *
     * @param menus
     */
    registerMenus(menus) {
        super.registerMenus(menus);
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.ItNelsonCrudCommand.id,
            label: 'form-widget-crud'
        });
    }
};
ItNelsonCrudContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ItNelsonCrudContribution);
exports.ItNelsonCrudContribution = ItNelsonCrudContribution;
//# sourceMappingURL=it-nelson-crud-contribution.js.map