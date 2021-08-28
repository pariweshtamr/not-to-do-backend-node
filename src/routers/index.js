import express from 'express'
const route = express.Router()
// import {taskList} from '../assets/tickets.js'
import {insertTicket, getTasks, getATask, deleteTasks, updateTodo } from "../modules/TaskList.Model.js";

route.all("/", (req, res, next)=>{
    console.log("we got hit")
    next()
    // res.json({msg:"you got hit"})
})

// return all tickets (GET method)
route.get("/:id?", async (req, res)=>{
    try {
        const { id } = req.params 
        if(id){
            const result = await getATask(id)
            res.json(result)
        }else {
            const taskLists = await getTasks()
            res.json({ result: taskLists })
        }      
    } catch (error) {
        console.log(error)
        res.json({
            message: "We are unable to process your request. Please try again later"
        })       
    }  
})

// add new tickets (POST method)
route.post("/", async (req, res)=>{
    try {
        //store data in the database
        const result = await insertTicket(req.body)
        res.json(result)
        
    } catch (error) {
        console.log(error)
        res.json({message: error.message})
    }
})

// delete tickets (DELETE METHOD)
route.delete("/", async (req, res)=>{
  
        const { id } = req.body

        if(!id) {
            res.json({status: "error", message: "invalid id request"})
        }
        
        const result = await deleteTasks(id)
        const msg = result ? result : {message: "Data does not exist"}
        res.json(msg, result)

    // console.log('deleting...')
    // res.json({msg: `the requested ticket will be deleted from database`})
})

// UPDATE tickets (PATCH METHOD)
route.patch("/", async (req, res)=>{
try {
    if(!req.body.id){
        res.json({status: "error", message: "invalid id request"})
    }
    const result = await updateTodo(req.body)
    const msg = result ? "Selected data deleted" : "Data does not exist"
    res.json(msg, result)
} catch (error) {
    res.json({
        status: "error",
        message: "Unable to process your request. Please try again later."
    })
}
    
})

export default route 