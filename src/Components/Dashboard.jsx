import React,{useState} from 'react'
import { CookiesProvider } from 'react-cookie'

function Dashboard() {
  const [cookie,setCookie] = useState(decodeURIComponent(document.cookie));
  const [cookieObject,setCookieObject]  = useState(null);




  
  
  let newCookie = cookie.substring(5);
  
  let cookieObj  = JSON.parse(newCookie);

  return (
    <div>
      <div class='text-xl'>
        Dashboard, welcome {cookieObj.firstName}
        
        
      </div>
    </div>
  )
}

export default Dashboard
