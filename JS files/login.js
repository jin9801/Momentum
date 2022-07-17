const loginForm = document.querySelector("#loginform"); 
const loginInput = document.querySelector("#loginform input"); 
const namIng = document.querySelector("#name"); 

const HIDDEN__CLASS ="hidden";
const username_KEY = "username";

function onLoginSubmit(event) {     4
    event.preventDefault(); 
    loginForm.classList.add(HIDDEN__CLASS); 
    const username = loginInput.value;
    localStorage.setItem(username_KEY,username);
    paintGreeting(username);
}

loginForm.addEventListener("submit", onLoginSubmit);

function paintGreeting(username) {
    namIng.innerText = `안녕하세요 ${username}님
                        좋은 하루 보내세요 `; 
    namIng.classList.remove(HIDDEN__CLASS); 
}

const savedUsername = localStorage.getItem(username_KEY);

if(savedUsername === null) { 
    loginForm.classList.remove(HIDDEN__CLASS); 
    loginForm.addEventListener("submit", onLoginSubmit); 
} else {
    paintGreeting(savedUsername);
}