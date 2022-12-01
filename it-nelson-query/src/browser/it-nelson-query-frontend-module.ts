/**
 * Generated using theia-extension-generator
 */
import { QueryViewContribution,  } from './it-nelson-query-contribution';

import { ContainerModule } from '@theia/core/shared/inversify';
import { bindViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { QueryWidget } from './query-widget';
import { WidgetFactory } from '@theia/core/lib/browser';

export default new ContainerModule(bind => {
    // add your contribution bindings here   

    bindViewContribution(bind, QueryViewContribution);
    bind(FrontendApplicationContribution).toService(QueryViewContribution);
    bind(QueryWidget).toSelf();
    bind(WidgetFactory)
      .toDynamicValue(ctx => ({
        id: QueryWidget.ID,
        createWidget: () => ctx.container.get<QueryWidget>(QueryWidget)
      }))
      .inSingletonScope();



});
