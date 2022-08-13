"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
let AppService = class AppService {
    getHello() {
        return JSON.stringify({
            id: "id",
            address: "address",
            amount: "amount",
            amounts: "amounts(0,9999,2)",
            boolean: "boolean",
            country: "country",
            city: "city",
            countrycode: "countrycode",
            color: "color",
            chance: "chance(a{1},b{2},c{0})",
            code_length: "code_length(3)",
            company: "company",
            createdAt: "date",
            code: "uuid",
            department: "department",
            date_past: "date_past",
            date_future: "date_future",
            date_recent: "date_recent",
            date_soon: "date_soon",
            date_month: "date_month",
            date_weekday: "date_weekday",
            date_between: "date_between(2020-05-01)",
            date_betweens: "date_betweens(2020-05-01,2019-05-10,2022-05-10)",
            date_format: "date_format(yyyy-MM-dd hh:mm:ss a)",
            description: "description",
            enum: "enum(a,B,c)",
            email: "email",
            hash: "hash(c6f75e5e52af2301c38f77718b9ddd7b)",
            hexcolor: "hexcolor",
            image: "image",
            random: "random(c6f75e5e52af2301c38f77718b9ddd7b)",
            region: "region",
            string: "string",
            suffixe: "suffixe",
            material: "material",
            medicament: "medicament",
            name: "name",
            naissance: "date",
            pharmacy: "pharmacy",
            percent: "percent",
            price: "price",
            product: "product",
            "level-one": [
                {
                    id: "id",
                    "level-two": [
                        {
                            id: "id",
                            "level-three": {
                                id: "id",
                            },
                        },
                    ],
                },
            ],
        });
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
