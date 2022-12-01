
import { ContainerModule } from '@theia/core/shared/inversify';
import { bindViewContribution } from '@theia/core/lib/browser/shell/view-contribution';
import { FrontendApplicationContribution } from '@theia/core/lib/browser/frontend-application';
import { CurveWidget } from './visx-widget';
import { WidgetFactory } from '@theia/core/lib/browser';
import { VisxViewContribution } from './it-nelson-visx-contribution';

export default new ContainerModule(bind => {
    // add your contribution bindings here   

    bindViewContribution(bind, VisxViewContribution);
    bind(FrontendApplicationContribution).toService(VisxViewContribution);
    bind(CurveWidget).toSelf();
    bind(WidgetFactory)
      .toDynamicValue(ctx => ({
        id: CurveWidget.ID,
        createWidget: () => ctx.container.get<CurveWidget>(CurveWidget)
      }))
      .inSingletonScope();



});
