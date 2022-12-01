"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitCreate = void 0;
const React = require("react");
const refine_antd_1 = require("@pankod/refine-antd");
//import { IPost } from "interfaces";
const FruitCreate = () => {
    const { formProps, saveButtonProps } = (0, refine_antd_1.useForm)();
    // const { selectProps: categorySelectProps } = useSelect<IFruit>({
    //     resource: "categories",
    // });
    return (React.createElement(refine_antd_1.Create, { saveButtonProps: saveButtonProps },
        React.createElement(refine_antd_1.Form, Object.assign({}, formProps, { layout: "vertical" }),
            React.createElement(refine_antd_1.Form.Item, { label: "Nome", name: "nome", rules: [
                    {
                        required: true,
                    },
                ] },
                React.createElement(refine_antd_1.Input, null)),
            React.createElement(refine_antd_1.Form.Item, { label: "Descrizione", name: "descrizione", rules: [
                    {
                        required: true,
                    },
                ] },
                React.createElement(refine_antd_1.Input, null)))));
};
exports.FruitCreate = FruitCreate;
//# sourceMappingURL=create.js.map