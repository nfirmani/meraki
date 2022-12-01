import { CommonMenus } from '@theia/core/lib/browser';
import { Command, CommandContribution, CommandRegistry, MenuContribution, MenuModelRegistry, MessageService} from '@theia/core/lib/common';
import { inject, injectable } from '@theia/core/shared/inversify';
import { MyService } from '../common/srv-protocol';


const SayHelloViaBackendCommandWithCallBack: Command = {
    id: 'SrvExtension.command',
    label: "Service backend-1"
};


@injectable()
export class ItNelsonBackendSrvCommandContribution implements CommandContribution {

    constructor(
        @inject(MessageService) private readonly messageService: MessageService,
        @inject(MessageService) private readonly messageService2: MessageService,
        @inject(MyService) protected readonly myService: MyService
    ) { }


    /** registerCommand nodejs vedere un editor html che
     *  questa situaz
     * 
     * 
     */

    registerCommands(registry: CommandRegistry): void {
        registry.registerCommand(SayHelloViaBackendCommandWithCallBack, {
            // uso di then
           
            // execute:  () =>  this.myService.getDocTitle().then(r => this.messageService.info("il titolo è: "+ r))
            
           // uso con async/await
            execute: async () => {
                //const env = await this.myService.getEnvVariables();
                //this.messageService.info('Environment variables from the server: ' + JSON.stringify(env));
                
                const setting = await this.myService.getSettingValue();
                this.messageService.info(JSON.stringify(setting));

                const setting2 = await this.myService.getDocTitle();
                this.messageService2.info(setting2);
               // this.messageService.info("prova");
                
                console.log("inizio");

                console.log(setting2);

                console.log("fine");

            }


            
       
        });
       
    }
}

@injectable()
export class ItNelsonBackendSrvMenuContribution implements MenuContribution {

    registerMenus(menus: MenuModelRegistry): void {
        menus.registerMenuAction(CommonMenus.EDIT_FIND, {
            commandId: SayHelloViaBackendCommandWithCallBack.id,
            label: 'srv backend-1 test'
        });
    }
}
