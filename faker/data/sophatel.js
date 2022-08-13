"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const medicament_dump_1 = require("./source/medicament_dump");
const pharmacies_dump_1 = require("./source/pharmacies_dump");
class Sophatel {
    pharmacy() {
        return pharmacies_dump_1.default[Math.trunc(Math.random() * pharmacies_dump_1.default.length)];
    }
    medicament() {
        return medicament_dump_1.default[Math.trunc(Math.random() * pharmacies_dump_1.default.length)];
    }
}
exports.default = new Sophatel();
