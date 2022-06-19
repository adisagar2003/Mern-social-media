import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import SignIn from './Components/Auth/SignIn'
import { GoogleLogin } from '@react-oauth/google';
import {GoogleOAuthProvider} from '@react-oauth/google';


function App() {
  const [count, setCount] = useState(0)
const responseGoogle =async (res)=>{
 console.log(res)
}

//236836718639-hol81mpdksfikn4354praeabvvst4tp4.apps.googleusercontent.com
//"You have created a new client application that uses libraries for user authentication or authorization that will soon be deprecated. New clients must use the new libraries instead; existing clients must also migrate before these libraries are deprecated. See the [Migration Guide](https://developers.google.com/identity/gsi/web/guides/gis-migration) for more information."{error: 'idpiframe_initialization_failed', details: 'You have created a new client application that use…i/web/guides/gis-migration) for more information.'}
  return (
    <div className="App">
   
<GoogleOAuthProvider clientId="236836718639-hol81mpdksfikn4354praeabvvst4tp4.apps.googleusercontent.com">
<GoogleLogin
  onSuccess={credentialResponse => {
    console.log(credentialResponse);
  }}
  onError={() => {
    console.log('Login Failed');
  }}
/>;
  </GoogleOAuthProvider>;
    
<SignIn />
    </div>
  )
}

export default App
