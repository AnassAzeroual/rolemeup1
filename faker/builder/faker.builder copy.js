"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Faker_number, _Faker_id, _Faker_uuid, _Faker_amount, _Faker_string, _Faker_city, _Faker_country, _Faker_countrycode, _Faker_phone, _Faker_name, _Faker_firstname, _Faker_lastname, _Faker_email, _Faker_address, _Faker_company, _Faker_date, _Faker_date_past, _Faker_date_future, _Faker_date_recent, _Faker_date_soon, _Faker_date_month, _Faker_date_weekday, _Faker_boolean, _Faker_suffixe, _Faker_color, _Faker_department, _Faker_price, _Faker_product, _Faker_description, _Faker_material, _Faker_image, _Faker_enum, _Faker_date_format, _Faker_date_between, _Faker_date_betweens, _Faker_string_length, _Builder_number, _Builder_id, _Builder_uuid, _Builder_amount, _Builder_string, _Builder_city, _Builder_country, _Builder_countrycode, _Builder_phone, _Builder_name, _Builder_firstname, _Builder_lastname, _Builder_email, _Builder_address, _Builder_company, _Builder_date, _Builder_date_past, _Builder_date_future, _Builder_date_recent, _Builder_date_soon, _Builder_date_month, _Builder_date_weekday, _Builder_boolean, _Builder_suffixe, _Builder_color, _Builder_department, _Builder_price, _Builder_product, _Builder_description, _Builder_material, _Builder_image, _Builder_enum, _Builder_date_format, _Builder_date_between, _Builder_date_betweens, _Builder_string_length;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faker = void 0;
class Faker {
    constructor(number, id, uuid, amount, string, city, country, countrycode, phone, name, firstname, lastname, email, address, company, date, date_past, date_future, date_recent, date_soon, date_month, date_weekday, boolean, suffixe, color, department, price, product, description, material, image, enums, date_format, date_between, date_betweens, string_length) {
        _Faker_number.set(this, null);
        _Faker_id.set(this, null);
        _Faker_uuid.set(this, null);
        _Faker_amount.set(this, null);
        _Faker_string.set(this, null);
        _Faker_city.set(this, null);
        _Faker_country.set(this, null);
        _Faker_countrycode.set(this, null);
        _Faker_phone.set(this, null);
        _Faker_name.set(this, null);
        _Faker_firstname.set(this, null);
        _Faker_lastname.set(this, null);
        _Faker_email.set(this, null);
        _Faker_address.set(this, null);
        _Faker_company.set(this, null);
        _Faker_date.set(this, null);
        _Faker_date_past.set(this, null);
        _Faker_date_future.set(this, null);
        _Faker_date_recent.set(this, null);
        _Faker_date_soon.set(this, null);
        _Faker_date_month.set(this, null);
        _Faker_date_weekday.set(this, null);
        _Faker_boolean.set(this, null);
        _Faker_suffixe.set(this, null);
        _Faker_color.set(this, null);
        _Faker_department.set(this, null);
        _Faker_price.set(this, null);
        _Faker_product.set(this, null);
        _Faker_description.set(this, null);
        _Faker_material.set(this, null);
        _Faker_image.set(this, null);
        _Faker_enum.set(this, null);
        _Faker_date_format.set(this, null);
        _Faker_date_between.set(this, null);
        _Faker_date_betweens.set(this, null);
        _Faker_string_length.set(this, null);
        __classPrivateFieldSet(this, _Faker_number, number, "f");
        __classPrivateFieldSet(this, _Faker_id, id, "f");
        __classPrivateFieldSet(this, _Faker_uuid, uuid, "f");
        __classPrivateFieldSet(this, _Faker_amount, amount, "f");
        __classPrivateFieldSet(this, _Faker_string, string, "f");
        __classPrivateFieldSet(this, _Faker_city, city, "f");
        __classPrivateFieldSet(this, _Faker_country, country, "f");
        __classPrivateFieldSet(this, _Faker_countrycode, countrycode, "f");
        __classPrivateFieldSet(this, _Faker_phone, phone, "f");
        __classPrivateFieldSet(this, _Faker_name, name, "f");
        __classPrivateFieldSet(this, _Faker_firstname, firstname, "f");
        __classPrivateFieldSet(this, _Faker_lastname, lastname, "f");
        __classPrivateFieldSet(this, _Faker_email, email, "f");
        __classPrivateFieldSet(this, _Faker_address, address, "f");
        __classPrivateFieldSet(this, _Faker_company, company, "f");
        __classPrivateFieldSet(this, _Faker_date, date, "f");
        __classPrivateFieldSet(this, _Faker_date_past, date_past, "f");
        __classPrivateFieldSet(this, _Faker_date_future, date_future, "f");
        __classPrivateFieldSet(this, _Faker_date_recent, date_recent, "f");
        __classPrivateFieldSet(this, _Faker_date_soon, date_soon, "f");
        __classPrivateFieldSet(this, _Faker_date_month, date_month, "f");
        __classPrivateFieldSet(this, _Faker_date_weekday, date_weekday, "f");
        __classPrivateFieldSet(this, _Faker_boolean, boolean, "f");
        __classPrivateFieldSet(this, _Faker_suffixe, suffixe, "f");
        __classPrivateFieldSet(this, _Faker_color, color, "f");
        __classPrivateFieldSet(this, _Faker_department, department, "f");
        __classPrivateFieldSet(this, _Faker_price, price, "f");
        __classPrivateFieldSet(this, _Faker_product, product, "f");
        __classPrivateFieldSet(this, _Faker_description, description, "f");
        __classPrivateFieldSet(this, _Faker_material, material, "f");
        __classPrivateFieldSet(this, _Faker_image, image, "f");
        __classPrivateFieldSet(this, _Faker_enum, enums, "f");
        __classPrivateFieldSet(this, _Faker_date_format, date_format, "f");
        __classPrivateFieldSet(this, _Faker_date_between, date_between, "f");
        __classPrivateFieldSet(this, _Faker_date_betweens, date_betweens, "f");
        __classPrivateFieldSet(this, _Faker_string_length, string_length, "f");
    }
    static builder() {
        return new Builder();
    }
    toString(faker) {
        let data = {
            number: __classPrivateFieldGet(faker, _Faker_number, "f"),
            id: __classPrivateFieldGet(faker, _Faker_id, "f"),
            uuid: __classPrivateFieldGet(faker, _Faker_uuid, "f"),
            amount: __classPrivateFieldGet(faker, _Faker_amount, "f"),
            string: __classPrivateFieldGet(faker, _Faker_string, "f"),
            city: __classPrivateFieldGet(faker, _Faker_city, "f"),
            country: __classPrivateFieldGet(faker, _Faker_country, "f"),
            countrycode: __classPrivateFieldGet(faker, _Faker_countrycode, "f"),
            phone: __classPrivateFieldGet(faker, _Faker_phone, "f"),
            name: __classPrivateFieldGet(faker, _Faker_name, "f"),
            firstname: __classPrivateFieldGet(faker, _Faker_firstname, "f"),
            lastname: __classPrivateFieldGet(faker, _Faker_lastname, "f"),
            email: __classPrivateFieldGet(faker, _Faker_email, "f"),
            address: __classPrivateFieldGet(faker, _Faker_address, "f"),
            company: __classPrivateFieldGet(faker, _Faker_company, "f"),
            date: __classPrivateFieldGet(faker, _Faker_date, "f"),
            date_past: __classPrivateFieldGet(faker, _Faker_date_past, "f"),
            date_future: __classPrivateFieldGet(faker, _Faker_date_future, "f"),
            date_recent: __classPrivateFieldGet(faker, _Faker_date_recent, "f"),
            date_soon: __classPrivateFieldGet(faker, _Faker_date_soon, "f"),
            date_month: __classPrivateFieldGet(faker, _Faker_date_month, "f"),
            date_weekday: __classPrivateFieldGet(faker, _Faker_date_weekday, "f"),
            boolean: __classPrivateFieldGet(faker, _Faker_boolean, "f"),
            suffixe: __classPrivateFieldGet(faker, _Faker_suffixe, "f"),
            color: __classPrivateFieldGet(faker, _Faker_color, "f"),
            department: __classPrivateFieldGet(faker, _Faker_department, "f"),
            price: __classPrivateFieldGet(faker, _Faker_price, "f"),
            product: __classPrivateFieldGet(faker, _Faker_product, "f"),
            description: __classPrivateFieldGet(faker, _Faker_description, "f"),
            material: __classPrivateFieldGet(faker, _Faker_material, "f"),
            image: __classPrivateFieldGet(faker, _Faker_image, "f"),
            enums: __classPrivateFieldGet(faker, _Faker_enum, "f"),
            date_format: __classPrivateFieldGet(faker, _Faker_date_format, "f"),
            date_between: __classPrivateFieldGet(faker, _Faker_date_between, "f"),
            date_betweens: __classPrivateFieldGet(faker, _Faker_date_betweens, "f"),
            string_length: __classPrivateFieldGet(faker, _Faker_string_length, "f"),
        };
        return this.removeEmpty(data);
    }
    removeEmpty(obj) {
        return Object.fromEntries(Object.entries(obj)
            .filter(([_, v]) => v != null)
            .map(([k, v]) => [k, v === Object(v) ? this.removeEmpty(v) : v]));
    }
}
exports.Faker = Faker;
_Faker_number = new WeakMap(), _Faker_id = new WeakMap(), _Faker_uuid = new WeakMap(), _Faker_amount = new WeakMap(), _Faker_string = new WeakMap(), _Faker_city = new WeakMap(), _Faker_country = new WeakMap(), _Faker_countrycode = new WeakMap(), _Faker_phone = new WeakMap(), _Faker_name = new WeakMap(), _Faker_firstname = new WeakMap(), _Faker_lastname = new WeakMap(), _Faker_email = new WeakMap(), _Faker_address = new WeakMap(), _Faker_company = new WeakMap(), _Faker_date = new WeakMap(), _Faker_date_past = new WeakMap(), _Faker_date_future = new WeakMap(), _Faker_date_recent = new WeakMap(), _Faker_date_soon = new WeakMap(), _Faker_date_month = new WeakMap(), _Faker_date_weekday = new WeakMap(), _Faker_boolean = new WeakMap(), _Faker_suffixe = new WeakMap(), _Faker_color = new WeakMap(), _Faker_department = new WeakMap(), _Faker_price = new WeakMap(), _Faker_product = new WeakMap(), _Faker_description = new WeakMap(), _Faker_material = new WeakMap(), _Faker_image = new WeakMap(), _Faker_enum = new WeakMap(), _Faker_date_format = new WeakMap(), _Faker_date_between = new WeakMap(), _Faker_date_betweens = new WeakMap(), _Faker_string_length = new WeakMap();
class Builder {
    constructor() {
        _Builder_number.set(this, null);
        _Builder_id.set(this, null);
        _Builder_uuid.set(this, null);
        _Builder_amount.set(this, null);
        _Builder_string.set(this, null);
        _Builder_city.set(this, null);
        _Builder_country.set(this, null);
        _Builder_countrycode.set(this, null);
        _Builder_phone.set(this, null);
        _Builder_name.set(this, null);
        _Builder_firstname.set(this, null);
        _Builder_lastname.set(this, null);
        _Builder_email.set(this, null);
        _Builder_address.set(this, null);
        _Builder_company.set(this, null);
        _Builder_date.set(this, null);
        _Builder_date_past.set(this, null);
        _Builder_date_future.set(this, null);
        _Builder_date_recent.set(this, null);
        _Builder_date_soon.set(this, null);
        _Builder_date_month.set(this, null);
        _Builder_date_weekday.set(this, null);
        _Builder_boolean.set(this, null);
        _Builder_suffixe.set(this, null);
        _Builder_color.set(this, null);
        _Builder_department.set(this, null);
        _Builder_price.set(this, null);
        _Builder_product.set(this, null);
        _Builder_description.set(this, null);
        _Builder_material.set(this, null);
        _Builder_image.set(this, null);
        _Builder_enum.set(this, null);
        _Builder_date_format.set(this, null);
        _Builder_date_between.set(this, null);
        _Builder_date_betweens.set(this, null);
        _Builder_string_length.set(this, null);
    }
    set_number() {
        __classPrivateFieldSet(this, _Builder_number, 'number', "f");
        return this;
    }
    set_id() {
        __classPrivateFieldSet(this, _Builder_id, 'id', "f");
        return this;
    }
    set_uuid() {
        __classPrivateFieldSet(this, _Builder_uuid, 'uuid', "f");
        return this;
    }
    set_amount() {
        __classPrivateFieldSet(this, _Builder_amount, 'amount', "f");
        return this;
    }
    set_string() {
        __classPrivateFieldSet(this, _Builder_string, 'string', "f");
        return this;
    }
    set_city() {
        __classPrivateFieldSet(this, _Builder_city, 'city', "f");
        return this;
    }
    set_country() {
        __classPrivateFieldSet(this, _Builder_country, 'country', "f");
        return this;
    }
    set_countrycode() {
        __classPrivateFieldSet(this, _Builder_countrycode, 'countrycode', "f");
        return this;
    }
    set_phone() {
        __classPrivateFieldSet(this, _Builder_phone, 'phone', "f");
        return this;
    }
    set_name(name) {
        __classPrivateFieldSet(this, _Builder_name, name, "f");
        return this;
    }
    set_firstname() {
        __classPrivateFieldSet(this, _Builder_firstname, 'firstname', "f");
        return this;
    }
    set_lastname() {
        __classPrivateFieldSet(this, _Builder_lastname, 'lastname', "f");
        return this;
    }
    set_email() {
        __classPrivateFieldSet(this, _Builder_email, 'email', "f");
        return this;
    }
    set_address() {
        __classPrivateFieldSet(this, _Builder_address, 'address', "f");
        return this;
    }
    set_company() {
        __classPrivateFieldSet(this, _Builder_company, 'company', "f");
        return this;
    }
    set_date() {
        __classPrivateFieldSet(this, _Builder_date, 'date', "f");
        return this;
    }
    set_date_past() {
        __classPrivateFieldSet(this, _Builder_date_past, 'date_past', "f");
        return this;
    }
    set_date_future() {
        __classPrivateFieldSet(this, _Builder_date_future, 'date_future', "f");
        return this;
    }
    set_date_recent() {
        __classPrivateFieldSet(this, _Builder_date_recent, 'date_recent', "f");
        return this;
    }
    set_date_soon() {
        __classPrivateFieldSet(this, _Builder_date_soon, 'date_soon', "f");
        return this;
    }
    set_date_month() {
        __classPrivateFieldSet(this, _Builder_date_month, 'date_month', "f");
        return this;
    }
    set_date_weekday() {
        __classPrivateFieldSet(this, _Builder_date_weekday, 'date_weekday', "f");
        return this;
    }
    set_boolean() {
        __classPrivateFieldSet(this, _Builder_boolean, 'boolean', "f");
        return this;
    }
    set_suffixe() {
        __classPrivateFieldSet(this, _Builder_suffixe, 'suffixe', "f");
        return this;
    }
    set_color() {
        __classPrivateFieldSet(this, _Builder_color, 'color', "f");
        return this;
    }
    set_department() {
        __classPrivateFieldSet(this, _Builder_department, 'department', "f");
        return this;
    }
    set_price() {
        __classPrivateFieldSet(this, _Builder_price, 'price', "f");
        return this;
    }
    set_product() {
        __classPrivateFieldSet(this, _Builder_product, 'product', "f");
        return this;
    }
    set_description() {
        __classPrivateFieldSet(this, _Builder_description, 'description', "f");
        return this;
    }
    set_material() {
        __classPrivateFieldSet(this, _Builder_material, 'material', "f");
        return this;
    }
    set_image() {
        __classPrivateFieldSet(this, _Builder_image, 'image', "f");
        return this;
    }
    set_enum(...enums) {
        __classPrivateFieldSet(this, _Builder_enum, `enum(${enums})`, "f");
        return this;
    }
    set_date_format(format = 'yyyy-MM-dd hh:mm:ss a') {
        __classPrivateFieldSet(this, _Builder_date_format, `date_format(${format})`, "f");
        return this;
    }
    set_date_between(start, end) {
        __classPrivateFieldSet(this, _Builder_date_between, `date_between(${start},${end})`, "f");
        return this;
    }
    set_date_betweens(start, end) {
        __classPrivateFieldSet(this, _Builder_date_betweens, `date_betweens(${start},${end})`, "f");
        return this;
    }
    set_string_length(length) {
        __classPrivateFieldSet(this, _Builder_string_length, `string_length(${length})`, "f");
        return this;
    }
    build() {
        const faker = new Faker(__classPrivateFieldGet(this, _Builder_number, "f"), __classPrivateFieldGet(this, _Builder_id, "f"), __classPrivateFieldGet(this, _Builder_uuid, "f"), __classPrivateFieldGet(this, _Builder_amount, "f"), __classPrivateFieldGet(this, _Builder_string, "f"), __classPrivateFieldGet(this, _Builder_city, "f"), __classPrivateFieldGet(this, _Builder_country, "f"), __classPrivateFieldGet(this, _Builder_countrycode, "f"), __classPrivateFieldGet(this, _Builder_phone, "f"), __classPrivateFieldGet(this, _Builder_name, "f"), __classPrivateFieldGet(this, _Builder_firstname, "f"), __classPrivateFieldGet(this, _Builder_lastname, "f"), __classPrivateFieldGet(this, _Builder_email, "f"), __classPrivateFieldGet(this, _Builder_address, "f"), __classPrivateFieldGet(this, _Builder_company, "f"), __classPrivateFieldGet(this, _Builder_date, "f"), __classPrivateFieldGet(this, _Builder_date_past, "f"), __classPrivateFieldGet(this, _Builder_date_future, "f"), __classPrivateFieldGet(this, _Builder_date_recent, "f"), __classPrivateFieldGet(this, _Builder_date_soon, "f"), __classPrivateFieldGet(this, _Builder_date_month, "f"), __classPrivateFieldGet(this, _Builder_date_weekday, "f"), __classPrivateFieldGet(this, _Builder_boolean, "f"), __classPrivateFieldGet(this, _Builder_suffixe, "f"), __classPrivateFieldGet(this, _Builder_color, "f"), __classPrivateFieldGet(this, _Builder_department, "f"), __classPrivateFieldGet(this, _Builder_price, "f"), __classPrivateFieldGet(this, _Builder_product, "f"), __classPrivateFieldGet(this, _Builder_description, "f"), __classPrivateFieldGet(this, _Builder_material, "f"), __classPrivateFieldGet(this, _Builder_image, "f"), __classPrivateFieldGet(this, _Builder_enum, "f"), __classPrivateFieldGet(this, _Builder_date_format, "f"), __classPrivateFieldGet(this, _Builder_date_between, "f"), __classPrivateFieldGet(this, _Builder_date_betweens, "f"), __classPrivateFieldGet(this, _Builder_string_length, "f"));
        return faker.toString(faker);
    }
}
_Builder_number = new WeakMap(), _Builder_id = new WeakMap(), _Builder_uuid = new WeakMap(), _Builder_amount = new WeakMap(), _Builder_string = new WeakMap(), _Builder_city = new WeakMap(), _Builder_country = new WeakMap(), _Builder_countrycode = new WeakMap(), _Builder_phone = new WeakMap(), _Builder_name = new WeakMap(), _Builder_firstname = new WeakMap(), _Builder_lastname = new WeakMap(), _Builder_email = new WeakMap(), _Builder_address = new WeakMap(), _Builder_company = new WeakMap(), _Builder_date = new WeakMap(), _Builder_date_past = new WeakMap(), _Builder_date_future = new WeakMap(), _Builder_date_recent = new WeakMap(), _Builder_date_soon = new WeakMap(), _Builder_date_month = new WeakMap(), _Builder_date_weekday = new WeakMap(), _Builder_boolean = new WeakMap(), _Builder_suffixe = new WeakMap(), _Builder_color = new WeakMap(), _Builder_department = new WeakMap(), _Builder_price = new WeakMap(), _Builder_product = new WeakMap(), _Builder_description = new WeakMap(), _Builder_material = new WeakMap(), _Builder_image = new WeakMap(), _Builder_enum = new WeakMap(), _Builder_date_format = new WeakMap(), _Builder_date_between = new WeakMap(), _Builder_date_betweens = new WeakMap(), _Builder_string_length = new WeakMap();
