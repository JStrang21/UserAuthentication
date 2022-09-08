/*const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const createUserButton = document.getElementById("createUser");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
})*/
const crypto = require('crypto');

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

//Checks credentials against the user database
function checkCredentials(username, password) {
    for (let i in tempDataBase) {
        if ((tempDataBase[i].username === username) && (tempDataBase[i].password === password)) {
            //Valid credentials
            return true
        }
    }
    //Invalid credentials
    return false
}

let tempUsername = 'gangstaKilla420';
let tempPassword = 'word53ukl';

let userOne = {
    
}

function createUser(username, password, newUser) {
    newUser.username = username;
    newUser.password = hashPassword(password);
}

//Hash using SubtleCrypto.digest() (https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
async function hashPassword(password) {
    //Encode password
    const encodedPassword = new TextEncoder('utf-8').encode(password);
    //Hash the encoded password
    const hash = await crypto.subtle.digest('SHA-256', encodedPassword);
    console.log(hash);
}

hashPassword('Hello')

createUser(tempUsername, tempPassword, userOne);

//console.log(checkCredentials(tempUsername, tempPassword));