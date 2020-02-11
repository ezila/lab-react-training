import React from "react";

class IdCard extends React.Component {
  render() {
    return (
      <div className="Idcard Box">
        <img src={this.props.picture} alt=""/>
        <p>
          <strong>First name: </strong>{this.props.firstName}<br/>
          <strong>Last name: </strong>{this.props.lastName}<br/>
          <strong>Gender: </strong>{this.props.gender}<br/>
          <strong>Height: </strong>{this.props.height}<br/>
          <strong>Birth: </strong>{this.props.birth}
        </p>
      </div>
    );
  }
}

export default IdCard;