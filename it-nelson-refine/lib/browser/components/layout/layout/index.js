"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
const React = require("react");
const refine_mui_1 = require("@pankod/refine-mui");
const sider_1 = require("../sider");
const header_1 = require("../header");
const Layout = ({ Sider, Header, Footer, OffLayoutArea, children, }) => {
    const SiderToRender = Sider !== null && Sider !== void 0 ? Sider : sider_1.Sider;
    const HeaderToRender = Header !== null && Header !== void 0 ? Header : header_1.Header;
    return (React.createElement(refine_mui_1.Box, { display: "flex", flexDirection: "row" },
        React.createElement(SiderToRender, null),
        React.createElement(refine_mui_1.Box, { sx: {
                display: "flex",
                flexDirection: "column",
                flex: 1,
                minHeight: "100vh",
            } },
            React.createElement(HeaderToRender, null),
            React.createElement(refine_mui_1.Box, { component: "main", sx: {
                    p: { xs: 1, md: 2, lg: 3 },
                    flexGrow: 1,
                    bgcolor: (theme) => theme.palette.background.default,
                } }, children),
            Footer && React.createElement(Footer, null)),
        OffLayoutArea && React.createElement(OffLayoutArea, null)));
};
exports.Layout = Layout;
//# sourceMappingURL=index.js.map