"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MemberNode = exports.FamilyRootNode = exports.FamilyTree = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("inversify");
let FamilyTree = class FamilyTree extends browser_1.TreeImpl {
    resolveChildren(parent) {
        var _a;
        if (FamilyRootNode.is(parent)) {
            return Promise.resolve(parent.family.members.map(m => this.makeMemberNode(m)));
        }
        if (MemberNode.is(parent) && parent.children) {
            return Promise.resolve(((_a = parent.member.children) === null || _a === void 0 ? void 0 : _a.map(m => this.makeMemberNode(m))) || []);
        }
        return Promise.resolve(Array.from(parent.children));
    }
    makeMemberNode(m) {
        const node = {
            id: m.firstName + m.nickName,
            //name: `${m.firstName} (${m.nickName})`, // Utilizzo del carattere backtick (usato nei Markdown per includere del codice e nelle template strings di Typescript)
            //name: m.firstName + ' ' + m.nickName,     // Senza utilizzare il carattere backtick
            name: `${m.firstName} ${m.nickName}`,
            parent: undefined,
            expanded: false,
            selected: false,
            children: [],
            member: m
        };
        return node;
    }
};
FamilyTree = __decorate([
    (0, inversify_1.injectable)()
], FamilyTree);
exports.FamilyTree = FamilyTree;
var FamilyRootNode;
(function (FamilyRootNode) {
    function is(node) {
        return !!node && "family" in node;
    }
    FamilyRootNode.is = is;
})(FamilyRootNode = exports.FamilyRootNode || (exports.FamilyRootNode = {}));
var MemberNode;
(function (MemberNode) {
    function is(node) {
        return !!node && "member" in node;
    }
    MemberNode.is = is;
})(MemberNode = exports.MemberNode || (exports.MemberNode = {}));
//# sourceMappingURL=family-tree.js.map