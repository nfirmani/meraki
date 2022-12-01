"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitEdit = void 0;
const React = require("react");
const refine_antd_1 = require("@pankod/refine-antd");
const FruitEdit = () => {
    var _a;
    const { formProps, saveButtonProps, queryResult } = (0, refine_antd_1.useForm)(); //, queryResult 
    const postData = (_a = queryResult === null || queryResult === void 0 ? void 0 : queryResult.data) === null || _a === void 0 ? void 0 : _a.data;
    defaultValue: postData === null || postData === void 0 ? void 0 : postData.id;
    // const { selectProps: categorySelectProps } = useSelect<IFruit>({
    //     resource: "categories",
    //     defaultValue: queryResult?.data?.data?.category.id,
    // });
    return (React.createElement(refine_antd_1.Edit, { saveButtonProps: saveButtonProps },
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
exports.FruitEdit = FruitEdit;
//# sourceMappingURL=edit.js.map