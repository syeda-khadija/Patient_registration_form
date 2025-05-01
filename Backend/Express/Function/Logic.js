let user=require("../Collection/User");
let main_function={
    home:async function(req,res){
        res.send("Home page")
        res.end();
    },
    register_patient:async function(req,res){
        try {
            let {patient_name,email,Age,Gender,Phone_no,Address}=req.body;
            let check_phn =await user.findOne({email:email})
            if(check_phn){
                return res.status(409).json({msg:"Email already exist"})
            }
            else{
                let patient_data=new user({
                    patient_name,
                    email,
                    Age,
                    Gender,
                    Phone_no,
                    Address
                })
                let create =await patient_data.save();
                res.status(200).json({msg:"patient register sucessfully"})
            }
        } catch (error) {
            res.status(501).json({msg:error.message})
            
        }
    },
    get_patient:async function(req,res){
        try {
            let getdata =await user.find().sort({"created_at":-1})
            return res.status(202).json(getdata)
        } catch (error) {
            res.status(501).json({msg:error.message})
        }
        }
        
}
module.exports=main_function;