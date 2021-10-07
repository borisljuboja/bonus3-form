const form = document.getElementById('form');

form.addEventListener('submit', function (e) {

    e.preventDefault();

    const email = document.getElementById('email');
    var image = document.querySelector('.errorimageem');
    var message = document.querySelector('.error-em');
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    console.log(email.value);
    if (email.value === '') {
        message.innerText = 'Email Adress cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        email.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else if (!regex.test(email.value)) {
        message.innerText = 'This is not an Email';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        email.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'email';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        email.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    const firstName = document.getElementById('FirstName');
    var image = document.querySelector('.errorimagefn');
    var message = document.querySelector('.error-fn');
    if (firstName.value === '') {
        message.innerText = 'First Name cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        firstName.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'email';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        firstName.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    const lastName = document.getElementById('LastName');
    var image = document.querySelector('.errorimageln');
    var message = document.querySelector('.error-ln');
    if (lastName.value === '') {
        message.innerText = 'Last Name cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        lastName.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'email';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        lastName.style.borderColor = 'hsl(246, 25%, 77%)';
    }
    const password = document.getElementById('password');
    var image = document.querySelector('.errorimagepw');
    var message = document.querySelector('.error-pw');
    if (password.value === '') {
        message.innerText = 'Password cannot be empty';
        message.style.visibility = 'visible';
        image.style.visibility = 'visible';
        password.style.borderColor = 'hsl(0, 100%, 74%)';
    }
    else {
        message.innerText = 'email';
        message.style.visibility = 'hidden';
        image.style.visibility = 'hidden';
        password.style.borderColor = 'hsl(246, 25%, 77%)';
    }

});