const btnSubmit = document.getElementById("arrow");
const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
const textOcult = document.getElementById('text-ocult');


function enviar() {
    let emailInput = document.getElementById('email-address');
    let email = emailInput.value;

    if (email == '') {
        textOcult.style.display = 'block';
        emailInput.style.border = '3px solid red';
    } else if (!emailRegex.test(email)) {
        textOcult.style.display = 'block';
        emailInput.style.border = '3px solid red';
    } else {
        alert("Email sended")
        textOcult.style.display = 'none';
    }
}









