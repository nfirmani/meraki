import { MyService } from '../common/srv-protocol';
import { Utente } from './Utente';
export declare class MyServiceImpl implements MyService {
    getJsonDoc(): Promise<void>;
    getSheet(): Promise<void>;
    mergeDoc(): Promise<void>;
    getDocTest(): Promise<Utente[]>;
    getDocTitle(): Promise<string>;
    getDoc(): Promise<void>;
    listDocDrive(): Promise<string>;
}
//# sourceMappingURL=srv-service-impl-dev.d.ts.map