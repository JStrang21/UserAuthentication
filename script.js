/*const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database(':memory:');*/

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
let dataBase = [];

async function createUser(username, password) {
    let newUser = {};

    newUser.username = username;
    newUser.password;

    await hashPassword(password)
    .then((hashedPassword) => {
        newUser.password = hashedPassword;
    })
    dataBase.push(newUser);
    /*let json = JSON.stringify(newUser);
    fs.writeFile('userCredentials.json', json, (err) => {
        if (err) {
            throw err
        }
    })*/
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

createUser(tempUsername, tempPassword);
createUser(tempUserTwo, tempPassTwo)
.then(() => {
    console.log(dataBase[0].password)
})

checkCredentials(tempUsername, tempPassword)
.then((result) => {
    console.log(result)
})


//export {checkCredentials, hashPassword}