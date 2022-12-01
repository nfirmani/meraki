import { CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService } from '@theia/core/lib/common';
import { MyService } from '../common/srv-protocol';
export declare class ItNelsonBackendSrvCommandContribution implements CommandContribution {
    private readonly messageService;
    private readonly messageService2;
    protected readonly myService: MyService;
    constructor(messageService: MessageService, messageService2: MessageService, myService: MyService);
    /** registerCommand nodejs vedere un editor html che
     *  questa situaz
     *
     *
     */
    registerCommands(registry: CommandRegistry): void;
}
export declare class ItNelsonBackendSrvMenuContribution implements MenuContribution {
    registerMenus(menus: MenuModelRegistry): void;
}
//# sourceMappingURL=it-nelson-backend-srv-contribution.d.ts.map