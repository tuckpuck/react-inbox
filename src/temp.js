
    <div className={"row message " + this.state.read + " " + this.state.selected}>

    <i className={"star fa " + this.state.starred}

    <i className={this.props.starred?"star fa fa-star":"star fa fa-star-o"} onClick={this.changeStarred}></i>

    {this.props.starred.map((star, index) => {
      if (star === true) {
        return <i className={"star fa " + this.state.starred} onClick={this.changeStarred}></i>
      } else {
        return <i className={"star fa fa-star"} onClick={this.changeStarred}></i>
      }
    })}

    // {this.props.starred.map((star, index) => {
    //   if (star == true) {
    //     return <i className={"star fa fa-star-o" + this.state.starred} onClick={this.changeStarred}></i>
    //   } else {
    //     return <i className={"star fa fa-star"} onClick={this.changeStarred}></i>
    //   }
    // })}
