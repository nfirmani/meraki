"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const Box_1 = require("@mui/material/Box");
const TextField_1 = require("@mui/material/TextField");
function BasicText() {
    return (React.createElement(Box_1.default, { component: "form", sx: {
            '& > :not(style)': { m: 1, width: '25ch' },
        }, noValidate: true, autoComplete: "off" },
        React.createElement(TextField_1.default, { id: "outlined-basic", label: "Outlined", variant: "outlined" }),
        React.createElement(TextField_1.default, { id: "filled-basic", label: "Filled", variant: "filled" }),
        React.createElement(TextField_1.default, { id: "standard-basic", label: "Standard", variant: "standard" })));
}
exports.default = BasicText;
//# sourceMappingURL=basic-text.js.map