import React, { useEffect, useState } from 'react'
import axios from 'axios';

export default function Showdata() {
    let[user_data,setUserdata]=useState([]);
    useEffect(()=>{
     datalao();
    })
    async function datalao(){
        await axios.get("http://localhost:3006/Patientregister/user")
        .then((abc)=>{
            console.log(abc.data)
            setUserdata(abc.data)
        })
        .catch((e)=>{
            console.log(e)
        })
    }
  return (
    <div className='container'>
    <h1>Patient Data </h1>
    <hr />
    <table className=" table table-light">
                   <thead>
                       <tr>
                           <th className='table-dark'>Name</th>
                           <th className='table-dark'>Email</th>
                           <th className='table-dark'>Age</th>
                           <th className='table-dark'>Gender</th>
                           <th className='table-dark'>Phone no</th>
                           <th className='table-dark'>Address</th>
                       </tr>
                   </thead>
                   <tbody>
       
    {   user_data.map((a)=>(
         
              
                       <tr class="">
                           
                           <td>{a.patient_name}</td>
                           <td>{a.email}</td>
                           <td>{a.Age}</td>
                           <td>{a.Gender}</td>
                           <td>{a.Phone_no}</td>
                           <td>{a.Address}</td>
                       </tr>
               
           
       ))
       }
           </tbody>
           </table>
    </div>
  )
}
