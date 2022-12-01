import * as React from 'react';
import { injectable, postConstruct, inject } from '@theia/core/shared/inversify';

import { ReactWidget } from '@theia/core/lib/browser/widgets/react-widget';
import { MessageService } from '@theia/core';


import { Refine, AuthProvider } from "@pankod/refine-core";
import {
    notificationProvider,    
    Layout,    
    ErrorComponent,  
    LoginPage,  
    //AuthPage

} from "@pankod/refine-antd";
import dataProvider from "@pankod/refine-simple-rest";
import routerProvider from "@pankod/refine-react-router-v6";

import "@pankod/refine-antd/dist/styles.min.css";


import { PostList, PostCreate, PostEdit, PostShow } from './pages/posts';

//import credit from './style/theia.png';

const credit = require('/public/credit.svg');


const API_URL = "https://api.fake-rest.refine.dev";

const mockUsers = [
    {
        username: "admin",
        roles: ["admin"],
    },
    {
        username: "editor",
        roles: ["editor"],
    },
];


const { Link } = routerProvider;

const authProvider: AuthProvider = {
    login: ({ username, password, remember }) => {
        // Suppose we actually send a request to the back end here.
        const user = mockUsers.find((item) => item.username === username);

        if (user) {
            localStorage.setItem("auth", JSON.stringify(user));
            return Promise.resolve();
        }

        return Promise.reject();
    },
    logout: () => {
        localStorage.removeItem("auth");
        return Promise.resolve();
    },
    checkError: (error) => {
        if (error && error.statusCode === 401) {
            return Promise.reject();
        }

        return Promise.resolve();
    },
    checkAuth: () =>
        localStorage.getItem("auth") ? Promise.resolve() : Promise.reject(),
    getPermissions: () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.roles);
        }
        return Promise.reject();
    },
    getUserIdentity: () => {
        const auth = localStorage.getItem("auth");
        if (auth) {
            const parsedUser = JSON.parse(auth);
            return Promise.resolve(parsedUser.username);
        }
        return Promise.reject();
    },
};






@injectable()
export class ItNelsonAuthorizWidget extends ReactWidget {

    static readonly ID = 'it-nelson-authoriz:widget';
    static readonly LABEL = 'ItNelsonAuthoriz Widget';

    @inject(MessageService)
    protected readonly messageService!: MessageService;

    @postConstruct()
    protected async init(): Promise < void> {
        this.id = ItNelsonAuthorizWidget.ID;
        this.title.label = ItNelsonAuthorizWidget.LABEL;
        this.title.caption = ItNelsonAuthorizWidget.LABEL;
        this.title.closable = true;
        this.title.iconClass = 'fa fa-window-maximize'; // example widget icon.
        this.update();
    }

    render(): React.ReactElement {
        
        return <div id='widget-container'>



<Refine
            authProvider={authProvider}
            dataProvider={dataProvider(API_URL)}
            routerProvider={routerProvider}

            /*

            Layout={({ children, Footer, OffLayoutArea }:any) => (
                <AntdLayout>
                    <AntdLayout.Header>
                        <CustomSider />
                    </AntdLayout.Header>
                    <AntdLayout.Content>
                        <AntdLayout.Content>
                            <div style={{ padding: 24, minHeight: 360 }}>
                                {children}
                            </div>
                        </AntdLayout.Content>
                        {Footer && <Footer />}
                    </AntdLayout.Content>
                    {OffLayoutArea && <OffLayoutArea />}
                </AntdLayout>
            )}
            Title={() => (
                <Link to="/" style={{ float: "left", marginRight: "10px" }}>
                    <img
                        src="/refine.svg"
                        alt="Refine"
                        style={{ width: "100px" }}
                    />
                </Link>
            )}

            */

           Title={({ collapsed }) => (
            <Link to="/">
                {collapsed ? (
                    <img
                        src="/refine.svg"
                        alt="Cre x"
                        style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            padding: "12px 24px",
                        }}
                    />
                ) : (
                    <img
                        src={credit}//   {require('/public/credit.svg')} 
                        alt="Cre T"
                        style={{
                            width: "200px",
                            padding: "12px 24px",
                        }}
                    />
                )}
            </Link>
        )}






            resources={[
                {
                    name: "posts",
                    list: PostList,
                    create: PostCreate,
                    edit: PostEdit,
                    show: PostShow,
                },
            ]}
            notificationProvider={notificationProvider}
            LoginPage={LoginPage}   //{AuthPage}
            Layout={Layout}
            catchAll={<ErrorComponent />}
        />


            
            <button className='theia-button secondary' title='Display Message' onClick={_a => this.displayMessage()}>Display Message</button>
        </div>
    }

    protected displayMessage(): void {
        this.messageService.info('Congratulations: ItNelsonAuthoriz Widget Successfully Created!');
    }

}
