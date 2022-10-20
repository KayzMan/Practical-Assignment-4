let loginBtn = document.querySelector("#submitBtn");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let errorLabel = document.querySelector(".error");

loginBtn.addEventListener('click', login);

async function login(){
    let data = {
        username: username.value, password: password.value
    }
    let response = await fetch("http://localhost:3000/login", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': "application/json" }
    });
    let my_data = await response.json();
    let msg = my_data.msg;

    if (msg.toLowerCase() == "login failed"){
        errorLabel.style.color = "orangered";
        errorLabel.textContent = msg;
    }else if(msg.toLowerCase() == "login successful"){
        errorLabel.style.color = "olivedrab";
        errorLabel.textContent = msg;
        location.href = "admin.html";
    }
}
