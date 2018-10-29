import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer className="chatbar">
        <input className="chatbar-username" name="username" onKeyPress={this.props.onKeyPress} defaultValue={this.props.currentUser.name} />
        <input className="chatbar-message" name="content" onKeyPress={this.props.onKeyPress} placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}
export default ChatBar;
