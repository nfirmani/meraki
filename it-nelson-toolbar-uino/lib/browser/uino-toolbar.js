"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ArduinoToolbar = exports.ArduinoToolbarComponent = exports.ARDUINO_TOOLBAR_ITEM_CLASS = void 0;
const React = require("react");
const tab_bar_toolbar_1 = require("@theia/core/lib/browser/shell/tab-bar-toolbar");
const browser_1 = require("@theia/core/lib/browser");
const label_parser_1 = require("@theia/core/lib/browser/label-parser");
exports.ARDUINO_TOOLBAR_ITEM_CLASS = 'arduino-tool-item';
class ArduinoToolbarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.renderItem = (item) => {
            let innerText = '';
            let className = `arduino-tool-icon ${item.id}-icon`;
            if (item.text) {
                for (const labelPart of this.props.labelParser.parse(item.text)) {
                    if (typeof labelPart !== 'string' && label_parser_1.LabelIcon.is(labelPart)) {
                        className += ` fa fa-${labelPart.name}`;
                    }
                    else {
                        innerText = labelPart;
                    }
                }
            }
            const command = this.props.commands.getCommand(item.command);
            const cls = `${exports.ARDUINO_TOOLBAR_ITEM_CLASS} ${tab_bar_toolbar_1.TabBarToolbar.Styles.TAB_BAR_TOOLBAR_ITEM} ${command && this.props.commandIsEnabled(command.id) ? 'enabled' : ''} ${command && this.props.commandIsToggled(command.id) ? 'toggled' : ''}`;
            return (React.createElement("div", { key: item.id, className: cls },
                React.createElement("div", { className: item.id },
                    React.createElement("div", { key: item.id + '-icon', id: item.id, className: className, onClick: this.props.executeCommand, onMouseOver: () => this.setState({ tooltip: item.tooltip || '' }), onMouseOut: () => this.setState({ tooltip: '' }), title: item.tooltip }, innerText))));
        };
        this.state = { tooltip: '' };
    }
    render() {
        const tooltip = (React.createElement("div", { key: "arduino-toolbar-tooltip", className: 'arduino-toolbar-tooltip' }, this.state.tooltip));
        const items = [
            React.createElement(React.Fragment, { key: this.props.side + '-arduino-toolbar-tooltip' }, [...this.props.items].map((item) => tab_bar_toolbar_1.TabBarToolbarItem.is(item) ? this.renderItem(item) : item.render())),
        ];
        if (this.props.side === 'left') {
            items.unshift(tooltip);
        }
        else {
            items.push(tooltip);
        }
        return items;
    }
}
exports.ArduinoToolbarComponent = ArduinoToolbarComponent;
class ArduinoToolbar extends browser_1.ReactWidget {
    constructor(tabBarToolbarRegistry, commands, labelParser, side) {
        super();
        this.tabBarToolbarRegistry = tabBarToolbarRegistry;
        this.commands = commands;
        this.labelParser = labelParser;
        this.side = side;
        this.items = new Map();
        this.doCommandIsEnabled = (id) => this.commandIsEnabled(id);
        this.doCommandIsToggled = (id) => this.commandIsToggled(id);
        this.executeCommand = (e) => {
            const item = this.items.get(e.currentTarget.id);
            if (tab_bar_toolbar_1.TabBarToolbarItem.is(item)) {
                this.commands.executeCommand(item.command, this, e.target);
            }
        };
        this.id = side + '-arduino-toolbar';
        this.addClass(tab_bar_toolbar_1.TabBarToolbar.Styles.TAB_BAR_TOOLBAR);
        this.init();
        this.tabBarToolbarRegistry.onDidChange(() => this.updateToolbar());
    }
    updateItems(items) {
        this.items.clear();
        const revItems = items
            .sort(tab_bar_toolbar_1.TabBarToolbarItem.PRIORITY_COMPARATOR)
            .reverse();
        for (const item of revItems) {
            this.items.set(item.id, item);
        }
        this.update();
    }
    updateToolbar() {
        const items = this ? this.tabBarToolbarRegistry.visibleItems(this) : [];
        this.updateItems(items);
    }
    init() {
        this.node.classList.add('theia-arduino-toolbar', this.side);
        this.update();
    }
    commandIsEnabled(command) {
        return this.commands.isEnabled(command, this);
    }
    commandIsToggled(command) {
        return this.commands.isToggled(command, this);
    }
    render() {
        return (React.createElement(ArduinoToolbarComponent, { key: "arduino-toolbar-component", side: this.side, labelParser: this.labelParser, items: [...this.items.values()], commands: this.commands, commandIsEnabled: this.doCommandIsEnabled, commandIsToggled: this.doCommandIsToggled, executeCommand: this.executeCommand }));
    }
}
exports.ArduinoToolbar = ArduinoToolbar;
(function (ArduinoToolbar) {
    function is(maybeToolbarWidget) {
        return maybeToolbarWidget instanceof ArduinoToolbar;
    }
    ArduinoToolbar.is = is;
})(ArduinoToolbar = exports.ArduinoToolbar || (exports.ArduinoToolbar = {}));
//# sourceMappingURL=uino-toolbar.js.map