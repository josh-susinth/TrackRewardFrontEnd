import { IoMdOptions } from "react-icons/io";
const Filter = ({onFilter}) => {
    return (
        <div style={{cursor:"pointer"}} onClick={onFilter}>
            <IoMdOptions/>
        </div>
    )
}

export default Filter
