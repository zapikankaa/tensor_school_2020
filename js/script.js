let studentsData = [
    {
        "fullname": "Маша Иванова",
        "birthday": "1.05.1999",
        "university": "УГАТУ",
        "course": 2,
        "photo": "../img/arya.jpg",
        "telephone": "79994561236"
    },
    {
        "fullname": "Вавилен Татарский",
        "birthday": "8.01.1997",
        "university": "СурГУ",
        "course": 3,
        "photo": "../img/cold_king.jpg",
        "telephone": "79965875056"
    },
    {
        "fullname": "Даниэль Риверо Падилья",
        "birthday": "18.12.1991",
        "university": "БГУ",
        "course": 4,
        "photo": "../img/jon_snow.jpg",
        "telephone": "79056655636"
    },
    {
        "fullname": "Маргарита Анна-Лиза фон Гейзенберг",
        "birthday": "23.10.1994",
        "university": "УГАТУ",
        "course": 2,
        "photo": "../img/cersei.jpg",
        "telephone": ""
    },
    {
        "fullname": "Миша Петров",
        "birthday": "11.05.1997",
        "university": "УрФУ",
        "course": 3,
        "photo": "../img/ramsay.jpg"
    },
    {
        "fullname": "Ян Коган",
        "birthday": "19.07.1994",
        "university": "БГУ",
        "course": 4,
        "photo": "../img/tyrion.jpg"
    },
    {
        "fullname": "Симон Гроф",
        "birthday": "15.11.1998",
        "university": "УГАТУ",
        "course": 2,
        "photo": "../img/ygritte.jpg"
    },
    {
        "fullname": "Марат Сидоров",
        "birthday": "14.08.1999",
        "university": "СурГУ",
        "course": 3,
        "photo": "../img/tormund.jpg"
    }
];

class Student {
    constructor(data) {
        this.fullname = data.fullname;
        this.birthday = data.birthday;
        this.university = data.university;
        this.course = data.course;
        this.photo = data.photo;
    }
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

    let user = document.getElementsByClassName('user')[0];
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