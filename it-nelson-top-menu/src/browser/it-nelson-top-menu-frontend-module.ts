/**
 * For example, the top-panel is contributed by the ApplicationShell. 
 * For a simple solution, you can simply extend the ApplicationShell 
 * and hide the top-panel if you no longer require it.
 */

import { ApplicationShell } from '@theia/core/lib/browser/shell/application-shell';
import { ContainerModule } from '@theia/core/shared/inversify';
import { CustomApplicationShell } from './custom-application-shell';

export default new ContainerModule((bind, unbind, isBound, rebind) => {
    bind(CustomApplicationShell).toSelf().inSingletonScope();
    rebind(ApplicationShell).to(CustomApplicationShell).inSingletonScope();
});