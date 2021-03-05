const mysql = require('mysql');

var conn = mysql.createConnection({
    host: "localhost",
    user: "pawan",
    password: "pawan",
    database: "emp",
    multipleStatements: true
}) 

conn.connect((err)=> {
    if(!err) 
        console.log("db connected");
    else
        console.log("db not connected");
})
/*
conn.query("select * from employee", (err, rows, fields) => {
    if(!err) {
        console.log(rows)
    }
    else 
        console.log(err)
})
*/
module.exports = conn;