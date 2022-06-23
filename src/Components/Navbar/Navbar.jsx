import React from 'react'
import {Link} from 'react-router-dom';
function Navbar() {
  return (
<nav class='p-3 '>
    <Link to='/' >
<a><span class='text transparent bg-gradient-to-b  from-orange-500 to-purple-500 bg-clip-text text-transparent font-bold pl-4'>Logo </span></a></Link>

<div class='font-bold text-slate-500 text-sm float-right flex gap-5 '>


<Link to='/'><a class='hover:text-gray-600 '>User</a></Link>
<Link to='/signIn'><a class='hover:text-gray-600 '>Sign-in</a></Link>

<Link to='/dashboard'><a class='hover:text-gray-600 '>Dashboard</a></Link>


</div>


</nav>
  )
}

export default Navbar
