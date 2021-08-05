import User from "./User.js";

export default class Worker extends User {
    #_days;
    #_retired;

    static counter = 0;

    static getCounter() {
        return `${this.counter}`;
    }

    constructor(name, surname, bDate, rate, days, retired = false) {
        super(name, surname, bDate);

        this.rate = rate;
        this.#_days = days;
        this.#_retired = retired;

        Worker.counter++;
    }

    getDays() {
        return this.#_days;
    }
    setDays(value) {
        this.#_days = value;
    }

    getRate() {
        return this.rate;
    }
    setRate(value) {
        this.rate = value;
    }

    getSalary = () => (this.#_retired === false ? this.#_days * this.rate : 0);
    
    isRetired = () => this.#_retired;
    
    setRetired(value) {
        this.#_retired = value;
    }
}