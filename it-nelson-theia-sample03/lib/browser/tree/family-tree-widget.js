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
var FamilyTreeWidget_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.FamilyTreeWidget = void 0;
const React = require("@theia/core/shared/react");
const browser_1 = require("@theia/core/lib/browser");
const command_1 = require("@theia/core/lib/common/command");
const inversify_1 = require("inversify");
//import { TestWidgetCommand } from "../my-tree-contribution";
const family_tree_1 = require("./family-tree");
const family_tree_contribution_1 = require("./family-tree-contribution");
//import { GEN_COMMAND as HELP_COMMAND } from 'it-nelson-s01/lib/browser/it-nelson-s01-contribution';
const it_nelson_s01_contribution_1 = require("it-nelson-s01/lib/browser/it-nelson-s01-contribution");
//import { LabelProvider } from "@theia/core/lib/browser/label-provider";
let FamilyTreeWidget = FamilyTreeWidget_1 = class FamilyTreeWidget extends browser_1.TreeWidget {
    constructor(props, model, 
    //@inject(LabelProvider) protected readonly labelProvider: LabelProvider,
    contextMenuRenderer) {
        super(props, model, contextMenuRenderer);
        this.props = props;
        this.model = model;
        this.title.label = FamilyTreeWidget_1.LABEL;
        this.id = FamilyTreeWidget_1.ID;
        this.title.iconClass = 'fa fa-window-maximize'; //fa fa-window-maximize   this.title.iconClass = 'fa mytree-view-tab-icon'
        const family = {
            name: "Vestrit",
            members: [
                {
                    firstName: "Tutorials",
                    nickName: "tut",
                    children: [
                        {
                            firstName: "TypeScript",
                            nickName: "ts",
                            children: [
                                {
                                    firstName: "Chapter 01",
                                    nickName: "ch01"
                                },
                                {
                                    firstName: "Chapter 02",
                                    nickName: "ch02"
                                },
                                {
                                    firstName: "Chapter 03",
                                    nickName: "ch03"
                                },
                                {
                                    firstName: "Chapter 04",
                                    nickName: "ch04"
                                },
                                {
                                    firstName: "Chapter 05",
                                    nickName: "ch05"
                                }
                            ]
                        },
                        {
                            firstName: "React",
                            nickName: "",
                            children: [
                                {
                                    firstName: "Introducing JSX",
                                    nickName: "ch01"
                                },
                                {
                                    firstName: "Rendering Elements",
                                    nickName: "ch02"
                                },
                                {
                                    firstName: "Components and Props",
                                    nickName: "ch03"
                                },
                                {
                                    firstName: "State and Lifecycle",
                                    nickName: "ch04"
                                },
                                {
                                    firstName: "Handling Events",
                                    nickName: "ch05"
                                },
                                {
                                    firstName: "Conditional Rendering",
                                    nickName: "ch06"
                                },
                                {
                                    firstName: "Lists and Keys",
                                    nickName: "ch07"
                                },
                                {
                                    firstName: "Forms",
                                    nickName: "ch08"
                                },
                                {
                                    firstName: "Lifting State Up",
                                    nickName: "ch09"
                                },
                                {
                                    firstName: "Composition vs Inheritance",
                                    nickName: "ch108"
                                }
                            ]
                        }
                    ]
                },
                {
                    firstName: "Eclipse Theia Development",
                    nickName: "dev",
                    children: [
                        {
                            firstName: "Commands, Menus and Keybindings",
                            nickName: "",
                        },
                        {
                            firstName: "Widgets",
                            nickName: "",
                        },
                        {
                            firstName: "Preferences",
                            nickName: "",
                        },
                        {
                            firstName: "Label Provider",
                            nickName: "",
                        },
                        {
                            firstName: "Message Service",
                            nickName: "",
                        },
                        {
                            firstName: "Property View",
                            nickName: "",
                        },
                        {
                            firstName: "Message Service",
                            nickName: "",
                        },
                        {
                            firstName: "Property View",
                            nickName: "",
                        }
                    ]
                }
            ]
        };
        const root = {
            id: "family-root",
            name: "family-root",
            visible: false,
            parent: undefined,
            children: [],
            family
        };
        this.model.root = root;
    }
    isExpandable(node) {
        if (family_tree_1.FamilyRootNode.is(node))
            return true;
        if (family_tree_1.MemberNode.is(node) && node.member.children)
            return node.member.children.length > 0;
        return false;
    }
    handleDblClickEvent(node, event) {
        //this.model.openNode(node);
        //super.handleDblClickEvent(node, event);
        //this.commandService.executeCommand(HelloWorld01Command.id);   //
        //const treeNode = this.model.getNode(node.id);
        if ((node === null || node === void 0 ? void 0 : node.id) === 'Tutorialstut') {
            this.commandService.executeCommand(family_tree_contribution_1.HelloWorld01Command.id);
        }
        else if ((node === null || node === void 0 ? void 0 : node.id) === 'Eclipse Theia Developmentdev') {
            //this.commandService.executeCommand(HelloWorld02Command.id);
            this.commandService.executeCommand(it_nelson_s01_contribution_1.GEN_COMMAND.id);
        }
        else {
            console.log('nodo non identificato');
        }
        console.log('Id=');
        console.log(node === null || node === void 0 ? void 0 : node.id);
        //console.log(node?.description)
        //console.log('label provider=');
        //console.log(this.labelProvider.getIcon)
        //event.stopPropagation();
    }
    renderIcon(node, props) {
        /*
        if (OutlineSymbolInformationNode.is(node)) {
                return <div className={'symbol-icon symbol-icon-center ' + node.iconClass}></div>;
            }
            return undefined;
        */
        return React.createElement("div", { className: (0, browser_1.codicon)('terminal-debian') });
    }
};
FamilyTreeWidget.ID = "family-tree-widget";
FamilyTreeWidget.LABEL = "Family Tree";
__decorate([
    (0, inversify_1.inject)(command_1.CommandService),
    __metadata("design:type", Object)
], FamilyTreeWidget.prototype, "commandService", void 0);
FamilyTreeWidget = FamilyTreeWidget_1 = __decorate([
    (0, inversify_1.injectable)(),
    __param(0, (0, inversify_1.inject)(browser_1.TreeProps)),
    __param(1, (0, inversify_1.inject)(browser_1.TreeModel)),
    __param(2, (0, inversify_1.inject)(browser_1.ContextMenuRenderer)),
    __metadata("design:paramtypes", [Object, Object, browser_1.ContextMenuRenderer])
], FamilyTreeWidget);
exports.FamilyTreeWidget = FamilyTreeWidget;
//# sourceMappingURL=family-tree-widget.js.map