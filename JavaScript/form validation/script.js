let mail = document.getElementById("email");
let pwd = document.getElementById("pwd");

function validate(){
    if(mail.value == '' && pwd.value == ''){
        document.getElementById('mail-err').innerHTML = 'Email Id required';
        document.getElementById('pwd-err').innerHTML = 'Password required';
    }
    else if(mail.value != '' && pwd.value == ''){
        document.getElementById('mail-err').innerHTML = '';
    }
    else if(pwd.value != '' && mail.value == ''){
        document.getElementById('pwd-err').innerHTML = '';
        document.getElementById('mail-err').innerHTML = 'Email Id required';
    }
    else{
        return true;
    }
    return false;
}