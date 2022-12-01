"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostList = void 0;
const React = __importStar(require("react"));
const refine_core_1 = require("@pankod/refine-core");
const refine_antd_1 = require("@pankod/refine-antd");
//import { IPost, ICategory } from "interfaces";
const PostList = () => {
    var _a, _b;
    const { tableProps } = (0, refine_antd_1.useTable)();
    const categoryIds = (_b = (_a = tableProps === null || tableProps === void 0 ? void 0 : tableProps.dataSource) === null || _a === void 0 ? void 0 : _a.map((item) => item.category.id)) !== null && _b !== void 0 ? _b : [];
    const { data, isLoading } = (0, refine_core_1.useMany)({
        resource: "categories",
        ids: categoryIds,
        queryOptions: {
            enabled: categoryIds.length > 0,
        },
    });
    const { data: permissionsData } = (0, refine_core_1.usePermissions)();
    return (React.createElement(refine_antd_1.List, { canCreate: permissionsData === null || permissionsData === void 0 ? void 0 : permissionsData.includes("admin") },
        React.createElement(refine_antd_1.Table, Object.assign({}, tableProps, { rowKey: "id" }),
            React.createElement(refine_antd_1.Table.Column, { dataIndex: "id", title: "ID" }),
            React.createElement(refine_antd_1.Table.Column, { dataIndex: "title", title: "Title" }),
            React.createElement(refine_antd_1.Table.Column, { dataIndex: ["category", "id"], title: "Category", render: (value) => {
                    var _a;
                    if (isLoading) {
                        return React.createElement(refine_antd_1.TextField, { value: "Loading..." });
                    }
                    return (React.createElement(refine_antd_1.TextField, { value: (_a = data === null || data === void 0 ? void 0 : data.data.find((item) => item.id === value)) === null || _a === void 0 ? void 0 : _a.title }));
                } }),
            React.createElement(refine_antd_1.Table.Column, { title: "Actions", dataIndex: "actions", render: (_, record) => (React.createElement(refine_antd_1.Space, null,
                    React.createElement(refine_antd_1.EditButton, { hideText: true, size: "small", recordItemId: record.id }),
                    React.createElement(refine_antd_1.ShowButton, { hideText: true, size: "small", recordItemId: record.id }),
                    (permissionsData === null || permissionsData === void 0 ? void 0 : permissionsData.includes("admin")) && (React.createElement(refine_antd_1.DeleteButton, { hideText: true, size: "small", recordItemId: record.id })))) }))));
};
exports.PostList = PostList;
//# sourceMappingURL=list.js.map