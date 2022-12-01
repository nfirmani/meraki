import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { Message } from '@theia/core/lib/browser';


import { Refine } from "@pankod/refine-core";
import {
    Layout,
    ReadyPage,
    notificationProvider,
    ErrorComponent,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";

import "@pankod/refine-antd/dist/styles.min.css";

import { FruitList } from './pages/fruits';
import { FruitEdit } from './pages/fruits/edit';
import { FruitCreate } from './pages/fruits/create';
import { FruitShow } from './pages/fruits/show';



//const API_URL = "https://api.fake-rest.refine.dev";
const API_URL = "http://localhost:8080";

@injectable()
export class ItNelsonCrudWidget extends ReactWidget {

    static readonly ID = 'it-nelson-crud:widget';
    static readonly LABEL = 'ItNelsonCrud Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = ItNelsonCrudWidget.ID;
        this.title.label = ItNelsonCrudWidget.LABEL;
        this.title.caption = ItNelsonCrudWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {

/*

        const header = `This is a sample widget which simply calls the messageService
        in order to display an info message to end users.`;
        return <div id='widget-container'>
            <AlertMessage type='INFO' header={header} />
            <button id='displayMessageButton' className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
        </div>
*/
return <div id='widget-container'>
        <Refine
            routerProvider={routerProvider}
            dataProvider={dataProvider(API_URL)}
            Layout={Layout}
            ReadyPage={ReadyPage}
            notificationProvider={notificationProvider}
            catchAll={<ErrorComponent />}
            resources={[{ name: "fruits", 
                          list: FruitList, 
                          edit: FruitEdit, 
                          create: FruitCreate, 
                          show: FruitShow
                        }]}
        />
</div>




    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ItNelsonCrud Widget Successfully Created!');
    }

    protected onActivateRequest(msg: Message): void {
        super.onActivateRequest(msg);
        const htmlElement = document.getElementById('displayMessageButton');
        if (htmlElement) {
            htmlElement.focus();
        }
    }

}
