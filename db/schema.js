const {db} = require('./connect')

sql = `DROP TABLE IF EXISTS tasks`
sql2 = `CREATE TABLE tasks ( id INT NOT NULL PRIMARY KEY AUTO_INCREMENT, task VARCHAR(200) NOT NULL)`

db.query(sql, (err) =>{
    if(err) throw err
    db.query(sql2, (err) => {
        if(err) throw err
    })
})