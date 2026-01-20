import React, { useState } from 'react'

const Signup = () => {
  let [form,setform]=useState({
    name:"",
    email:"",
    number:"",
    pass:"",
    cpass:"",
  })

  let handleChange=(e)=>{

    setform({...form,[e.target.name]:e.target.value})
  }
  let handleSubmit=(e)=>{
      e.preventDefault()

      let valid=true

      if(form.name.trim()==""){
        alert("Please enter name")
        valid=false
      }
      else if(isNaN(form.number)){
        alert("Please enter no. only")
        valid=false
      }
      
  

  if(valid){
    let users=JSON.parse(localStorage.getItem('users')) || []

  let alreadyUser=users.find( (e)=>{

    return e.email==form.email

  })

if (alreadyUser){

  alert("Already a User")
  return

}

users.push(form)
localStorage.setItem('users',JSON.stringify(users))

alert("Signup Success")

  }



  }
  return (
   <>

   <form onSubmit={handleSubmit} className='bg-blue-200'>

   Enter Name: <input className='border' type='text' placeholder='Enter Your Name' name='name' value={form.name} onChange={handleChange} /> <br /><br />
   Enter Email: <input className='border' type='email' placeholder='Enter Email' name='email' value={form.email} onChange={handleChange} /><br /><br />
   Enter Number: <input className='border' type='text' placeholder='Enter Number' name='number' value={form.number} onChange={handleChange} /><br /><br />
   Enter Pass: <input className='border' type='text' placeholder='Enter Password' name='pass' value={form.pass} onChange={handleChange} /><br /><br />
   Confirm Pass: <input className='border' type='text' placeholder='Confirm Password' name='cpass' value={form.cpass} onChange={handleChange} /><br /><br />

   <button className='border cursor-pointer bg-amber-300' type='submit'>Sign-Up</button>

   </form>
   
   </> 
   
  )
}

export default Signup