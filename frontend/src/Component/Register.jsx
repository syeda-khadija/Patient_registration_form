import React, { useState } from 'react'
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios"; 

export default function Register() {
    let [Name,setname] =useState("");
    let [email,setEmail]=useState("");
    let [Age,setage] =useState(0);
    let [gender,setGender] = useState("")
    let [phone,setphone] =useState(0);
    let [address,setAddress] = useState("")


    function clear(){
        setname("");
        setEmail("");
        setage(0);
        setGender("");
        setphone(0);
        setAddress("");
    }
  async function save_data(){
       try {
        let username_regex = /^[A-Za-z0-9_]{3,20}$/
       if(!Name || !email || !Age=== 0  || !gender|| !phone || !address){
        toast.error("All fields  are require");
       }
      
       else if (!username_regex.test(Name)){
        toast.error("Username invalid");

       }
       else if (Age < 18){
        toast.error("Age must be or greater than 18 ");
         }
         else{
        await axios.post(" http://localhost:3006/Patientregister/reg",{
            patient_name:Name,
            email:email,
            Age:Age,
            Gender:gender,
            Phone_no:phone,
            Address:address
         })
        console.log("data added sucessfully")
        toast.success("Data saved sucessfully");
        clear()
       }
       } catch (error) {
        if(error.status === 409){
          toast.error("phone already exit")
        }
        else{
          toast.error(error)
          console.log(error)
        }
     
       } 
    }
  return (
    <div className='container'>
   <h2>Patient Registration Form</h2>
        <p>Enter your name</p>
        <input type="text" 
        placeholder='Enter your Name'
        className="form-control my-2" 
        value={Name}
        onChange={(e)=>setname(e.target.value)}/>

          <p>Enter your Email</p>
        <input type="text" 
        placeholder='Enter your age'
        className="form-control my-2" 
        value={email}
        onChange={(e)=>setEmail(e.target.value)}/>

        <p>Enter your Age</p>
        <input type="number" 
        placeholder='Enter your age'
        className="form-control my-2" 
        value={Age}
        onChange={(e)=>setage(e.target.value)}/>

<p>Select Gender</p>
        <select className="form-control my-3" value={gender} onChange={(e)=>setGender(e.target.value)}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
        </select>

        <p>Enter your Phone no</p>
        <input type="number" 
        placeholder='Enter your phone no'
        className="form-control my-2" 
        value={phone}
        onChange={(e)=>setphone(e.target.value)}/>

        <p>Enter your Address</p>
        <input type="text" 
        placeholder='Enter your address'
        className="form-control my-2" 
        value={address}
        onChange={(e)=>setAddress(e.target.value)}/>

  <button className='btn btn-primary' onClick={save_data}>Register Me</button>
<ToastContainer/>
    </div>
    
  )

}