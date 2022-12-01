"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ItNelsonAuthorizWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItNelsonAuthorizWidget = void 0;
const React = __importStar(require("react"));
const inversify_1 = require("@theia/core/shared/inversify");
const react_widget_1 = require("@theia/core/lib/browser/widgets/react-widget");
const core_1 = require("@theia/core");
const refine_core_1 = require("@pankod/refine-core");
const refine_antd_1 = require("@pankod/refine-antd");
const refine_simple_rest_1 = __importDefault(require("@pankod/refine-simple-rest"));
const refine_react_router_v6_1 = __importDefault(require("@pankod/refine-react-router-v6"));
require("@pankod/refine-antd/dist/styles.min.css");
const posts_1 = require("./pages/posts");
//import credit from './style/theia.png';
const credit = require('/public/credit.svg');
const API_URL = "https://api.fake-rest.refine.dev";
const mockUsers = [
    {
        username: "admin",
        roles: ["admin"],
    },
    {
        username: "editor",
        roles: ["editor"],
    },
];
const { Link } = refine_react_router_v6_1.default;
const authProvider = {
    login: ({ username, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item) => item.username === username);
        if (user) {
            localStorage.setItem("auth", JSON.stringify(user));
            return Promise.resolve();
        }
        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    checkError: (error) => {
        if (error && error.statusCode === 401) {
            return Promise.reject();
        }
        return Promise.resolve();
    },
    checkAuth: () => localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.roles);
        }
        return Promise.reject();
    },
    getUserIdentity: () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.username);
        }
        return Promise.reject();
    },
};
let ItNelsonAuthorizWidget = ItNelsonAuthorizWidget_1 = class ItNelsonAuthorizWidget extends react_widget_1.ReactWidget {
    async init() {
        this.id = ItNelsonAuthorizWidget_1.ID;
        this.title.label = ItNelsonAuthorizWidget_1.LABEL;
        this.title.caption = ItNelsonAuthorizWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }
    render() {
        return React.createElement("div", { id: 'widget-container' },
            React.createElement(refine_core_1.Refine, { authProvider: authProvider, dataProvider: (0, refine_simple_rest_1.default)(API_URL), routerProvider: refine_react_router_v6_1.default, 
                /*
    
                Layout={({ children, Footer, OffLayoutArea }:any) => (
                    <AntdLayout>
                        <AntdLayout.Header>
                            <CustomSider />
                        </AntdLayout.Header>
                        <AntdLayout.Content>
                            <AntdLayout.Content>
                                <div style={{ padding: 24, minHeight: 360 }}>
                                    {children}
                                </div>
                            </AntdLayout.Content>
                            {Footer && <Footer />}
                        </AntdLayout.Content>
                        {OffLayoutArea && <OffLayoutArea />}
                    </AntdLayout>
                )}
                Title={() => (
                    <Link to="/" style={{ float: "left", marginRight: "10px" }}>
                        <img
                            src="/refine.svg"
                            alt="Refine"
                            style={{ width: "100px" }}
                        />
                    </Link>
                )}
    
                */
                Title: ({ collapsed }) => (React.createElement(Link, { to: "/" }, collapsed ? (React.createElement("img", { src: "/refine.svg", alt: "Cre x", style: {
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "12px 24px",
                    } })) : (React.createElement("img", { src: credit, alt: "Cre T", style: {
                        width: "200px",
                        padding: "12px 24px",
                    } })))), resources: [
                    {
                        name: "posts",
                        list: posts_1.PostList,
                        create: posts_1.PostCreate,
                        edit: posts_1.PostEdit,
                        show: posts_1.PostShow,
                    },
                ], notificationProvider: refine_antd_1.notificationProvider, LoginPage: refine_antd_1.LoginPage, Layout: refine_antd_1.Layout, catchAll: React.createElement(refine_antd_1.ErrorComponent, null) }),
            React.createElement("button", { className: 'theia-button secondary', title: 'Display Message', onClick: _a => this.displayMessage() }, "Display Message"));
    }
    displayMessage() {
        this.messageService.info('Congratulations: ItNelsonAuthoriz Widget Successfully Created!');
    }
};
ItNelsonAuthorizWidget.ID = 'it-nelson-authoriz:widget';
ItNelsonAuthorizWidget.LABEL = 'ItNelsonAuthoriz Widget';
__decorate([
    (0, inversify_1.inject)(core_1.MessageService),
    __metadata("design:type", core_1.MessageService)
], ItNelsonAuthorizWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ItNelsonAuthorizWidget.prototype, "init", null);
ItNelsonAuthorizWidget = ItNelsonAuthorizWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], ItNelsonAuthorizWidget);
exports.ItNelsonAuthorizWidget = ItNelsonAuthorizWidget;
//# sourceMappingURL=it-nelson-authoriz-widget.js.map