import * as React from "react";
export default interface IFruit {
    id: number;
    name: string;
}
declare type Props = {};
declare type State = {
    fruits: Array<IFruit>;
};
export declare class CrudView extends React.Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=my-crud.d.ts.map