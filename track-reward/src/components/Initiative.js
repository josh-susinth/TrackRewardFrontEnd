import Button from './Button';
import '../App.css';

const Initiative = ({initiative}) => {
    return (
        <div className='init-container'>
            <div className="init">
                <p style={{flex:'2'}}>{initiative.title}</p>
                <p style={{flex:'1'}}>{initiative.isCurrent?'Current':'Upcoming'}</p>
                <p style={{flex:'1'}}>{initiative.stDate}</p>
                <p style={{flex:'1'}}>{initiative.endDate}</p>
                <Button/>
            </div>
            
        </div>
    )
}

export default Initiative
