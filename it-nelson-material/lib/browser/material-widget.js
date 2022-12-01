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
var MaterialWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MaterialWidget = void 0;
const React = require("react");
const inversify_1 = require("inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const datagrid_base_1 = require("./datagrid-base");
const basic_text_1 = require("./basic-text");
const date_picker_1 = require("./date-picker");
let MaterialWidget = MaterialWidget_1 = class MaterialWidget extends react_widget_1.ReactWidget {
    async init() {
        //  initialization 
        this.id = MaterialWidget_1.ID;
        this.title.label = MaterialWidget_1.LABEL;
        this.title.caption = MaterialWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update(); //  Update the view 
    }
    setText(text) {
        this.text = text;
    }
    //  According to the parameters received 
    render() {
        return (React.createElement(React.Fragment, null,
            React.createElement(datagrid_base_1.default, null),
            React.createElement("br", null),
            React.createElement(basic_text_1.default, null),
            React.createElement(date_picker_1.default, null)));
    }
};
MaterialWidget.ID = 'material:widget';
MaterialWidget.LABEL = 'Material UI';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], MaterialWidget.prototype, "init", null);
MaterialWidget = MaterialWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], MaterialWidget);
exports.MaterialWidget = MaterialWidget;
//# sourceMappingURL=material-widget.js.map