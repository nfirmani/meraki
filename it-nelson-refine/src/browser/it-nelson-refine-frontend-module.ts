import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonRefineWidget } from './it-nelson-refine-widget';
import { ItNelsonRefineContribution } from './it-nelson-refine-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonRefineContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonRefineContribution);
    bind(ItNelsonRefineWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonRefineWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonRefineWidget>(ItNelsonRefineWidget)
    })).inSingletonScope();
});
