
var signUpName = document.getElementById("signupName");
var signupEmail = document.getElementById("signupEmail");
var signupPassword = document.getElementById("signupPassword");
var MessageFail = document.querySelector(".MessageFail");
var MessageSuccess = document.querySelector(".MessageSuccess");
var signinEmail = document.getElementById("signinEmail");
var signinPassword = document.getElementById("signinPassword");
var message = document.querySelector(".message");
var incorrect = document.querySelector(".incorrect");
var userNameWelcome = document.getElementById("userNameWelcome");
var loginbutton = document.getElementById("login");
var logoutbutton = document.getElementById("logout");
var allUsers;
if (localStorage.getItem("allUsers") == null) {
    allUsers = []
}
else {
    allUsers = JSON.parse(localStorage.getItem("allUsers"))
}

function addNewUser() {
    if (signUpName.value == "" || signupEmail.value == "" || signupPassword.value == "") {
        MessageFail.classList.replace("d-none", "d-block")
    }
    else if (signUpName.value != "" || signupEmail.value != "" || signupPassword.value != "") {
        MessageSuccess.classList.replace("d-none", "d-block")
        var user = {
            name: signUpName.value,
            email: signupEmail.value,
            password: signupPassword.value
        }
        allUsers.push(user)
        localStorage.setItem("allUsers", JSON.stringify(allUsers));
        clearAllInputs()


        location.href = "index.html"
    }
}

function clearAllInputs() {
    signUpName.value = "";
    signupEmail.value = "";
    signupPassword.value = "";
}


function clearloginInputs() {
    
    signinEmail.value = "";
    signinPassword.value = "";
}

var signupbutton = document.getElementById("signupbtn");
if (signupbutton != null) {
    signupbutton.addEventListener("click", function () {
        addNewUser()
    })
}

var loginbutton = document.getElementById("login");
if (loginbutton !=null){
    loginbutton.addEventListener("click", function () {
        checkUser()
        clearloginInputs()
    })
}



function checkUser() {
    if (signinEmail.value == "" || signinPassword.value == "") {
        message.classList.replace("d-none", "d-block")
    }
    else {
        message.classList.replace("d-block", "d-none")
        if (check()) {
            incorrect.classList.replace("d-block" , "d-none")
            location.href= "home.html";
        }
        else {
            incorrect.classList.replace("d-none", "d-block")
        }
    }
}

function check() {
    for (var i = 0; i < allUsers.length; i++) {
        if (allUsers[i].email.toLowerCase() == signinEmail.value.toLowerCase() && allUsers[i].password.toLowerCase() == signinPassword.value.toLowerCase()) {
            localStorage.setItem("Name" , JSON.stringify(allUsers[i].name))
            return true;
        }
    }
}

function displayUserName (){
    var userName = JSON.parse (localStorage.getItem ("Name"))
    userNameWelcome.innerHTML  = (` Welcome  ${ userName }`)
}
if (logoutbutton!= null){
    logoutbutton.addEventListener("click" , function (){
      localStorage.removeItem("Name")
        location.href ("index.html")
    })
}

