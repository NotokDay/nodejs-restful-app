const mysql = require('mysql2')


//change these values according to your database configuration
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "admin123",
    database: "crud"
})

db.connect((err) => {
    if(err) throw err
    console.log("Connected to database.")
})
 
module.exports = {db}