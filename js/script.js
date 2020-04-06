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
        "online": "2020-04-05T08:03",
        "friendsNumber": 3489
    },
    {
        "id": 112,
        "firstName": "Вавилен",
        "lastName": "Татарский",
        "sex": "male",
        "birthday": "1997-01-08",
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

    getMonthName(monthNum) {
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
    let modal = createEl('div').classList = 'modal';

    let user = createEl('div').classList = 'user';

    let user__status = createEl('p').classList = 'user__status';
    user__status.textContent = ``;

    modal.append(user);
}

function createEl(tag) {
    // принимает строку с названием HTML-тега
    // возвращает HTML-элемент с заданным тегом
    return document.createElement(tag);
}



let students = [];

for (student of studentsData) {
    let newStudent = new Student(student);
    students.push(newStudent);
    renderStudent(newStudent);
}






























function setEventListeners() {
    let students = document.getElementsByClassName('student');
    for (student of students) {
        student.addEventListener('click', showModal);
    }
    let modalClose = document.querySelector('.close');
    modalClose.addEventListener('click', hideModal);
}

function showModal(e) {
    let student = e.target;
    let name = student.getElementsByClassName('student__name')[0];
    // проверяем: если  таргет на внутреннем элементе, 
    // то надо найти сам блок student, на котором нажали,
    // чтобы достать из него инфу
    if (name == undefined) {
        student = student.closest('.student');
        name = student.getElementsByClassName('student__name')[0];
    }
    let photoSrc = student.getElementsByClassName('student__img')[0].src;
    let birthdate = student.dataset.birthdate;
    let telephone = student.dataset.telephone;
    let friendsNumber = student.dataset.friendsNumber;

    let coords = student.getBoundingClientRect();
    let x = coords.x;
    let y = coords.y;

    console.log(x, y);

    let modal = document.getElementsByClassName('modal')[0];

    let userName = modal.getElementsByClassName('user__name')[0];
    let userAvatar = modal.getElementsByClassName('user__avatar')[0];
    let userBD = modal.getElementsByClassName('table-data__val')[0];
    let userTel = modal.getElementsByClassName('table-data__val')[1];
    let userFN = modal.getElementsByClassName('user__friendsNum')[0];

    userName.textContent = name.textContent;
    userAvatar.src = photoSrc;
    userBD.textContent = birthdate;
    userTel.textContent = telephone;
    userFN.textContent = friendsNumber;

    // let user = document.getElementsByClassName('user')[0];
    user.style.left = `${x}px`;
    user.style.top = `${y - 76}px`;
    
    console.log(user)

    modal.style.display = 'block';
}

function hideModal() {
    let modal = document.getElementsByClassName('modal')[0];
    modal.style.display = 'none';
}

setEventListeners();