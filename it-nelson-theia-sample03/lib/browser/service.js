"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_common_1 = require("./http-common");
class FruitDataService {
    getAll() {
        return http_common_1.default.get("/fruits");
    }
    get(id) {
        return http_common_1.default.get("/fruits/${id}");
    }
    create(data) {
        return http_common_1.default.post("/fruits", data);
    }
    update(data, id) {
        return http_common_1.default.put("/fruits/${id}", data);
    }
    delete(id) {
        return http_common_1.default.delete("/fruits/${id}");
    }
    deleteAll() {
        return http_common_1.default.delete("/fruits");
    }
    findByTitle(title) {
        return http_common_1.default.get("/fruits?title=${title}");
    }
}
exports.default = new FruitDataService();
//# sourceMappingURL=service.js.map