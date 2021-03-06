import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './Components/Auth/SignIn'
import { GoogleLogin } from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';
import Post from './Components/Posts/Post';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import { CookiesProvider } from "react-cookie";
import Dashboard from './Components/Dashboard';
import Register from './Components/Auth/Register';
import CreatePost from './Components/Posts/CreatePost';
import Home from './Components/Home/Home';
import Navbar from './Components/Navbar/Navbar';
import { Provider } from 'react-redux';
import store from './store'


function App() {
  const [count, setCount] = useState(0)
const responseGoogle =async (res)=>{
 console.log(res)
}

//236836718639-hol81mpdksfikn4354praeabvvst4tp4.apps.googleusercontent.com
//"You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."{error: 'idpiframe_initialization_failed', details: 'You have created a new client application that use…i/web/guides/gis-migration) for more information.'}
  return (
    <Provider store={store}>
    <div className="App">
      
      <CookiesProvider >
<BrowserRouter >
<Navbar />
<Routes>

<Route path='/dashboard' element ={<Dashboard />} />
<Route path='/' element={<Home />} />
<Route path='/signIn' element={<SignIn />} />

<Route path='/register' element={<Register />} />
<Route path='/createPost' element={<CreatePost />} />
</Routes>

</BrowserRouter>
</CookiesProvider>

    </div>
    </Provider>
  )
}

export default App
