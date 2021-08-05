import User from "./User.js";

export default class Student extends User {
    #_year;
    #_university;

    static counter = 0;

    static getCounter() {
        return `${this.counter}`;
    }

    constructor(
        name,
        surname,
        bDate,
        year,
        university = { name: "Unknown University" }
    ) {
        super(name, surname, bDate);

        if (
            year.toString().match(/^[0-9]{4}$/gm) === null ||
            year > new Date().getFullYear() ||
            year < 1900
        )
            throw new SyntaxError("User bDate Error!");

        this.#_year = year;
        this.#_university = university;

        Student.counter++;
    }

    getYear() {
        return this.#_year;
    }
    setYear(value) {
        this.#_year = value;
    }

    getUniversity() {
        return this.#_year;
    }
    setUniversity(value) {
        this.#_university = value;
    }

    getCourse() {
        const course = new Date().getFullYear() - this.#_year + 1;
        return course <= 6 ? course : 6;
    }

    isFinished() {
        const course = new Date().getFullYear() - this.#_year + 1;
        return course > 6 ? true : false;
    }

    getFullInfo() {
        return `${super.getFullInfo()}, ${this.#_university?.name}, ${this.#_year}`;
    }
}