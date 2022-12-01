import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';
//import { AlertMessage } from '@theia/core/lib/browser/widgets/alert-message';
import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';
import { ColorModeContextProvider } from './contexts';
import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

import { RefineKbarProvider } from "@pankod/refine-kbar";
import routerProvider from "@pankod/refine-react-router-v6";

import nestjsxCrudDataProvider from "@pankod/refine-nestjsx-crud";

import { PostList, PostCreate, PostEdit } from "./pages/posts";
import { Title, Sider, Layout, Header } from "./components/layout";
import { OffLayoutArea } from "./components/offLayoutArea";


const API_URL = "https://api.nestjsx-crud.refine.dev";
const dataProvider = nestjsxCrudDataProvider(API_URL);

@injectable()
export class ItNelsonRefineWidget extends ReactWidget {

    static readonly ID = 'it-nelson-refine:widget';
    static readonly LABEL = 'ItNelsonRefine Widget';
    


    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = ItNelsonRefineWidget.ID;
        this.title.label = ItNelsonRefineWidget.LABEL;
        this.title.caption = ItNelsonRefineWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
      //  const header = `This is a sample widget which simply calls the messageService
     //   in order to display an info message to end users.`;   <div id='widget-container'>
     //<button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Displayyy Message</button>
        return  <div id='widget-container'>


<ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <RefineKbarProvider>
          <Refine
            notificationProvider={notificationProvider}
            ReadyPage={ReadyPage}
            catchAll={<ErrorComponent />}
            routerProvider={routerProvider}
            dataProvider={dataProvider}
            resources={[
              {
                name: "posts",
                list: PostList,
                create: PostCreate,
                edit: PostEdit,
              },
            ]}
            Title={Title}
            Sider={Sider}
            Layout={Layout}
            Header={Header}
            OffLayoutArea={OffLayoutArea}
          />
       </RefineKbarProvider>
      </RefineSnackbarProvider>
    </ColorModeContextProvider>



           
           <button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Displayyy Message</button>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ItNelsonRefine Widget Successfully Created!');
    }

}

// <AlertMessage type='INFO' header={header} />