import Mongoose from "mongoose";

const mongoClient = async () => {
    try {
        //create the connection
        console.log("Connecting to MongoDB...")

        const uri = "mongodb://localhost/task_lists"

        const con = await Mongoose.connect(uri, {})
        if (con) {
            console.log('mongo is connected')
        }

    } catch (error) {
        console.log(error)
        
    }
}

export default mongoClient


// async/await
