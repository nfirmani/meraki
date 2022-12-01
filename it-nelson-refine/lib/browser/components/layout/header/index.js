"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const React = require("react");
const react_1 = require("react");
const refine_core_1 = require("@pankod/refine-core");
const refine_mui_1 = require("@pankod/refine-mui");
const icons_material_1 = require("@mui/icons-material");
const contexts_1 = require("../../../contexts");
//import { ColorModeContext } from "contexts";
const Header = () => {
    const { mode, setMode } = (0, react_1.useContext)(contexts_1.ColorModeContext);
    const { data: user } = (0, refine_core_1.useGetIdentity)();
    const shouldRenderHeader = true; // since we are using the dark/light toggle; we don't need to check if user is logged in or not.
    return shouldRenderHeader ? (React.createElement(refine_mui_1.AppBar, { color: "default", position: "sticky", elevation: 1 },
        React.createElement(refine_mui_1.Toolbar, null,
            React.createElement(refine_mui_1.Stack, { direction: "row", width: "100%", justifyContent: "flex-end", alignItems: "center" },
                React.createElement(refine_mui_1.IconButton, { onClick: () => {
                        setMode();
                    } }, mode === "dark" ? React.createElement(icons_material_1.LightModeOutlined, null) : React.createElement(icons_material_1.DarkModeOutlined, null)),
                React.createElement(refine_mui_1.Stack, { direction: "row", gap: "16px", alignItems: "center", justifyContent: "center" },
                    (user === null || user === void 0 ? void 0 : user.name) ? (React.createElement(refine_mui_1.Typography, { variant: "subtitle2" }, user === null || user === void 0 ? void 0 : user.name)) : null,
                    (user === null || user === void 0 ? void 0 : user.avatar) ? (React.createElement(refine_mui_1.Avatar, { src: user === null || user === void 0 ? void 0 : user.avatar, alt: user === null || user === void 0 ? void 0 : user.name })) : null))))) : null;
};
exports.Header = Header;
//# sourceMappingURL=index.js.map