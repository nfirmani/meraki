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
exports.CustomSider = void 0;
const React = __importStar(require("react"));
const refine_core_1 = require("@pankod/refine-core");
const refine_antd_1 = require("@pankod/refine-antd");
const refine_react_router_v6_1 = __importDefault(require("@pankod/refine-react-router-v6"));
const { Link } = refine_react_router_v6_1.default;
const CustomSider = () => {
    const Title = (0, refine_core_1.useTitle)();
    const { menuItems, selectedKey } = (0, refine_antd_1.useMenu)();
    return (React.createElement(React.Fragment, null,
        Title && React.createElement(Title, { collapsed: false }),
        React.createElement(refine_antd_1.Menu, { selectedKeys: [selectedKey], mode: "horizontal" }, menuItems.map(({ icon, route, label }) => (React.createElement(refine_antd_1.Menu.Item, { key: route, icon: icon },
            React.createElement(Link, { to: route !== null && route !== void 0 ? route : "" }, label)))))));
};
exports.CustomSider = CustomSider;
//# sourceMappingURL=index.js.map