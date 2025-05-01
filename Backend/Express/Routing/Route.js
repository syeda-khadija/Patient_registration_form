let express=require("express");
let func=require("../Function/Logic");

let route =express.Router();
route.get("/",func.home);
route.post("/reg",func.register_patient);
route.get("/user",func.get_patient)

module.exports=route;