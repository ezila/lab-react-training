import React from "react";

class Rating extends React.Component {
  render() {
    let value = this.props.children
    return (
      <div className="Rating">
        {value >= 0.5 ? '★' : '☆'}
        {value >= 1.5 ? '★' : '☆'}
        {value >= 2.5 ? '★' : '☆'}
        {value >= 3.5 ? '★' : '☆'}
        {value >= 4.5 ? '★' : '☆'}
      </div>
    );
  }
}

export default Rating;