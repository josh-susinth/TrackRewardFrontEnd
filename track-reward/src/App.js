
import './App.css';
import Header from'./components/Header';
import SideNav from './components/SideNav';
import {BrowserRouter,Route,Switch} from "react-router-dom";

import Home from "./Pages/Home";
import Sub from "./Pages/Sub";


function App() {
  
  return (
    
      <BrowserRouter>
          <div>
            <Header pName={'Josh'}  />
          </div>
          <div >
            <div >
              <SideNav/>
            </div>
            <div >
              <Switch>          
                <Route path="/" component={Home} exact></Route>
                <Route path="/sub" component={Sub}></Route>
              </Switch>
            </div>
           
          </div>

          
          
          
      </BrowserRouter>
    
  );
}

export default App;
