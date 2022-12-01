/**
 * Generated using theia-extension-generator
 */
import { OpenHandler, WidgetFactory } from '@theia/core/lib/browser';
import { ContainerModule } from '@theia/core/shared/inversify';
import { CustomOpenHandler, CustomWidgetOptions } from './custom-open-handler';
import { CustomWidget } from './custom-widget';

export default new ContainerModule(bind => {
  
    bind(OpenHandler).toService(CustomOpenHandler);
    bind(CustomOpenHandler).toSelf().inSingletonScope();    
    bind(CustomWidget).toSelf();
    bind(WidgetFactory).toDynamicValue(ctx => ({
        id: CustomWidget.ID,
        createWidget: (options: CustomWidgetOptions) => {
            const widget = ctx.container.get<CustomWidget>(CustomWidget);
            console.log(options);
            widget.setText(options.text);
            return widget;
        }
    })).inSingletonScope();


});



