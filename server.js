function register(event){
    event.preventDefault();
    //getting data from html to js
    var userName = document.getElementById("userName").value;
    var userEmail = document.getElementById("userEmail").value;
    var userPassword = document.getElementById("userPassword").value;
var userData = {name : userName, email : userEmail, password : userPassword}

//storing data from js to ls
var dataFromLS = JSON.parse(localStorage.getItem("userData"))|| [];
console.log(dataFromLS, 'dataFromLS')
var flag = false;
for(var i = 0; i < dataFromLS.length; i++){
    if (dataFromLS[i].email === userEmail){
        flag = true;
    }
}

if (flag === true){
    alert("Email already present, User another one.")
} else if (userPassword.length < 8 && userName.length < 1 && userEmail < 1){
    alert ("must fill all fields")
} else if (userPassword.length < 8 ){
    alert ("Password must be more than 8 Digits")
} else{
    dataFromLS.push(userData);
    localStorage.setItem("userData", JSON.stringify(dataFromLS));
    document.getElementById("userName").value = '';
    document.getElementById("userEmail").value = '';
    document.getElementById("userPassword").value = '';
    window.location.href = "/login.html";
    alert("Registration Done.")
}

}
function login(event){
    event.preventDefault();
    var userEmail = document.getElementById("email").value;
    var userPassword = document.getElementById("password").value;

    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    
}

var gettingEmail ;

function forgetPassword(){
    // alert("working")
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
    var userEmail= document.getElementById("email").value;
    var flag = false;
    for(var i= 0; i < dataFromLS.length; i++){
        if(dataFromLS[i].email === userEmail){
            userEmail = gettingEmail;
            flag = true;
        }
    }
    if(flag === true){
        // window.location.href='/new-password.html';
        var newCode = `<input type="password" id="password" placeholder="enter new one here"/><br/><button onclick="newPassword">Set new password</button>`;
        var divFromHtml = document.getElementById("change");
        divFromHtml.innerHTML= newCode;
        // alert("now set password")
    }else{
        alert("enter correct email")
    }

}

function newPassword(){
    
    var userPassword = document.getElementById("password").value;
    var dataFromLS = JSON.parse(localStorage.getItem("userData"));
   
}