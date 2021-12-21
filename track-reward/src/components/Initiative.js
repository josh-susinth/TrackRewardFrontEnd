import Button from './Button';
import '../App.css';

const Initiative = ({initiative}) => {
    return (
        <div className='init-container'>
            <div className="init">
                <h4>{initiative.title}</h4>
                <h4>{initiative.isCurrent?'Current':'Upcoming'}</h4>
                <h4>{initiative.stDate}</h4>
                <h4>{initiative.endDate}</h4>
                <Button/>
            </div>
            <p>Description: This is a description</p>
        </div>
    )
}

export default Initiative
