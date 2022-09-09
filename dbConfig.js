const mySQL = require('mysql');

const connection = mySQL.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
})

connection.connect((err) => {
    if (err) {
        throw err
    }
    console.log('CONNECTED')
})

