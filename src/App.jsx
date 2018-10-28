import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './MessageList.jsx'
import NavBar from './NavBar.jsx';

class App extends Component {
  constructor(props) {
    super(props),
    this.state = {
      currentUser: {name: 'Bob'}, // optional. if currentUser is not defined, it means the user is Anonymous
      messages: [
         {
           username: 'Bob',
           content: 'Has anyone seen my marbles?',
           key: '1'
         },
         {
           username: 'Anonymous',
           content: 'No, I think you lost them. You lost your marbles Bob. You lost them for good.',
           key: '2'
         }
       ]
    }
  }
  render() {
    return (
      <div>
        <NavBar />
        <MessageList messages={this.state.messages}/>
        <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
export default App;
