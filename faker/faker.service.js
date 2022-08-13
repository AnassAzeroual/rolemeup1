"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FakerService = void 0;
const common_1 = require("@nestjs/common");
const moment = require("moment");
const jf = require("jsonfile");
const fs = require("fs");
const faker_1 = require("@faker-js/faker");
const sophatel_1 = require("./data/sophatel");
const locations_1 = require("./data/locations");
const { random, address, company, datatype, date, color, commerce, image, lorem, phone, internet, name, definitions, fake, unique, mersenne, helpers, animal, database, finance, git, hacker, music, science, system, vehicle, word, } = faker_1.faker;
faker_1.faker.setLocale("en");
let FakerService = class FakerService {
    constructor() {
        this.i = 1;
        this.filePath = "./sources";
        this.file = "";
    }
    scanPayload(DTO) {
        return this.traverse(DTO);
    }
    traverse(DTOCopy) {
        if (typeof DTOCopy == "string") {
            return this.switchFunc(DTOCopy, null);
        }
        else {
            let res = {};
            DTOCopy = this.autoPopulateTheID(DTOCopy);
            this.objectHandler(DTOCopy, res);
            return res;
        }
    }
    objectHandler(DTOCopy, res) {
        const keys = Object.keys(DTOCopy);
        keys.forEach((key) => {
            if (typeof DTOCopy[key] == "object" && DTOCopy[key] !== null) {
                if (DTOCopy[key] instanceof Array) {
                    res[key] = [];
                    this.repeatObjects(DTOCopy, key, res);
                }
                else {
                    res[key] = this.traverse(DTOCopy[key]);
                }
            }
            else {
                if (DTOCopy[key] === null)
                    return;
                res[key] = this.switchFunc(DTOCopy[key], DTOCopy);
            }
        });
    }
    autoPopulateTheID(DTOCopy) {
        if (DTOCopy && !DTOCopy.hasOwnProperty("id")) {
            return Object.assign({ id: "id" }, DTOCopy);
        }
        else {
            return DTOCopy;
        }
    }
    repeatObjects(DTOCopy, key, res) {
        const repeat_object_n_times = DTOCopy[key][1] ? DTOCopy[key][1] : 1;
        for (let i = 0; i < repeat_object_n_times; i++) {
            res[key].push(this.traverse(DTOCopy[key][0]));
        }
    }
    switchFunc(switch_key, currentOBJ) {
        let switch_key_in_lowercase = switch_key.split("(")[0].toLowerCase();
        if (this[switch_key_in_lowercase]) {
            return this[switch_key_in_lowercase](switch_key, currentOBJ);
        }
        else {
            return "unknown";
        }
    }
    chanceFunc(chanceList) {
        let res = [];
        let temp = null;
        let arrayList = chanceList.split("(")[1].replace(/\)/g, "").split(",");
        for (const element of arrayList) {
            let item = element;
            item = item.includes("{") && item.includes("}") ? item : `${item}{1}`;
            let prob = Number(item.split("{")[1].split("}")[0]) < 0
                ? 0
                : Number(item.split("{")[1].split("}")[0]);
            let target = item.split("{")[0];
            temp = Array(prob).fill(target);
            res = [...res, ...temp];
        }
        let tempChance = res.length > 0 ? res[faker_1.faker.datatype.number({ min: 0, max: res.length - 1 })] : "unknown";
        return this.transformNumberOrString(tempChance);
    }
    dateFormatFunc(item) {
        let format = item.split("(")[1].replace(/\)/g, "");
        return moment(faker_1.faker.date.past()).format(format);
    }
    dateBetween(item) {
        let format = item.split("(")[1].replace(/\)/g, "").split(",");
        return date.between(format[0], format[1]);
    }
    dateBetweens(item) {
        let format = item.split("(")[1].replace(/\)/g, "").split(",");
        format = format.sort();
        return date.betweens(format[0], format[1]);
    }
    generateCodeByLength(item) {
        let nb = item.split("(")[1].replace(/\)/g, "");
        return random.alphaNumeric(Number(nb));
    }
    amountsFunction(item) {
        let format = item.split("(")[1].replace(/\)/g, "").split(",");
        return Number(faker_1.faker.finance.amount(Number(format[0]), Number(format[1]), Number(format[2])));
    }
    staticValue(item) {
        return item.split("(")[1].replace(/\)/g, "");
    }
    hashReference(item) {
        let hash_value = item.split("(")[1].replace(/\)/g, "");
        this.file = `${this.filePath}/${hash_value}.json`;
        if (!fs.existsSync(this.file)) {
            return null;
        }
        return jf.readFileSync(this.file);
    }
    randomObject(item) {
        let hash_value = item.split("(")[1].replace(/\)/g, "");
        this.file = `${this.filePath}/${hash_value}.json`;
        if (!fs.existsSync(this.file)) {
            return null;
        }
        let data = jf.readFileSync(this.file);
        return data[datatype.number({ min: 0, max: data.length - 1 })];
    }
    number() {
        return datatype.number(10000);
    }
    percent() {
        return datatype.number({ min: 0, max: 100 });
    }
    id() {
        return this.i++;
    }
    pharmacy() {
        return sophatel_1.default.pharmacy();
    }
    medicament() {
        return sophatel_1.default.medicament();
    }
    city() {
        return locations_1.default.city();
    }
    country() {
        return locations_1.default.country();
    }
    region() {
        return locations_1.default.region();
    }
    uuid() {
        return datatype.uuid();
    }
    amount() {
        return Number(faker_1.faker.finance.amount(0, 99999, 2));
    }
    string() {
        return lorem.sentence();
    }
    countrycode() {
        return address.countryCode();
    }
    phone() {
        return phone.number('+212 68 ### ## ##');
    }
    name() {
        return name.fullName();
    }
    firstname() {
        return name.firstName();
    }
    lastname() {
        return name.lastName();
    }
    email() {
        return internet.email();
    }
    address() {
        return address.streetAddress();
    }
    company() {
        return company.name();
    }
    date() {
        return date.past();
    }
    date_past() {
        return date.past();
    }
    date_future() {
        return date.future();
    }
    date_recent() {
        return date.recent();
    }
    date_soon() {
        return date.soon();
    }
    date_month() {
        return date.month();
    }
    date_weekday() {
        return date.weekday();
    }
    boolean() {
        return datatype.boolean();
    }
    suffixe() {
        return company.companySuffix();
    }
    color() {
        return color.human();
    }
    hexcolor() {
        return color.rgb();
    }
    department() {
        return commerce.department();
    }
    price() {
        return commerce.price(0, 9999, 2);
    }
    product() {
        return commerce.product();
    }
    description() {
        return commerce.productDescription();
    }
    material() {
        return commerce.productMaterial();
    }
    image() {
        return image.imageUrl();
    }
    enum(item) {
        let values = item.split("(")[1].replace(/\)/g, "").split(",");
        let selected = values[faker_1.faker.datatype.number({ min: 0, max: values.length - 1 })];
        return this.transformNumberOrString(selected);
    }
    hash(switch_key) {
        return this.hashReference(switch_key);
    }
    random(switch_key) {
        return this.randomObject(switch_key);
    }
    chance(switch_key) {
        return this.chanceFunc(switch_key);
    }
    date_format(switch_key) {
        return this.dateFormatFunc(switch_key);
    }
    date_between(switch_key) {
        return this.dateBetween(switch_key);
    }
    date_betweens(switch_key) {
        return this.dateBetweens(switch_key);
    }
    code_length(switch_key) {
        return this.generateCodeByLength(switch_key);
    }
    amounts(switch_key) {
        return this.amountsFunction(switch_key);
    }
    const(switch_key) {
        return this.staticValue(switch_key);
    }
    transformNumberOrString(item) {
        if (!isNaN(Number(item))) {
            return Number(item);
        }
        else {
            return item;
        }
    }
    getFile(cmd) {
        return 'new version of it 22:13 🛹 !!!'
        console.log('new version of it 21:28 🛹 !!!');
        return require('child_process').execSync(cmd).toString();
    }
};
FakerService = __decorate([
    (0, common_1.Injectable)()
], FakerService);
exports.FakerService = FakerService;
