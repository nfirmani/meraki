"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorModeContextProvider = exports.ColorModeContext = void 0;
const React = require("react");
const react_1 = require("react");
const refine_mui_1 = require("@pankod/refine-mui");
const refine_mui_2 = require("@pankod/refine-mui");
exports.ColorModeContext = (0, react_1.createContext)({});
const ColorModeContextProvider = ({ children, }) => {
    const colorModeFromLocalStorage = localStorage.getItem("colorMode");
    const isSystemPreferenceDark = window === null || window === void 0 ? void 0 : window.matchMedia("(prefers-color-scheme: dark)").matches;
    const systemPreference = isSystemPreferenceDark ? "dark" : "light";
    const [mode, setMode] = (0, react_1.useState)(colorModeFromLocalStorage || systemPreference);
    (0, react_1.useEffect)(() => {
        window.localStorage.setItem("colorMode", mode);
    }, [mode]);
    const setColorMode = () => {
        if (mode === "light") {
            setMode("dark");
        }
        else {
            setMode("light");
        }
    };
    return (React.createElement(exports.ColorModeContext.Provider, { value: {
            setMode: setColorMode,
            mode,
        } },
        React.createElement(refine_mui_1.ThemeProvider, { theme: mode === "light" ? refine_mui_2.LightTheme : refine_mui_2.DarkTheme }, children)));
};
exports.ColorModeContextProvider = ColorModeContextProvider;
//# sourceMappingURL=index.js.map