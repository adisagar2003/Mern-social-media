import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';
import axios from 'axios';



function SignIn() {
  const [credFound,setCredFound] = useState(null);
  const [firstName,setFirstName] = useState('');
  const  [lastName,setLastName] = useState('');
  const [email,setEmail ] = useState('');     
  const [loading,isLoading]  = useState(false);
  const [googleLanding,setgoogleLanding] = useState(false);
  const [showAlert,setAlert] = useState(false);
  const [error,setError] = useState(false);
  const [password,setPassword] = useState('');
  
  const loginMechanism = () =>{
    console.log('clicked')
    axios.post('http://localhost:5000/signIn',{
      email:email,
      password:password
    }).then((response)=>{
      console.log('I did it!')
      console.log(response)
    }).catch(()=>{
      console.log('err')
    })

  }



  useEffect(()=>{
    console.log('credFound')
  },[credFound])

  const AfterGoogleAuth = () =>{

    //
    const createUser = () => {
      axios.post('http://localhost:5000/addUserToDataBase',{
        firstName:firstName,
        lastName:lastName,
        email:email,
        credential:credential
      }).then((response)=>{
        if (response.data.error){
      setError(true);
          
        }
        else{
          console.log(response)
          setAlert(true);
          setTimeout(()=>setAlert(false),3000)
        }
      
      
  
      })
    }
  
    
    const [showAlert,setAlert] = useState(false);
    const [email,setEmail ] = useState('');     
    const [firstName,setFirstName] = useState('');
    const  [lastName,setLastName] = useState('');
    const [credential,setCredential] = useState(localStorage.getItem('googleCredentials'));
    const [password,setPassword] = useState('');


    
    return (
      <div class="bg-white shadow md:w-[20%]  rounded-lg divide-y divide-gray-200 border-blue-500 border-2">
    {showAlert ? <div class="alert alert-success shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
    <span>Your profile has been created!</span>
  </div>
</div>:<a></a>}
{error?<div class="alert alert-error shadow-lg">
  <div>
   
    <span>Error!
<br>
</br>
Make Sure:
<li>All fields are filled</li>
<li>email is not already in use</li>

    </span>
  </div>
</div>:<a></a>}
      <div class="px-5 py-7">
        <label class="font-semibold text-sm text-gray-600 pb-1 block">First Name</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"   onChange={(e)=>setFirstName(e.target.value)} />
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Last Name</label>
        <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  onChange={ (e)=>setLastName(e.target.value)}  />
        <label class="font-semibold text-sm text-gray-600 pb-1 block">Email</label> 
        <input type="email" placeholder='youremail@gmail.com' class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"  onChange={ (e)=>setEmail(e.target.value)}  />
       
       
        <button type="button"  onClick={createUser}  class="transition duration-200 bg-blue-500  hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
          
            <span class="inline-block mr-2">Create Your Account </span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
        </button>
      </div>
      </div>
     
    )
  }

  return (
 
    // Some google auth cred check
    // "eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4MGFkYjBjMzJhMTc1ZDk1MGExYzE5MDFjMTgyZmMxNzM0MWRkYzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTU3MzE4NTEsImF1ZCI6IjIzNjgzNjcxODYzOS1ob2w4MW1wZGtzZmlrbjQzNTRwcmFlYWJ2dnN0NHRwNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjg3NTQwODE3NzcyMDgyNzEyOCIsImVtYWlsIjoiYWRpLmV4ZTIwMDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjIzNjgzNjcxODYzOS1ob2w4MW1wZGtzZmlrbjQzNTRwcmFlYWJ2dnN0NHRwNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJBZGl0eWEgU2FnYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKemNSSm1WSlRfeUFVMUx6SEEwLXRqM2lja2xobjFLRGdCdXZkVHU9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWRpdHlhIiwiZmFtaWx5X25hbWUiOiJTYWdhciIsImlhdCI6MTY1NTczMjE1MSwiZXhwIjoxNjU1NzM1NzUxLCJqdGkiOiJlMjcyYmY5NWE4ZWU1MjE4NDJkZDhlMTRjMzY4MmNlMzA3NzE1ZDgyIn0.sVPTQL6enN8tHSidigIDojreiSAFlRqKUcCHy14EY6zPkPcLwUji3-O1Rm3e43tQbIXHh0nYkBvmIth2P_kYW9ojgTlZjy8HDxklK2CuDJR0UT0y-HqLas7w5hj4xMz_zFlpHp2nhkxUifXLXT91LF8Kl-VDsfyvpo4ERUGspS8esQeXoYpuepAmtNgZu1Ckt7dwYjEh3kL2tsgWlc-PNAPhuT8AnO6F7A-YvVKspPJ6zioIVlcL--g2-CWn55la3Ys5Gft0DeLVujka4NO6qcddVmvJCO9lYg94LK0aVoZXMsGKkbiaKhMFoLAWNxj8VWMWCbsNYhV2npszrE3Qew"
    // adi.exe2003
    //"eyJhbGciOiJSUzI1NiIsImtpZCI6IjU4MGFkYjBjMzJhMTc1ZDk1MGExYzE5MDFjMTgyZmMxNzM0MWRkYzQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYmYiOjE2NTU3MzIwMDYsImF1ZCI6IjIzNjgzNjcxODYzOS1ob2w4MW1wZGtzZmlrbjQzNTRwcmFlYWJ2dnN0NHRwNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsInN1YiI6IjExNjg3NTQwODE3NzcyMDgyNzEyOCIsImVtYWlsIjoiYWRpLmV4ZTIwMDNAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImF6cCI6IjIzNjgzNjcxODYzOS1ob2w4MW1wZGtzZmlrbjQzNTRwcmFlYWJ2dnN0NHRwNC5hcHBzLmdvb2dsZXVzZXJjb250ZW50LmNvbSIsIm5hbWUiOiJBZGl0eWEgU2FnYXIiLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUFUWEFKemNSSm1WSlRfeUFVMUx6SEEwLXRqM2lja2xobjFLRGdCdXZkVHU9czk2LWMiLCJnaXZlbl9uYW1lIjoiQWRpdHlhIiwiZmFtaWx5X25hbWUiOiJTYWdhciIsImlhdCI6MTY1NTczMjMwNiwiZXhwIjoxNjU1NzM1OTA2LCJqdGkiOiI1M2VkNWZjZjc5Yzg1NThhOWViYThlZmM0OGJlNWJjNjgzZjczNjU5In0.fkB1i1-I6rRJpqcMLk4ubb57Uv-JQk-wOFxLMHrQ5qOo4Awe9LTn8xTLBCH_B5zWPlGG3G5gigaukrLBZFvItxNuKegp8XOwXHQ72GeNbkciaQ9yJivFCm9KSs1em9ARyW875LndV4keSFgtBey9q6JgRgchZWH-oitprSEn6cNptPV742P1T1gK4MkYVHJSfwVliNw4-dggJgL0NKmO4KDL26YJH0TL9B4FKlYaxm4edS0AvAXWO6jPiJRt3rjW2mSfg7gFyhonbQAxRIQmYpaTbdX0tFhWUAMo8D0We_9PiXkPgL1O37wixuu2bIPJc7n0EZqHkA7B7kitBcjt4g"
    <div>
      {googleLanding?   <AfterGoogleAuth />:<div class="min-h-screen bg-gray-100 dark:bg-gray-700 flex flex-col justify-center sm:py-12 ">
   

 <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md ">
   <h1 class="font-extrabold text-center text-2xl mb-5 bg-clip-text bg-gradient-to-r text-transparent from-purple-700  to-pink-100">Sign In</h1>  
   <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200 border-blue-500 border-2">
     
     <div class="px-5 py-7">
       <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
       <input type="text" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setEmail(e.target.value)} />
       <label clas s="font-semibold text-sm text-gray-600 pb-1 block">Password</label>
       <input type="password" class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setPassword(e.target.value)} />
       <button type="button" onClick={loginMechanism} class="transition duration-200 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block">
           <span class="inline-block mr-2">Login</span>
           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4 inline-block">
               <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
           </svg>
       </button>
     </div>
     <div class="p-5">
         <div class="grid grid-cols-3 gap-1 ">
           
             <GoogleOAuthProvider clientId="236836718639-hol81mpdksfikn4354praeabvvst4tp4.apps.googleusercontent.com" scopes='email'>
<GoogleLogin
scopes='email'
onSuccess={credentialResponse => {
 
 axios.post('http://localhost:5000/checkIfUser',{
   credentail:credentialResponse.credential

 }).then((response)=>{
   console.log('axios response',response)
   if(response.data.error=='sad'){
     setgoogleLanding(true);  
     localStorage.setItem('googleCredentials',credentialResponse.credential)
   }
   
 })
 console.log(credentialResponse);
}}
onError={() => {
 console.log('Login Failed');
}}
/>;
</GoogleOAuthProvider>;
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
</div>}

 </div>
  )
}

export default SignIn
