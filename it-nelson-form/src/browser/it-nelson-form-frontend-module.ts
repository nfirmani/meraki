import { FormViewContribution,  } from './it-nelson-form-contribution';

import { ContainerModule } from '@theia/core/shared/inversify';
import { bindViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { FormWidget } from './form-widget';
import { WidgetFactory } from '@theia/core/lib/browser';

export default new ContainerModule(bind => {
    // add your contribution bindings here   

    bindViewContribution(bind, FormViewContribution);
    bind(FrontendApplicationContribution).toService(FormViewContribution);
    bind(FormWidget).toSelf();
    bind(WidgetFactory)
      .toDynamicValue(ctx => ({
        id: FormWidget.ID,
        createWidget: () => ctx.container.get<FormWidget>(FormWidget)
      }))
      .inSingletonScope();



});
