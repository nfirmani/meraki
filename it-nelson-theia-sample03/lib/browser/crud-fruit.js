"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CRUDFruitView = void 0;
const React = require("react");
class CRUDFruitView extends React.Component {
    constructor() {
        super(...arguments);
        this.stato = {
            hasErrors: false,
            fruits: {}
        };
        this.stampa = () => {
            console.log('stampa qualcosa');
        };
    }
    componentDidMount() {
        fetch("http://localhost:8080/fruits/q") //http://localhost:8080/hello  //https://swapi.co/api/planets/3/ https://httpbin.org/get //http://localhost:8080/ex03_1/services/customers/1/
            .then(res => res.json())
            .then(res => this.setState({ fruits: res }))
            .catch(() => this.setState({ hasErrors: true }));
    }
    render() {
        return (React.createElement("div", null,
            " risposta server:   ",
            JSON.stringify(this.stato.fruits),
            " errore: ",
            JSON.stringify(this.stato.hasErrors),
            " ",
            React.createElement("button", { onClick: this.stampa }, "stampa"),
            " fine",
            React.createElement("h3", null, "TODO"),
            React.createElement("form", null,
                React.createElement("label", { htmlFor: "new-todo" }, "Cosa bisogna fare?"),
                React.createElement("input", { id: "new-todo" }),
                React.createElement("button", null, "Aggiungi #"))));
    }
}
exports.CRUDFruitView = CRUDFruitView;
//# sourceMappingURL=crud-fruit.js.map