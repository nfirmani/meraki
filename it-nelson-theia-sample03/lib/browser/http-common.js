"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
exports.default = axios_1.default.create({
    baseURL: "http://localhost:8080",
    headers: {
        "Content-type": "application/json"
    }
});
//# sourceMappingURL=http-common.js.map