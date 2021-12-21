import "../App.css";
import Initiatives from '../components/Initiatives';
import Search from '../components/Search'
import { useState } from "react";




const Home = () => {
    const initiatives=[
        {id:1,
            title:'task1',
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
                    isCurrent:false,
                    stDate:'12/12/21',
                    endDate:'01/01/22'},      
                    {id:4,
                        title:'task1',
                        isCurrent:false,
                        stDate:'12/12/21',
                        endDate:'01/01/22'} ,      
                        {id:5,
                            title:'task5',
                            isCurrent:false,
                            stDate:'12/12/21',
                            endDate:'01/01/22'} ,      
                            {id:6,
                                title:'task1',
                                isCurrent:false,
                                stDate:'12/12/21',
                                endDate:'01/01/22'}    
                             
    ]
    //title,isStatus,stDate,endDate
    const [inits,setInits]=useState(initiatives)

    const onSearch=(searchTerm)=>{
        console.log(searchTerm);
        setInits(initiatives.filter((init)=>(init.title).includes(searchTerm)));
        
    }

    return (
        <>
            <Search onSearch={onSearch}/>
            <Initiatives initiatives={inits}/>
        </>
        )
}

export default Home
