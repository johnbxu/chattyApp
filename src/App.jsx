import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'
import NavBar from './NavBar.jsx';
import generateRandomString from './random.js'

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: []
    }
    this.submitMessage = this.submitMessage.bind(this);
    this.updateStateMessages = this.updateStateMessages.bind(this);
  }
  submitMessage (event) {
    event.preventDefault()
    const newMessage = {
      username: event.target.username.value,
      content: event.target.content.value,
    }

    this.socket.send(JSON.stringify(newMessage));
    event.target.content.value = ''
  }

  updateStateMessages(data) {
    const receivedMessage = JSON.parse(data.data);
    const oldMessages = this.state.messages;
    const newMessages = [...oldMessages, receivedMessage]
    this.setState({
      currentUser: {name: receivedMessage.username},
      messages: newMessages,
    })
    console.log(this.state)
  }

  componentDidMount() {
    const self = this;
    this.socket = new WebSocket('ws://0.0.0.0:3001');
    this.socket.onmessage = function(event) {
      self.updateStateMessages(event);
    }
    console.log("componentDidMount <App />");
  }
  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} onSubmit={this.submitMessage}/>
      </div>
    );
  }
}
export default App;
