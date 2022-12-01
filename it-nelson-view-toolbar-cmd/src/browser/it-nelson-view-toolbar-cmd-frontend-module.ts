/**
 * Generated using theia-extension-generator
 */
import { ItNelsonViewToolbarCmdCommandContribution,  } from './it-nelson-view-toolbar-cmd-contribution';
import { ContainerModule } from '@theia/core/shared/inversify';
import { TabBarToolbarContribution } from '@theia/core/lib/browser/shell/tab-bar-toolbar';
import { SampleViewUnclosableView } from './sample-unclosable-view';
import { WidgetFactory } from '@theia/core/lib/browser/widget-manager';
import { bindViewContribution } from '@theia/core/lib/browser/shell/view-contribution';

export default new ContainerModule(bind => {
    // add your contribution bindings here
    bindViewContribution(bind, ItNelsonViewToolbarCmdCommandContribution);
    bind(TabBarToolbarContribution).to(ItNelsonViewToolbarCmdCommandContribution).inSingletonScope();
    bind(SampleViewUnclosableView).toSelf();

    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: SampleViewUnclosableView.ID,
        createWidget: () => ctx.container.get<SampleViewUnclosableView>(SampleViewUnclosableView)
    }));

});
