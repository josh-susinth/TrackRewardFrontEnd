const Header = ({pName}) => {
    return (
        <nav>
            <div className="head-container">
                <div className="box">
                    <h3 className="appHeadText">Track and Reward</h3>
                </div>
                <div className="appHeadText">
                    <h3>{pName}</h3>
                </div>
            </div>
        </nav>
            
        
    )
}

export default Header
