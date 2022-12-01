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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreate = void 0;
const React = __importStar(require("react"));
const react_1 = require("react");
const refine_antd_1 = require("@pankod/refine-antd");
const react_markdown_1 = __importDefault(require("react-markdown"));
const react_mde_1 = __importDefault(require("react-mde"));
require("react-mde/lib/styles/css/react-mde-all.css");
const PostCreate = () => {
    const { formProps, saveButtonProps } = (0, refine_antd_1.useForm)();
    const { selectProps: categorySelectProps } = (0, refine_antd_1.useSelect)({
        resource: "categories",
    });
    const [selectedTab, setSelectedTab] = (0, react_1.useState)("write");
    return (React.createElement(refine_antd_1.Create, { saveButtonProps: saveButtonProps },
        React.createElement(refine_antd_1.Form, Object.assign({}, formProps, { layout: "vertical" }),
            React.createElement(refine_antd_1.Form.Item, { label: "Title", name: "title", rules: [
                    {
                        required: true,
                    },
                ] },
                React.createElement(refine_antd_1.Input, null)),
            React.createElement(refine_antd_1.Form.Item, { label: "Category", name: ["category", "id"], rules: [
                    {
                        required: true,
                    },
                ] },
                React.createElement(refine_antd_1.Select, Object.assign({}, categorySelectProps))),
            React.createElement(refine_antd_1.Form.Item, { label: "Status", name: "status", rules: [
                    {
                        required: true,
                    },
                ] },
                React.createElement(refine_antd_1.Select, { options: [
                        {
                            label: "Published",
                            value: "published",
                        },
                        {
                            label: "Draft",
                            value: "draft",
                        },
                        {
                            label: "Rejected",
                            value: "rejected",
                        },
                    ] })),
            React.createElement(refine_antd_1.Form.Item, { label: "Content", name: "content", rules: [
                    {
                        required: true,
                    },
                ] },
                React.createElement(react_mde_1.default, { selectedTab: selectedTab, onTabChange: setSelectedTab, generateMarkdownPreview: (markdown) => Promise.resolve(React.createElement(react_markdown_1.default, null, markdown)) })))));
};
exports.PostCreate = PostCreate;
//# sourceMappingURL=create.js.map