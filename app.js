import express from 'express'
const app = express()
import morgan from 'morgan'
import helmet from 'helmet'
import cors from 'cors'

const PORT = 8000

// Mongo Database connection
import mongoClient from './src/config/db.js'
mongoClient();

//middleware
app.use(express.urlencoded())
app.use(express.json())
app.use(morgan('tiny'))
app.use(helmet())
app.use(cors())

// import routers
import routers from './src/routers/index.js'
// pass all the api request here

app.use("/api/v1", routers)
 
app.use('/', function (req, res) {
  res.send('Hello World')
})
 
app.listen(PORT, (error)=>{
    if(error){
        return console.log(error)
    }
    console.log(`The server running at http://localhost:${PORT}`)
});