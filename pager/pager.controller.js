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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerController = void 0;
const pager_service_1 = require("./pager.service");
const common_1 = require("@nestjs/common");
let PagerController = class PagerController {
    constructor(srv) {
        this.srv = srv;
    }
    readListHashs() {
        return this.srv.listHashs();
    }
    readByHash(query) {
        return this.srv.getFileByHash(query.id, query.hash);
    }
    getBackZip() {
        return this.srv.backUpZip();
    }
    fakedata(body, repeat) {
        return this.srv.pager(body, repeat);
    }
    fakenewdata(body, repeat, hash) {
        return this.srv.pager(body, repeat, hash);
    }
    replacedata(body, hash) {
        return this.srv.replaceData(body, hash);
    }
    delete(query) {
        return this.srv.deleteFiles(query.id, query.hash);
    }
};
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "readListHashs", null);
__decorate([
    (0, common_1.Get)("search"),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "readByHash", null);
__decorate([
    (0, common_1.Get)('backup'),
    (0, common_1.Header)('Content-Type', 'application/zip'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "getBackZip", null);
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "fakedata", null);
__decorate([
    (0, common_1.Post)(":hash"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)()),
    __param(2, (0, common_1.Param)("hash")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "fakenewdata", null);
__decorate([
    (0, common_1.Patch)("replace"),
    __param(0, (0, common_1.Body)()),
    __param(1, (0, common_1.Query)("hash")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "replacedata", null);
__decorate([
    (0, common_1.Delete)(),
    __param(0, (0, common_1.Query)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PagerController.prototype, "delete", null);
PagerController = __decorate([
    (0, common_1.Controller)("pager"),
    __metadata("design:paramtypes", [pager_service_1.PagerService])
], PagerController);
exports.PagerController = PagerController;
