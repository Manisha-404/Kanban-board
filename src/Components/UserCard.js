import React from 'react';
import '../Css/PriorityCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faSignal, faEllipsis, faCircleExclamation, faCircleCheck , faCircleXmark ,faCircleHalfStroke,faCircle as circle, faCircleDot} from '@fortawesome/free-solid-svg-icons';
const UserCard = ({ ticket }) => {

    const getStatusIcon = (status) => {
        switch (status) {
        case 'Todo':
            return <FontAwesomeIcon icon={faCircle} />; 
        case 'In progress':
            return <FontAwesomeIcon style={{color:"#f0b429"}}  icon={faCircleHalfStroke} />; 
            case 'Cancelled':
        return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleXmark} />; 
        case 'Backlog':
            return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleDot} />;
        case 'Done':
            return <FontAwesomeIcon style={{color:"#4b91f2"}} icon={faCircleCheck} />
        default:
            return '❓'; 
        }
    };

    const priority=ticket.priority
    const getPriorityIcon = (priority) => {
        switch (priority) {
        case 0:
            return <FontAwesomeIcon icon={faEllipsis} />; 
        case 1:
            return <FontAwesomeIcon style={{color:"#969696"}} icon={faSignal} />; 
        case 2:
            return <FontAwesomeIcon style={{color:"#545755"}} icon={faSignal} />; 
        case 3:
            return <FontAwesomeIcon icon={faSignal} />
        case 4:
            return <FontAwesomeIcon  style={{color:"#ff8c4a"}}  icon={faCircleExclamation}/>
        default:
            return <FontAwesomeIcon icon={faSignal} />;
        }
    };

  return (
    <div className="card">
      <span className='first'>
        {ticket.id}
      </span>
      <span className='second'>
        <div className="status-icon">{getStatusIcon(ticket.status)}
          </div>
        <h2>{ticket.title}</h2>
      </span>
      <span className='second'>
        <div className="priority-icon">{getPriorityIcon(priority)}</div>
        <span className='feature'>
        <FontAwesomeIcon  className="feature-circle" icon={circle} />
            {ticket.tag}
        </span>
      </span>     
      
    </div>
  );
};

export default UserCard;
