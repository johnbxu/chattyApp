import React, {Component} from 'react';
import uuid from 'uuid';

class UserList extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const list = this.props.connectedUsers && this.props.connectedUsers.map(user => (
      <li key={uuid()}>{user}</li>
    ))
    return (
      <div className="userList">
        <h4>Users Online</h4>
        <ul>{list}</ul>
      </div>
    )
  }
}

export default UserList;
