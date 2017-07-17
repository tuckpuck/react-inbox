import React, { Component } from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
    console.log(this.props.allmessages);
    this.state = {
      read: "unread",
      selected: ""
    };
    this.changeReadStatus = this.changeReadStatus.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  };

  changeReadStatus() {
    if (this.state.read === "unread") {
      this.setState({read: "read"});
    }
  }

  changeSelected() {
    if (this.state.selected == "") {
      this.setState({selected: "selected"});
    } else {
      this.setState({selected: ""});
    }
  }

  render() {
    return (
      <div className={"row message " + this.state.read + " " + this.state.selected}>
  <div className="col-xs-1">
    <div className="row">
      <div className="col-xs-2">
        <input type="checkbox" onChange={this.changeSelected}/>
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
