import React from 'react';

const ChatBar = ({currentUser, _handleKeyPress}) => {
  return (
    <footer className="chatbar">
      <input className="chatbar-username" name="username" onKeyPress={_handleKeyPress} defaultValue={currentUser.name} />
      <input className="chatbar-message" name="content" onKeyPress={_handleKeyPress} placeholder="Type a message and hit ENTER" />
    </footer>
  );
}

export default ChatBar;
