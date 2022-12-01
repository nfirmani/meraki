"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const react_1 = require("react");
const group_1 = require("@visx/group");
const hierarchy_1 = require("@visx/hierarchy");
const gradient_1 = require("@visx/gradient");
const d3_shape_1 = require("d3-shape");
const useForceUpdate_1 = require("./useForceUpdate");
const LinkControls_1 = require("./LinkControls");
const getLinkComponent_1 = require("./getLinkComponent");
const data = {
    name: 'T',
    children: [
        {
            name: 'A',
            children: [
                { name: 'A1' },
                { name: 'A2' },
                { name: 'A3' },
                {
                    name: 'C',
                    children: [
                        {
                            name: 'C1',
                        },
                        {
                            name: 'D',
                            children: [
                                {
                                    name: 'D1',
                                },
                                {
                                    name: 'D2',
                                },
                                {
                                    name: 'D3',
                                },
                            ],
                        },
                    ],
                },
            ],
        },
        { name: 'Z' },
        {
            name: 'B',
            children: [{ name: 'B1' }, { name: 'B2' }, { name: 'B3' }],
        },
    ],
};
const defaultMargin = { top: 30, left: 30, right: 30, bottom: 70 };
function Example({ width: totalWidth, height: totalHeight, margin = defaultMargin, }) {
    const [layout, setLayout] = (0, react_1.useState)('cartesian');
    const [orientation, setOrientation] = (0, react_1.useState)('horizontal');
    const [linkType, setLinkType] = (0, react_1.useState)('diagonal');
    const [stepPercent, setStepPercent] = (0, react_1.useState)(0.5);
    const forceUpdate = (0, useForceUpdate_1.default)();
    const innerWidth = totalWidth - margin.left - margin.right;
    const innerHeight = totalHeight - margin.top - margin.bottom;
    let origin;
    let sizeWidth;
    let sizeHeight;
    if (layout === 'polar') {
        origin = {
            x: innerWidth / 2,
            y: innerHeight / 2,
        };
        sizeWidth = 2 * Math.PI;
        sizeHeight = Math.min(innerWidth, innerHeight) / 2;
    }
    else {
        origin = { x: 0, y: 0 };
        if (orientation === 'vertical') {
            sizeWidth = innerWidth;
            sizeHeight = innerHeight;
        }
        else {
            sizeWidth = innerHeight;
            sizeHeight = innerWidth;
        }
    }
    const LinkComponent = (0, getLinkComponent_1.default)({ layout, linkType, orientation });
    return totalWidth < 10 ? null : (React.createElement("div", null,
        React.createElement(LinkControls_1.default, { layout: layout, orientation: orientation, linkType: linkType, stepPercent: stepPercent, setLayout: setLayout, setOrientation: setOrientation, setLinkType: setLinkType, setStepPercent: setStepPercent }),
        React.createElement("svg", { width: totalWidth, height: totalHeight },
            React.createElement(gradient_1.LinearGradient, { id: "links-gradient", from: "#fd9b93", to: "#fe6e9e" }),
            React.createElement("rect", { width: totalWidth, height: totalHeight, rx: 14, fill: "#272b4d" }),
            React.createElement(group_1.Group, { top: margin.top, left: margin.left },
                React.createElement(hierarchy_1.Tree, { root: (0, hierarchy_1.hierarchy)(data, (d) => (d.isExpanded ? null : d.children)), size: [sizeWidth, sizeHeight], separation: (a, b) => (a.parent === b.parent ? 1 : 0.5) / a.depth }, (tree) => (React.createElement(group_1.Group, { top: origin.y, left: origin.x },
                    tree.links().map((link, i) => (React.createElement(LinkComponent, { key: i, data: link, percent: stepPercent, stroke: "rgb(254,110,158,0.6)", strokeWidth: "1", fill: "none" }))),
                    tree.descendants().map((node, key) => {
                        const width = 40;
                        const height = 20;
                        let top;
                        let left;
                        if (layout === 'polar') {
                            const [radialX, radialY] = (0, d3_shape_1.pointRadial)(node.x, node.y);
                            top = radialY;
                            left = radialX;
                        }
                        else if (orientation === 'vertical') {
                            top = node.y;
                            left = node.x;
                        }
                        else {
                            top = node.x;
                            left = node.y;
                        }
                        return (React.createElement(group_1.Group, { top: top, left: left, key: key },
                            node.depth === 0 && (React.createElement("circle", { r: 12, fill: "url('#links-gradient')", onClick: () => {
                                    node.data.isExpanded = !node.data.isExpanded;
                                    console.log(node);
                                    forceUpdate();
                                } })),
                            node.depth !== 0 && (React.createElement("rect", { height: height, width: width, y: -height / 2, x: -width / 2, fill: "#272b4d", stroke: node.data.children ? '#03c0dc' : '#26deb0', strokeWidth: 1, strokeDasharray: node.data.children ? '0' : '2,2', strokeOpacity: node.data.children ? 1 : 0.6, rx: node.data.children ? 0 : 10, onClick: () => {
                                    node.data.isExpanded = !node.data.isExpanded;
                                    console.log(node);
                                    forceUpdate();
                                } })),
                            React.createElement("text", { dy: ".33em", fontSize: 9, fontFamily: "Arial", textAnchor: "middle", style: { pointerEvents: 'none' }, fill: node.depth === 0 ? '#71248e' : node.children ? 'white' : '#26deb0' }, node.data.name)));
                    }))))))));
}
exports.default = Example;
//# sourceMappingURL=LinkTypes.js.map