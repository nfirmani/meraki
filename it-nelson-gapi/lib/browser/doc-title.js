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
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocTitle = void 0;
const inversify_1 = require("@theia/core/shared/inversify");
//import { stringify } from "querystring";
const React = require("react");
const srv_protocol_1 = require("../common/srv-protocol");
class DocTitle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            hasErrors: false,
            title: ""
        };
    }
    async componentDidMount() {
        console.log("mi trovo in componentDidMount:  ");
        // fetch("http://localhost:8080/about", { mode: 'no-cors'})
        //.then(res => res.json()) 
        try {
            //non va bene perchè non funziona l'iniezione di dipendenza infatti getDocTitle è indefinito
            this.titolo = await this.myService.getDocTitle();
            // this.titolo = r;
            console.log("ris da console IL TITOLO è: " + this.titolo);
        }
        catch (error) {
            console.log(error);
        }
        //console.log("componente valore di titolo:  " +  JSON.stringify(this.state.title)); 
        //   .then(res => 
        //       {
        //       console.log("valore di res:  " + res);  
        //       this.setState({ title: res })
        //   })
        //    .catch(() => this.setState({ hasErrors: true }));
    }
    //  render() {    
    //      return <div> risposta server:   { JSON.stringify(this.state.fruits)}  errore1: { JSON.stringify(this.state.hasErrors)} </div>;    
    //  }
    render() {
        console.log("mi trovo in render:  " + this.titolo);
        return React.createElement("div", null,
            " risposta server:   ",
            JSON.stringify(this.state.title),
            " errore1: ",
            JSON.stringify(this.state.hasErrors),
            "  ");
    }
}
__decorate([
    (0, inversify_1.inject)(srv_protocol_1.MyService),
    __metadata("design:type", Object)
], DocTitle.prototype, "myService", void 0);
exports.DocTitle = DocTitle;
//# sourceMappingURL=doc-title.js.map