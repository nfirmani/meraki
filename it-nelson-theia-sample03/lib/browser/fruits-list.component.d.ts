import { Component, ChangeEvent } from "react";
import IFruit from "./fruit.type";
declare type Props = {};
declare type State = {
    fruits: Array<IFruit>;
    currentFruit: IFruit | null;
    currentIndex: number;
    searchTitle: string;
};
export default class FruitsList extends Component<Props, State> {
    constructor(props: Props);
    componentDidMount(): void;
    onChangeSearchTitle(e: ChangeEvent<HTMLInputElement>): void;
    retrieveTutorials(): void;
    refreshList(): void;
    setActiveTutorial(tutorial: IFruit, index: number): void;
    removeAllFruits(): void;
    searchTitle(): void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=fruits-list.component.d.ts.map