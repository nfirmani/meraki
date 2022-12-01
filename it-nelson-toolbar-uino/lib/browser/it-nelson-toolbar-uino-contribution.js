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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArduinoToolbarContribution = exports.ArduinoToolbarContainer = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
const uino_toolbar_1 = require("./uino-toolbar");
const tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
const core_1 = require("@theia/core");
const label_parser_1 = require("@theia/core/lib/browser/label-parser");
//import { BoardsToolBarItem } from './boards/boards-toolbar-item';
//import { BoardsToolBarItem } from './boards/boards-toolbar-item';
class ArduinoToolbarContainer extends browser_1.Widget {
    constructor(...toolbars) {
        super();
        this.id = 'arduino-toolbar-container';
        this.toolbars = toolbars;
    }
    onAfterAttach(msg) {
        for (const toolbar of this.toolbars) {
            browser_1.Widget.attach(toolbar, this.node);
        }
    }
}
exports.ArduinoToolbarContainer = ArduinoToolbarContainer;
let ArduinoToolbarContribution = class ArduinoToolbarContribution {
    constructor(tabBarToolBarRegistry, commandRegistry, labelParser) {
        this.tabBarToolBarRegistry = tabBarToolBarRegistry;
        this.commandRegistry = commandRegistry;
        this.labelParser = labelParser;
        const leftToolbarWidget = new uino_toolbar_1.ArduinoToolbar(tabBarToolBarRegistry, commandRegistry, labelParser, 'left');
        const rightToolbarWidget = new uino_toolbar_1.ArduinoToolbar(tabBarToolBarRegistry, commandRegistry, labelParser, 'right');
        this.arduinoToolbarContainer = new ArduinoToolbarContainer(leftToolbarWidget, rightToolbarWidget);
    }
    registerToolbarItems(registry) {
        // throw new Error('Method not implemented.');
        registry.registerItem({
            id: 'toggle-serial-monitor',
            //command: MonitorViewContribution.TOGGLE_SERIAL_MONITOR_TOOLBAR,
            command: 'toggle-test',
            //tooltip: nls.localize('arduino/common/serialMonitor', 'Serial Monitor'),
        });
        /*
                 registry.registerItem({
                    id: BoardsToolBarItem.TOOLBAR_ID,
                    render: () => (
                      <BoardsToolBarItem
                        key="boardsToolbarItem"
                        commands={this.commandRegistry}
                        boardsServiceClient={this.boardsServiceClientImpl}
                      />
                    ),
                    isVisible: (widget) =>
                      ArduinoToolbar.is(widget) && widget.side === 'left',
                    priority: 7,
                  });
                 
                  registry.registerItem({
                    id: 'toggle-serial-monitor',
                    command: MonitorViewContribution.TOGGLE_SERIAL_MONITOR_TOOLBAR,
                    tooltip: nls.localize('arduino/common/serialMonitor', 'Serial Monitor'),
                  });
        */
    }
    onStart(app) {
        app.shell.addWidget(this.arduinoToolbarContainer, {
            area: 'top',
        });
    }
};
ArduinoToolbarContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(tab_bar_toolbar_1.TabBarToolbarRegistry)),
    __param(1, (0, inversify_1.inject)(core_1.CommandRegistry)),
    __param(2, (0, inversify_1.inject)(label_parser_1.LabelParser)),
    __metadata("design:paramtypes", [tab_bar_toolbar_1.TabBarToolbarRegistry,
        core_1.CommandRegistry,
        label_parser_1.LabelParser])
], ArduinoToolbarContribution);
exports.ArduinoToolbarContribution = ArduinoToolbarContribution;
//# sourceMappingURL=it-nelson-toolbar-uino-contribution.js.map