function formValidation() {

    var uid = document.application.first_name;
    var last_name = document.application.last_name;
    var email_id = document.application.email_id;
    var phone = document.application.phone;
    var position = document.application.position;
    var website = document.application.website;
    var salary_req = document.application.salary_req;
    var start_date = document.application.start_date;
    var radios = document.application.radio;
    var last_company = document.application.last_company;
    var comments = document.application.comments;


    if (userid_validation(uid, 5, 12) && last_name_validation(last_name, 5, 12) && position_validation(position, 5, 20) && last_company_validation(last_company, 1, 20) && comments_validation(comments, 10, 100) && ValidateEmail(email_id) && allnumeric(salary_req)) {
        document.application.submit();
    } else {
        return false;
    }
}

function allnumeric(salary_req) {
    var numbers = /^[0-9]+$/;
    if (salary_req.value.match(numbers)) {
        document.getElementById("error6").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("error6").innerHTML = "salary must be numeric only<br>";
        salary_req.focus();
        return false;
    }
}

function allnumeric_phone(phone) {
    var numbers = /^[0-9]+$/;
    if (phone.value.match(numbers)) {
        document.getElementById("error3").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("error3").innerHTML = "mobile number must be numeric only<br>";
        phone.focus();
        return false;
    }
}

function ValidateEmail(uemail) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (uemail.value.match(mailformat)) {
        document.getElementById("error2").innerHTML = "";
        return true;
    }
    else {
        document.getElementById("error2").innerHTML = "Please enter valid Email<br>";
        uemail.focus();
        return false;
    }
}



function userid_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        document.getElementById("error").innerHTML = "FirstName should not be empty / length be between" + mx + " and" + my + " <br>";
        uid.focus();
        return false;
    }
    else {
        document.getElementById("error").innerHTML = "";

    }
    return true;
}


function last_name_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        document.getElementById("error1").innerHTML = "LastName should not be empty / length be between" + mx + " and" + my + " <br>";
        uid.focus();
        return false;
    }
    else {
        document.getElementById("error1").innerHTML = "";

    }
    return true;
}

function position_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        document.getElementById("error4").innerHTML = "Position should not be empty / length be between" + mx + " and" + my + " <br>";
        uid.focus();
        return false;
    }
    else {
        document.getElementById("error4").innerHTML = "";

    }
    return true;
}

function last_company_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        document.getElementById("error8").innerHTML = "company should not be empty / length be between" + mx + " and" + my + " <br>";
        uid.focus();
        return false;
    }
    else {
        document.getElementById("error8").innerHTML = "";

    }
    return true;
}

function comments_validation(uid, mx, my) {
    var uid_len = uid.value.length;
    if (uid_len == 0 || uid_len >= my || uid_len < mx) {
        document.getElementById("error9").innerHTML = "comments should not be empty / length be between" + mx + " and" + my + " <br>";
        uid.focus();
        return false;
    }
    else {
        document.getElementById("error9").innerHTML = "";

    }
    return true;
}

