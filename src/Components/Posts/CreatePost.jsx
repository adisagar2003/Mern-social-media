import axios from 'axios';
import React,{useEffect, useState} from 'react'
import FileBase64 from 'react-file-base64';
import {connect} from 'react-redux';
function mapStateToProps(state){
  return{
      logged:state
  }

}
function CreatePost(props) {
    const [isLoggedIn,setLoggedIn] = useState(false);
    const [cookie,setCookie] = useState(decodeURIComponent(document.cookie).split('=')[1]);
    const [cookieObject,setCookieObject] = useState({})
  

    const [description,setDescription] = useState(null)
    const [imageValue,setImageValue] = useState(null);
    const [showError,setError] = useState(false);
    const [showSuccess,setSuccess] = useState(false);
    const [checkUser,setCheck] = useState(null);
    const submitData = ()=>{
  
  
        
      axios.post('http://localhost:5000/createPost',{
          name:cookieObject.firstName,
          description:description,
         
      }).then((response)=>{
          console.log(response);
          setError(false);
          setSuccess(true);
      })
  
  
    
  }
    
try{
  useEffect(()=>{
    setCookieObject(JSON.parse(cookie))
  },[])
      
  
}
catch(err){
  setLoggedIn(false)
  console.log('error should be detected')
}



    
  return (
<div>
    {isLoggedIn? <h1 class='text-5xl font-bold'>Gotta stay calm and grow up</h1>:<div class='h-screen bg-slate-200 md:p-[10vh]'>
    <span class='bg-clip-text text-transparent bg-gradient-to-t from-purple-500 to-pink-500 font-bold text-3xl'>Your Content Matters</span><br></br>
    <span class=' text-slate-400'>Create posts to get likes and connect with people</span>
    <div class='bg-slate-100 md:h-[80vh] p-[10vh] flex flex-col gap-10'>
    {showError?<div class="alert alert-error shadow-lg">
<div>

<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
<span>Error! Files should be present and data should be not null.</span>
</div>
</div>:<span></span>}
{showSuccess?<div class="alert alert-success shadow-lg">
<div>
<svg xmlns="http://www.w3.org/2000/svg" class="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
<span>Your post is created!</span>
</div>
</div>:<a></a>}
       <label class='bg-clip-text text-transparent bg-gradient-to-t from-purple-500 to-pink-500 font-bold text-xl'>Description</label>
    
        <input type="text" onChange={(e)=>setDescription(e.target.value)} class=' md:p-5 text-slate-500 font-semibold text-xl md:w-[50vh] rounded-xl shadow-2xl' />
        <button class='bg-red-400 mt-10 hover:bg-red-100 transition-all hover:text-slate-900 p-4 font-bold  ' onClick={submitData}>Submit</button>
    
    </div>
    
  
</div>}
</div>

  )
}

export default CreatePost
