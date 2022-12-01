"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TreeLabelProviderContribution = void 0;
const uri_1 = require("@theia/core/lib/common/uri");
const files_1 = require("@theia/filesystem/lib/common/files");
const inversify_1 = require("@theia/core/shared/inversify");
let TreeLabelProviderContribution = class TreeLabelProviderContribution {
    canHandle(element) {
        let toCheck = element;
        if (files_1.FileStat.is(toCheck)) {
            toCheck = toCheck.resource;
        }
        if (toCheck instanceof uri_1.default) {
            if (toCheck.path.ext === '.tree') {
                return 1000;
            }
        }
        return 0;
    }
    getIcon() {
        return 'fa fa-coffee dark-purple';
    }
};
TreeLabelProviderContribution = __decorate([
    (0, inversify_1.injectable)()
], TreeLabelProviderContribution);
exports.TreeLabelProviderContribution = TreeLabelProviderContribution;
//# sourceMappingURL=tree-label-provider-contribution.js.map