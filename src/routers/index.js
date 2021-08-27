
import express from 'express'
const route = express.Router()
import {taskList} from '../assets/tickets.js'
import {insertTicket, getTasks} from "../modules/TaskList.Model.js";

route.all("/", (req, res, next)=>{
    console.log("we got hit")
    next()
    // res.json({msg:"you got hit"})
})


// return all tickets (GET method)
route.get("/", async (req, res)=>{
    const taskLists = await getTasks()
    console.log(taskLists)
    res.json({ result: taskLists })
})

// add new tickets (POST method)
route.post("/", async (req, res)=>{
    const result = await insertTicket(req.body)
    console.log(result)  
    res.json(result)
})

// delete tickets (DELETE METHOD)
route.delete("/", (req, res)=>{
    console.log('deleting...')
    res.json({msg: `the requested ticket will be deleted from database`})
})

// UPDATE tickets (PATCH METHOD)
route.patch("/", (req, res)=>{
    //
    res.json({msg: `the requested ticket will be updated`})
})

export default route 