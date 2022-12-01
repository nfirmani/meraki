import { Utente } from "../node/Utente";
export declare const MyServicePath = "/services/my-service";
export declare const MyService: unique symbol;
export interface MyService {
    getDocTitle(): Promise<string>;
    getDoc(req: any): Promise<void>;
    listDocDrive(): Promise<string>;
    getDocTest(): Promise<Utente[]>;
    mergeDoc(): Promise<void>;
    getSheet(): Promise<void>;
    getJsonDoc(): Promise<void>;
}
//# sourceMappingURL=srv-protocol.d.ts.map