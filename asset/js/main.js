window.onload = () => {
    console.log('page is done loading');
}

const message = document.getElementById('message');
const success = document.getElementById('success');
let profile = [];

const submitForm = (e) => {
    e.preventDefault();

    const firstname = document.getElementById('firstname').value;
    const lastname = document.getElementById('lastname').value;
    const phoneNumber = document.getElementById('phoneNumber').value;
    const email = document.getElementById('email').value;
    const gender = document.getElementById('gender').value;

    let errorlog = 0;
    let error = [];

    if (firstname === '') {
        error.push({ id: 1, message: 'firstname cannot be empty' });
        errorlog++;
    }
    if (lastname === '') {
        error.push({ id: 2, message: 'lastname cannot be empty' });
        errorlog++;
    }
    if (phoneNumber === '') {
        error.push({ id: 3, message: 'where is your phone number please' });
        errorlog++;
    }
    if (email === '') {
        error.push({ id: 4, message: 'Email field cannot be empty' });
        errorlog++;
    }
    if (gender === '') {
        error.push({ id: 5, message: 'really genderless???' });
        errorlog++;
    }

    if (errorlog === 0) {
        let id = Math.floor(Math.random() * 100);
        let data = { id, firstname, lastname, phone_number: phoneNumber, email, gender }
        profile.push(data);
        listUser();
        document.getElementById('userReg').reset();
        success.innerHTML = `hooray form submitted successfully!`;
    } else {
        error.forEach(el => {
            message.innerHTML += `<span class="p-3">${el.message}, </span>`
        });
    }

    setTimeout(() => {
        message.innerHTML = '';
        success.innerHTML = '';
    }, 30000);

}

const listUser = () => {
    const data = document.getElementById('tableData');
    let count = 1;
    data.innerHTML = '';
    profile.forEach(el => {
        data.innerHTML += `<tr id="${el.id}"><td>${count++}</td><td>${el.firstname}</td><td>${el.lastname}</td><td>${el.phone_number}</td><td>${el.email}</td><td>${el.gender}</td></tr>`
    });
}
