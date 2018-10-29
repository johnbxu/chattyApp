import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props)
  }
  render() {
      if(this.props.message.type === 'postMessage') {
        const spanStyle = {
          color: this.props.message.color
        }
        console.log(this.props.message.color)
        return (
          <div className="message">
            <span className="message-username" style={spanStyle}>{this.props.message.username}</span>
            <span className="message-content">{this.props.message.content}</span>
            {this.props.message.img} && {this.props.message.img}
          </div>
        )
      } else if (this.props.message.type === 'postNotification') {
        return (
          <div className="message system">
            {this.props.message.content}
          </div>
        )
      }
  }
}
export default Message;
