import { MyService } from '../common/srv-protocol';
import { OAuth2Client } from 'google-auth-library';
import { Utente } from './Utente';
export declare class MyServiceImpl implements MyService {
    getDocTitle(): Promise<string>;
    creaRequest(): any;
    getDoc(req: any): Promise<void>;
    mergeDoc(): Promise<void>;
    listDocDrive(): Promise<string>;
    listMajors(auth: OAuth2Client): Promise<void>;
    getSheet(): Promise<void>;
    getDocTest(): Promise<Utente[]>;
    getJsonDoc(): Promise<void>;
}
//# sourceMappingURL=srv-service-impl.d.ts.map