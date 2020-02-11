import React from "react";

class Random extends React.Component {
  render() {
    const randomNumber = Math.floor((Math.random() * this.props.max) + 1);

    return (
      <div className="Box">
        <p>Random value between {this.props.min} and {this.props.max} => {randomNumber}</p>
      </div>
    );
  }
}

export default Random;