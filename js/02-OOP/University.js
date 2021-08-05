export default class University {

    constructor(name, city, zipCode) {
        this.name = name;
        this.city = city;
        this.zipCode = zipCode;
    }


    get name() {
        return this._name;
    }

    set name(value) {
        // name - only letters, dashes, spaces, length <= 128
        if (value.match(/^[A-Za-z\s\-]{0,128}$/gm) === null)
            throw new SyntaxError("University name Error!");
        this._name = value;
    }

    get city() {
        return this._city;
    }
    set city(value) {
        this._city = value;
    }

    get zipCode() {
        return this._zipCode;
    }
    set zipCode(value) {
        // zipCode - only numbers, length <= 5
        if (value.toString().match(/^[0-9]{0,5}$/gm) === null)
            throw new SyntaxError("University zipCode Error!");

        this._zipCode = value;
    }

    getAddress() {
        return `${this.name} - ${this.city.toUpperCase()}, ${this.zipCode}`;
    }
}