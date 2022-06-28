import React,{useState} from 'react'
import {Link} from 'react-router-dom';
import store from '../../store';
import {connect} from 'react-redux';
function mapStateToProps(state){
  return {
    logged:state
  }
}
function Navbar(props) {
  const [isLogged,setLogged] = useState(store.getState().isLogged)
  return (

    
<nav class='p-3 '>
  {console.log(store.getState(),'Navbar getstate function')}
  {console.log(props.logged.isLogged,'Hoping this works')}
    <Link to='/' >
<a><span class='text transparent bg-gradient-to-b text-2xl from-orange-500 to-purple-500 bg-clip-text text-transparent font-extrabold pl-4'>Chat App</span></a></Link>

<div class='font-bold text-slate-500 text-sm float-right flex gap-5 '>


<Link to='/createPost'><a class='hover:text-gray-600 '>{props.logged.isLogged?<span>Create</span>:<span class=''></span>}</a></Link>
<Link to='/signIn'><a class='hover:text-gray-600 '>Sign-in</a></Link>

<Link to='/dashboard'><a class='hover:text-gray-600 '>{props.logged.isLogged?<span>Dashboard</span>:<span class=''></span>}</a></Link>


</div>


</nav>
  )
}

export default connect(mapStateToProps)(Navbar)