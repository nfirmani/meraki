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
exports.FamilyTreeWidgetContribution = exports.HelloWorld02Command = exports.HelloWorld01Command = exports.FamilyTreeWidgetCommand = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
const family_tree_widget_1 = require("./family-tree-widget");
const core_1 = require("@theia/core");
exports.FamilyTreeWidgetCommand = {
    id: "family-tree-widget:command"
};
exports.HelloWorld01Command = {
    id: "hello-world01:command"
};
exports.HelloWorld02Command = {
    id: "hello-world02:command"
};
let FamilyTreeWidgetContribution = class FamilyTreeWidgetContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: family_tree_widget_1.FamilyTreeWidget.ID,
            widgetName: family_tree_widget_1.FamilyTreeWidget.LABEL,
            defaultWidgetOptions: { area: "left" },
            //toggleCommandId: FamilyTreeWidgetCommand.id   //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
        });
    }
    registerCommands(commands) {
        commands.registerCommand(exports.FamilyTreeWidgetCommand, {
            execute: () => super.openView({ activate: false, reveal: true })
        });
        commands.registerCommand(exports.HelloWorld01Command, {
            execute: () => this.messageService.info('Hello World-01 !')
        });
        commands.registerCommand(exports.HelloWorld02Command, {
            execute: () => this.messageService.info('Hello World-02 !')
        });
    }
    registerMenus(menus) {
        super.registerMenus(menus);
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.FamilyTreeWidgetCommand.id,
            label: 'family-tree-widget'
        });
    }
};
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], FamilyTreeWidgetContribution.prototype, "messageService", void 0);
FamilyTreeWidgetContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], FamilyTreeWidgetContribution);
exports.FamilyTreeWidgetContribution = FamilyTreeWidgetContribution;
//# sourceMappingURL=family-tree-contribution.js.map