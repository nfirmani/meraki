"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@theia/core");
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const protocol_1 = require("../common/protocol");
const it_nelson_backend_contribution_1 = require("./it-nelson-backend-contribution");
exports.default = new inversify_1.ContainerModule(bind => {
    bind(core_1.CommandContribution).to(it_nelson_backend_contribution_1.ItNelsonBackendCommandContribution).inSingletonScope();
    bind(protocol_1.BackendClient).to(BackendClientImpl).inSingletonScope();
    bind(protocol_1.HelloBackendService).toDynamicValue(ctx => {
        const connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        return connection.createProxy(protocol_1.HELLO_BACKEND_PATH);
    }).inSingletonScope();
    bind(protocol_1.HelloBackendWithClientService).toDynamicValue(ctx => {
        const connection = ctx.container.get(browser_1.WebSocketConnectionProvider);
        const backendClient = ctx.container.get(protocol_1.BackendClient);
        return connection.createProxy(protocol_1.HELLO_BACKEND_WITH_CLIENT_PATH, backendClient);
    }).inSingletonScope();
});
let BackendClientImpl = class BackendClientImpl {
    getName() {
        return new Promise(resolve => resolve('Client'));
    }
};
BackendClientImpl = __decorate([
    (0, inversify_1.injectable)()
], BackendClientImpl);
//# sourceMappingURL=it-nelson-backend-frontend-module.js.map