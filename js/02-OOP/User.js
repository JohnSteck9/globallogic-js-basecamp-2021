export default class User {
    #_name;
    #_surname;
    #_bDate;

    constructor(name, surname, bDate) {
        // name - only letters, dashes, spaces, length <= 128
        if (name.match(/^[A-Za-z\-]{0,32}$/gm) === null)
            throw new SyntaxError("User name Error!");
        // surname - only letters, dashes, spaces, length <= 128
        if (surname.match(/^[A-Za-z\-]{0,64}$/gm) === null)
            throw new SyntaxError("User surname Error!");

        if (
            bDate.toString().match(/^[0-9]{4}$/gm) === null ||
            bDate > new Date().getFullYear() ||
            bDate < 1900
        )
            throw new SyntaxError("User bDate Error!");

        this.#_name = name;
        this.#_surname = surname;
        this.#_bDate = bDate;
    }

    getName() { return this.#_name}
    setName(value) { this.#_name = value}

    getSurname() { return this.#_surname}
    setSurname(value) { this.#_surname = value}

    getBDate() { return this.#_bDate}
    setBDate(value) { this.#_bDate = value}

    getFullName() {
        return `${this.#_name} ${this.#_surname}`;
    }

    getFullInfo() {
        return `${this.#_name} ${this.#_surname}, ${this.#_bDate}`;
    }
}