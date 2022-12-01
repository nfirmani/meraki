import { ContainerModule } from '@theia/core/shared/inversify';
import { ItNelsonAuthorizWidget } from './it-nelson-authoriz-widget';
import { ItNelsonAuthorizContribution } from './it-nelson-authoriz-contribution';
import { bindViewContribution, FrontendApplicationContribution, WidgetFactory } from '@theia/core/lib/browser';

import '../../src/browser/style/index.css';

export default new ContainerModule(bind => {
    bindViewContribution(bind, ItNelsonAuthorizContribution);
    bind(FrontendApplicationContribution).toService(ItNelsonAuthorizContribution);
    bind(ItNelsonAuthorizWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: ItNelsonAuthorizWidget.ID,
        createWidget: () => ctx.container.get<ItNelsonAuthorizWidget>(ItNelsonAuthorizWidget)
    })).inSingletonScope();
});
