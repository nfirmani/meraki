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
var ItNelsonViewToolbarCmdCommandContribution_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItNelsonViewToolbarCmdCommandContribution = exports.LocationToolBarCommand = exports.SampleToolBarCommand = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
const common_1 = require("@theia/core/lib/common");
const browser_1 = require("@theia/core/lib/browser");
const sample_unclosable_view_1 = require("./sample-unclosable-view");
exports.SampleToolBarCommand = {
    id: 'sample.toggle.toolbarCommand',
    iconClass: (0, browser_1.codicon)('add')
};
exports.LocationToolBarCommand = {
    id: 'location.toolbarCommand',
    iconClass: (0, browser_1.codicon)('location')
};
let ItNelsonViewToolbarCmdCommandContribution = ItNelsonViewToolbarCmdCommandContribution_1 = class ItNelsonViewToolbarCmdCommandContribution extends browser_1.AbstractViewContribution {
    constructor() {
        super({
            widgetId: sample_unclosable_view_1.SampleViewUnclosableView.ID,
            widgetName: 'PROVA',
            toggleCommandId: ItNelsonViewToolbarCmdCommandContribution_1.SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID,
            defaultWidgetOptions: {
                area: 'main'
            }
        });
        this.toolbarItemState = false;
    }
    registerCommands(registry) {
        super.registerCommands(registry);
        registry.registerCommand(exports.SampleToolBarCommand, {
            execute: () => {
                this.toolbarItemState = !this.toolbarItemState;
                this.messageService.info(`Sample Toolbar Command is toggled = ${this.toolbarItemState}`);
            },
            isEnabled: widget => this.withWidget(widget, () => true),
            isVisible: widget => this.withWidget(widget, () => true),
            isToggled: () => this.toolbarItemState
        });
        registry.registerCommand(exports.LocationToolBarCommand, {
            execute: () => {
                this.toolbarItemState = !this.toolbarItemState;
                this.messageService.info(`Il commando location is toggled = ${this.toolbarItemState}`);
            },
            isEnabled: widget => this.withWidget(widget, () => true),
            isVisible: widget => this.withWidget(widget, () => true),
            isToggled: () => this.toolbarItemState
        });
    }
    async registerToolbarItems(toolbarRegistry) {
        toolbarRegistry.registerItem({
            id: exports.SampleToolBarCommand.id,
            command: exports.SampleToolBarCommand.id,
            tooltip: 'Click to Toggle Toolbar Item',
            priority: 0
        });
        toolbarRegistry.registerItem({
            id: exports.LocationToolBarCommand.id,
            command: exports.LocationToolBarCommand.id,
            tooltip: 'Clicca per location',
            priority: 0
        });
    }
    withWidget(widget = this.tryGetWidget(), cb) {
        if (widget instanceof sample_unclosable_view_1.SampleViewUnclosableView && widget.id === sample_unclosable_view_1.SampleViewUnclosableView.ID) {
            return cb(widget);
        }
        return false;
    }
};
ItNelsonViewToolbarCmdCommandContribution.SAMPLE_UNCLOSABLE_VIEW_TOGGLE_COMMAND_ID = 'sampleUnclosableView:toggle';
__decorate([
    (0, inversify_1.inject)(common_1.MessageService),
    __metadata("design:type", common_1.MessageService)
], ItNelsonViewToolbarCmdCommandContribution.prototype, "messageService", void 0);
ItNelsonViewToolbarCmdCommandContribution = ItNelsonViewToolbarCmdCommandContribution_1 = __decorate([
    (0, inversify_1.injectable)(),
    __metadata("design:paramtypes", [])
], ItNelsonViewToolbarCmdCommandContribution);
exports.ItNelsonViewToolbarCmdCommandContribution = ItNelsonViewToolbarCmdCommandContribution;
//# sourceMappingURL=it-nelson-view-toolbar-cmd-contribution.js.map