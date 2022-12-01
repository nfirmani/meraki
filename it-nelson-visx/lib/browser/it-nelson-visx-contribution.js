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
exports.VisxViewContribution = exports.ItNelsonVisxCommand = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const browser_1 = require("@theia/core/lib/browser");
const visx_widget_1 = require("./visx-widget");
exports.ItNelsonVisxCommand = {
    id: 'ItNelsonVisx.command',
    label: 'Visx'
};
let VisxViewContribution = class VisxViewContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: visx_widget_1.CurveWidget.ID,
            widgetName: visx_widget_1.CurveWidget.LABEL,
            defaultWidgetOptions: { area: 'main' },
            //toggleCommandId: TestWidgetCommand.id //comando che viene aggiunto al menu View, ma se il menu view viene nascosto continua ad apparire il sottomenu
        });
    }
    registerCommands(commands) {
        commands.registerCommand(exports.ItNelsonVisxCommand, {
            execute: () => super.openView({ activate: false, reveal: true })
        });
    }
    registerMenus(menus) {
        super.registerMenus(menus);
        menus.registerMenuAction(browser_1.CommonMenus.HELP, {
            commandId: exports.ItNelsonVisxCommand.id,
            label: 'Visx-widget'
        });
    }
};
VisxViewContribution = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], VisxViewContribution);
exports.VisxViewContribution = VisxViewContribution;
//# sourceMappingURL=it-nelson-visx-contribution.js.map