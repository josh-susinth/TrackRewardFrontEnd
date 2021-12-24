import "../App.css";
import Header from "../components/Header";
import SideNav from "../components/SideNav";
const Sub = ({userEmail,logout}) => {
    return (
        <>
            <div className='header'>
            <Header pName={userEmail} logout={logout}  />
          </div>
          
            <div className='sideNav'>
              <SideNav/>
            </div>
            <div className="home">
                <h1>Sub</h1>
            </div>
        </>
        
        
    )
}

export default Sub
