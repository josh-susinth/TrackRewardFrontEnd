import Button from './Button';
import '../App.css';

const Initiative = ({initiative}) => {
    return (
        <div className='init-container'>
            <div className="init">
                <h3>{initiative.title}</h3>
                <h3>{initiative.isStatus}</h3>
                <h3>{initiative.stDate}</h3>
                <h3>{initiative.endDate}</h3>
                <Button/>
            </div>
            <p>Description: This is a description</p>
        </div>
    )
}

export default Initiative
