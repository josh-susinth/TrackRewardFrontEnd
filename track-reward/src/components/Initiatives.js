import Initiative from "./Initiative";

const Initiatives = ({initiatives,onClickDesc}) => {
    return (
        <div>
            
            {initiatives.map((initiative)=>(
                <Initiative key={initiative.id} initiative={initiative} onClickDesc={onClickDesc}/>
            ))}
        </div>
    )
}

export default Initiatives
