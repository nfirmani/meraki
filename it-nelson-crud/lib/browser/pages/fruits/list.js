"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FruitList = void 0;
const React = require("react");
const refine_antd_1 = require("@pankod/refine-antd");
const FruitList = () => {
    const { tableProps } = (0, refine_antd_1.useTable)();
    return (React.createElement(refine_antd_1.List, null,
        React.createElement(refine_antd_1.Table, Object.assign({}, tableProps, { rowKey: "id" }),
            React.createElement(refine_antd_1.Table.Column, { dataIndex: "nome", title: "nome" }),
            React.createElement(refine_antd_1.Table.Column, { dataIndex: "descrizione", title: "descrizione", render: (value) => React.createElement(refine_antd_1.TagField, { value: value }) }),
            React.createElement(refine_antd_1.Table.Column, { title: "Actions", dataIndex: "actions", render: (_text, record) => {
                    return (React.createElement(refine_antd_1.Space, null,
                        React.createElement(refine_antd_1.ShowButton, { size: "small", recordItemId: record.id, hideText: true }),
                        React.createElement(refine_antd_1.EditButton, { size: "small", recordItemId: record.id, hideText: true }),
                        React.createElement(refine_antd_1.DeleteButton, { size: "small", recordItemId: record.id, hideText: true })));
                } }))));
};
exports.FruitList = FruitList;
//# sourceMappingURL=list.js.map