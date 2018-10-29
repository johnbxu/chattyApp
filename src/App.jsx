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
      messages: [
         {
           id: '1',
           username: 'Bob',
           content: 'Has anyone seen my marbles?',
         },
         {
           id: '2',
           username: 'Anonymous',
           content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
         }
       ]
    }
    this.submitMessage = this.submitMessage.bind(this);
  }
  submitMessage (event) {
    // const newMessage = {
    //   username: event.
    // }
    event.preventDefault()
    const newMessage = {
      id: generateRandomString(8),
      username: event.target.username.value,
      content: event.target.content.value,
    }

    this.socket.send(JSON.stringify(newMessage));

    const oldMessages = this.state.messages
    const newMessages = [...oldMessages, newMessage]
    this.setState({
      currentUser: {name: event.target.username.value},
      messages: newMessages,
    })
    event.target.content.value = ''
  }
  componentDidMount() {
    this.socket = new WebSocket('ws://0.0.0.0:3001');
    this.socket.onmessage = function(event) {
      console.log(event.data)
    }
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: 'Michelle', content: 'Hello there!'};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
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
