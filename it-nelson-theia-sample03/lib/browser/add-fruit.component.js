"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const React = require("react");
const service_1 = require("./service");
class AddFruit extends react_1.Component {
    constructor(props) {
        super(props);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.saveFruit = this.saveFruit.bind(this);
        this.newFruit = this.newFruit.bind(this);
        this.state = {
            id: null,
            nome: "",
            descrizione: "",
            submitted: false
        };
    }
    onChangeTitle(e) {
        this.setState({
            nome: e.target.value
        });
    }
    onChangeDescription(e) {
        this.setState({
            descrizione: e.target.value
        });
    }
    saveFruit() {
        const data = {
            id: this.state.id,
            nome: this.state.nome,
            descrizione: this.state.descrizione
        };
        service_1.default.create(data)
            .then((response) => {
            this.setState({
                id: response.data.id,
                nome: response.data.nome,
                descrizione: response.data.descrizione,
                submitted: true
            });
            console.log(response.data);
        })
            .catch((e) => {
            console.log(e);
        });
    }
    newFruit() {
        this.setState({
            id: null,
            nome: "",
            descrizione: "",
            submitted: false
        });
    }
    render() {
        const { submitted, nome: nome, descrizione: descrizione } = this.state;
        return (React.createElement("div", { className: "submit-form" }, submitted ? (React.createElement("div", null,
            React.createElement("h4", null, "You submitted successfully!"),
            React.createElement("button", { className: "btn btn-success", onClick: this.newFruit }, "Add"))) : (React.createElement("div", null,
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "title" }, "Nome"),
                React.createElement("input", { type: "text", className: "form-control", id: "title", required: true, value: nome, onChange: this.onChangeTitle, name: "title" })),
            React.createElement("div", { className: "form-group" },
                React.createElement("label", { htmlFor: "description" }, "Descrizione"),
                React.createElement("input", { type: "text", className: "form-control", id: "description", required: true, value: descrizione, onChange: this.onChangeDescription, name: "description" })),
            React.createElement("button", { onClick: this.saveFruit, className: "btn btn-success" }, "Invio")))));
    }
}
exports.default = AddFruit;
//# sourceMappingURL=add-fruit.component.js.map