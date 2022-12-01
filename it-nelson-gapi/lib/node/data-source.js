"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppDataSource = void 0;
const typeorm_1 = require("typeorm");
const Utente_1 = require("./Utente");
const options = {
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "nelson1970",
    database: "dbtest",
    synchronize: true,
    logging: true,
    entities: [Utente_1.Utente],
    subscribers: [],
    migrations: [],
};
exports.AppDataSource = new typeorm_1.DataSource(options);
//# sourceMappingURL=data-source.js.map