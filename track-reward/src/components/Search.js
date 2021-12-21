import { useState } from 'react'
import '../App.css'

const Search = ({onSearch}) => {
    const [init,setInit]=useState('');

    const onsubmit=(e)=>{
        e.preventDefault();
        if(!init)
        alert("enter task");
        console.log(init);
        onSearch(init);
        console.log(123);
        setInit('');
   
    }
    return (
        <div className="search">
            <form onSubmit={onsubmit}>
                <input type='text' placeholder='Enter keyword...' value={init} onChange={(e)=>setInit(e.target.value)}></input>
                <input type='submit' value='Go'></input>
            </form>
        </div>
    )
}

export default Search
