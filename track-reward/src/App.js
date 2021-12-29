
import './App.css';

import Login from './Pages/Login';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import { useState } from 'react';
import Home from "./Pages/Home";
import Sub from "./Pages/Sub";


function App() {
  const [loginUser,setLoginUser]=useState("");
  const [user,setUser]=useState({id:"",userName:""});
  //const [id,setId]=useState("");

  console.log("up",user.userName,user.id);
  const login=async(details)=>{
    
    const name=details.userEmail;
    const pwd=details.pwd;
    const url="https://track-and-reward-back-end.vercel.app/login?uname="+name+"&pwd="+pwd;

    console.log("entered",name,pwd);
    console.log("url",url);

    await fetch(url)
    .then(res=>res.json()).then(data=>{
      if(data!==null)
      setLoginUser(data[0])
      else{
        logout();
      }
    });

    console.log("inside login",loginUser);
    //setId(loginUser.empid);
    setUser({id:loginUser.empid,userName:loginUser.empname});
      
    
}

  console.log("down",user.userName,user.id);

//login


const logout=()=>{
    console.log("logged out");
    //setId("");
    setUser({id:"",userName:""});
    console.log("____________________________");
    
}
  
  return (
    
      <BrowserRouter>
          

            <div className='pageView'>
               
              {(user.userName)?(<Redirect to='/'/>):(<Redirect to='/login'/>)}

                <Route path="/" component={()=><Home userEmail={user.userName
                } id={user.id} logout={logout}/>} exact></Route>
                
                <Route path="/sub" component={()=><Sub userEmail={user.userName} id={user.id} logout={logout}/>}></Route>
                <Route path="/login" component={()=><Login login={login}/>}></Route>
              
            </div>
           
          

          
          
          
      </BrowserRouter>
    
  );
}

export default App;
