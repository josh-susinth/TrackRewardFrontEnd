
import './App.css';
import Header from'./components/Header';
import SideNav from './components/SideNav';
import Login from './Pages/Login';
import {BrowserRouter,Route,Switch,Redirect} from "react-router-dom";
import { useState } from 'react';
import Home from "./Pages/Home";
import Sub from "./Pages/Sub";


function App() {
  const users=[{
    userEmail:'josh@josh.com',
    pwd:'josh'
  },{
    userEmail:'osh@josh.com',
    pwd:'josh'
  },{
    userEmail:'sh@josh.com',
    pwd:'josh'
  },{
    userEmail:'h@josh.com',
    pwd:'josh'
  },{
    userEmail:'jos@josh.com',
    pwd:'josh'
  },{
    userEmail:'jo@josh.com',
    pwd:'josh'
  },{
    userEmail:'j@josh.com',
    pwd:'josh'
  },{
    userEmail:'os@josh.com',
    pwd:'josh'
  }];

const [user,setUser]=useState("");
const [error,setError]=useState("");

//login
const login=(details)=>{
    console.log(details);
    if(users.filter((u)=>(u.userEmail==details.userEmail && u.pwd==details.pwd)).length===1){
      setUser(details.userEmail);
      console.log(user);
      console.log("RIGHT !!!!!!!!!!!!!");
    
    }
    else{
      console.log("WRONG !!!!!!!!!!!!!");
    }
}

const logout=()=>{
    console.log("logged out");
    setUser('');
    
}
  
  return (
    
      <BrowserRouter>
          

            <div className='pageView'>
               
              {(user!="")?(<Redirect to='/'/>):(<Redirect to='/login'/>)}

                <Route path="/" component={()=><Home userEmail={user} logout={logout}/>} exact></Route>
                
                <Route path="/sub" component={()=><Sub userEmail={user} logout={logout}/>}></Route>
                <Route path="/login" component={()=><Login login={login}/>}></Route>
              
            </div>
           
          

          
          
          
      </BrowserRouter>
    
  );
}

export default App;
