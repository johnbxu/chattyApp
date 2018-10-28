import React, {Component} from 'react';

class ChatBar extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <footer className="chatbar">
        <form className= "chatbar-form" onSubmit={this.props.onSubmit}>
          <input className="chatbar-username" name="username" defaultValue={this.props.currentUser.name} />
          <input className="chatbar-message" name="content" placeholder="Type a message and hit ENTER" />
          <span><button type="submit" id="submitBtn"/></span>
        </form>
      </footer>
    );
  }
}
export default ChatBar;
