"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const city_dump_1 = require("./source/city_dump");
const country_dump_1 = require("./source/country_dump");
const region_dump_1 = require("./source/region_dump");
class Locations {
    country() {
        return country_dump_1.default[Math.trunc(Math.random() * country_dump_1.default.length)];
    }
    city() {
        return city_dump_1.default[Math.trunc(Math.random() * city_dump_1.default.length)];
    }
    region() {
        return region_dump_1.default[Math.trunc(Math.random() * region_dump_1.default.length)];
    }
}
exports.default = new Locations();
