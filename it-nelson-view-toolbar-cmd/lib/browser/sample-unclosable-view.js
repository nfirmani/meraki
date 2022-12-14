"use strict";
// *****************************************************************************
// Copyright (C) 2020 TORO Limited and others.
//
// This program and the accompanying materials are made available under the
// terms of the Eclipse Public License v. 2.0 which is available at
// http://www.eclipse.org/legal/epl-2.0.
//
// This Source Code may also be made available under the following Secondary
// Licenses when the conditions for such availability set forth in the Eclipse
// Public License v. 2.0 are satisfied: GNU General Public License, version 2
// with the GNU Classpath Exception which is available at
// https://www.gnu.org/software/classpath/license.html.
//
// SPDX-License-Identifier: EPL-2.0 OR GPL-2.0 WITH Classpath-exception-2.0
// *****************************************************************************
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var SampleViewUnclosableView_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SampleViewUnclosableView = void 0;
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const React = require("@theia/core/shared/react");
/**
 * This sample view is used to demo the behavior of "Widget.title.closable".
 */
let SampleViewUnclosableView = SampleViewUnclosableView_1 = class SampleViewUnclosableView extends browser_1.ReactWidget {
    init() {
        this.id = SampleViewUnclosableView_1.ID;
        this.title.caption = 'Sample Unclosable View';
        this.title.label = 'Sample Unclosable View';
        this.title.iconClass = 'unclosable-window-icon';
        this.title.closable = false;
        this.update();
    }
    render() {
        return (React.createElement("div", null,
            "Esempio di utilizzo vista con accesso dal menu View (PROVA) e dal comand palette (ricerca comando: PROVA)",
            React.createElement("input", { type: "checkbox", defaultChecked: this.title.closable, onChange: e => this.title.closable = e.target.checked })));
    }
};
SampleViewUnclosableView.ID = 'sampleUnclosableView';
__decorate([
    (0, inversify_1.postConstruct)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], SampleViewUnclosableView.prototype, "init", null);
SampleViewUnclosableView = SampleViewUnclosableView_1 = __decorate([
    (0, inversify_1.injectable)()
], SampleViewUnclosableView);
exports.SampleViewUnclosableView = SampleViewUnclosableView;
//# sourceMappingURL=sample-unclosable-view.js.map