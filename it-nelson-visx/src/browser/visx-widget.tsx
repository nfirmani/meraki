import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import Curve from './curve';
import Example from './LinkTypes';



@injectable()
export class CurveWidget extends ReactWidget {
    static readonly ID = 'visx:widget';
    static readonly LABEL = 'Visx';
    protected text: string;    

    @postConstruct()
    protected async init(): Promise<void> {
        //  initialization 
        this.id = CurveWidget.ID;
        this.title.label = CurveWidget.LABEL;
        this.title.caption = CurveWidget.LABEL;
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
           
            <><Curve width={700} height={400} />
            <Example width={700} height={400} /></>
        )  
    }
}