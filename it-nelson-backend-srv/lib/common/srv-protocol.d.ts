export declare const MyServicePath = "/services/my-service";
export declare const MyService: unique symbol;
export interface MyService {
    getEnvVariables(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    getSettingValue(): Promise<Readonly<{
        [key: string]: string | undefined;
    }>>;
    getDocTitle(): Promise<string>;
}
//# sourceMappingURL=srv-protocol.d.ts.map