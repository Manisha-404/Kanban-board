import React from 'react'
import StatusCard from './StatusCard';
import PriorityCard from './PriorityCard';
import UserCard from './UserCard';

function Card(props){
  const data=props.data
  const renderCard = (ticket) => {
    const user = data.users.find((u) => u.id === ticket.userId);
    switch (props.Type) {
      case 'Status':
        return <StatusCard key={ticket.id} ticket={ticket} user={user} />;
      case 'Priority':
        return <PriorityCard key={ticket.id} ticket={ticket} user={user} />;
      case 'User':
        return <UserCard key={ticket.id} ticket={ticket} user={user} />;
      default:
        return null;
    }
  };

  return (
    <>
      {props.ticket.map((ticket) => (
        <div className="column" key={ticket.id}>
          {renderCard(ticket)}
        </div>
      ))}
    </>
  );
}

export default Card;

