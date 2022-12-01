"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudView = void 0;
const axios_1 = require("axios");
const React = require("react");
class CrudView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };
    }
    componentDidMount() {
        // fetch("http://localhost:8080/fruits") //http://localhost:8080/hello  //https://swapi.co/api/planets/3/ https://httpbin.org/get //http://localhost:8080/ex03_1/services/customers/1/
        // .then(res => res.json())
        // .then(res => this.setState({ fruits: res }))
        // .catch(() => this.setState({ hasErrors: true }));
        axios_1.default.get("http://localhost:8080/fruits")
            .then((response) => {
            this.setState({
                fruits: response.data
            });
            console.log(response.data);
        })
            .catch((e) => {
            console.log(e);
        });
    }
    render() {
        const { fruits } = this.state;
        // return <div> risposta server:   { JSON.stringify(this.state.fruits)}  errore: { JSON.stringify(this.state.hasErrors)}         
        // <button onClick ={this.stampa}>stampaa</button>        
        // </div>;   
        return (
        //<ul>
        //  { this.state.fruits.map(fruit => <li>{fruit}</li>)}
        // </ul>
        React.createElement("div", null,
            React.createElement("h4", null, "Frutta  Lista"),
            React.createElement("ul", null, fruits &&
                fruits.map((fruit, index) => (React.createElement("li", null, fruit.name))))));
    }
}
exports.CrudView = CrudView;
//# sourceMappingURL=my-crud.js.map