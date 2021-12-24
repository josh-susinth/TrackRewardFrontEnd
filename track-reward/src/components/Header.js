const Header = ({pName,logout}) => {
    return (
        <nav>
            <div className="head-container">
                <div className="box">
                    <h3 className="appHeadText">Track and Reward</h3>
                </div>
                <div className="appHeadText">
                    <p>{pName}</p>
                </div>
                <div>
                    <button className="btn" style={{marginTop:"15px" }}onClick={logout}>log out</button>
                </div>
            </div>
        </nav>
            
        
    )
}

export default Header
