import React, { Component } from 'react';
import Message from './Message.js'


class Messages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      read: "unread"
    };
    this.changeReadStatus = this.changeReadStatus.bind(this);
  }

  changeReadStatus() {
    if (this.state.read === "unread") {
      this.setState({read: "read"});
    }
  }

  render() {
    return (
      <div>
    {this.props.allmessages.map((message, index) => {
      return <Message key={index} message={message.subject}>  </Message>;
    })
  }
      </div>
    );
  }
}

export default Messages;
