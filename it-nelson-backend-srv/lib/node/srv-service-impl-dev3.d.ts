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
//# sourceMappingURL=srv-service-impl-dev3.d.ts.map