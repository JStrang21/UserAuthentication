/*const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const submitButton = document.querySelector("button");


submitButton.addEventListener("click", (e) => {
    e.preventDefault();
})*/

let tempUsername = 'Justin100';
let tempPassword = 'qwerty123';

let tempDataBase = [
    {
        username: 'Justin100',
        password: 'qwerty123',
    },
    {
        username: 'birdDog420',
        password: '123456789',
    },
    {
        username: 'gangstaKilla420',
        password: 'word53ukl',
    }
]

function checkCredentials(username, password) {
    for (let i in tempDataBase) {
        if ((tempDataBase[i].username === username) && (tempDataBase[i].password === password)) {
            return true
        }
        else {
            //Username or password is incorrect
            return false
        }
    }
}

checkCredentials(tempUsername, tempPassword);