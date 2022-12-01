"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudView = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
function Layout() {
    return (React.createElement("div", null,
        React.createElement("nav", null,
            React.createElement("ul", null,
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/" }, "Home")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/about" }, "About")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/dashboard" }, "Dashboard")),
                React.createElement("li", null,
                    React.createElement(react_router_dom_1.Link, { to: "/nothing-here" }, "Nothing Here")))),
        React.createElement("hr", null),
        React.createElement(react_router_dom_1.Outlet, null)));
}
function Home() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Home")));
}
function About() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "About")));
}
function Dashboard() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Dashboard")));
}
function NoMatch() {
    return (React.createElement("div", null,
        React.createElement("h2", null, "Nothing to see here!"),
        React.createElement("p", null,
            React.createElement(react_router_dom_1.Link, { to: "/" }, "Go to the home page"))));
}
class CrudView extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement("h1", null, "Basic Example"),
                React.createElement("p", null,
                    "This example demonstrates some of the core features of React Router including nested ",
                    React.createElement("code", null, "<Route>"),
                    "s,",
                    " ",
                    React.createElement("code", null, "<Outlet>"),
                    "s, ",
                    React.createElement("code", null, "<Link>"),
                    "s, and using a \"*\" route (aka \"splat route\") to render a \"not found\" page when someone visits an unrecognized URL."),
                React.createElement(react_router_dom_1.Routes, null,
                    React.createElement(react_router_dom_1.Route, { path: "/", element: React.createElement(Layout, null) },
                        React.createElement(react_router_dom_1.Route, { index: true, element: React.createElement(Home, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "about", element: React.createElement(About, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "dashboard", element: React.createElement(Dashboard, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "*", element: React.createElement(NoMatch, null) }))))));
    }
}
exports.CrudView = CrudView;
//# sourceMappingURL=crud_03.js.map