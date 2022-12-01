import { CommandContribution, MenuContribution} from '@theia/core';
import { WebSocketConnectionProvider } from '@theia/core/lib/browser';
import { ContainerModule } from '@theia/core/shared/inversify';
import {  MyServicePath, MyService } from '../common/srv-protocol';
import { ItNelsonBackendSrvCommandContribution, ItNelsonBackendSrvMenuContribution} from './it-nelson-backend-srv-contribution';

export default new ContainerModule(bind => {
    bind(CommandContribution).to(ItNelsonBackendSrvCommandContribution);
    bind(MenuContribution).to(ItNelsonBackendSrvMenuContribution);
    bind(MyService).toDynamicValue(context => WebSocketConnectionProvider.createProxy(context.container, MyServicePath)).inSingletonScope();
});

