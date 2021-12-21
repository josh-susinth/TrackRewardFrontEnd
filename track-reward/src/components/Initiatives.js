import Initiative from "./Initiative";

const Initiatives = ({initiatives}) => {
    return (
        <div>
            
            {initiatives.map((initiative)=>(
                <Initiative key={initiative.id} initiative={initiative}/>
            ))}
        </div>
    )
}

export default Initiatives
