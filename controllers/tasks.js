const { db } = require("../db/connect")

const getAllTasks = (req, res) => {
    sql = "SELECT * FROM tasks"
    db.query(sql, (err, result) => {
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        return res.send(result)
    })
}

const getTask = (req, res) => {
    sql = "SELECT * FROM tasks WHERE id=(?)"
    db.query(sql, [req.params.id], (err, result)=>{
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }

        if(result.length!=0){
            return res.send(result)
        } else return res.sendStatus(404)

    })
}

const createTask = (req, res) => {
    sql = "INSERT INTO tasks VALUES(DEFAULT, ?)"
    db.query(sql, [req.body.task], (err, result)=>{
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }
        return res.sendStatus(200)
    })
    
}

const deleteTask = (req, res) => {
    sql = "SELECT * FROM tasks WHERE id=(?)"
    db.query(sql, [req.params.id], (err, result)=>{
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }

        if(result.length!=0){
            sql = "DELETE FROM tasks WHERE id=(?)"
            db.query(sql, [req.params.id], (err) => {
                if(err) {
                    console.log(err)
                    return res.sendStatus(500)
                }
                return res.sendStatus(200)
            })
        } else return res.sendStatus(404)

    })
}

const updateTask = (req, res) => {
    sql = "SELECT * FROM tasks WHERE id=(?)"
    db.query(sql, [req.params.id], (err, result)=>{
        if(err){
            console.log(err)
            return res.sendStatus(500)
        }

        if(result.length!=0){
            sql = "UPDATE tasks set task = (?) WHERE id=(?)"
            db.query(sql, [req.body.task, req.params.id], (err) => {
                if(err) {
                    console.log(err)
                    return res.sendStatus(500)
                }
                return res.sendStatus(200)
            })
        } else return res.sendStatus(404)

    })
}

module.exports = {
    getAllTasks,
    getTask,
    createTask,
    updateTask,
    deleteTask
}