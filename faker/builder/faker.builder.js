"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Faker = void 0;
class Faker {
    constructor() {
        this.container = {};
        this.container = {};
    }
    set_number(key = 'number') {
        this.container[key] = "number";
        return this;
    }
    set_id(key = 'id') {
        this.container[key] = 'id';
        return this;
    }
    set_uuid(key = 'uuid') {
        this.container[key] = 'uuid';
        return this;
    }
    set_amount(key = 'amount') {
        this.container[key] = 'amount';
        return this;
    }
    set_string(key = 'string') {
        this.container[key] = 'string';
        return this;
    }
    set_city(key = 'city') {
        this.container[key] = 'city';
        return this;
    }
    set_country(key = 'country') {
        this.container[key] = 'country';
        return this;
    }
    set_countrycode(key = 'countrycode') {
        this.container[key] = 'countrycode';
        return this;
    }
    set_phone(key = 'phone') {
        this.container[key] = 'phone';
        return this;
    }
    set_name(key = 'name') {
        this.container[key] = 'name';
        return this;
    }
    set_firstname(key = 'firstname') {
        this.container[key] = 'firstname';
        return this;
    }
    set_lastname(key = 'lastname') {
        this.container[key] = 'lastname';
        return this;
    }
    set_email(key = 'email') {
        this.container[key] = 'email';
        return this;
    }
    set_address(key = 'address') {
        this.container[key] = 'address';
        return this;
    }
    set_company(key = 'company') {
        this.container[key] = 'company';
        return this;
    }
    set_date(key = 'date') {
        this.container[key] = 'date';
        return this;
    }
    set_date_past(key = 'date_past') {
        this.container[key] = 'date_past';
        return this;
    }
    set_date_future(key = 'date_future') {
        this.container[key] = 'date_future';
        return this;
    }
    set_date_recent(key = 'date_recent') {
        this.container[key] = 'date_recent';
        return this;
    }
    set_date_soon(key = 'date_soon') {
        this.container[key] = 'date_soon';
        return this;
    }
    set_date_month(key = 'date_month') {
        this.container[key] = 'date_month';
        return this;
    }
    set_date_weekday(key = 'date_weekday') {
        this.container[key] = 'date_weekday';
        return this;
    }
    set_boolean(key = 'boolean') {
        this.container[key] = 'boolean';
        return this;
    }
    set_suffixe(key = 'suffixe') {
        this.container[key] = 'suffixe';
        return this;
    }
    set_color(key = 'color') {
        this.container[key] = 'color';
        return this;
    }
    set_department(key = 'department') {
        this.container[key] = 'department';
        return this;
    }
    set_price(key = 'price') {
        this.container[key] = 'price';
        return this;
    }
    set_product(key = 'product') {
        this.container[key] = 'product';
        return this;
    }
    set_description(key = 'description') {
        this.container[key] = 'description';
        return this;
    }
    set_material(key = 'material') {
        this.container[key] = 'material';
        return this;
    }
    set_image(key = 'image') {
        this.container[key] = 'image';
        return this;
    }
    set_enum(list, key = 'enum') {
        this.container[key] = `enum(${list})`;
        return this;
    }
    set_date_format(format = 'yyyy-MM-dd hh:mm:ss a', key = 'date_format') {
        this.container[key] = `date_format(${format})`;
        return this;
    }
    set_date_between(start, end, key = 'date_between') {
        this.container[key] = `date_between(${start},${end})`;
        return this;
    }
    set_date_betweens(start, end, key = 'date_betweens') {
        this.container[key] = `date_betweens(${start},${end})`;
        return this;
    }
    set_string_length(length, key = 'string_length') {
        this.container[key] = `string_length(${length})`;
        return this;
    }
    deepLevel(value, key = 'deep') {
        this.container[key] = value;
        return this;
    }
    build() {
        return this.container;
    }
}
exports.Faker = Faker;
