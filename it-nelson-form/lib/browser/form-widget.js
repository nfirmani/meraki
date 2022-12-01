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
var FormWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormWidget = void 0;
const React = require("react");
const inversify_1 = require("inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
//import BasicForm from './basic-form';
const material_form_1 = require("./material-form");
let FormWidget = FormWidget_1 = class FormWidget extends react_widget_1.ReactWidget {
    async init() {
        //  initialization 
        this.id = FormWidget_1.ID;
        this.title.label = FormWidget_1.LABEL;
        this.title.caption = FormWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update(); //  Update the view 
    }
    setText(text) {
        this.text = text;
    }
    //  According to the parameters received 
    render() {
        /*
       
               return (
                   <BasicForm></BasicForm>
       
                  
       
               )
       */
        return (React.createElement(material_form_1.default, null));
    }
};
FormWidget.ID = 'form:widget';
FormWidget.LABEL = 'Sample Form';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], FormWidget.prototype, "init", null);
FormWidget = FormWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], FormWidget);
exports.FormWidget = FormWidget;
//# sourceMappingURL=form-widget.js.map