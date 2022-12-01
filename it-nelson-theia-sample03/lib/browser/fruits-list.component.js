"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const react_router_dom_1 = require("react-router-dom");
const React = require("react");
const service_1 = require("./service");
class FruitsList extends react_1.Component {
    constructor(props) {
        super(props);
        this.onChangeSearchTitle = this.onChangeSearchTitle.bind(this);
        this.retrieveTutorials = this.retrieveTutorials.bind(this);
        this.refreshList = this.refreshList.bind(this);
        this.setActiveTutorial = this.setActiveTutorial.bind(this);
        this.removeAllFruits = this.removeAllFruits.bind(this);
        this.searchTitle = this.searchTitle.bind(this);
        this.state = {
            fruits: [],
            currentFruit: null,
            currentIndex: -1,
            searchTitle: ""
        };
    }
    componentDidMount() {
        this.retrieveTutorials();
    }
    onChangeSearchTitle(e) {
        const searchTitle = e.target.value;
        this.setState({
            searchTitle: searchTitle
        });
    }
    retrieveTutorials() {
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
    refreshList() {
        this.retrieveTutorials();
        this.setState({
            currentFruit: null,
            currentIndex: -1
        });
    }
    setActiveTutorial(tutorial, index) {
        this.setState({
            currentFruit: tutorial,
            currentIndex: index
        });
    }
    removeAllFruits() {
        service_1.default.deleteAll()
            .then((response) => {
            console.log(response.data);
            this.refreshList();
        })
            .catch((e) => {
            console.log(e);
        });
    }
    searchTitle() {
        this.setState({
            currentFruit: null,
            currentIndex: -1
        });
        service_1.default.findByTitle(this.state.searchTitle)
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
        const { searchTitle, fruits, currentFruit, currentIndex } = this.state;
        return (React.createElement("div", { className: "list row" },
            React.createElement("div", { className: "col-md-8" },
                React.createElement("div", { className: "input-group mb-3" },
                    React.createElement("input", { type: "text", className: "form-control", placeholder: "Search by title", value: searchTitle, onChange: this.onChangeSearchTitle }),
                    React.createElement("div", { className: "input-group-append" },
                        React.createElement("button", { className: "btn btn-outline-secondary", type: "button", onClick: this.searchTitle }, "Search")))),
            React.createElement("div", { className: "col-md-6" },
                React.createElement("h4", null, "Lista Frutta"),
                React.createElement("ul", { className: "list-group" }, fruits &&
                    fruits.map((fruit, index) => (React.createElement("li", { className: "list-group-item " +
                            (index === currentIndex ? "active" : ""), onClick: () => this.setActiveTutorial(fruit, index), key: index }, fruit.nome)))),
                React.createElement("button", { className: "m-3 btn btn-sm btn-danger", onClick: this.removeAllFruits }, "Remove All")),
            React.createElement("div", { className: "col-md-6" }, currentFruit ? (React.createElement("div", null,
                React.createElement("h4", null, "Frutta"),
                React.createElement("div", null,
                    React.createElement("label", null,
                        React.createElement("strong", null, "Nome:")),
                    " ",
                    currentFruit.nome),
                React.createElement("div", null,
                    React.createElement("label", null,
                        React.createElement("strong", null, "Descrizione:")),
                    " ",
                    currentFruit.descrizione),
                React.createElement(react_router_dom_1.Link, { to: "/fruits/" + currentFruit.id, className: "badge badge-warning" }, "Edit"))) : (React.createElement("div", null,
                React.createElement("br", null),
                React.createElement("p", null, "Clicca su un Frutto..."))))));
    }
}
exports.default = FruitsList;
//# sourceMappingURL=fruits-list.component.js.map