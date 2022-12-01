"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@theia/core");
const inversify_1 = require("@theia/core/shared/inversify");
const srv_protocol_1 = require("../common/srv-protocol");
//import {  MyServiceImpl } from './srv-service-impl-dev2';
//import {  MyServiceImpl } from './srv-service-impl-dev3';
//import {  MyServiceImpl } from './srv-gapi3-impl';
const srv_service_impl_1 = require("./srv-service-impl");
//import {  MyServiceImpl } from './srv-gapi-impl';
exports.default = new inversify_1.ContainerModule(bind => {
    bind(srv_service_impl_1.MyServiceImpl).toSelf().inSingletonScope();
    bind(srv_protocol_1.MyService).toService(srv_service_impl_1.MyServiceImpl);
    bind(core_1.ConnectionHandler).toDynamicValue(context => new core_1.JsonRpcConnectionHandler(srv_protocol_1.MyServicePath, () => context.container.get(srv_protocol_1.MyService))).inSingletonScope();
});
//# sourceMappingURL=it-nelson-backend-srv-backend-module.js.map