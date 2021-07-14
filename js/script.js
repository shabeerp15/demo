const validated ={
    name:false,
    email:false,
    phone:false,
    message:false
}

function nameChek() {
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("name").value;
    var expression = /^[a-zA-Z\s]*$/;

    if (name == "") {
        validated.name = false;
        nameAlert.innerHTML = "Required"

    } else if (name.match(expression)) {
        nameAlert.innerHTML = "";
        validated.name = true;
    } else {
        nameAlert.innerHTML = " Enter Charecters only";
        validated.name = false;
    }

}

function chekEmail() {
    var pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    var emailCheck = document.getElementById('email').value;
    var emailAlert = document.getElementById('email-alert');
    if (emailCheck == "") {
        emailAlert.innerHTML = "Required";
        validated.email = false;
    } else if (emailCheck.match(pattern)) {
        emailAlert.innerHTML = "";
        validated.email = true;
    } else {
        emailAlert.innerHTML = "Invalid E-mail"
        validated.email = false
    }
}

function checkNumber() {
    var phnPattern = /^\d{10}$/;
    var phoneNumber = document.getElementById('mobile').value;
    var phoneAlert = document.getElementById('mobile-alert');
    if (phoneNumber == "") {
        validated.phone = false;
        phoneAlert.innerHTML = "Required";
    } else if (phoneNumber.match(phnPattern)) {
        phoneAlert.innerHTML = "";
        validated.phone = true;
    } else {
        phoneAlert.innerHTML = "Invalid Mobile Number";
        validated.phone = false
    }
}

function checkMessage() {
    var messageValue = document.getElementById("message").value;
    if (messageValue.length <= 0) {
        document.getElementById("message-alert").innerHTML = "Enter Your Message"
        validated.message = false;
    }
    else if (messageValue.length <= 15) {
        document.getElementById("message-alert").innerHTML = "Enter atleast 15 charecter";
        validated.message = false;
    }
    else {
        document.getElementById("message-alert").innerHTML = "";
        validated.message = true;
    }
}

function allCheck(){
    if(validated.name&&validated.email&&validated.phone&&validated.message){
        alert("Checking...");
        return true;
    }
    else{
        alert("Something Error, Please Check");
        return false;
    }
}
