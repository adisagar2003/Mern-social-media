import axios from 'axios';
import React,{useEffect, useState} from 'react'
import { CookiesProvider } from 'react-cookie'

function Dashboard() {
  const [cookie,setCookie] = useState(decodeURIComponent(document.cookie));
  const [cookieObject,setCookieObject]  = useState(null);
  const [allData,setAllData] = useState([]);
  const [isLoading,setLoading]  = useState(true);
 useEffect(()=>{
  axios.get(' http://localhost:5000/getPosts').then((response)=>{
    setAllData(response.data.ourResponse);
    console.log(response.data.ourResponse,'ourRes')
    setLoading(false);
    })
 },[])
  const PostData = (props) =>{
    return (
      <div class="md:mt-[3%]  mt-[20%] md:ml-[10%]">
        
    <div class="stat-figure text-primary bg-slate-300 rounded-xl  p-10">
    <div class='relative right-10 bottom-10 p-2'>
  date created:{props.dateCreated}
</div>
<span class='font-bold'>{props.name}</span>
<div class='float-right  md:w-60 w-20 rounded-xl'>
  <img class='rounded-xl scale-100 shadow-2xl' src={props.imageSource}></img>
</div>
<span class='ml-[2%]'>{props.description}</span>


      </div>
      </div>
    )
  }


  
  
  let newCookie = cookie.substring(5);
  
  let cookieObj  = JSON.parse(newCookie);
console.log(cookieObj)



  return (
<div class='h-full'>

    <div>
      
      <div class='h-[35vh] p-10 text-slate-500 bg-slate-100 w-[80%] ml-[10%] rounded-xl shadow-2xl hover:shadow-xl transition-all'>
<div class='float-right rounded-full md:w-[20vh] w-[10vh] md:h-[20vh] h-[10vh] shadow-2xl overflow-clip'>
  <img src='https://random.imagecdn.app/1280/720' class='scale-20 translate-y-6' />  

</div>
<span class="font-extrabold text-center text-2xl mb-5 bg-clip-text bg-gradient-to-r text-transparent from-purple-700  to-pink-400 relative md:top-1 top-5 md:left-10 right-5" >{cookieObj.firstName} {cookieObj.lastName}</span>
<div class="md:mt-[3%] mt-[20%] md:ml-[10%]">
    <div class="stat-figure text-primary">
 
    </div>
    <div class="text-xl">Total Likes</div>
    <div class="stat-value text-primary">{cookieObj.likeCount}</div>
    <div class="stat-desc">Make more contributions to get more likes</div>
  </div>

      </div>
    </div>

     
    <div class=' p-10 mt-10 text-slate-500 bg-slate-100 w-[90%] ml-[5%] rounded-xl shadow-2xl hover:shadow-xl transition-all'>

<span class="font-extrabold text-center text-2xl mb-5 bg-clip-text bg-gradient-to-r text-transparent from-purple-700  to-pink-400 relative md:top-1 top-5 md:left-10 right-5" >Latest Posts</span>

{allData.map((data)=>{
  
  <PostData  />
})}
<PostData />

      </div>
    
 

   

    </div>
    
    
  )
}

export default Dashboard
