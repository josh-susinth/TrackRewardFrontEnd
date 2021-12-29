import "../App.css";
import Initiatives from '../components/Initiatives';
import Search from '../components/Search'
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Description from "../components/Description";
import axios from 'axios';
import React,{ useState , useEffect} from "react";




const Home = ({userEmail,id,logout}) => {
    const [initiatives,setInitiatives]=useState([]);
    const url="https://jsonplaceholder.typicode.com/users";
    console.log("url",url);

    useEffect=(()=>{
        console.log("entered useEffect -------------------");
        const fetchInits=async()=>{
            const response=await fetch(url);
            
            const data=await response.json();
            console.log("inside")
            console.log("response",response);
            console.log("data",data);
            
           // setInitiatives(data);
        };
        fetchInits();
        
    },[]);
    //     fetch(url)
    // .then(res=>res.json()).then(data=>setInitiatives(data));
    

    console.log("events----------------------------",initiatives);
    
    
    
    

    

    //title,isStatus,stDate,endDate
    const [inits,setInits]=useState(initiatives);
    //portal
    const [isOpen,setOpen]=useState(false);
    const [isOpenDesc,setOpenDesc]=useState(false);
    const [desc,setDesc]=useState("");

    const onSearch=(searchTerm)=>{
        console.log(searchTerm);
        setInits(initiatives.filter((init)=>(init.title).includes(searchTerm)));
        
    }
    const onFilter=()=>{
        setOpen(true);
    }

    const onClose=()=>{
        setOpen(false)
    }
    const onClickDesc=(d)=>{
        setDesc(d);
        setOpenDesc(true);
    }
    const onCloseDesc=()=>{
        setDesc("");
        setOpenDesc(false);
    }
    const onApplyFilter=(filterVal)=>{
        console.log(filterVal);
        if(filterVal==1){
            setInits(initiatives.filter((init)=>(init.isCurrent)));
        }
        else if(filterVal==2){
            setInits(initiatives.filter((init)=>(!init.isCurrent)));
        }
        else{
            setInits(initiatives);
        }
        
        onClose();
    }
    console.log("before return --------------------------------------")
    return (
        <React.Fragment>
            <div className='header'>
                <Header pName={userEmail} logout={logout}  />
            </div>
          
            <div className='sideNav'>
              <SideNav/>
            </div>
            <div className="search">
                <div className="innerSearch">
                    <Search onSearch={onSearch}/>
                    <Filter onFilter={onFilter}/>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} onApplyFilter={onApplyFilter}/>
            <Description isOpenDesc={isOpenDesc}  onCloseDesc={onCloseDesc} description={desc}/>
            <Initiatives initiatives={inits} onClickDesc={onClickDesc}/>
        </React.Fragment>
        )
}

export default Home
