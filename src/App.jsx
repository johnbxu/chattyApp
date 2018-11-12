import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'
import NavBar from './NavBar.jsx';
import UserList from './UserList.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {name: 'Annonymous'},
      messages: [],
    };
  }

  // Handles key press for chat bar inputs
  _handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      let submission ={};
      if (event.target.name === 'username') {
        submission = {
          type: 'postNotification',
          username: event.target.value,
          content: `${this.state.currentUser.name} has changed their name to ${event.target.value}`,
        };
        this.setState({
          currentUser: { name: event.target.value }
        });

      } else if (event.target.name === 'content') {
        submission = {
          type: 'postMessage',
          username: this.state.currentUser.name,
          content: event.target.value,
        };
        event.target.value = ''
      }
      this.socket.send(JSON.stringify(submission));
    }
  }

  // Displays new message received from WebSocket server
  updateStateMessages = (data) => {
    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages, data]
    this.setState({
      messages: newMessages,
    });
  }

  // Updates the users counter and user list
  updateUsers = (data) => {
    this.setState({
      connectedUsers: data.connectedUsers,
      userCount: data.userCount,
    });
  }

  scrollToBottom = () => {
    this.messagesEnd.scrollIntoView({ behavior: "smooth" });
  }

  // Creates WebSocket object and submits a connection message to server
  componentDidMount() {
    this.socket = new WebSocket('ws://192.168.0.115:3001');

    this.socket.onopen = (event) => {
      console.log('Connected to websocket server');

      const submission = {
        type: 'postNotification',
        username: this.state.currentUser.name,
        content: `${this.state.currentUser.name} has connected`,
      };
      this.socket.send(JSON.stringify(submission));
    }

    // Calls appropriate state-modifying functions based on message from socket server
    this.socket.onmessage = (event) => {
      const response = JSON.parse(event.data);
      switch(response.type) {
        case 'postMessage':
          this.updateStateMessages(response);
          break;
        case 'postNotification':
          this.updateStateMessages(response);
          this.updateUsers(response);
          break;
        case 'userid':
          this.setState({ userid: response.userid });
          break;
        default:
          throw new Error('Unknown event type' + response.type);
      }
    }
    console.log("componentDidMount <App />");
  }

  componentDidUpdate() {
    this.scrollToBottom();
  }

  render() {
    return (
      <div>
        <NavBar />
        <div className="mainContainer">
          <MessageList messages={this.state.messages} userid={this.state.userid}/>
          <UserList connectedUsers={this.state.connectedUsers} userCount={this.state.userCount}/>
        </div>
        <ChatBar currentUser={this.state.currentUser} _handleKeyPress={this._handleKeyPress}/>
        {/* Hidden div to scroll to on new messages */}
        <div style={{ float:"left", clear: "both" }}
             ref={(el) => { this.messagesEnd = el; }}>
        </div>
      </div>
    );
  }
}

export default App;
