import * as React from 'react';
import { injectable, postConstruct } from 'inversify';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import DataGrid01 from './datagrid-base';
import BasicText from './basic-text';
import DatePicker from './date-picker';


@injectable()
export class MaterialWidget extends ReactWidget {
    static readonly ID = 'material:widget';
    static readonly LABEL = 'Material UI';

    protected text: string;
    

    @postConstruct()
    protected async init(): Promise<void> {
        //  initialization 
        this.id = MaterialWidget.ID;
        this.title.label = MaterialWidget.LABEL;
        this.title.caption = MaterialWidget.LABEL;
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
            <><DataGrid01></DataGrid01>
            <br></br>
                <BasicText></BasicText>
                <DatePicker></DatePicker>
               
                
            </> 

        )
    }
}