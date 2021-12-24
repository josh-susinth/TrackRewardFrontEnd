import { Link } from "react-router-dom"
const SideNav = () => {
    return (
        <>
            <nav >
                <ul>
                    <Link className="a" to='/'>Initiatives</Link>
                    <br></br>
                    <Link className="a" to='/sub'>Subscription</Link>
                    
                </ul>  
            </nav>
        </>
        
    )
}

export default SideNav
