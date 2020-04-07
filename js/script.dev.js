'use strict';

let studentsData = [
    {
        "id": 111,                        // id
        "firstName": "Маша",              // имя
        "lastName": "Иванова",            // фамилия
        "sex": "female",                  // пол
        "birthday": "1999-04-01",         // дата рождения
        "university": "УГАТУ",            // университет
        "course": 2,                      // курс
        "photo": "./img/arya.jpg",        // ссылка на фото
        "telephone": "79994561236",       // телефон
        "online": "2020-04-06T20:37",     // в сети
        "friendsNumber": 124              // количество друзей
    },
    {
        "id": 114,
        "firstName": "Маргарита Анна-Лиза",
        "lastName": "фон Гейзенберг",
        "sex": "female",
        "birthday": "1994-10-23",
        "university": "УГАТУ",
        "course": 2,
        "photo": "./img/cersei.jpg",
        "telephone": "",
        "online": "2020-04-07T08:03",
        "friendsNumber": 3489
    },
    {
        "id": 112,
        "firstName": "Вавилен",
        "lastName": "Татарский",
        "sex": "male",
        // "birthday": "1997-01-08", закомменчено для примера
        "university": "СурГУ",
        "course": 3,
        "photo": "./img/cold_king.jpg",
        "telephone": "79965875056",
        "online": "2020-03-26T14:21",
        "friendsNumber": 56
    },
    {
        "id": 113,
        "firstName": "Даниэль",
        "lastName": "Риверо Падилья",
        "sex": "male",
        "birthday": "1991-12-18",
        "university": "БГУ",
        "course": 4,
        "photo": "./img/jon_snow.jpg",
        "telephone": "79056655636",
        "online": "now",
        "friendsNumber": 9
    },
    {
        "id": 115,
        "firstName": "Миша",
        "lastName": "Петров",
        "sex": "male",
        "birthday": "1997-05-11",
        "university": "УрФУ",
        "course": 3,
        "photo": "./img/ramsay.jpg",
        "telephone": "",
        "online": "now",
        "friendsNumber": 84
    },
    {
        "id": 116,
        "firstName": "Ян",
        "lastName": "Коган",
        "sex": "male",
        "birthday": "1994-07-19",
        "university": "БГУ",
        "course": 4,
        "photo": "./img/tyrion.jpg",
        "telephone": "",
        "online": "now",
        "friendsNumber": 267
    },
    {
        "id": 117,
        "firstName": "Симон",
        "lastName": "Гроф",
        "sex": "female",
        "birthday": "1998-11-15",
        "university": "УГАТУ",
        "course": 2,
        "photo": "./img/ygritte.jpg",
        "telephone": "",
        "online": "now",
        "friendsNumber": 84
    },
    {
        "id": 118,
        "firstName": "Марат",
        "lastName": "Сидоров",
        "sex": "male",
        "birthday": "1999-08-14",
        "university": "СурГУ",
        "course": 3,
        "photo": "./img/tormund.jpg",
        "telephone": "",
        "online": "now",
        "friendsNumber": 456
    }
];

class Student {
    constructor(data) {
        this.id = data.id;                         // id
        this.firstName = data.firstName;           // имя
        this.lastName = data.lastName;             // фамилия
        this.sex = data.sex;                       // пол
        this.birthday = data.birthday;             // день рождения
        this.university = data.university;         // университет
        this.course = data.course;                 // курс  
        this.photo = data.photo;                   // ссылка на фото
        this.telephone = data.telephone;           // телефон
        this.online = data.online;                 // в сети
        this.friendsNumber = data.friendsNumber;   // количество друзей
    }

    // полное имя
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }

    // возраст
    get age() {
        let now = new Date();
        let birthday = Date.parse(this.birthday);
        let age = Math.floor( ( now - birthday ) / 1000 / 3600 / 24 / 365 );
        return age;
    }

    // возраст в формате 'N лет'
    get yearsOld() {
        let a = this.age % 10;
        if (a == 1) {
            if (a != 11) return `${ this.age } год`;
        } else if (a > 1 && a < 5) {
            return `${ this.age } года`;
        } else {
            return `${ this.age } лет`;
        }
    }

    // статус
    get status() {
        if (this.online == 'now') return 'Онлайн';

        let online = new Date( Date.parse(this.online) );
        let year = online.getFullYear(),
            month = online.getMonth(),
            day = online.getDate(),
            hours = online.getHours(),
            minutes = online.getMinutes();
        let date;

        minutes = (minutes > 9) ? minutes : `0${ minutes }`;
        
        let now = new Date();
        if (now.getFullYear() != year) {
            date = `${ day } ${ getMonthName(month) } ${ year }`;
        } else {
            if (now.getMonth() != month) {
                date = `${ day } ${ getMonthName(month) } в ${ hours }:${ minutes }`;
            } else {
                if (now.getDate() == day) {
                    date = `сегодня в ${ hours }:${ minutes }`;
                } else if (now.getDate() - day == 1) {
                    date = `вчера в ${ hours }:${ minutes }`;
                }
            }
        }

        if (this.sex == 'male') return `Был ${ date }`;
        else return `Была ${ date }`;

    }
}

// получить название месяца из его порядкового номера
function getMonthName(monthNum) {
    switch (monthNum) {
        case 0: return 'января';
        case 1: return 'февраля';
        case 2: return 'марта';
        case 3: return 'апреля';
        case 4: return 'мая';
        case 5: return 'июня';
        case 6: return 'июля';
        case 7: return 'августа';
        case 8: return 'сентября';
        case 9: return 'октября';
        case 10: return 'ноября';
        case 11: return 'декабря';
    }
}

/* 

<div class="student">
    <img class="student__img student__img_border-radius_25" src="img/ava2.png" alt="Марат Сидоров" />
    <h3 class="student__name" title="Марат Сидоров">Марат Сидоров</h3>
    <p class="student__description" title="СурГУ 3 курс">СурГУ 3 курс</p>
</div> 

*/

function renderStudent(student) {
    let blockStudent = createEl('div');
    blockStudent.classList = 'student';
    blockStudent.dataset.id = student.id;

    let student__img = createEl('img');
    student__img.classList = 'student__img student__img_border-radius_50';
    student__img.src = student.photo;
    student__img.alt = student.fullName;

    let student__name = createEl('h3');
    student__name.classList = 'student__name';
    student__name.title = student.fullName;
    student__name.textContent = student.fullName;

    let student__description = createEl('p');
    student__description.classList = 'student__description';
    student__description.title = 
        `${ student.university } ${ student.course } курс`;
    student__description.textContent = 
        `${ student.university } ${ student.course } курс`;

    blockStudent.append(student__img, student__name, student__description);
    document.querySelector('.students').append(blockStudent);

    return blockStudent;
}

/* 

<div class="modal">
    <div class="user">
        <p class="user__status">Был сегодня в 10:00</p>
        <div class="user__close">
            <img class="close" alt="Закрыть" src="img/close.svg" />
        </div>
        <h3 class="user__name">Каримов Эмиль</h3>
        <div class="user__info">
            <p class="user__attribute">
                День рождения
            </p>
            <p class="user__data user__data_birthday">15 декабря, 21 год</p>
            <p class="user__attribute">
                Телефон
            </p>
            <p class="user__data user__data_telephone">+7 996 402 21 97</p>
        </div>
        <div class="user__contact">
            <img class="user__message" src="img/message.svg" alt="message" />
            <a class="user__friends" href="#">Друзей 254</a>
            <div class="friends">
                <a class="friends__item" href="#">
                    <img class="friends__icon" alt="friend1" src="img/ava2.png">
                </a>
                <a class="friends__item" href="#">
                    <img class="friends__icon" alt="friend1" src="img/ava3.png">
                </a>
                <a class="friends__item" href="#">
                    <img class="friends__icon" alt="friend1" src="img/ava1.png">
                </a>
                <a class="friends__item" href="#">
                    <img class="friends__icon" alt="friend1" src="img/ava2.png">
                </a>
            </div>
        </div>
        <img class="user__avatar" src="img/ava1.png" alt="Каримов Эмиль" />
    </div>
</div> 

*/

function renderUser(user) {

    let blockUser = createEl('div');
    blockUser.classList = 'user';

    let user__status = createEl('p');
    user__status.classList = 'user__status';
    user__status.title = user.status;
    user__status.textContent = user.status;

    let user__close = createEl('div');
    user__close.classList = 'user__close';

    let close = createEl('img');
    close.classList = 'close';
    close.alt = 'Закрыть';
    close.src = './img/close.svg';

    let user__name = createEl('h3');
    user__name.classList = 'user__name';
    user__name.title = (user.fullName) ? user.fullName : 'Неизвестно';
    user__name.textContent = (user.fullName) ? user.fullName : 'Неизвестно';

    let user__info = createEl('div');
    user__info.classList = 'user__info';
    
    let user__attribute_birthday = createEl('p');
    user__attribute_birthday.classList = 'user__attribute';
    user__attribute_birthday.textContent = 'День рождения';

    let birthday = new Date(Date.parse(user.birthday));
        let user__data_birthday = createEl('p');
    user__data_birthday.classList = 'user__data user__data_birthday';
    if (user.birthday) {
        user__data_birthday.title = `${ birthday.getDate() } ${ getMonthName( birthday.getMonth() ) }, ${ user.yearsOld }`;
        user__data_birthday.textContent = `${ birthday.getDate() } ${ getMonthName( birthday.getMonth() ) }, ${ user.yearsOld }`;
    } else {
        user__data_birthday.title = 'Неизвестен';
        user__data_birthday.textContent = 'Неизвестен';
    }
    

    let user__attribute_telephone = createEl('p');
    user__attribute_telephone.classList = 'user__attribute';
    user__attribute_telephone.textContent = 'Телефон';

    let user__data_telephone = createEl('p');
    user__data_telephone.classList = 'user__data user__data_birthday';
    if (user.telephone) {
        user__data_telephone.title = `+${ user.telephone.slice(0, 1) } ${ user.telephone.slice(1, 4) } ${ user.telephone.slice(4, 7) } ${ user.telephone.slice(7, 9) } ${ user.telephone.slice(9, 11) }`;
        user__data_telephone.textContent = `+${ user.telephone.slice(0, 1) } ${ user.telephone.slice(1, 4) } ${ user.telephone.slice(4, 7) } ${ user.telephone.slice(7, 9) } ${ user.telephone.slice(9, 11) }`;
    } else {
        user__data_telephone.title = 'Неизвестен';
        user__data_telephone.textContent = 'Неизвестен';
    }
    

    let user__contact = createEl('div');
    user__contact.classList = 'user__contact';

    let user__message = createEl('img');
    user__message.classList = 'user__message';
    user__message.alt = 'Написать сообщение';
    user__message.src = './img/message.svg';

    let user__friends = createEl('a');
    user__friends.classList = 'user__friends';
    user__friends.href = '#';
    user__friends.textContent = `Друзей ${ user.friendsNumber }`;

    let friends = createEl('div');
    friends.classList = 'friends';
    for (let i = 0; i < 4; i++) {
        let friend__item = createEl('a');
        friend__item.classList = 'friends__item';
        friend__item.href = '#';

        let friends__icon = createEl('img');
        friends__icon.classList = 'friends__icon';
        friends__icon.alt = `friend${ i }`;
        friends__icon.title = `friend${ i }`;
        friends__icon.src = `./img/ava${ i }.png`;

        friend__item.append(friends__icon);
        friends.append(friend__item);
    }

    let user__avatar = createEl('img');
    user__avatar.classList = 'user__avatar';
    user__avatar.alt = user.fullName;
    user__avatar.src = user.photo;

    user__contact.append(user__message, user__friends, friends);
    user__info.append(user__attribute_birthday, user__data_birthday, user__attribute_telephone, user__data_telephone);
    user__close.append(close);
    blockUser.append(user__status, user__close, user__name, user__info, user__contact, user__avatar);

    return blockUser;
}

function createEl(tag) {
    // принимает строку с названием HTML-тега
    // возвращает HTML-элемент с заданным тегом
    return document.createElement(tag);
}

function showUser(e) {
    let student = e.target;

    student = student.closest('.student');
    student.removeEventListener('click', showUser);

    let id = student.dataset.id;
    let user = students[id];

    let newUser = renderUser(user);
    student.append(newUser);
    newUser.style.left = `${ 5 }px`;
    newUser.style.top = `${ 5 }px`;

    let userClose = newUser.querySelector('.close');

    userClose.addEventListener('click', hideUser);

    // доработать
    // setTimeout(() => {
    //     document.body.addEventListener('click', checkUser);
    // }, 100);
    
}
// доработать
function checkUser(e) {
    console.log('wtf');
    let users = document.querySelectorAll('.user');
    for (let user of users) {
        if (e.target != user) {
            let student = user.closest('.student');
            document.body.removeEventListener('click', checkUser);
            user.removeEventListener('click', hideUser);
            user.remove();
            student.addEventListener('click', showUser);
        }
    }
}

function hideUser(e) {
    let user = e.target.closest('.user');
    let student = user.closest('.student');

    document.body.removeEventListener('click', checkUser);
    user.removeEventListener('click', hideUser);
    user.remove();
    student.addEventListener('click', showUser);
}

let students = {};

for (let student of studentsData) {
    let newStudent = new Student(student);
    students[student.id] = newStudent;
    newStudent = renderStudent(newStudent);
    newStudent.addEventListener('click', showUser);
}
