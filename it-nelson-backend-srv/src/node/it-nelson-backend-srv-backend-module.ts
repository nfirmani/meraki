import { ConnectionHandler, JsonRpcConnectionHandler } from '@theia/core';
import { ContainerModule } from '@theia/core/shared/inversify';
import { MyService, MyServicePath } from '../common/srv-protocol';
//import {  MyServiceImpl } from './srv-service-impl-dev2';
//import {  MyServiceImpl } from './srv-service-impl-dev3';
//import {  MyServiceImpl } from './srv-gapi3-impl';


import {  MyServiceImpl } from './srv-service-impl';
//import {  MyServiceImpl } from './srv-gapi-impl';


export default new ContainerModule(bind => {
    bind(MyServiceImpl).toSelf().inSingletonScope();
    bind(MyService).toService(MyServiceImpl);
    bind(ConnectionHandler).toDynamicValue(context => new JsonRpcConnectionHandler(MyServicePath, () => context.container.get(MyService))).inSingletonScope();
});