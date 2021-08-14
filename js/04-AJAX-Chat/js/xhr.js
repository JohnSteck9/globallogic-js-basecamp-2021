import User from "./User.js";

const randomUserURL = 'https://randomuser.me/api/'
const randomTextURL = 'https://baconipsum.com/api/?type=all-meat&paras=1'

const btnAddUser = document.getElementById("btn__add-user");
btnAddUser.addEventListener("click", () => addUser('GET', randomUserURL));

function addUser(method, url){
    getDataXHR(method, url)
        .then(data => {
            console.log({
                name : data?.results[0]?.name.first,
                surname : data?.results[0]?.name?.last,
                age : data?.results[0]?.dob?.age,
                city : data?.results[0]?.location?.city,
                phone : data?.results[0]?.phone,
                picture : data?.results[0]?.picture?.large
            })
            const user = new User({
                name : data?.results[0]?.name.first,
                surname : data?.results[0]?.name?.last,
                age : data?.results[0]?.dob?.age,
                city : data?.results[0]?.location?.city,
                phone : data?.results[0]?.phone,
                picture : data?.results[0]?.picture?.large
            });

            btnAddUser.insertAdjacentHTML("beforebegin", user.userHTML());

            return user
        })
        .then(user => {
            const chatHeader = document.getElementById("chat_header");

            setInterval(() => {

                getDataFetch(randomTextURL)
                    .then(data => user.userMassageHTML(data))
                    .then(userMassageHTML => {
                        chatHeader.insertAdjacentHTML("afterend", userMassageHTML);
                    })
                    .catch(err=>console.error(err))

            }, user.timeDelay);


        })
        .catch(err => {
            console.error(err)
        })
}


function getDataFetch(url) {
    return fetch(url)
        .then(response => {
            return response.json()
        })
        .catch(err => console.log(err))
}

function getDataXHR(method, userURL){
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest();
        xhr.open(method, userURL);
        xhr.responseType = 'json';

        xhr.onload = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response)
            } else {
                reject(xhr.response)
            }
        };

        xhr.onprogress = (event) => {
            if (event.lengthComputable) {
                alert(`Received ${event.loaded} з ${event.total} bytes`);
            } else {
                console.log(`Received ${event.loaded} bytes`); // якщо в ответе нет заголовка Content-Length
            }
        };

        xhr.onerror = () => {
            reject(xhr.response)
        };

        xhr.send();
    })
}


