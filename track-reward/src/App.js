
import './App.css';
import Header from'./components/Header';
import SideNav from './components/SideNav';
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Home from "./Pages/Home";
import Sub from "./Pages/Sub";


function App() {
  
  return (
    
      <BrowserRouter>
          <div className='header'>
            <Header pName={'Josh Susinth J'}  />
          </div>
          
            <div className='sideNav'>
              <SideNav/>
            </div>

            <div className='pageView'>
              <Switch>          
                <Route path="/" component={Home} exact></Route>
                <Route path="/sub" component={Sub}></Route>
              </Switch>
            </div>
           
          

          
          
          
      </BrowserRouter>
    
  );
}

export default App;
