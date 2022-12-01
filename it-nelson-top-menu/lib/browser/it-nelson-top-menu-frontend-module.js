"use strict";
/**
 * For example, the top-panel is contributed by the ApplicationShell.
 * For a simple solution, you can simply extend the ApplicationShell
 * and hide the top-panel if you no longer require it.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const application_shell_1 = require("@theia/core/lib/browser/shell/application-shell");
const inversify_1 = require("@theia/core/shared/inversify");
const custom_application_shell_1 = require("./custom-application-shell");
exports.default = new inversify_1.ContainerModule((bind, unbind, isBound, rebind) => {
    bind(custom_application_shell_1.CustomApplicationShell).toSelf().inSingletonScope();
    rebind(application_shell_1.ApplicationShell).to(custom_application_shell_1.CustomApplicationShell).inSingletonScope();
});
//# sourceMappingURL=it-nelson-top-menu-frontend-module.js.map