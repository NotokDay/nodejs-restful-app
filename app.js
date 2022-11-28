const express = require('express');
const tasks = require('./routes/tasks')
const {connectDB} = require('./db/mongo')
const PORT = 8080

require('./db/connect')
require('./db/schema')
require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', tasks)


const startServers = async () => {
  try{
    await connectDB(process.env.MONGO_CREDS)
    app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)});
  }
  catch(err){
    console.log(err)
  }
}

startServers()

