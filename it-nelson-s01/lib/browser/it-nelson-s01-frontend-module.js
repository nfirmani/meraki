"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const it_nelson_s01_contribution_1 = require("./it-nelson-s01-contribution");
const common_1 = require("@theia/core/lib/common");
const inversify_1 = require("@theia/core/shared/inversify");
const custom_dialog_1 = require("./custom-dialog");
exports.default = new inversify_1.ContainerModule(bind => {
    // add your contribution bindings here
    bind(common_1.CommandContribution).to(it_nelson_s01_contribution_1.ItNelsonS01CommandContribution);
    bind(common_1.MenuContribution).to(it_nelson_s01_contribution_1.ItNelsonS01MenuContribution);
    bind(custom_dialog_1.CustomDialogProps).toSelf();
    bind(custom_dialog_1.CustomDialog).toSelf();
});
//# sourceMappingURL=it-nelson-s01-frontend-module.js.map