const Header = ({pName}) => {
    return (
        <nav>
            <div className="head-container">
                <div className="box">
                    <h3>Track and Reward</h3>
                </div>
                <div className="box">
                    <h2>{pName}</h2>
                </div>
            </div>
        </nav>
            
        
    )
}

export default Header
