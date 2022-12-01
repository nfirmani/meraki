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
        return (React.createElement("div", null,
            React.createElement("h4", null, "Lista della frutta"),
            React.createElement("ul", null, fruits &&
                fruits.map((fruit, index) => (React.createElement("li", null, fruit.name))))));
    }
}
exports.CrudView = CrudView;
//# sourceMappingURL=crud_01.js.map