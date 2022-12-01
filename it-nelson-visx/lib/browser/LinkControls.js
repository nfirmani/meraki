"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const controlStyles = { fontSize: 10 };
function LinkControls({ layout, orientation, linkType, stepPercent, setLayout, setOrientation, setLinkType, setStepPercent, }) {
    return (React.createElement("div", { style: controlStyles },
        React.createElement("label", null, "layout:"),
        "\u00A0",
        React.createElement("select", { onClick: (e) => e.stopPropagation(), onChange: (e) => setLayout(e.target.value), value: layout },
            React.createElement("option", { value: "cartesian" }, "cartesian"),
            React.createElement("option", { value: "polar" }, "polar")),
        "\u00A0\u00A0",
        React.createElement("label", null, "orientation:"),
        "\u00A0",
        React.createElement("select", { onClick: (e) => e.stopPropagation(), onChange: (e) => setOrientation(e.target.value), value: orientation, disabled: layout === 'polar' },
            React.createElement("option", { value: "vertical" }, "vertical"),
            React.createElement("option", { value: "horizontal" }, "horizontal")),
        "\u00A0\u00A0",
        React.createElement("label", null, "link:"),
        "\u00A0",
        React.createElement("select", { onClick: (e) => e.stopPropagation(), onChange: (e) => setLinkType(e.target.value), value: linkType },
            React.createElement("option", { value: "diagonal" }, "diagonal"),
            React.createElement("option", { value: "step" }, "step"),
            React.createElement("option", { value: "curve" }, "curve"),
            React.createElement("option", { value: "line" }, "line")),
        linkType === 'step' && layout !== 'polar' && (React.createElement(React.Fragment, null,
            "\u00A0\u00A0",
            React.createElement("label", null, "step:"),
            "\u00A0",
            React.createElement("input", { onClick: (e) => e.stopPropagation(), type: "range", min: 0, max: 1, step: 0.1, onChange: (e) => setStepPercent(Number(e.target.value)), value: stepPercent, disabled: linkType !== 'step' || layout === 'polar' })))));
}
exports.default = LinkControls;
//# sourceMappingURL=LinkControls.js.map