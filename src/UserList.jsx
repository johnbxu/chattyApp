import React from 'react';
import uuid from 'uuid';

// Renders a list of currently connected users
const UserList = ({connectedUsers, userCount}) => {
  const list = connectedUsers && connectedUsers.map(user => (
    <li className="list-group-item" key={uuid()}>{user}</li>
  ));
  return (
    <ul className="list-group">
      <h4>Users Online: {userCount}</h4>
      {list}
    </ul>
  );
}

export default UserList;
