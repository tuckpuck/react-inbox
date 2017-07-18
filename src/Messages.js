import React, { Component } from 'react';
import Message from './Message.js'


class Messages extends React.Component {
  render() {
    return (
      <div>
    {this.props.allmessages.map((message, index) => {
      return <Message key={index} message={message.subject} labels={message.labels} starred={message.starred} read={message.read} selected={message.selected}></Message> ;
    })
  }
      </div>
    );
  }
}

export default Messages;
