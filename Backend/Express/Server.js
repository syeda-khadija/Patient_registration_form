require("dotenv").config();
let express =require("express");
let db=require("./Connect");
let r =require("./Routing/Route");
let user=require("./Collection/User");
let cors =require("cors");

let Port =process.env.PORT || 3006

let application =express();
application.use(cors());
application.use(express.json());
application.use("/Patientregister/",r);

let add_patient=async function (){
    try {
        user.create({
            patient_name:"Khadija",
            email:"khadijasyeda128@gmail.com",
            Age:20,
            Gender:"female",
            Phone_no:"0311235678",
            Address:"nazimabad karachi"
        })
        console.log("data added")
    } catch (error) {
        console.log(error)
    }
    
}


db().then(()=>{
    application.listen(Port,()=>{
        console.log(`Server Started at http://localhost:${Port}/Patientregister/`)
    })
}).catch((e)=>{
    console.log(e)
})