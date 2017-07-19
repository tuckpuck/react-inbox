import React, {Component} from 'react';

class Message extends React.Component {
  constructor(props) {
    super(props);

    if(this.props.read){
      var read = "read";
    } else if(!this.props.read){
      var read = "unread";
    }

    if(this.props.selected){
      var selected = "selected";
    } else if(!this.props.selected){
      var selected = "";
    }

    if(this.props.starred){
      var star = "star fa fa-star"
    } else if(!this.props.starred){
      var star = "star fa fa-star-o"
    }

    this.state = {
      read: read,
      selected: selected,
      starred: star
    };
    this.changeReadStatus = this.changeReadStatus.bind(this);
    this.changeSelected = this.changeSelected.bind(this);
  };

  changeReadStatus() {
    if (this.state.read === "unread") {
      this.setState({read: "read"});
    }
  }

  changeSelected = () => {
    if (this.state.selected === "") {
      this.setState({selected: "selected"});
    } else {
      this.setState({selected: ""});
    }
  }

  changeStarred = () => {
  if(this.state.starred === "star fa fa-star") {
    this.setState({starred: "star fa fa-star-o"})
  } else {
    this.setState({starred: "star fa fa-star"})
  }
}

  render() {
    return (
      <div className={"row message " + this.state.read + " " + this.state.selected} onClick={this.changeRead}>

        <div className="col-xs-1">
          <div className="row">
            <div className="col-xs-2">
              <input type="checkbox" checked={this.props.selected} onChange={this.changeSelected} />
            </div>
            <div className="col-xs-2">
  <i onClick = {this.changeStarred} className = {this.state.starred}></i>
            </div>
          </div>
        </div>
        <div className="col-xs-11">

          {this.props.labels.map((label, index) => {
            return <span key={index} className="label label-warning">{label}</span>
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
