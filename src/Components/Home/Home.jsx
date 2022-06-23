import React from 'react'
import {Link} from 'react-router-dom';  
function Home() {
  return (
    <div>
    <div class='h-screen bg-[rgb(227, 227, 227)]'>
        <div class='mt-[10vh]'>
        <div class='float-left p-5  w-[50%] h-[50vh]    '>
<h1 class='text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-t from-purple-500 to bg-pink-500 h-[30vh] md:text-5xl md:ml-[5vh]'>The App that cares about you</h1>
<Link to='/register'>
<button class='p-3  bg-clip-padding bg-gradient-to-t from-pink-400 to-pink-600 font-bold rounded-xl text-slate-200'>Register</button></Link><Link to='/dashboard'> <button class='p-3 bg-clip-padding bg-gradient-to-t from-pink-900 to-purple-600 font-bold text-slate-300 rounded-xl '>Dashboard</button></Link>
    </div>
    <div class='float-right md:p-10 relative bottom-[34vh] md:bottom-0 md:mb-0 mb-[20vh]'>
      
   <img src='https://gateway.pinata.cloud/ipfs/QmW3Bi2NZpLAwmyXeBxUzeGWQuCCAa9dYQEFG4osjMVpxB' width={300} height={300} />
    </div>
  
    </div>

    </div>
    
    </div>
  )
}

export default Home
