import "../App.css";
import Initiatives from '../components/Initiatives';
import Search from '../components/Search'
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Description from "../components/Description";

import React,{ useState , useEffect} from "react";




const Sub = ({userEmail,id,logout}) => {
    const [initiatives,setInitiatives]=useState([]);
    const [inits,setInits]=useState(initiatives);
    
    const [track,setTrack]=useState(0);
    //console.log("url",url);

    useEffect(()=>{
        console.log("entered useEffect -------------------");
        const fetchInits=async()=>{
            const url="https://track-and-reward-back-end.vercel.app/subscribed/"+id;
            const response=await fetch(url);
            
            const data=await response.json();
            console.log("inside")
            console.log("response",response);
            console.log("data",data);
            
           setInitiatives(data);
           setInits(data);
           
        };
        fetchInits();
        
    },[track]);
    
    

    console.log("events----------------------------",initiatives);
    
    
    
    

    
    
    //title,isStatus,stDate,endDate
    
    
    console.log("inits",inits);
    //portal
    const [isOpen,setOpen]=useState(false);
    const [isOpenDesc,setOpenDesc]=useState(false);
    const [desc,setDesc]=useState("");

    const onSearch=(searchTerm)=>{
        console.log(searchTerm);
        setInits(initiatives.filter((init)=>(init.eventname.toLowerCase()).includes(searchTerm)));
        console.log("search",inits);
        
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

    const onSub=async(empid,pid)=>{
      console.log("inside sub");
      console.log(empid,pid);
      if(empid){
          console.log("unsubscribe");
          await fetch(`https://track-and-reward-back-end.vercel.app/unsubscribe/${id}/${pid}`,{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              }
          });
      }
      else{
          console.log("subscribe");
          await fetch(`https://track-and-reward-back-end.vercel.app/subscribe/${id}/${pid}`,{
              method:"POST",
              headers:{
                  "Content-Type":"application/json"
              }
          });
      }
      setTrack(track+1);
        console.log(track);
  }

    const onApplyFilter=(filterVal)=>{
        console.log(filterVal);
        if(filterVal==1){
            setInits(initiatives.filter((init)=>(init.status)));
        }
        else if(filterVal==2){
            setInits(initiatives.filter((init)=>(!init.status)));
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
            <Initiatives initiatives={inits} onClickDesc={onClickDesc} onSub={onSub}/>
        </React.Fragment>
        )
}


export default Sub
