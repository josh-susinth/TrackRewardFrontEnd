import "../App.css";
import Initiatives from '../components/Initiatives';
import Search from '../components/Search'
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import Header from "../components/Header";
import SideNav from "../components/SideNav";
import Description from "../components/Description";
import { useState } from "react";




const Home = ({userEmail,logout}) => {
    const initiatives=[
        {id:1,
            title:'num onethis is the task num onethis is the task num one',
            isCurrent:true,
            stDate:'12/12/21',
            endDate:'01/01/22',
            description:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam semper diam at erat pulvinar, at pulvinar felis blandit. Vestibulum volutpat tellus diam, consequat gravida libero rhoncus ut.'},      
            {id:2,
                title:'task2',
                isCurrent:false,
                stDate:'12/12/21',
                endDate:'01/01/22',
                description:'this is description for task 2'},      
                {id:3,
                    title:'task3',
                    isCurrent:true,
                    stDate:'12/12/21',
                    endDate:'01/01/22',
                    description:'this is description for task 3'},      
                    {id:4,
                        title:'task1',
                        isCurrent:false,
                        stDate:'12/12/21',
                        endDate:'01/01/22',
                        description:'this is description for task 4'} ,      
                        {id:5,
                            title:'task5',
                            isCurrent:true,
                            stDate:'12/12/21',
                            endDate:'01/01/22',
                            description:'this is description for task 5'} ,      
                            {id:6,
                                title:'task1',
                                isCurrent:false,
                                stDate:'12/12/21',
                                endDate:'01/01/22',
                                description:'this is description for task 6'}  ,      
                                {id:7,
                                    title:'task1',
                                    isCurrent:false,
                                    stDate:'12/12/21',
                                    endDate:'01/01/22',
                                    description:'this is description for task 7'}  ,      
                                    {id:8,
                                        title:'task1',
                                        isCurrent:false,
                                        stDate:'12/12/21',
                                        endDate:'01/01/22',
                                        description:'this is description for task 8'}  ,      
                                        {id:9,
                                            title:'task1',
                                            isCurrent:false,
                                            stDate:'12/12/21',
                                            endDate:'01/01/22',
                                            description:'this is description for task 9'}  ,      
                                            {id:10,
                                                title:'task1',
                                                isCurrent:false,
                                                stDate:'12/12/21',
                                                endDate:'01/01/22',
                                                description:'this is description for task 10'}    
                             
    ]

    

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
    return (
        <>
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
        </>
        )
}

export default Home
