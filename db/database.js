const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "todos"
});

db.connect(error => {
    if (error) throw error;
    console.log("DB connected");
});

module.exports = db;