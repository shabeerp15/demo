const validated ={
    name:false,
    email:false,
    mobile:false,
    message:false
}

function nameChek() {
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z\s]*$/;

    if (name == "") {
        validated.name = false;
        nameAlert.innerHTML = "Required"

    } else if (name.match(namePattern)) {
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
    var mobPattern = /^\d{10}$/;
    var mobileNumber = document.getElementById('mobile').value;
    var mobileAlert = document.getElementById('mobile-alert');
    if (mobileNumber == "") {
        validated.mobile = false;
        mobileAlert.innerHTML = "Required";
    } else if (phoneNumber.match(mobPattern)) {
        mobileAlert.innerHTML = "";
        validated.mobile = true;
    } else {
        mobileAlert.innerHTML = "Invalid Mobile Number";
        validated.mobile = false
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
    if(validated.name&&validated.email&&validated.mobile&&validated.message){
        return true;
    }
    else{
        if(validated.name==false){
            alert("Name is error");
        }
        else if(validated.email==false){
            alert("Email is error");
        }
        else if(validated.phone==false){
            alert("Mobile is error");
        }
        else{
            alert("Message is error");
        }
        return false;
    }
}
