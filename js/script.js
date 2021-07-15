const validated ={
    name:false,
    email:false,
    mobile:false,
    message:false
}

function nameChek() {
    var nameAlert = document.getElementById('name-alert');
    var name = document.getElementById("name").value;
    var namePattern = /^[a-zA-Z]+ +[a-zA-Z]*$/;
    var expression2 = /^[a-zA-Z]*$/;

    if (name == "" || name==null) {
        validated.name = false;
        nameAlert.innerHTML = "Required"

    } else if (name.match(namePattern) || name.match(expression2) ) {
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
    if (emailCheck == "" || emailCheck == null) {
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
    if (mobileNumber == "" || mobileNumber == null) {
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
            nameChek();
        }
        else if(validated.email==false){
            chekEmail();
        }
        else if(validated.phone==false){
            checkNumber();
        }
        else{
            checkMessage();
        }
        return false;
    }
}
