import ReactDOM  from "react-dom";
import { useState } from "react";
import { FiX } from "react-icons/fi";
import '../App.css'

const Modal = ({isOpen,onClose,onApplyFilter}) => {

    const [filterVal,setFilterVal]=useState(0);

    if(!isOpen)
    return null;
    return ReactDOM.createPortal(
        <>
        <div className="overlay"/>
        <div className="portal">
            <div className="portalHead">
                <h1 className="portalName">Filter</h1>
                <FiX onClick={onClose}/>
            </div>
            
            <div className="innerPortal">
                
                
                <div>
                    <input type="radio" value={1} name="eventSts" onChange={(e)=>setFilterVal(e.target.value)}/> Current Events
                    <br></br>
                    <input type="radio" value={2} name="eventSts" onChange={(e)=>setFilterVal(e.target.value)}/> Upcoming Events
                    <br></br>
                    <input type="radio" value={0} name="eventSts" onChange={(e)=>setFilterVal(e.target.value)}/> Clear Filter
                </div>
                <button className='btn' style={{width:'100px',marginTop:'10px'}} onClick={()=>{
                    onApplyFilter(filterVal);
                    setFilterVal(0);
                }}>Apply Filter</button>
            

            </div>
            
        </div>
        </>
    ,document.getElementById('portal'))
}

export default Modal
