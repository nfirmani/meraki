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
var CurveWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CurveWidget = void 0;
const React = require("react");
const inversify_1 = require("inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const curve_1 = require("./curve");
const LinkTypes_1 = require("./LinkTypes");
let CurveWidget = CurveWidget_1 = class CurveWidget extends react_widget_1.ReactWidget {
    async init() {
        //  initialization 
        this.id = CurveWidget_1.ID;
        this.title.label = CurveWidget_1.LABEL;
        this.title.caption = CurveWidget_1.LABEL;
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
            React.createElement(curve_1.default, { width: 700, height: 400 }),
            React.createElement(LinkTypes_1.default, { width: 700, height: 400 })));
    }
};
CurveWidget.ID = 'visx:widget';
CurveWidget.LABEL = 'Visx';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CurveWidget.prototype, "init", null);
CurveWidget = CurveWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], CurveWidget);
exports.CurveWidget = CurveWidget;
//# sourceMappingURL=visx-widget.js.map