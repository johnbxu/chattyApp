import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
    this.updateStateMessages = this.updateStateMessages.bind(this);
    this._handleKeyPress = this._handleKeyPress.bind(this);
  }

  _handleKeyPress (event) {
    if (event.key === 'Enter') {
      const submission = {};
      if (event.target.name === 'username') {
        submission.type = 'postNotification';
        submission.username = event.target.value;
        submission.content = `${this.state.currentUser.name} has changed their name to ${event.target.value}`;
      } else if (event.target.name === 'content') {
        submission.type = 'postMessage';
        submission.username = this.state.currentUser.name;
        submission.content = event.target.value;
        event.target.value = ''
      }

      this.socket.send(JSON.stringify(submission));
    }
  }

  updateStateMessages(data) {
    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages, data]
    this.setState({
      currentUser: { name: data.username },
      messages: newMessages,
    })
  }

  componentDidMount() {
    const self = this;
    this.socket = new WebSocket('ws://0.0.0.0:3001');

    this.socket.onopen = function(event) {
      console.log('Connected to websocket server')
    }

    this.socket.onmessage = function(event) {
      const response = JSON.parse(event.data)
      switch(response.type) {
        case 'postMessage':
          self.updateStateMessages(response);
          break;
        case 'postNotification':
          self.updateStateMessages(response);
          break;
        case 'updateUserCount':
          self.setState({
            userCount: response.userCount,
          });
          break;
        default:
          throw new Error('Unknown event type' + response.type);
      }
    }
    console.log("componentDidMount <App />");
  }
  render() {
    return (
      <div>
        <NavBar userCount={this.state.userCount}/>
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} onKeyPress={this._handleKeyPress}/>
      </div>
    );
  }
}
export default App;
