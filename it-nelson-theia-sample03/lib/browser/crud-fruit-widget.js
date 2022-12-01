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
var CRUDFruitWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDFruitWidget = void 0;
const React = require("react");
const inversify_1 = require("inversify");
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
//import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
const browser_1 = require("@theia/core/lib/browser");
const core_1 = require("@theia/core");
const ReactDOM = require("react-dom");
//import { CrudView } from './crud_01';
//import { CrudView } from './crud_02';
//import { CrudView } from './crud_03';
const crud_04_1 = require("./crud_04");
//import { Rest01View } from './rest-01';
//import { GApiTest } from './g-api-test';
let CRUDFruitWidget = CRUDFruitWidget_1 = class CRUDFruitWidget extends browser_1.BaseWidget {
    async init() {
        this.id = CRUDFruitWidget_1.ID;
        this.title.label = CRUDFruitWidget_1.LABEL;
        this.title.caption = CRUDFruitWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        //this.update();
        this.node.style.padding = '0px 15px';
        this.node.style.color = 'red'; // 'var(--theia-ui-font-color1)';
        this.toDispose.push(core_1.Disposable.create(() => ReactDOM.unmountComponentAtNode(this.node)));
        ReactDOM.render(React.createElement(crud_04_1.CrudView, null), this.node);
        //ReactDOM.render(<Rest01View />, this.node);
        //ReactDOM.render(<GApiTest />, this.node);
    }
};
CRUDFruitWidget.ID = 'crud-fruit-widget:widget';
CRUDFruitWidget.LABEL = 'CRUD Fruit Widget';
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], CRUDFruitWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], CRUDFruitWidget.prototype, "init", null);
CRUDFruitWidget = CRUDFruitWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], CRUDFruitWidget);
exports.CRUDFruitWidget = CRUDFruitWidget;
//# sourceMappingURL=crud-fruit-widget.js.map