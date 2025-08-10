import mongoose from "mongoose"


mongoose.connect("mongodb://localhost/doctors")
.then(()=>console.log("Connected to Mongodb....."))
.catch(error=>console.log("Error connecting Mongo db "+ error))


