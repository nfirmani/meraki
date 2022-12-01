"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Title = void 0;
const React = require("react");
const refine_core_1 = require("@pankod/refine-core");
const refine_mui_1 = require("@pankod/refine-mui");
const Title = ({ collapsed }) => {
    const { Link } = (0, refine_core_1.useRouterContext)();
    return (React.createElement(refine_mui_1.Button, { fullWidth: true, variant: "text", disableRipple: true },
        React.createElement(Link, { to: "/" }, collapsed ? (React.createElement("img", { src: "/refine-collapsed.svg", alt: "Refine", width: "28px" })) : (React.createElement("img", { src: "/refine.svg", alt: "Refine", width: "140px" })))));
};
exports.Title = Title;
//# sourceMappingURL=index.js.map