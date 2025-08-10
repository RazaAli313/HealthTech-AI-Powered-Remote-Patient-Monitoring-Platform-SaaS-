import mongoose from "./db"
import app from '../server'
const DoctorSchema=mongoose.Schema({
    firstName:String,
    LastName:String,
    Email:String,
    PhoneNumber:String,
    Speciality:String,
    LicenseNumber:String,
    YearsOfExperience:Number,
    Bio:String
    
    
})
const Doctor=mongoose.model("doctors",DoctorSchema)


app.post("/admin/doctor",(req,res)=>{
    
})

const doctor=new Doctor({
     firstName:"Syed Muhammad Raza Ali Zaidi",
    LastName:"Raza Ali Zaidi",
    Email:"razaali.services@gmail.com",
    PhoneNumber:"+92 (328) 4003 835",
    Speciality:"Neurology",
    LicenseNumber:"123-456-789",
    YearsOfExperience:5,
    Bio:"Serve the humanity beyond the perks"
})


await doctor.save()
