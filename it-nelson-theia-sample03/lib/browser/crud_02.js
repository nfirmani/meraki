"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CrudView = void 0;
const React = require("react");
const service_1 = require("./service");
class CrudView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            fruits: []
        };
    }
    componentDidMount() {
        service_1.default.getAll()
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
            React.createElement("h4", null, "Lista della frutta 03"),
            React.createElement("ul", null, fruits &&
                fruits.map((fruit, index) => (React.createElement("li", null, fruit.nome))))));
    }
}
exports.CrudView = CrudView;
//# sourceMappingURL=crud_02.js.map