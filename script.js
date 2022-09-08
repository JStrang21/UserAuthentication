import dataBase from './userCredentials.json' assert {type: 'json'};

/*const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const loginButton = document.getElementById("login");
const createUserButton = document.getElementById("createUser");


loginButton.addEventListener("click", (e) => {
    e.preventDefault();
})*/

//Checks credentials against the user database
async function checkCredentials(username, password) {
    await hashPassword(password)
    .then((hashedPassword) => {
        return password = hashedPassword;
    })
    
    for (let i in dataBase) {
        if ((dataBase[i].username === username) && (dataBase[i].password === password)) {
            //Valid credentials
            return true
        }
    }
    //Invalid credentials
    return false
}

let tempUsername = 'gangstaKilla420';
let tempPassword = 'word53ukl';
let tempUserTwo = 'Justin100';
let tempPassTwo = 'qwerty123';

function createUser(username, password) {
    let newUser = {};

    newUser.username = username;

    hashPassword(password)
    .then((hashedPassword) => {
        return newUser.password = hashedPassword;
    })
    dataBase.push(newUser);
    return dataBase
}

//Hash using SubtleCrypto.digest() (https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/digest)
async function hashPassword(password) {
    //Converts char's into an array of Ascii codes
    const encodedPassword = new TextEncoder().encode(password);

    //Takes array of ascii bytes as input, hashs the data, and outputs a hashed byte array
    const hashBuffer = await crypto.subtle.digest('SHA-256', encodedPassword);

    //Converts hashed byte array into Uint8 byte array
    const hashArray = Array.from(new Uint8Array(hashBuffer));

    //Converts array of hashed bytes into hex string
    const hexString = hashArray.map(byte => 0 + byte.toString(16).padStart(2, '0')).join('');

    return hexString
}

createUser(tempUsername, tempUsername);
createUser(tempUserTwo, tempPassTwo);

checkCredentials(tempUsername, tempUsername)
.then((result) => {
    console.log(result)
})

console.log(dataBase[0])

//export {checkCredentials, hashPassword}