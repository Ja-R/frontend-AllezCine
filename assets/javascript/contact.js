const formFirstName = document.getElementById('formFirstName');
const formLastName = document.getElementById('formLastName');
const formEmail = document.getElementById('formEmail');
const formSubject = document.getElementById('formSubject');
const modalFirstName = document.getElementById('modalFirstName');
const modalLastName = document.getElementById('modalLastName');
const modalEmail = document.getElementById('modalEmail');
const modalSubject = document.getElementById('modalSubject');

let fillModal = function(){
    modalFirstName.innerHTML = 'First Name: ' + formFirstName.value;
    modalLastName.innerHTML = 'Last Name: ' + formLastName.value;
    modalEmail.innerHTML = 'Email: ' + formEmail.value;
    modalSubject.innerHTML = 'Subject of your message: ' + formSubject.value;
}