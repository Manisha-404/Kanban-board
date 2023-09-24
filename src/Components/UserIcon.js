import React from 'react';

function UserIcon({ name }) {
  const getRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  // Get the initials from the name
  const getInitials = (fullName) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length === 1) {
      // Only the first name is provided
      return nameParts[0].charAt(0);
    } else if (nameParts.length >= 2) {
      // Both first and last names are provided
      const firstInitial = nameParts[0].charAt(0);
      const lastInitial = nameParts[nameParts.length - 1].charAt(0);
      return `${firstInitial}${lastInitial}`;
    }
    return ''; // Default if no name is provided
  };

  const randomColor = getRandomColor();
  const initials = getInitials(name);

  return (
    <div
      className="user-icon"
      style={{ backgroundColor: randomColor, color: '#fff' , borderRadius:"50%",  width:"1.5em" , height:"1.5em", textAlign:"center"}}
    >
      {initials}
    </div>
  );
}

export default UserIcon;
