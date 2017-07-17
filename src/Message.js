import React, { Component } from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.labels);
    this.state = {
      read: "unread",
      selected: "",
      starred: "fa-star-o"
    };
    this.changeReadStatus = this.changeReadStatus.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
    this.changeStarred = this.changeStarred.bind(this);

  };

  changeReadStatus() {
    if (this.state.read === "unread") {
      this.setState({read: "read"});
    }
  }

  changeSelected() {
    if (this.state.selected === "") {
      this.setState({selected: "selected"});
    } else {
      this.setState({selected: ""});
    }
  }

  changeStarred() {
    if (this.state.starred === "fa-star-o") {
      this.setState({starred: "fa-star"});
    } else {
      this.setState({starred: "fa-star-o"});
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
        <i className={"star fa " + this.state.starred} onClick={this.changeStarred}></i>
      </div>
    </div>
  </div>
  <div className="col-xs-11">

  {this.props.labels.map((label, index) => {
    return <span className="label label-warning">{label}</span>
  })}

    <a href="#" onClick={this.changeReadStatus}>
      {this.props.message}
    </a>
  </div>
</div>
    );
  }
}

export default Message;
