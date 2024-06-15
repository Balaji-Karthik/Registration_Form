function validation() {
    const form = document.forms['formdetails'];
    const fullname = form['fullnamee'].value.trim();
    const email = form['email'].value.trim();
    const phonenumber = form['phonenumber'].value.trim();
    const password = form['Password'].value.trim();
    const confirmPass = form['conformpass'].value.trim();
    const result = document.getElementById("result");
    result.innerHTML = "";

    if (fullname === "") {
        result.innerHTML = "Enter Full Name*";
        return false;
    } else if (fullname.length < 5) {
        result.innerHTML = "Name should be more than 5 characters*";
        return false;
    }

    if (email === "") {
        result.innerHTML = "Enter your Email*";
        return false;
    } else if (!email.includes('@')) {
        result.innerHTML = "Enter a valid Email*";
        return false;
    }

    if (phonenumber === "") {
        result.innerHTML = "Enter your Phone Number*";
        return false;
    } else if (phonenumber.length !== 10 || isNaN(phonenumber) || phonenumber === "1234567890") {
        result.innerHTML = "Enter a valid 10-digit Phone Number*";
        return false;
    }

    if (password === "") {
        result.innerHTML = "Enter your Password*";
        return false;
    } else if (password.length < 8) {
        result.innerHTML = "Password must be more than 8 characters*";
        return false;
    } else if (password.toLowerCase() === 'password' || password.toLowerCase() === fullname.toLowerCase()) {
        result.innerHTML = "Password cannot be 'password' or your name*";
        return false;
    }

    if (confirmPass === "") {
        result.innerHTML = "Enter Confirm Password*";
        return false;
    } else if (password !== confirmPass) {
        result.innerHTML = "Passwords do not match*";
        return false;
    }
    document.getElementById('popup').classList.add('open-slide');
    return false; 
}

document.addEventListener('DOMContentLoaded', (event) => {
    var popup = document.getElementById('popup');
});
