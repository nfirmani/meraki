import * as React from "react";
import { MyService } from "../common/srv-protocol";
declare type Props = {};
declare type State = {
    hasErrors: Boolean;
    title: String;
};
export declare class DocTitle extends React.Component<Props, State> {
    constructor(props: Props);
    titolo: string;
    protected readonly myService: MyService;
    componentDidMount(): Promise<void>;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=doc-title.d.ts.map