class User {
    static MIN_DELAY = 5;
    static MAX_DELAY = 30;

    constructor({name, surname, age, city, phone, picture}) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.city = city;
        this.phone = phone;
        this.picture = picture;
        this.timeDelay = this.getRandomInt(User.MIN_DELAY, User.MAX_DELAY) * 1000;
    }

    userHTML() {
        return `
            <div class="user">
                <div id="user__logo_box"><img class="user__logo" src="${this.picture}" alt="user image"></div>
                <div class="user__text_box">
                    <h4 id="user__name">${this.name} ${this.surname}</h4>
                    <p class="user__city">
                        City: <span id="user__city_data">${this.city}</span>
                    </p>
                    <p class="user__phone">
                        Phone:
                        <span id="user__phone_data"
                            >${this.phone}</span
                        >
                    </p>
                </div>
            </div>`;
    }

    userMassageHTML(text) {
        return `
            <div class="chat__block">
                <div class="chat__logo"><img class="user__logo" src="${this.picture}" alt="user image"></div>
                <div class="chat__text">
                    <div class="chat__text_title">${this.name.toUpperCase()} ${this.surname.toUpperCase()} ${this.age}</div>
                    <p class="chat__text_text">
                        ${text}
                    </p>
                </div>
            </div>`;
    }

    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
}

export default User;
