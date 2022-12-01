import { DefaultWorkspaceServer } from '@theia/workspace/lib/node';
import { MyService } from '../common/srv-protocol';
export declare class MyServiceImpl implements MyService {
    private readonly workspaceServer;
    constructor(workspaceServer: DefaultWorkspaceServer);
    getEnvVariables(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    getSettingValue(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    getDocTitle(): Promise<string>;
}
//# sourceMappingURL=srv-gapi-impl-dev2.d.ts.map