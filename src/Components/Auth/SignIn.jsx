import React, { useEffect, useState } from 'react'
import { GoogleLogin } from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';
import axios from 'axios';

import  { useCookies } from "react-cookie";
import { CookiesProvider } from "react-cookie";

//Get cookie function
function getCookie(name) {
  var dc = document.cookie;
  var prefix = name + "=";
  var begin = dc.indexOf("; " + prefix);
  if (begin == -1) {
      begin = dc.indexOf(prefix);
      if (begin != 0) return null;
  }
  else
  {
      begin += 2;
      var end = document.cookie.indexOf(";", begin);
      if (end == -1) {
      end = dc.length;
      }
  }
  return decodeURI(dc.substring(begin + prefix.length, end));
}


axios.default.withCredentials = true;


axios.get('http://localhost:5000').then((response)=>{
  console.log(response);
})

function SignIn() {
  const [cookies, setCookie] = useCookies(["user"]);
  const [credFound,setCredFound] = useState(null);
  const [firstName,setFirstName] = useState('');
  const  [lastName,setLastName] = useState('');
  const [email,setEmail ] = useState('');     
  const [loading,isLoading]  = useState(false);
  const [googleLanding,setgoogleLanding] = useState(false);
  const [showAlert,setAlert] = useState(false);
  const [error,setError] = useState(false);
  const [password,setPassword] = useState('');
  const [auth,setAuth] = useState(false);
  const  [cookiePresent,setCookiePresent] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:5000/signIn').then((response)=>{
      if (response.data.isLoggedIn){
        console.log('logged in')
      }
      console.log(response)
    
    })
    },[])
  
  const loginMechanism = async () =>{
    console.log('clicked')
     axios.post('http://localhost:5000/signIn',{
      email:email,
      password:password
    }).then((response)=>{
      
      console.log(response);
      if (response=={err:'error'}){
        console.log('error')
        setAuth(false);
   
      }
      else{
        console.log(response)
        console.log(response.data.user.data.length,'HardCoded data')
        if (response.data.user.data.length!=0){
          setCookie("user",response.data.user.data[0]);
        
          console.log(response,'This should be in the applications');
        
          location.assign('http://localhost:3000/dashboard');
          setError(false);
          showAlert(false);
       
        }
        else{
          setError(true)
          showAlert(true)
          console.log('DATA WAS EMPTY LIKE ME')
        }
       
     
        
      }
    }).catch(()=>{
    
      console.log('ERROR!')

    })

  }



  useEffect(()=>{
    console.log('credFound')

  },[credFound])

  

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
     {error?<div class="alert alert-warning shadow-lg">
  <div>
    <svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
    <span>Warning: Invalid email address!</span>
  </div>
</div>:<div></div>}
     <div class="px-5 py-7">
       <label class="font-semibold text-sm text-gray-600 pb-1 block">E-mail</label>
       <input type="email " class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" onChange={(e)=>setEmail(e.target.value)} />
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
               <span class="inline-block ml-1">{showAlert?<h1>aa</h1>:<h1>bb</h1>}Back to homepage</span>
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
