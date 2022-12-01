"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const d3_array_1 = require("d3-array");
const allCurves = require("@visx/curve");
const group_1 = require("@visx/group");
const shape_1 = require("@visx/shape");
const scale_1 = require("@visx/scale");
const marker_1 = require("@visx/marker");
const genDateValue_1 = require("@visx/mock-data/lib/generators/genDateValue");
const curveTypes = Object.keys(allCurves);
const lineCount = 5;
const series = new Array(lineCount).fill(null).map((_, i) => 
// vary each series value deterministically
(0, genDateValue_1.default)(25, /* seed= */ i / 72).sort((a, b) => a.date.getTime() - b.date.getTime()));
const allData = series.reduce((rec, d) => rec.concat(d), []);
// data accessors
const getX = (d) => d.date;
const getY = (d) => d.value;
// scales
const xScale = (0, scale_1.scaleTime)({
    domain: (0, d3_array_1.extent)(allData, getX),
});
const yScale = (0, scale_1.scaleLinear)({
    domain: [0, (0, d3_array_1.max)(allData, getY)],
});
function Curve({ width, height, showControls = true }) {
    const [curveType, setCurveType] = (0, react_1.useState)('curveNatural');
    const [showPoints, setShowPoints] = (0, react_1.useState)(true);
    const svgHeight = showControls ? height - 40 : height;
    const lineHeight = svgHeight / lineCount;
    // update scale output ranges
    xScale.range([0, width - 50]);
    yScale.range([lineHeight - 2, 0]);
    return (React.createElement("div", { className: "visx-curves-demo" },
        showControls && (React.createElement(React.Fragment, null,
            React.createElement("label", null,
                "Curve type \u00A0",
                React.createElement("select", { onChange: (e) => setCurveType(e.target.value), value: curveType }, curveTypes.map((curve) => (React.createElement("option", { key: curve, value: curve }, curve))))),
            "\u00A0",
            React.createElement("label", null,
                "Show points\u00A0",
                React.createElement("input", { type: "checkbox", checked: showPoints, onChange: () => setShowPoints(!showPoints) })),
            React.createElement("br", null))),
        React.createElement("svg", { width: width, height: svgHeight },
            React.createElement(marker_1.MarkerX, { id: "marker-x", stroke: "#333", size: 22, strokeWidth: 4, markerUnits: "userSpaceOnUse" }),
            React.createElement(marker_1.MarkerCross, { id: "marker-cross", stroke: "#333", size: 22, strokeWidth: 4, strokeOpacity: 0.6, markerUnits: "userSpaceOnUse" }),
            React.createElement(marker_1.MarkerCircle, { id: "marker-circle", fill: "#333", size: 2, refX: 2 }),
            React.createElement(marker_1.MarkerArrow, { id: "marker-arrow-odd", stroke: "#333", size: 8, strokeWidth: 1 }),
            React.createElement(marker_1.MarkerLine, { id: "marker-line", fill: "#333", size: 16, strokeWidth: 1 }),
            React.createElement(marker_1.MarkerArrow, { id: "marker-arrow", fill: "#333", refX: 2, size: 6 }),
            React.createElement("rect", { width: width, height: svgHeight, fill: "#efefef", rx: 14, ry: 14 }),
            width > 8 &&
                series.map((lineData, i) => {
                    const even = i % 2 === 0;
                    let markerStart = even ? 'url(#marker-cross)' : 'url(#marker-x)';
                    if (i === 1)
                        markerStart = 'url(#marker-line)';
                    const markerEnd = even ? 'url(#marker-arrow)' : 'url(#marker-arrow-odd)';
                    return (React.createElement(group_1.Group, { key: `lines-${i}`, top: i * lineHeight, left: 13 },
                        showPoints &&
                            lineData.map((d, j) => (React.createElement("circle", { key: i + j, r: 3, cx: xScale(getX(d)), cy: yScale(getY(d)), stroke: "rgba(33,33,33,0.5)", fill: "transparent" }))),
                        React.createElement(shape_1.LinePath, { curve: allCurves[curveType], data: lineData, x: (d) => { var _a; return (_a = xScale(getX(d))) !== null && _a !== void 0 ? _a : 0; }, y: (d) => { var _a; return (_a = yScale(getY(d))) !== null && _a !== void 0 ? _a : 0; }, stroke: "#333", strokeWidth: even ? 2 : 1, strokeOpacity: even ? 0.6 : 1, shapeRendering: "geometricPrecision", markerMid: "url(#marker-circle)", markerStart: markerStart, markerEnd: markerEnd })));
                }))));
}
exports.default = Curve;
//# sourceMappingURL=curve.js.map