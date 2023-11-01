var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
var submitError = document.getElementById('submit_error');

function validateName(){
    var name = document.getElementById('contact_name').value;

    if(name.length == 0){
        nameError.innerHTML = "Name is required";
        return false;
    }

    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name";
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #1eca1c;"></i>';
    return true;
}

function validateEmail(){
    var email = document.getElementById('contact_email').value;

    if(email.length == 0){
        emailError.innerHTML = "Email is required";
        return false;
    }

    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Email invalid";
        return false;
    }

    emailError.innerHTML = '<i class="fa-solid fa-circle-check" style="color: #1eca1c;"></i>';
    return true;
}

function validateForm(){
    if(!validateName() || !validateForm()){
        submitError.style.display = 'block'
        submitError.innerHTML = 'Please fix error';
        setTimeout(function(){submitError.style.display = 'none'},2000)
        return false;
    }

}