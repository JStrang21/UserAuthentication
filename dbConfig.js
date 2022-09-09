const mySQL = require('mysql');

const con = mySQL.createConnection({
    host: 'localhost',
    user: "root",
    password: "password",
    database: "usersDB",
})

con.connect((err) => {
    if (err) {
        throw err
    }
    let sql = "DELETE FROM users WHERE username = 'John'";
    con.query(sql, (err) => {
        if (err) {
            throw err
        }
        console.log('Inserted');
    })
    let sql2 = "SELECT * FROM users";
    con.query(sql2, (err, result, fields) => {
        if (err) {
            throw err
        }
        console.log(result);
    })
})

