import React from 'react';
import '../Css/PriorityCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import UserIcon from './UserIcon';
import { faCircle as circle, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import { faEllipsis , faSignal} from '@fortawesome/free-solid-svg-icons';

const StatusCard = (props) => {
    const ticket=props.ticket
    const user=props.user
    const priority=ticket.priority
    const getStatusIcon = (priority) => {
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
        <UserIcon name={user ? user.name : ''} />
      </span>
      <h2>{ticket.title}</h2>
      <span className='second'>
        <div className="priority-icon">{getStatusIcon(priority)}</div>
        <span className='feature'>
        <FontAwesomeIcon  className="feature-circle" icon={circle} />
            {ticket.tag}
        </span>
      </span>   
    </div>
  );
};

export default StatusCard;
