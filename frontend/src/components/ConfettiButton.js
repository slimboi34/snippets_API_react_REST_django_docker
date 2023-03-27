import React from "react";
import Confetti from "react-confetti";

class ConfettiButton extends React.Component {
  state = {
    confettiActive: false,
  };

  handleClick = () => {
    this.setState({ confettiActive: true }, () => {
      setTimeout(() => {
        this.setState({ confettiActive: false });
      }, 30000); // confetti will stop after 3 seconds
    });
  };

  render() {
    const { confettiActive } = this.state;
    return (
      <div>
        <button onClick={this.handleClick}>Click me!</button>
        {confettiActive && <Confetti width={window.innerWidth} height={window.innerHeight} />}
      </div>
    );
  }
}

export default ConfettiButton;
