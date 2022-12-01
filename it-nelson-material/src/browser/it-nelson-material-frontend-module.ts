

import { ContainerModule } from '@theia/core/shared/inversify';
import { bindViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { MaterialWidget } from './material-widget';
import { WidgetFactory } from '@theia/core/lib/browser';
import { MaterialViewContribution } from './it-nelson-material-contribution';

export default new ContainerModule(bind => {
    // add your contribution bindings here   

    bindViewContribution(bind, MaterialViewContribution);
    bind(FrontendApplicationContribution).toService(MaterialViewContribution);
    bind(MaterialWidget).toSelf();
    bind(WidgetFactory)
      .toDynamicValue(ctx => ({
        id: MaterialWidget.ID,
        createWidget: () => ctx.container.get<MaterialWidget>(MaterialWidget)
      }))
      .inSingletonScope();

});
