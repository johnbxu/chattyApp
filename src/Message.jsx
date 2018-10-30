import React from 'react';


const Message = ({message}) => {
  const images = message.imgs.map((img, index) => (<img className="image" src={img} key={index}/>))
  const imgs = message.imgs && <div>{images}</div>

  // Renders user submitted messages
  if(message.type === 'postMessage') {
    const spanStyle = {
      color: message.color
    }
    return (
      <div>
        <div className="message">
          <span className="message-username" style={spanStyle}>{message.username}</span>
          <span className="message-date">{message.date.slice(11,19)}</span>
          <span className="message-content">{message.content}</span>
        </div>
        {imgs}
      </div>
    )

  // Renders notifications
} else if (message.type === 'postNotification' || message.type === 'postConnection' || message.type === 'postDisconnect') {
    return (
      <div className="message system">
        {message.content}
      </div>
    )
  }
}

export default Message;
