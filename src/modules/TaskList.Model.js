import TicketListSchema from "./TaskList.schema.js";

export const insertTicket = (newTask) => {
    return new Promise((resolve, reject)=>{
        TicketListSchema(newTask)
        .save()
        .then((data)=>{
        resolve(data)
        })
        .catch((error)=>{
        reject(error)
        })
    })     
}

// read data from database
export const getTasks = () => {

    return new Promise((resolve, reject)=>{
        TicketListSchema.find()
        .then(data => {
            resolve(data)
        })
        .catch((data) => {
            reject(data)
        })
    })
}

//Get single ticket

export const getATask = (_id) => {    
    //TicketListSchema.findOne({_id: _id)
    //OR//

    return new Promise((resolve, reject)=>{
        TicketListSchema.findById(_id)
        .then((data)=> resolve(data))
        .catch((error)=> reject(error))
    })

}

//delete single task

// export const deleteTask = _id => {

//     return new Promise((resolve, reject)=> {
//         TicketListSchema.findByIdAndDelete(_id)
//         .then((data) => 
//             resolve(data)
//         )
//         .catch((error) => 
//             reject(error))
//     })
// }

//delete multiple tasks at once, @ids array

export const deleteTasks = (ids) => {

    return new Promise((resolve, reject)=> {
        TicketListSchema.deleteMany({
            _id: {
                $in: ids
            }
        })
        .then((data) => 
            resolve(data)
        )
        .catch((error) => 
            reject(error))
    })
}


// switch a task from to do to not to do

export const updateTodo = ({id, todo})=> {
    return new Promise((resolve, reject)=>{
        TicketListSchema.findByIdAndUpdate(id,
        {
            todo,
        },
        {
            new:true,
        }
        )
        .then((result) => resolve(result))
        .catch((error) => reject(error))
    })
}
