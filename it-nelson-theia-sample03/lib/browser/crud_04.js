"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudView = void 0;
const React = require("react");
const react_router_dom_1 = require("react-router-dom");
const add_fruit_component_1 = require("./add-fruit.component");
const fruit_component_1 = require("./fruit.component");
const fruits_list_component_1 = require("./fruits-list.component");
//import 'f:/2024/it-nelson-theia-i02/node_modules/bootstrap/dist/css/bootstrap-grid.min.css';
require("/public/bootstrap.min.css");
class CrudView extends React.Component {
    render() {
        return (React.createElement(react_router_dom_1.BrowserRouter, null,
            React.createElement("div", null,
                React.createElement("nav", { className: "navbar navbar-expand navbar-dark bg-dark" },
                    React.createElement(react_router_dom_1.Link, { to: "/fruits", className: "navbar-brand" }, "Frutta"),
                    React.createElement("div", { className: "navbar-nav mr-auto" },
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(react_router_dom_1.Link, { to: "/fruits", className: "nav-link" }, "Lista")),
                        React.createElement("li", { className: "nav-item" },
                            React.createElement(react_router_dom_1.Link, { to: "/add", className: "nav-link" }, "Aggiungi")))),
                React.createElement("div", { className: "container mt-3" },
                    React.createElement(react_router_dom_1.Routes, null,
                        React.createElement(react_router_dom_1.Route, { path: "/fruits", element: React.createElement(fruits_list_component_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/add", element: React.createElement(add_fruit_component_1.default, null) }),
                        React.createElement(react_router_dom_1.Route, { path: "/fruits/:id", element: React.createElement(fruit_component_1.default, null) }))))));
    }
}
exports.CrudView = CrudView;
/** <Route path="/fruits/:id" element={<Fruit />} />
*



 *
*/ 
//# sourceMappingURL=crud_04.js.map