import React, { Component } from 'react';

class Toolbar extends Component {
  render() {
    return (
      <div className="row toolbar">
    <div className="col-md-12">
      <p className="pull-right">
        <span className="badge badge">2</span>
        unread messages
      </p>

      <a className="btn btn-danger">
        <i className="fa fa-plus"></i>
      </a>

      <button className="btn btn-default">
        <i className="fa fa-minus-square-o"></i>
      </button>

      <button className="btn btn-default">Mark As Read</button>

      <button className="btn btn-default">Mark As Unread</button>

      <select className="form-control label-select">
        <option>Apply label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <select className="form-control label-select">
        <option>Remove label</option>
        <option value="dev">dev</option>
        <option value="personal">personal</option>
        <option value="gschool">gschool</option>
      </select>

      <button className="btn btn-default">
        <i className="fa fa-trash-o"></i>
      </button>
    </div>
  </div>
    );
  }
}

export default Toolbar;





// ----
// <div className="messagecontainer">
// <div className={"row message " + this.state.read}>
// <div className="col-xs-1">
// <div className="row">
// <div className="col-xs-2">
//   <input type="checkbox" />
// </div>
// <div className="col-xs-2">
//   <i className="star fa fa-star-o"></i>
// </div>
// </div>
// </div>
// <div className="col-xs-11">
// <a href="#" onClick={this.changeReadStatus}>
// Here is an example message.
// </a>
// </div>
// </div>
//
// <div className={"row message " + this.state.read}>
// <div className="col-xs-1">
// <div className="row">
// <div className="col-xs-2">
// <input type="checkbox" />
// </div>
// <div className="col-xs-2">
// <i className="star fa fa-star-o"></i>
// </div>
// </div>
// </div>
// <div className="col-xs-11">
// <a href="#" onClick={this.changeReadStatus}>
// Here is an example message.
// </a>
// </div>
// </div>
// <div>
// {this.state.allmessages.map((message, index) => (
//   <p>Hello!</p>
// ))}
// </div>
// </div>
