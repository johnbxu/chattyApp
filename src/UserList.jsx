import React from 'react';
import uuid from 'uuid';

// Renders a list of currently connected users
const UserList = ({connectedUsers}) => {
  const list = connectedUsers && connectedUsers.map(user => (
    <li key={uuid()}>{user}</li>
  ))
  return (
    <div className="userList">
      <h4>Users Online</h4>
      <ul>{list}</ul>
    </div>
  )
}

export default UserList;
