import IFruit from "./fruit.type";
declare class FruitDataService {
    getAll(): Promise<import("axios").AxiosResponse<IFruit[], any>>;
    get(id: string): Promise<import("axios").AxiosResponse<IFruit, any>>;
    create(data: IFruit): Promise<import("axios").AxiosResponse<IFruit, any>>;
    update(data: IFruit, id: any): Promise<import("axios").AxiosResponse<any, any>>;
    delete(id: any): Promise<import("axios").AxiosResponse<any, any>>;
    deleteAll(): Promise<import("axios").AxiosResponse<any, any>>;
    findByTitle(title: string): Promise<import("axios").AxiosResponse<IFruit[], any>>;
}
declare const _default: FruitDataService;
export default _default;
//# sourceMappingURL=service.d.ts.map