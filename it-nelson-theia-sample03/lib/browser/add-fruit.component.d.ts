import { Component, ChangeEvent } from "react";
import IFruit from "./fruit.type";
declare type Props = {};
declare type State = IFruit & {
    submitted: boolean;
};
export default class AddFruit extends Component<Props, State> {
    constructor(props: Props);
    onChangeTitle(e: ChangeEvent<HTMLInputElement>): void;
    onChangeDescription(e: ChangeEvent<HTMLInputElement>): void;
    saveFruit(): void;
    newFruit(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=add-fruit.component.d.ts.map