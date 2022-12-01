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
var GApiWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GApiWidget = void 0;
const React = require("react");
const inversify_1 = require("inversify");
//import GDoc from './g-doc';
const inversify_2 = require("@theia/core/shared/inversify");
const srv_protocol_1 = require("../common/srv-protocol");
const browser_1 = require("@theia/core/lib/browser");
//import { DocTitle } from './doc-title';
//import GDoc from './g-doc';
const message_service_1 = require("@theia/core/lib/common/message-service");
//import DataGrid01 from './datagrid-base';
const x_data_grid_1 = require("@mui/x-data-grid");
const doc_request_1 = require("./doc-request");
//import FormA from './form-a';
const g_doc_1 = require("./g-doc");
const columns = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'firstName',
        headerName: 'First name',
        width: 150,
        editable: true,
    },
    {
        field: 'lastName',
        headerName: 'Last name',
        width: 150,
        editable: true,
    },
    {
        field: 'age',
        headerName: 'Age',
        type: 'number',
        width: 110,
        editable: true,
    },
    {
        field: 'fullName',
        headerName: 'Full name',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
        valueGetter: (params) => `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
];
/*
 const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];
*/
//let doc:any=[];
let GApiWidget = GApiWidget_1 = class GApiWidget extends browser_1.ReactWidget {
    async handleTitClick() {
        console.log("tit click  ");
        const titolo = await this.myService.getDocTitle();
        console.log("handle: titolo=  " + titolo);
        this.messageService.info(titolo);
    }
    async handleMergeClick() {
        await this.myService.mergeDoc();
        console.log("handle: merge  ");
        this.messageService.info("merge");
    }
    async handleDocClick() {
        // await this.myService.getDoc([request_4]);
        const tb_utente = await this.myService.getDocTest();
        console.log('tb_utente = ' + JSON.stringify(tb_utente));
        const tb_gdoc = (0, doc_request_1.creaReq_0)(tb_utente);
        //const tb_gdoc =  creaReq_Aij([]); 
        console.log('doc = ' + JSON.stringify(tb_gdoc));
        await this.myService.getDoc([tb_gdoc]);
        console.log("handle: getDoc  ");
        this.messageService.info("getDoc");
    }
    async handleSheetClick() {
        await this.myService.getSheet();
        console.log("handle: getSheet  ");
        this.messageService.info("getSheet");
    }
    async handleListDocClick() {
        const name = await this.myService.listDocDrive();
        console.log("handle: listDocDrive  ");
        this.messageService.info(name);
    }
    async handleGetJsonDocClick() {
        await this.myService.getJsonDoc();
        console.log("GetJsonDocClick  ");
        this.messageService.info("GetJsonDocClick");
    }
    async handleTestClick() {
        const row = await this.myService.getDocTest();
        console.log("handle: listDocDrive  ");
        this.messageService.info(row[1].firstName);
        //this.righe = [
        //  { id: 3, lastName: 'fidanza', firstName: 'erica', age: 35 },
        //  { id: 4, lastName: 'di pietro', firstName: 'mary', age: 42 }
        //];  
        this.righe = row;
        this.update();
    }
    async handleCreaReqClick() {
        const req = (0, doc_request_1.creaReq)();
        console.log('req= ' + JSON.stringify(req));
        //this.messageService.info("funzione: creaReq"); 
        await this.myService.getDoc([req]);
        console.log("handle: getDoc  ");
        this.messageService.info("funzione: creaReq");
    }
    async init() {
        //  initialization 
        this.id = GApiWidget_1.ID;
        this.title.label = GApiWidget_1.LABEL;
        this.title.caption = GApiWidget_1.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.righe = [
            { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
            { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 }
        ];
        this.update(); //  Update the view 
        //this.myService.getDocTitle().then(r => console.log("IL TITOLO è: "+ r));
        //this.setText("prova di settext: ");
        console.log("gapi-widget step 0:  ");
        this.myService.getDocTitle().then(r => {
            // this.titolo = r;
            console.log("ris da console IL TITOLO è: " + r);
            console.log("gapi-widget step 1:  ");
            this.titolo = r;
            console.log("valore di titolo è:  " + this.titolo);
            this.update();
        });
    } //fine init
    //  According to the parameters received 
    render() {
        /*
               return (
                   <BasicForm></BasicForm>
       
               )
       
       
               return (
                   <GDoc></GDoc>
               )
       
        */
        return (React.createElement("div", { style: { height: '100%', width: '100%' } },
            React.createElement("div", { style: { height: '10%', width: '100%' } },
                React.createElement("p", null,
                    "test: ",
                    this.titolo,
                    " "),
                React.createElement("button", { onClick: () => this.handleTitClick() }, "Titolo documento"),
                React.createElement("button", { onClick: () => this.handleMergeClick() }, "Merge"),
                React.createElement("button", { onClick: () => this.handleDocClick() }, "getDoc"),
                React.createElement("button", { onClick: () => this.handleSheetClick() }, "getSheet"),
                React.createElement("button", { onClick: () => this.handleListDocClick() }, "listDocDrive"),
                React.createElement("button", { onClick: () => this.handleGetJsonDocClick() }, "getDocJsonClick"),
                React.createElement("button", { onClick: () => this.handleTestClick() }, "test1"),
                React.createElement("button", { onClick: () => this.handleCreaReqClick() }, "creaReq")),
            React.createElement("div", { style: { height: '40%', width: '100%' } },
                React.createElement(x_data_grid_1.DataGrid, { rows: this.righe, columns: columns, pageSize: 5, rowsPerPageOptions: [5], checkboxSelection: true, disableSelectionOnClick: true })),
            React.createElement("div", { style: { height: '60%', width: '100%' } },
                React.createElement(g_doc_1.default, null))));
    }
};
GApiWidget.ID = 'gapi:widget';
GApiWidget.LABEL = 'Google api';
__decorate([
    (0, inversify_2.inject)(srv_protocol_1.MyService),
    __metadata("design:type", Object)
], GApiWidget.prototype, "myService", void 0);
__decorate([
    (0, inversify_2.inject)(message_service_1.MessageService),
    __metadata("design:type", message_service_1.MessageService)
], GApiWidget.prototype, "messageService", void 0);
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], GApiWidget.prototype, "init", null);
GApiWidget = GApiWidget_1 = __decorate([
    (0, inversify_1.injectable)()
], GApiWidget);
exports.GApiWidget = GApiWidget;
//<FormA></FormA>
//# sourceMappingURL=gapi-widget.js.map