import React from 'react';
import '../Css/PriorityCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck , faCircleXmark ,faCircleHalfStroke,faCircle as circle, faCircleDot} from '@fortawesome/free-solid-svg-icons';
import UserIcon from './UserIcon';

const PriorityCard = (props) => {
  const ticket=props.ticket
  const user=props.user
    const getStatusIcon = (status) => {
        switch (status) {
        case 'Todo':
            return <FontAwesomeIcon icon={faCircle} />;
        case 'In progress':
            return <FontAwesomeIcon style={{color:"#f0b429"}} icon={faCircleHalfStroke} />; 
            case 'Cancelled':
        return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleXmark} />; 
        case 'Backlog':
            return <FontAwesomeIcon style={{color:"#f24e4b"}} icon={faCircleDot} />;
        case 'Done':
            return <FontAwesomeIcon style={{color:"#ff8c4a"}}  icon={faCircleCheck} />
        default:
            return '❓'; 
        }
    };

  return (
    <div className="card">
      <span className='first'>
        {ticket.id}
        <UserIcon name={user ? user.name : ''} />
      </span>
      <span className='second'>
        <div className="status-icon">{getStatusIcon(ticket.status)}
          </div>
        <h2>{ticket.title}</h2>
      </span>
      <span className='feature'>
      <FontAwesomeIcon  className="feature-circle" icon={circle} />
        {ticket.tag}
      </span>
    </div>
  );
};

export default PriorityCard;
