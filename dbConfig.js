const mySQL = require('mysql');

//Import database credentials from .env to hide from potential threats
require("dotenv").config()
const DB_HOST = process.env.DB_HOST
const DB_USER = process.env.DB_USER
const DB_PASSWORD = process.env.DB_PASSWORD
const DB_DATABASE = process.env.DB_DATABASE

const con = mySQL.createConnection({
    host: DB_HOST,
    user: DB_USER,
    password: DB_PASSWORD,
    database: DB_DATABASE,
})

/*const con = mySQL.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: "usersDB",
})*/

con.connect((err) => {
    if (err) {
        throw err
    }
    let sql = "INSERT INTO users (username, password_hash) VALUES ?";
    let values = [
        ['Jacquabeous', 'qwefq4wf'],
        ['shawntaveous', 'aw4tw45g'],
        ['asefadc', '234512345'],
        ['Jonathon', '1234v43f'],
    ]
    
    con.query(sql, [values], (err, result, fields) => {
        if (err) {
            throw err
        }
        console.log('Inserted');
        console.log(result)
    })
    /*let sql2 = "DELETE FROM users";
    con.query(sql2, (err, result, fields) => {
        if (err) {
            throw err
        }
        console.log(result);
    })*/
})

