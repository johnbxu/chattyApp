import Message from './Message.jsx';

import React, {Component} from 'react';

class Messages extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const messages = this.props.messages.map((message) => {
      return (<Message message={message} key={message.key}/>)
    })
    return (
      <main className="messages">
        {messages}
      </main>
    );
  }
}
export default Messages;
