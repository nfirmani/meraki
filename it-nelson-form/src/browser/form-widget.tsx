import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
//import BasicForm from './basic-form';
import InputAdornments from './material-form';



@injectable()
export class FormWidget extends ReactWidget {
    static readonly ID = 'form:widget';
    static readonly LABEL = 'Sample Form';

    protected text: string;
    

    @postConstruct()
    protected async init(): Promise<void> {
        //  initialization 
        this.id = FormWidget.ID;
        this.title.label = FormWidget.LABEL;
        this.title.caption = FormWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();    //  Update the view 
    }

    setText(text: string) {
        this.text = text;
    }

    
    
    //  According to the parameters received 
    protected render(): React.ReactNode {

 /*       

        return ( 
            <BasicForm></BasicForm>

           

        )
*/

        return ( 
          

            <InputAdornments></InputAdornments>

        )




    }
}