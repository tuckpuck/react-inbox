import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.allmessages);
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
      <div className={"row message " + this.state.read}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" />
      </div>
      <div className="col-xs-2">
        <i className="star fa fa-star-o"></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">
    <a href="#" onClick={this.changeReadStatus}>
      {this.props.message}
    </a>
  </div>
</div>
    );
  }
}

export default Message;
