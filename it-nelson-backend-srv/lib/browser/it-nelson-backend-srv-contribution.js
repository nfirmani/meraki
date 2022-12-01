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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItNelsonBackendSrvMenuContribution = exports.ItNelsonBackendSrvCommandContribution = void 0;
const browser_1 = require("@theia/core/lib/browser");
const common_1 = require("@theia/core/lib/common");
const inversify_1 = require("@theia/core/shared/inversify");
const srv_protocol_1 = require("../common/srv-protocol");
const SayHelloViaBackendCommandWithCallBack = {
    id: 'SrvExtension.command',
    label: "Service backend-1"
};
let ItNelsonBackendSrvCommandContribution = class ItNelsonBackendSrvCommandContribution {
    constructor(messageService, messageService2, myService) {
        this.messageService = messageService;
        this.messageService2 = messageService2;
        this.myService = myService;
    }
    /** registerCommand nodejs vedere un editor html che
     *  questa situaz
     *
     *
     */
    registerCommands(registry) {
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
};
ItNelsonBackendSrvCommandContribution = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(common_1.MessageService)),
    __param(1, (0, inversify_1.inject)(common_1.MessageService)),
    __param(2, (0, inversify_1.inject)(srv_protocol_1.MyService)),
    __metadata("design:paramtypes", [common_1.MessageService,
        common_1.MessageService, Object])
], ItNelsonBackendSrvCommandContribution);
exports.ItNelsonBackendSrvCommandContribution = ItNelsonBackendSrvCommandContribution;
let ItNelsonBackendSrvMenuContribution = class ItNelsonBackendSrvMenuContribution {
    registerMenus(menus) {
        menus.registerMenuAction(browser_1.CommonMenus.EDIT_FIND, {
            commandId: SayHelloViaBackendCommandWithCallBack.id,
            label: 'srv backend-1 test'
        });
    }
};
ItNelsonBackendSrvMenuContribution = __decorate([
    (0, inversify_1.injectable)()
], ItNelsonBackendSrvMenuContribution);
exports.ItNelsonBackendSrvMenuContribution = ItNelsonBackendSrvMenuContribution;
//# sourceMappingURL=it-nelson-backend-srv-contribution.js.map