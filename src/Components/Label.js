import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faPlus,faEllipsis, faSignal5 } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import { faCircleCheck ,faSignal, faCircleXmark , faCircleDot,
    faCircleHalfStroke, faCircleExclamation} from '@fortawesome/free-solid-svg-icons';
import '../Css/Label.css'
import UserIcon from './UserIcon';

function Label(props) {

  const getStatusIcon = (status,user) => {
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
        return <FontAwesomeIcon style={{color:"#4b91f2"}} icon={faCircleCheck} />;
    case '4': 
        return <FontAwesomeIcon style={{color:"#ff8c4a"}} icon={faCircleExclamation} />;
    case '3':
         return <FontAwesomeIcon icon={faSignal5} />;
    case '2':
        return <FontAwesomeIcon style={{color:"#545755"}} icon={faSignal} />;
    case '1':
        return <FontAwesomeIcon style={{color:"#969696"}} icon={faSignal} />;
    case '0':
        return <FontAwesomeIcon icon={faEllipsis} />;
    default:
        return (
            <div>
                <UserIcon name={status ?status : ''} />
            </div>
        );
    }
};



const getStatusname = (status) => {
    switch (status) {
    case '4':
        return "Urgent"
    case '3':
         return "High"
    case '2':
        return "Medium"
    case '1':
        return "Low"
    case '0':
        return "No priority"
    default:
        return status 
    }
};

  return (
    <div className="tag">  
      <span className="name"> 
        <div className="icon">{getStatusIcon(props.groupkey)}</div>
        <h2 className="task">{getStatusname(props.groupkey)}</h2>
        <p className="num">{props.numberOfElements}</p>
      </span>
      <div className="ic">
      <FontAwesomeIcon className="icon" icon={faPlus} />
      <FontAwesomeIcon className="icon" icon={faEllipsis} />
      </div>
    </div>
  );
}

export default Label;
