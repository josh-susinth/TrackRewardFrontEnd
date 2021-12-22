import { IoMdOptions } from "react-icons/io";
const Filter = ({onFilter}) => {
    return (
        <div onClick={onFilter}>
            <IoMdOptions/>
        </div>
    )
}

export default Filter
