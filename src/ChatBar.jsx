import React from 'react';

const ChatBar = ({currentUser, _handleKeyPress}) => {
  return (
    <footer className="chatbar">
      <input className="chatbar-username form-control" name="username" onKeyPress={_handleKeyPress} defaultValue={currentUser.name} />
      <input className="chatbar-message form-control" name="content" onKeyPress={_handleKeyPress} placeholder="Type a message and hit ENTER" />
    </footer>
  );
}

export default ChatBar;
