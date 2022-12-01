import { injectable } from 'inversify';
import { WidgetOpenHandler, WidgetOpenerOptions } from '@theia/core/lib/browser';

import URI from '@theia/core/lib/common/uri';
import { CustomWidget } from './custom-widget';

export interface CustomWidgetOptions {
    text: string;
}

@injectable()
export class CustomOpenHandler extends WidgetOpenHandler<CustomWidget>  {
    readonly id = CustomWidget.ID;
    
    canHandle(uri: URI): number {
        console.log(uri.path.ext);
        if(uri.path.ext === '.mio') {
            return 500;
        }
        return 0;
    }

    //  Here you can pass the settings to  widget  Parameters of 
    createWidgetOptions(uri: URI, options?: WidgetOpenerOptions): CustomWidgetOptions{
        return { 
            text: ' This is a  mio  file '
        };
    }
}