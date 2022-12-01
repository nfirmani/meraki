"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
function GDoc() {
    return (React.createElement("div", null,
        React.createElement("h1", null, "esempio di google doc"),
        React.createElement("iframe", { style: {
                position: "absolute",
                top: 500,
                left: 0,
                width: "100%",
                height: "80%"
            }, 
            //src={`https://drive.google.com/file/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/preview`}
            src: `https://docs.google.com/document/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/edit`, frameBorder: "0" })));
}
exports.default = GDoc;
//# sourceMappingURL=g-doc.js.map