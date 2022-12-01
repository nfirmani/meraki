"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const React = require("react");
const service_1 = require("./service");
class Fruit extends react_1.Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.getTutorial = this.getTutorial.bind(this);
        this.updatePublished = this.updatePublished.bind(this);
        this.updateFruit = this.updateFruit.bind(this);
        this.deleteFruit = this.deleteFruit.bind(this);
        this.state = {
            currentFruit: {
                id: null,
                nome: "",
                descrizione: ""
            },
            message: "",
        };
    }
    componentDidMount() {
        // this.getTutorial(this.props.match.params.id);
    }
    onChangeTitle(e) {
        const title = e.target.value;
        this.setState(function (prevState) {
            return {
                currentFruit: Object.assign(Object.assign({}, prevState.currentFruit), { title: title }),
            };
        });
    }
    onChangeDescription(e) {
        const description = e.target.value;
        this.setState((prevState) => ({
            currentFruit: Object.assign(Object.assign({}, prevState.currentFruit), { description: description }),
        }));
    }
    getTutorial(id) {
        service_1.default.get(id)
            .then((response) => {
            this.setState({
                currentFruit: response.data,
            });
            console.log(response.data);
        })
            .catch((e) => {
            console.log(e);
        });
    }
    updatePublished(status) {
        const data = {
            id: this.state.currentFruit.id,
            nome: this.state.currentFruit.nome,
            descrizione: this.state.currentFruit.descrizione
        };
        service_1.default.update(data, this.state.currentFruit.id)
            .then((response) => {
            this.setState((prevState) => ({
                currentFruit: Object.assign(Object.assign({}, prevState.currentFruit), { published: status }),
                message: "The status was updated successfully!"
            }));
            console.log(response.data);
        })
            .catch((e) => {
            console.log(e);
        });
    }
    updateFruit() {
        service_1.default.update(this.state.currentFruit, this.state.currentFruit.id)
            .then((response) => {
            console.log(response.data);
            this.setState({
                message: "The tutorial was updated successfully!",
            });
        })
            .catch((e) => {
            console.log(e);
        });
    }
    deleteFruit() {
        service_1.default.delete(this.state.currentFruit.id)
            .then((response) => {
            console.log(response.data);
            //this.props.history.push("/tutorials");
        })
            .catch((e) => {
            console.log(e);
        });
    }
    render() {
        const { currentFruit: currentTutorial } = this.state;
        return (React.createElement("div", null, currentTutorial ? (React.createElement("div", { className: "edit-form" },
            React.createElement("h4", null, "Frutta"),
            React.createElement("form", null,
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "title" }, "Nome"),
                    React.createElement("input", { type: "text", className: "form-control", id: "title", value: currentTutorial.nome, onChange: this.onChangeTitle })),
                React.createElement("div", { className: "form-group" },
                    React.createElement("label", { htmlFor: "description" }, "Descrizione"),
                    React.createElement("input", { type: "text", className: "form-control", id: "description", value: currentTutorial.descrizione, onChange: this.onChangeDescription }))),
            React.createElement("button", { className: "badge badge-danger mr-2", onClick: this.deleteFruit }, "Delete"),
            React.createElement("button", { type: "submit", className: "badge badge-success", onClick: this.updateFruit }, "Update"),
            React.createElement("p", null, this.state.message))) : (React.createElement("div", null,
            React.createElement("br", null),
            React.createElement("p", null, "Clicca su un Frutto ...")))));
    }
}
exports.default = Fruit;
//# sourceMappingURL=fruit.component.js.map