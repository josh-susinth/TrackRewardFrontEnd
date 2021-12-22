import "../App.css";
import Initiatives from '../components/Initiatives';
import Search from '../components/Search'
import Filter from '../components/Filter';
import Modal from '../components/Modal';
import { useState } from "react";




const Home = () => {
    const initiatives=[
        {id:1,
            title:'num onethis is the task num onethis is the task num one',
            isCurrent:true,
            stDate:'12/12/21',
            endDate:'01/01/22'},      
            {id:2,
                title:'task2',
                isCurrent:false,
                stDate:'12/12/21',
                endDate:'01/01/22'},      
                {id:3,
                    title:'task3',
                    isCurrent:true,
                    stDate:'12/12/21',
                    endDate:'01/01/22'},      
                    {id:4,
                        title:'task1',
                        isCurrent:false,
                        stDate:'12/12/21',
                        endDate:'01/01/22'} ,      
                        {id:5,
                            title:'task5',
                            isCurrent:true,
                            stDate:'12/12/21',
                            endDate:'01/01/22'} ,      
                            {id:6,
                                title:'task1',
                                isCurrent:false,
                                stDate:'12/12/21',
                                endDate:'01/01/22'}    
                             
    ]
    //title,isStatus,stDate,endDate
    const [inits,setInits]=useState(initiatives);
    //portal
    const [isOpen,setOpen]=useState(false);

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
            <div className="search">
                <div className="innerSearch">
                    <Search onSearch={onSearch}/>
                    <Filter onFilter={onFilter}/>
                </div>
            </div>
            <Modal isOpen={isOpen} onClose={onClose} onApplyFilter={onApplyFilter}/>
            <Initiatives initiatives={inits}/>
        </>
        )
}

export default Home
