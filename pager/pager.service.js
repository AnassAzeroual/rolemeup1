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
Object.defineProperty(exports, "__esModule", { value: true });
exports.PagerService = void 0;
const common_1 = require("@nestjs/common");
const fs = require("fs");
const jf = require("jsonfile");
const md5 = require("md5");
const faker_service_1 = require("./../faker/faker.service");
const AdmZip = require("adm-zip");
let PagerService = class PagerService {
    constructor(srv) {
        this.srv = srv;
        this.filePath = "./sources";
        this.fileHashed = "";
        this.file = "";
    }
    pager(data, { repeat, skip, take }, hash) {
        if (hash) {
            fs.unlink(`${this.filePath}/${hash}.json`, (err) => { console.log(err); });
        }
        this.fileHashed = this.hasher(data);
        if (!this.isExists(`${this.filePath}/${this.fileHashed}.json`)) {
            this.createFile(this.filePath, this.fileHashed, data, repeat);
        }
        return this.getFile(skip, take);
    }
    replaceData(data, hash) {
        this.fileHashed = hash;
        this.createSourceFolder();
        this.file = `${this.filePath}/${hash}.json`;
        jf.writeFileSync(this.file, data, { flag: "w" });
        return this.getFile();
    }
    createSourceFolder() {
        if (!this.isExists(this.filePath)) {
            fs.mkdirSync(this.filePath);
        }
    }
    hasher(file) {
        return md5(JSON.stringify(file));
    }
    isExists(path) {
        return fs.existsSync(path);
    }
    createFile(path, fileName, data, repeat = 1) {
        this.file = `${path}/${fileName}.json`;
        this.createSourceFolder();
        if (!this.isExists(this.file)) {
            const fakedList = [];
            for (let i = 0; i < repeat; i++) {
                fakedList.push(this.srv.scanPayload(data));
            }
            jf.writeFileSync(this.file, fakedList, { flag: "w" });
        }
    }
    getFile(skip = 0, take = 10) {
        this.file = `${this.filePath}/${this.fileHashed}.json`;
        let jsonData = [];
        if (this.file) {
            jsonData = jf.readFileSync(this.file);
        }
        if (jsonData instanceof Array) {
            jsonData = jsonData.splice(skip, take);
        }
        return { content: jsonData, hash: this.fileHashed };
    }
    getFileByHash(id, hash) {
        let res = {};
        if (id && hash) {
            id = Number(id);
            this.file = `${this.filePath}/${hash}.json`;
            const jsoData = jf.readFileSync(this.file);
            jsoData.forEach(e => {
                if (e.hasOwnProperty("id") && e.id === id) {
                    res = e;
                }
            });
            return res;
        }
        if (!id && hash) {
            this.file = `${this.filePath}/${hash}.json`;
            const jsoData = jf.readFileSync(this.file);
            return jsoData;
        }
        return res;
    }
    listHashs() {
        let res = [];
        if (this.isExists(this.filePath)) {
            fs.readdirSync(this.filePath).forEach((file) => {
                let temp = file.split(".")[0];
                res.push(temp);
            });
        }
        return res;
    }
    deleteFiles(id, hash) {
        let res = {};
        if (id && hash) {
            id = Number(id);
            this.file = `${this.filePath}/${hash}.json`;
            const jsonData = jf.readFileSync(this.file);
            res = jsonData.filter(v => v.id !== id);
            jf.writeFileSync(this.file, res, { flag: "w" });
            return res;
        }
        if (!id && hash) {
            fs.unlink(`${this.filePath}/${hash}.json`, (err) => { console.log(err); });
        }
        else {
            fs.rmSync(this.filePath, { recursive: true, force: true });
        }
    }
    backUpZip() {
        const zip = new AdmZip();
        zip.addLocalFolder("sources");
        return new common_1.StreamableFile(zip.toBuffer());
    }
};
PagerService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [faker_service_1.FakerService])
], PagerService);
exports.PagerService = PagerService;
