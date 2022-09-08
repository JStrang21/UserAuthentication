/*const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const createUserButton = document.getElementById("createUser");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
})*/

let tempUsername = 'gangstaKilla420';
let tempPassword = 'word53ukl';

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

function createUser(username, password) {

}

//console.log(checkCredentials(tempUsername, tempPassword));