import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';

@injectable()
export class CustomWidget extends ReactWidget {
    static readonly ID = 'custom:widget';
    static readonly LABEL = 'Custom Editor';

    protected text: string;

    @postConstruct()
    protected async init(): Promise<void> {
        //  initialization 
        this.id = CustomWidget.ID;
        this.title.label = CustomWidget.LABEL;
        this.title.caption = CustomWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();    //  Update the view 
    }

    setText(text: string) {
        this.text = text;
    }

    //  According to the parameters received 
    protected render(): React.ReactNode {
        return (
            <React.Fragment>
                <div> Custom editor </div>
                <div>{this.text}</div>
            </React.Fragment>
        )
    }
}