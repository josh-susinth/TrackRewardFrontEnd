import Button from './Button';
import { AiFillInfoCircle } from "react-icons/ai";
import '../App.css';

const Initiative = ({initiative,onClickDesc,onSub}) => {
    return (
        <>
        <div className='init-container'>
            <div className="init">
                <p style={{flex:'2'}}  >{initiative.eventname}<AiFillInfoCircle style={{cursor:"pointer"}} onClick={()=>onClickDesc(initiative.description)}/></p>
                
                <p style={{flex:'1'}}>{initiative.status?'Current':'Upcoming'}</p>
                <p style={{flex:'1'}}>{initiative.sdate}</p>
                <p style={{flex:'1'}}>{initiative.edate}</p>
                <Button btnText={initiative.empid?"UnSubscribe":"Subscribe"} onSub={()=>onSub(initiative.empid,initiative.pid)}/>
            </div>
        </div>
        

        </>
        
    )
}

export default Initiative
