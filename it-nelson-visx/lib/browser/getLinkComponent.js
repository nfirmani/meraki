"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const shape_1 = require("@visx/shape");
function getLinkComponent({ layout, linkType, orientation, }) {
    let LinkComponent;
    if (layout === 'polar') {
        if (linkType === 'step') {
            LinkComponent = shape_1.LinkRadialStep;
        }
        else if (linkType === 'curve') {
            LinkComponent = shape_1.LinkRadialCurve;
        }
        else if (linkType === 'line') {
            LinkComponent = shape_1.LinkRadialLine;
        }
        else {
            LinkComponent = shape_1.LinkRadial;
        }
    }
    else if (orientation === 'vertical') {
        if (linkType === 'step') {
            LinkComponent = shape_1.LinkVerticalStep;
        }
        else if (linkType === 'curve') {
            LinkComponent = shape_1.LinkVerticalCurve;
        }
        else if (linkType === 'line') {
            LinkComponent = shape_1.LinkVerticalLine;
        }
        else {
            LinkComponent = shape_1.LinkVertical;
        }
    }
    else if (linkType === 'step') {
        LinkComponent = shape_1.LinkHorizontalStep;
    }
    else if (linkType === 'curve') {
        LinkComponent = shape_1.LinkHorizontalCurve;
    }
    else if (linkType === 'line') {
        LinkComponent = shape_1.LinkHorizontalLine;
    }
    else {
        LinkComponent = shape_1.LinkHorizontal;
    }
    return LinkComponent;
}
exports.default = getLinkComponent;
//# sourceMappingURL=getLinkComponent.js.map