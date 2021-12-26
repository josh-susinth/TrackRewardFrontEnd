import { Link } from "react-router-dom"
import { GoTriangleRight } from "react-icons/go";
const SideNav = () => {
    return (
        <>
            <nav >
                <ul>
                    <Link className="a" to='/'><h4><GoTriangleRight/>Initiatives</h4></Link>
                    <br></br>
                    <Link className="a" to='/sub'><h4><GoTriangleRight/>Subscription</h4></Link>
                    
                </ul>  
            </nav>
        </>
        
    )
}

export default SideNav
