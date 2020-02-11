import React from "react";

class Greetings extends React.Component {
  render () {
    let message = "";

    if (this.props.lang === 'fr') {
      message = `Bonjour, ${this.props.children}`;
    }

    if (this.props.lang === 'en') {
      message = `Hello, ${this.props.children}`;
    }

    if (this.props.lang === 'de') {
      message = `Hallo, ${this.props.children}`;
    }

    if (this.props.lang === 'es') {
      message = `Hola, ${this.props.children}`;
    }

    return (
      <div className="Box">
        <p>{message}</p>
      </div>
    );
  }
}

export default Greetings;