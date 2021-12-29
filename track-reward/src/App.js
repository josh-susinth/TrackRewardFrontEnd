
import './App.css';

import Login from './Pages/Login';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import { useState } from 'react';
import Home from "./Pages/Home";
import Sub from "./Pages/Sub";


function App() {
  const [loginUser,setLoginUser]=useState("");
  const [user,setUser]=useState("");
  const [id,setId]=useState("");

  console.log("up",user,id);
const login=async(details)=>{
    // console.log(details);
    // if(users.filter((u)=>(u.userEmail== && u.pwd==)).length===1){
    //   setUser(details.userEmail);
    //   console.log(user);
    //   console.log("RIGHT !!!!!!!!!!!!!");
    
    // }
    // else{
    //   console.log("WRONG !!!!!!!!!!!!!");
    // }
    //const url=;
    const name=details.userEmail;
    const pwd=details.pwd;
    const url="https://track-and-reward-back-end.vercel.app/login?uname="+name+"&pwd="+pwd;
    console.log("entered",name,pwd);
    console.log("url",url);
    await fetch(url)
    .then(res=>res.json()).then(data=>setLoginUser(data[0]));

    console.log(loginUser);
      setUser(loginUser.username);
      setId(loginUser.empid);
    
}

  console.log("down",user,id);

//login


const logout=()=>{
    console.log("logged out");
    setUser('');
    setId('');
}
  
  return (
    
      <BrowserRouter>
          

            <div className='pageView'>
               
              {(user!=="")?(<Redirect to='/'/>):(<Redirect to='/login'/>)}

                <Route path="/" component={()=><Home userEmail={user} id={id} logout={logout}/>} exact></Route>
                
                <Route path="/sub" component={()=><Sub userEmail={user} logout={logout}/>}></Route>
                <Route path="/login" component={()=><Login login={login}/>}></Route>
              
            </div>
           
          

          
          
          
      </BrowserRouter>
    
  );
}

export default App;
