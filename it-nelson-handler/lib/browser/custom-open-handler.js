"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomOpenHandler = void 0;
const inversify_1 = require("inversify");
const browser_1 = require("@theia/core/lib/browser");
const custom_widget_1 = require("./custom-widget");
let CustomOpenHandler = class CustomOpenHandler extends browser_1.WidgetOpenHandler {
    constructor() {
        super(...arguments);
        this.id = custom_widget_1.CustomWidget.ID;
    }
    canHandle(uri) {
        console.log(uri.path.ext);
        if (uri.path.ext === '.mio') {
            return 500;
        }
        return 0;
    }
    //  Here you can pass the settings to  widget  Parameters of 
    createWidgetOptions(uri, options) {
        return {
            text: ' This is a  mio  file '
        };
    }
};
CustomOpenHandler = __decorate([
    (0, inversify_1.injectable)()
], CustomOpenHandler);
exports.CustomOpenHandler = CustomOpenHandler;
//# sourceMappingURL=custom-open-handler.js.map