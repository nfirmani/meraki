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
exports.PostShow = void 0;
const React = __importStar(require("react"));
const refine_core_1 = require("@pankod/refine-core");
const refine_antd_1 = require("@pankod/refine-antd");
const { Title, Text } = refine_antd_1.Typography;
const PostShow = () => {
    const { queryResult } = (0, refine_core_1.useShow)();
    const { data, isLoading } = queryResult;
    const record = data === null || data === void 0 ? void 0 : data.data;
    const { data: categoryData, isLoading: categoryIsLoading } = (0, refine_core_1.useOne)({
        resource: "categories",
        id: (record === null || record === void 0 ? void 0 : record.category.id) || "",
        queryOptions: {
            enabled: !!record,
        },
    });
    return (React.createElement(refine_antd_1.Show, { isLoading: isLoading },
        React.createElement(Title, { level: 5 }, "Id"),
        React.createElement(Text, null, record === null || record === void 0 ? void 0 : record.id),
        React.createElement(Title, { level: 5 }, "Title"),
        React.createElement(Text, null, record === null || record === void 0 ? void 0 : record.title),
        React.createElement(Title, { level: 5 }, "Category"),
        React.createElement(Text, null, categoryIsLoading ? "Loading..." : categoryData === null || categoryData === void 0 ? void 0 : categoryData.data.title),
        React.createElement(Title, { level: 5 }, "Content"),
        React.createElement(refine_antd_1.MarkdownField, { value: record === null || record === void 0 ? void 0 : record.content })));
};
exports.PostShow = PostShow;
//# sourceMappingURL=show.js.map