"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GApiTest = void 0;
const React = require("react");
class GApiTest extends React.Component {
    render() {
        return React.createElement("div", null,
            React.createElement("iframe", { style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%"
                }, 
                //src={`https://drive.google.com/file/d/1T4caIXAj9L4qq9kBVToQzThsJZ7sbWZy/preview`}
                src: `https://docs.google.com/document/d/1TdSxXh1kn5azAASppyEmeT5Pvb_ml1jPD_tXI1bVnGY/edit`, frameBorder: "0" }));
    }
}
exports.GApiTest = GApiTest;
//# sourceMappingURL=g-api-test.js.map