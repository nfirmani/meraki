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
var ItNelsonRefineWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItNelsonRefineWidget = void 0;
const React = require("react");
const inversify_1 = require("@theia/core/shared/inversify");
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const core_1 = require("@theia/core");
const contexts_1 = require("./contexts");
const refine_core_1 = require("@pankod/refine-core");
const refine_mui_1 = require("@pankod/refine-mui");
const refine_kbar_1 = require("@pankod/refine-kbar");
const refine_react_router_v6_1 = require("@pankod/refine-react-router-v6");
const refine_nestjsx_crud_1 = require("@pankod/refine-nestjsx-crud");
const posts_1 = require("./pages/posts");
const layout_1 = require("./components/layout");
const offLayoutArea_1 = require("./components/offLayoutArea");
const API_URL = "https://api.nestjsx-crud.refine.dev";
const dataProvider = (0, refine_nestjsx_crud_1.default)(API_URL);
let ItNelsonRefineWidget = ItNelsonRefineWidget_1 = class ItNelsonRefineWidget extends react_widget_1.ReactWidget {
    async init() {
        this.id = ItNelsonRefineWidget_1.ID;
        this.title.label = ItNelsonRefineWidget_1.LABEL;
        this.title.caption = ItNelsonRefineWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }
    render() {
        //  const header = `This is a sample widget which simply calls the messageService
        //   in order to display an info message to end users.`;   <div id='widget-container'>
        //<button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Displayyy Message</button>
        return React.createElement("div", { id: 'widget-container' },
            React.createElement(contexts_1.ColorModeContextProvider, null,
                React.createElement(refine_mui_1.CssBaseline, null),
                React.createElement(refine_mui_1.GlobalStyles, { styles: { html: { WebkitFontSmoothing: "auto" } } }),
                React.createElement(refine_mui_1.RefineSnackbarProvider, null,
                    React.createElement(refine_kbar_1.RefineKbarProvider, null,
                        React.createElement(refine_core_1.Refine, { notificationProvider: refine_mui_1.notificationProvider, ReadyPage: refine_mui_1.ReadyPage, catchAll: React.createElement(refine_mui_1.ErrorComponent, null), routerProvider: refine_react_router_v6_1.default, dataProvider: dataProvider, resources: [
                                {
                                    name: "posts",
                                    list: posts_1.PostList,
                                    create: posts_1.PostCreate,
                                    edit: posts_1.PostEdit,
                                },
                            ], Title: layout_1.Title, Sider: layout_1.Sider, Layout: layout_1.Layout, Header: layout_1.Header, OffLayoutArea: offLayoutArea_1.OffLayoutArea })))),
            React.createElement("button", { className: 'theia-button secondary', title: 'Display Message', onClick: _a => this.displayMessage() }, "Displayyy Message"));
    }
    displayMessage() {
        this.messageService.info('Congratulations: ItNelsonRefine Widget Successfully Created!');
    }
};
ItNelsonRefineWidget.ID = 'it-nelson-refine:widget';
ItNelsonRefineWidget.LABEL = 'ItNelsonRefine Widget';
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], ItNelsonRefineWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItNelsonRefineWidget.prototype, "init", null);
ItNelsonRefineWidget = ItNelsonRefineWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], ItNelsonRefineWidget);
exports.ItNelsonRefineWidget = ItNelsonRefineWidget;
// <AlertMessage type='INFO' header={header} />
//# sourceMappingURL=it-nelson-refine-widget.js.map