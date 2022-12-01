import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonCrudWidget } from './it-nelson-crud-widget';
import { ItNelsonCrudContribution } from './it-nelson-crud-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonCrudContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonCrudContribution);
    bind(ItNelsonCrudWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonCrudWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonCrudWidget>(ItNelsonCrudWidget)
    })).inSingletonScope();
});
