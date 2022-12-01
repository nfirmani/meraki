import { Component, ChangeEvent } from "react";
import IFruit from "./fruit.type";
declare type Props = {};
declare type State = {
    currentFruit: IFruit;
    message: string;
};
export default class Fruit extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    onChangeTitle(e: ChangeEvent<HTMLInputElement>): void;
    onChangeDescription(e: ChangeEvent<HTMLInputElement>): void;
    getTutorial(id: string): void;
    updatePublished(status: boolean): void;
    updateFruit(): void;
    deleteFruit(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=fruit.component.d.ts.map