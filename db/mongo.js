//note:
//we're currently using mysql, so there's no need to change this file


const mongoose = require("mongoose")
require('dotenv').config();

const connectDB = (url) => {
    return mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log('Connected to mongdodb database.'))
    .catch((err) => console.log(err))
}

//connectDB(connectionString)

module.exports = {connectDB}