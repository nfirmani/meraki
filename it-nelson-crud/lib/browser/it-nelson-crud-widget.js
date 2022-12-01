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
var ItNelsonCrudWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItNelsonCrudWidget = void 0;
const React = require("react");
const inversify_1 = require("@theia/core/shared/inversify");
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const core_1 = require("@theia/core");
const refine_core_1 = require("@pankod/refine-core");
const refine_antd_1 = require("@pankod/refine-antd");
const refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
const refine_simple_rest_1 = require("@pankod/refine-simple-rest");
require("@pankod/refine-antd/dist/styles.min.css");
const fruits_1 = require("./pages/fruits");
const edit_1 = require("./pages/fruits/edit");
const create_1 = require("./pages/fruits/create");
const show_1 = require("./pages/fruits/show");
//const API_URL = "https://api.fake-rest.refine.dev";
const API_URL = "http://localhost:8080";
let ItNelsonCrudWidget = ItNelsonCrudWidget_1 = class ItNelsonCrudWidget extends react_widget_1.ReactWidget {
    async init() {
        this.id = ItNelsonCrudWidget_1.ID;
        this.title.label = ItNelsonCrudWidget_1.LABEL;
        this.title.caption = ItNelsonCrudWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }
    render() {
        /*
        
                const header = `This is a sample widget which simply calls the messageService
                in order to display an info message to end users.`;
                return <div id='widget-container'>
                    <AlertMessage type='INFO' header={header} />
                    <button id='displayMessageButton' className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
                </div>
        */
        return React.createElement("div", { id: 'widget-container' },
            React.createElement(refine_core_1.Refine, { routerProvider: refine_react_router_v6_1.default, dataProvider: (0, refine_simple_rest_1.default)(API_URL), Layout: refine_antd_1.Layout, ReadyPage: refine_antd_1.ReadyPage, notificationProvider: refine_antd_1.notificationProvider, catchAll: React.createElement(refine_antd_1.ErrorComponent, null), resources: [{ name: "fruits",
                        list: fruits_1.FruitList,
                        edit: edit_1.FruitEdit,
                        create: create_1.FruitCreate,
                        show: show_1.FruitShow
                    }] }));
    }
    displayMessage() {
        this.messageService.info('Congratulations: ItNelsonCrud Widget Successfully Created!');
    }
    onActivateRequest(msg) {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }
};
ItNelsonCrudWidget.ID = 'it-nelson-crud:widget';
ItNelsonCrudWidget.LABEL = 'ItNelsonCrud Widget';
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], ItNelsonCrudWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItNelsonCrudWidget.prototype, "init", null);
ItNelsonCrudWidget = ItNelsonCrudWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], ItNelsonCrudWidget);
exports.ItNelsonCrudWidget = ItNelsonCrudWidget;
//# sourceMappingURL=it-nelson-crud-widget.js.map