"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostCreate = void 0;
const React = require("react");
const refine_mui_1 = require("@pankod/refine-mui");
const refine_react_hook_form_1 = require("@pankod/refine-react-hook-form");
const PostCreate = () => {
    var _a, _b;
    const { saveButtonProps, register, control, formState: { errors }, } = (0, refine_react_hook_form_1.useForm)();
    const { autocompleteProps } = (0, refine_mui_1.useAutocomplete)({
        resource: "categories",
    });
    return (React.createElement(refine_mui_1.Create, { saveButtonProps: saveButtonProps },
        React.createElement(refine_mui_1.Box, { component: "form", sx: { display: "flex", flexDirection: "column" }, autoComplete: "off" },
            React.createElement(refine_mui_1.TextField, Object.assign({}, register("title", {
                required: "This field is required",
            }), { error: !!errors.title, helperText: (_a = errors.title) === null || _a === void 0 ? void 0 : _a.message, margin: "normal", fullWidth: true, label: "Title", name: "title", autoFocus: true })),
            React.createElement(refine_react_hook_form_1.Controller, { control: control, name: "status", rules: { required: "This field is required" }, render: ({ field }) => (React.createElement(refine_mui_1.Autocomplete, Object.assign({ options: ["published", "draft", "rejected"] }, field, { onChange: (_, value) => {
                        field.onChange(value);
                    }, renderInput: (params) => {
                        var _a;
                        return (React.createElement(refine_mui_1.TextField, Object.assign({}, params, { label: "Status", margin: "normal", variant: "outlined", error: !!errors.status, helperText: (_a = errors.status) === null || _a === void 0 ? void 0 : _a.message, required: true })));
                    } }))) }),
            React.createElement(refine_react_hook_form_1.Controller, { control: control, name: "category", rules: { required: "This field is required" }, render: ({ field }) => (React.createElement(refine_mui_1.Autocomplete, Object.assign({}, autocompleteProps, field, { onChange: (_, value) => {
                        field.onChange(value);
                    }, getOptionLabel: (item) => {
                        var _a, _b, _c;
                        return ((_c = (_b = (_a = autocompleteProps === null || autocompleteProps === void 0 ? void 0 : autocompleteProps.options) === null || _a === void 0 ? void 0 : _a.find((p) => { var _a, _b; return ((_a = p === null || p === void 0 ? void 0 : p.id) === null || _a === void 0 ? void 0 : _a.toString()) === ((_b = item === null || item === void 0 ? void 0 : item.id) === null || _b === void 0 ? void 0 : _b.toString()); })) === null || _b === void 0 ? void 0 : _b.title) !== null && _c !== void 0 ? _c : "");
                    }, isOptionEqualToValue: (option, value) => value === undefined || option.id.toString() === value.toString(), renderInput: (params) => {
                        var _a;
                        return (React.createElement(refine_mui_1.TextField, Object.assign({}, params, { label: "Category", margin: "normal", variant: "outlined", error: !!errors.category, helperText: (_a = errors.category) === null || _a === void 0 ? void 0 : _a.message, required: true })));
                    } }))) }),
            React.createElement(refine_mui_1.TextField, Object.assign({}, register("content", {
                required: "This field is required",
            }), { error: !!errors.content, helperText: (_b = errors.content) === null || _b === void 0 ? void 0 : _b.message, margin: "normal", label: "Content", multiline: true, rows: 4 })))));
};
exports.PostCreate = PostCreate;
//# sourceMappingURL=create.js.map