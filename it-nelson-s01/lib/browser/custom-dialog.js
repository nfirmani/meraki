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
exports.CustomDialog = exports.CustomDialogProps = void 0;
// customDialog.tsx
const React = require("react");
const inversify_1 = require("inversify");
const react_dialog_1 = require("@theia/core/lib/browser/dialogs/react-dialog");
const dialogs_1 = require("@theia/core/lib/browser/dialogs");
//  Define input parameters 
let CustomDialogProps = class CustomDialogProps extends dialogs_1.DialogProps {
};
CustomDialogProps = __decorate([
    (0, inversify_1.injectable)()
], CustomDialogProps);
exports.CustomDialogProps = CustomDialogProps;
let CustomDialog = class CustomDialog extends react_dialog_1.ReactDialog {
    constructor(props) {
        super(props);
        this.props = props;
        const { text, okValue, cancelValue } = this.props;
        this.text = text;
        this.appendCloseButton(cancelValue);
        this.appendAcceptButton(okValue);
    }
    render() {
        return (React.createElement("div", null, this.text));
    }
    get value() {
        return {
            text: this.text
        };
    }
};
CustomDialog = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(CustomDialogProps)),
    __metadata("design:paramtypes", [CustomDialogProps])
], CustomDialog);
exports.CustomDialog = CustomDialog;
//# sourceMappingURL=custom-dialog.js.map