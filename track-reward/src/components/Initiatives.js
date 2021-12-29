import Initiative from "./Initiative";

const Initiatives = ({initiatives,onClickDesc,onSub}) => {
    console.log("inside inits")
    return (
        
        <div>
            
            {initiatives.map((initiative)=>(
                <Initiative key={initiative.pid} initiative={initiative} onClickDesc={onClickDesc} onSub={onSub}/>
            ))}
        </div>
    )
}

export default Initiatives
