"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@theia/core");
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const srv_protocol_1 = require("../common/srv-protocol");
const it_nelson_backend_srv_contribution_1 = require("./it-nelson-backend-srv-contribution");
exports.default = new inversify_1.ContainerModule(bind => {
    bind(core_1.CommandContribution).to(it_nelson_backend_srv_contribution_1.ItNelsonBackendSrvCommandContribution);
    bind(core_1.MenuContribution).to(it_nelson_backend_srv_contribution_1.ItNelsonBackendSrvMenuContribution);
    bind(srv_protocol_1.MyService).toDynamicValue(context => browser_1.WebSocketConnectionProvider.createProxy(context.container, srv_protocol_1.MyServicePath)).inSingletonScope();
});
//# sourceMappingURL=it-nelson-backend-srv-frontend-module.js.map