const mySQL = require('mysql');

const connection = mySQL.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: "usersDB",
})

connection.connect((err) => {
    if (err) {
        throw err
    }
    console.log('CONNECTED')
})

