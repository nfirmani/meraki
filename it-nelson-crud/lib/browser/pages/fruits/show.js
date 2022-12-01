"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitShow = void 0;
const React = require("react");
const refine_core_1 = require("@pankod/refine-core");
const refine_antd_1 = require("@pankod/refine-antd");
const { Title, Text } = refine_antd_1.Typography;
const FruitShow = () => {
    const { queryResult } = (0, refine_core_1.useShow)();
    const { data, isLoading } = queryResult;
    const record = data === null || data === void 0 ? void 0 : data.data;
    /*
        const { data: categoryData, isLoading: categoryIsLoading } =
            useOne<ICategory>({
                resource: "categories",
                id: record?.category.id || "",
                queryOptions: {
                    enabled: !!record,
                },
            });
    
    */
    return (React.createElement(refine_antd_1.Show, { isLoading: isLoading },
        React.createElement(Title, { level: 5 }, "Id"),
        React.createElement(Text, null, record === null || record === void 0 ? void 0 : record.id),
        React.createElement(Title, { level: 5 }, "Nome"),
        React.createElement(Text, null, record === null || record === void 0 ? void 0 : record.nome),
        React.createElement(Title, { level: 5 }, "Descrizione"),
        React.createElement(refine_antd_1.MarkdownField, { value: record === null || record === void 0 ? void 0 : record.descrizione })));
};
exports.FruitShow = FruitShow;
//# sourceMappingURL=show.js.map