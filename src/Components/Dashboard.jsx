import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CookiesProvider } from 'react-cookie'
import { PropagateLoader } from 'react-spinners';
import { imageToBase64, base64ToImage } from "base64-2-img";
import store from '../store';

function mapStateToProps(state){
  return{
      logged:state
  }

}
function Dashboard(props) {

  const [cookie, setCookie] = useState(decodeURIComponent(document.cookie));
  const [cookieObject, setCookieObject] = useState(null);
  const [allData, setAllData] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [likeCount,setLikeCount] = useState(null);
  if (localStorage.getItem('DISPATCHWORK')){
    store.dispatch({type:'login_user'});
    console.log(store.getState(),'The user which is....')
  }
  
 
  
  



  const PostData = (props) => {
    return (
      <div class="md:mt-[3%]  mt-[20%] md:ml-[10%]">

        <div class="stat-figure text-primary bg-slate-300 rounded-xl  p-10">
          <div class='relative right-10 bottom-10 p-2'>
            date created:{props.dateCreated}
          </div>
          <span class='font-bold'>{props.name}</span>
     
          <span class='ml-[2%]'>{props.description}</span>


        </div>
      </div>
    )
  }




  let newCookie = cookie.substring(5);

  let cookieObj = JSON.parse(newCookie);
  console.log(cookieObj)

  useEffect(()=>{
    axios.get('http://localhost:5000/getPosts').then((response) => {
      console.log(response.data.ourResponse,'This should appear')
      setAllData(response.data.ourResponse);
    console.log('the data is set, ready to go!');
    setLoading(false)})
  },[])


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

        <div class='flex flex-col mt-5 gap-5'>
{isLoading?    <div class='ml-[50%] mb-10'>  <PropagateLoader color={'hsla(300, 47%, 16%, 0.62)'}  loading={isLoading} size={50} /></div>:allData.map((data)=>{
  return(
  <div class='md:h-[30vh] md:p-[10vh] p-[1vh] h-[14vh] bg-slate-300 rounded-xl  transition-all'>
 <span class=' font-bold bg-clip-text bg-gradient-to-r text-transparent from bg-purple-500 to bg-red-500'>{data.name}</span> 
 <div class='flex flex-row float-right'>


 <div class='float-right font-semibold'>
  {data.description}

  </div>
  </div>
  </div>)
})}
</div>

      </div>




    </div>


  )
}

export default Dashboard
