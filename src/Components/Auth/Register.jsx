import axios from 'axios';
import React, { useState } from 'react'
const ErrorAlert = ()=>{
  return (
    <div class="alert alert-error shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Error! Invalid or already used credentials</span>
  </div>
</div>
  )
  }
function Register() {
    const [firstName,setFirstName] = useState(null);
    const [lastName,setLastName] = useState(null);
    const [password,setPassword] = useState(null);
    const [email,setEmail] = useState(null);
    const [confirmPassword,setConfirmPassword] = useState(null);
    const [showAlert,setShowAlert] = useState(false);
    const [showSuccess,setShowSuccess] = useState(false);


  
//Alerts
const BlueAlert = () =>{
  return (
    <div class="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your account has been registered!<br></br> <a class='text-sm' href='/'>Login here</a></span>
  </div>
</div>



  )
 
}
//Register User
const registerUser = () =>{
    console.log('Registering user...')
    axios.post(' http://localhost:5000/registerUser',{
        email:email,
        firstName:firstName,
        password:password,
        confirmPassword:confirmPassword,
        lastName:lastName
    }).then((response)=>{
      console.log(response)
      if (response.data.error){
        setShowAlert(true)
        console.log('Error!')
     

      }
      else{
      console.log('response',response);
      setShowAlert(false);
      setShowSuccess(true);
      
      }
    }).catch((err)=>{
console.log(err)
    })
}


  return (
    <div>
 
 

<div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md ">
  {showAlert?<ErrorAlert />:<a></a>}
  {showSuccess?<BlueAlert />:<a></a>}
 <h1 class="font-extrabold text-center text-2xl mb-5 bg-clip-text bg-gradient-to-r text-transparent from-purple-700  to-pink-100">Register</h1>  
 <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200 border-blue-500 border-2">
   
   <div class="px-5 py-7">
     <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
     <input type="email" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setEmail(e.target.value)} />
     <label class="font-semibold text-sm text-gray-600 pb-1 block">First Name</label>
     <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setFirstName(e.target.value)} />
     <label class="font-semibold text-sm text-gray-600 pb-1 block">Last Name</label>
     <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setLastName(e.target.value)} />
     <label clas s="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
     <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setPassword(e.target.value)} />
     <label clas s="font-semibold text-sm text-gray-600 pb-1 block">Confirm Password</label>
     <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setConfirmPassword(e.target.value)} />
     <button type="button" onClick={registerUser}  class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
         <span class="inline-block mr-2">Register</span>
         <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
             <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
         </svg>
     </button>
   </div>
   <div class="p-5">
       <div class="grid grid-cols-3 gap-1 ">
         
          
           <button type="button" class="transition duration-200 border border-gray-200 text-gray-500 w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-normal text-center inline-block">Github</button>
       </div>
   </div>
     <div class="py-5">
     <div class="grid grid-cols-2 gap-1">
       <div class="text-center sm:text-left whitespace-nowrap">
         <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
             </svg>
             <span class="inline-block ml-1">Forgot Password</span>
         </button>
       </div>
       <div class="text-center sm:text-right whitespace-nowrap">
         <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-bottom	">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
             </svg>
             <span class="inline-block ml-1">Help</span>
         </button>
       </div>
     </div>
   </div>
 </div>
 <div class="py-5">
     <div class="grid grid-cols-2 gap-1">
       <div class="text-center sm:text-left whitespace-nowrap">
         <button class="transition duration-200 mx-5 px-5 py-4 cursor-pointer font-normal text-sm rounded-lg text-gray-500 hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block align-text-top">
                 <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
             </svg>
             <span class="inline-block ml-1">Back to homepage</span>
         </button>
       </div>
     </div>
   </div>
</div>
</div>


  )
}

export default Register
