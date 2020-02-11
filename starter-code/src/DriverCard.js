import React from 'react';

class DriverCard extends React.Component {
  render() {  
    let value = this.props.rating  
    return (
      <div className="DriverCard">
        <img src={this.props.img} alt=""/>
        <div className="Text">
          <h3>{this.props.name}</h3>

          {value >= 0.5 ? '★' : '☆'}
          {value >= 1.5 ? '★' : '☆'}
          {value >= 2.5 ? '★' : '☆'}
          {value >= 3.5 ? '★' : '☆'}
          {value >= 4.5 ? '★' : '☆'}

          <p>{this.props.car.model} - {this.props.car.licensePlate}</p>
        </div>
      </div>
    );
  }
}

export default DriverCard;