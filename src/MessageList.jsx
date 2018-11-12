import Message from './Message.jsx';

import React from 'react';

// Renders a list of all messages contained in app's state
const Messages = ({messages, userid}) => {
  const messageList = messages.map((message) => {
    return (<Message message={message} key={message.id} userid={userid}/>);
  });
  return (
    <main className="messages">
      {messageList}
    </main>
  );
}

export default Messages;
