window.addEventListener('load', setEventListeners);

function setEventListeners() {
    let students = document.getElementsByClassName('student');
    for (student of students) {
        student.addEventListener('click', showModal);
    }
    let modalClose = document.getElementsByClassName('close')[0];
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