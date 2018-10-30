import React from 'react';
const ChatBar = ({currentUser, onKeyPress}) => {
  return (
    <footer className="chatbar">
      <input className="chatbar-username" name="username" onKeyPress={onKeyPress} defaultValue={currentUser.name} />
      <input className="chatbar-message" name="content" onKeyPress={onKeyPress} placeholder="Type a message and hit ENTER" />
    </footer>
  );
}
export default ChatBar;
