import React, {Component} from 'react';


class Message extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const images = this.props.message.imgs.map(img => (<img className="image" src={img} key={img}/>))
    console.log(images)
    const imgs = this.props.message.imgs && <div>{images}</div>
    if(this.props.message.type === 'postMessage') {
      const spanStyle = {
        color: this.props.message.color
      }
      return (
        <div>
          <div className="message">
            <span className="message-username" style={spanStyle}>{this.props.message.username}</span>
            <span className="message-content">{this.props.message.content}</span>
          </div>
          {imgs}
        </div>
      )
    } else if (this.props.message.type === 'postNotification' || this.props.message.type === 'postConnection') {
      return (
        <div className="message system">
          {this.props.message.content}
        </div>
      )
    }
  }
}
export default Message;
