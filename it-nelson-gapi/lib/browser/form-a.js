"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_hook_form_1 = require("react-hook-form");
function FormA() {
    const { register, handleSubmit } = (0, react_hook_form_1.useForm)();
    const onSubmit = data => console.log(JSON.stringify(data));
    return (React.createElement("form", { onSubmit: handleSubmit(onSubmit) },
        React.createElement("input", Object.assign({}, register("firstName"))),
        React.createElement("input", Object.assign({}, register("lastName"))),
        React.createElement("input", Object.assign({ type: "email" }, register("email"))),
        React.createElement("input", { type: "submit" })));
}
exports.default = FormA;
//# sourceMappingURL=form-a.js.map