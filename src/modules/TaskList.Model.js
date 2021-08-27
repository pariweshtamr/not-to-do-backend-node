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


//delete


//mark as to do



//mark as not to do