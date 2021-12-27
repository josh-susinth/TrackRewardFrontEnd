import ReactDOM  from "react-dom";
import { FiX } from "react-icons/fi";


const Description = ({isOpenDesc,onCloseDesc,description}) => {
    if(!isOpenDesc)
    return null;
    return ReactDOM.createPortal(
        <>
        <div className="portal" style={{height:"250px" }}>
            <div className="portalHead" >
                <h1 className="portalName">Description</h1>
                <FiX style={{cursor:"pointer"}} onClick={onCloseDesc}/>
                <p style={{fontFamily:"Segoe UI",textAlign:"justify" }}>{description}</p>
            </div>
            
        </div>
        </>
    ,document.getElementById('portal'))
}

export default Description
