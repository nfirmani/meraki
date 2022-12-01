"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Generated using theia-extension-generator
 */
const browser_1 = require("@theia/core/lib/browser");
const inversify_1 = require("@theia/core/shared/inversify");
const it_nelson_label_contribution_1 = require("./it-nelson-label-contribution");
require("../../src/browser/style/example.css");
exports.default = new inversify_1.ContainerModule(bind => {
    bind(browser_1.LabelProviderContribution).to(it_nelson_label_contribution_1.ItNelsonLabelLabelProviderContribution);
});
//# sourceMappingURL=it-nelson-label-frontend-module.js.map