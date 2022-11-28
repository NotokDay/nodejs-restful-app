const express = require('express');
const tasks = require('./routes/tasks')
const {connectDB} = require('./db/mongo')
const PORT = 8080

require('./db/connect')

//every time application restarts, table is dropped and created again
//if you don't want this feature just comment this line
require('./db/schema')

require('dotenv').config();

const app = express();

app.use(express.json());
app.use('/api/v1/tasks', tasks)


const startServer = async () => {
  try{
    app.listen(PORT, () => {console.log(`Listening on port ${PORT}.`)});
  }
  catch(err){
    console.log(err)
  }
}

startServer()

