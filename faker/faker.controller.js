"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakerController = void 0;
const faker_service_1 = require("./faker.service");
const common_1 = require("@nestjs/common");
const faker_builder_1 = require("./builder/faker.builder");
const { exec } = require("child_process");
let FakerController = class FakerController {
    constructor(srv) {
        this.srv = srv;
    }
    fakedata(body, repeat = 1) {
        const fakedList = [];
        for (let i = 0; i < repeat; i++) {
            fakedList.push(this.srv.scanPayload(body));
        }
        return { schema_shape: body, content: fakedList };
    }
    getFile(filename) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.srv.getFile(filename);
        });
    }
    getTest() {
        return new faker_builder_1.Faker()
            .set_amount()
            .set_color()
            .set_city()
            .set_uuid()
            .set_enum([1, 2, 3], "test")
            .deepLevel([
            new faker_builder_1.Faker()
                .set_boolean()
                .set_date()
                .set_city()
                .deepLevel(new faker_builder_1.Faker()
                .set_amount()
                .set_material()
                .deepLevel(new faker_builder_1.Faker()
                .set_color()
                .set_company()
                .deepLevel(new faker_builder_1.Faker()
                .set_price()
                .set_product()
                .set_date()
                .deepLevel(new faker_builder_1.Faker()
                .set_country()
                .set_company()
                .set_image()
                .set_firstname()
                .deepLevel([
                new faker_builder_1.Faker().set_phone().set_product().build(),
                13,
            ], "Anass")
                .build())
                .build())
                .build())
                .build())
                .build(),
            10,
        ])
            .build();
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("repeat")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], FakerController.prototype, "fakedata", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('file')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], FakerController.prototype, "getFile", null);
__decorate([
    (0, common_1.Get)("builder"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], FakerController.prototype, "getTest", null);
FakerController = __decorate([
    (0, common_1.Controller)("faker"),
    __metadata("design:paramtypes", [faker_service_1.FakerService])
], FakerController);
exports.FakerController = FakerController;
