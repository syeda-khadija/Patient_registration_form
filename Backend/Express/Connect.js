let mongo=require("mongoose");
require("dotenv").config();

let atlas_url = process.env.URL;

let Db_connect=async function(){
mongo.connect(atlas_url).then(()=>{
    console.log("connection has been successfully")
}).catch((e)=>{
    console.log(e)
})    
}
module.exports=Db_connect;