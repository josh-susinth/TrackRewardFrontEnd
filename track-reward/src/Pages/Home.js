import "../App.css";
import Initiatives from '../components/Initiatives';
import Search from '../components/Search'
import { useState } from "react";




const Home = () => {
    const initiatives=[
        {id:1,
            title:'task1',
            isStatus:'upcoming',
            stDate:'12/12/21',
            endDate:'01/01/22'},      
            {id:2,
                title:'task2',
                isStatus:'current',
                stDate:'12/12/21',
                endDate:'01/01/22'},      
                {id:3,
                    title:'task3',
                    isStatus:'upcoming',
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
