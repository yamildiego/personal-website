import React, { Component } from "react";

import Box from "@mui/material/Box";

const Balls = () => {
  let balls = [];
  for (let i = 0; 15 > balls.length; i++) balls.push(Math.floor(Math.random() * (30 - 1)) + 1);
  return (
    <Box sx={{ display: { xs: "none", sm: "none", md: "none", lg: "block", xl: "block" } }}>
      {balls.map((ball, index) => (
        <Ball key={index} size={ball} />
      ))}
    </Box>
  );
};

interface BallProps {
  size: number;
}

class Ball extends Component<BallProps> {
  state = {
    left: Math.floor(Math.random() * (5 - 0)) + 0,
    top: Math.floor(Math.random() * (95 - 8)) + 8,
    deg: Math.floor(Math.random() * (360 - 0)) + 0,
  };

  move = () => {
    let randomBolean = Math.floor(Math.random() * (1 - 0)) + 0;
    let randomMove = Math.floor(Math.random() * (5 - 0));
    let top = randomBolean === 1 ? this.state.top - randomMove + 0 : this.state.top - randomMove;
    this.setState({ deg: Math.floor(Math.random() * (360 - 0)) + 0, left: Math.floor(Math.random() * (5 - 0)) + 0, top });
  };

  render() {
    return (
      <div
        onMouseEnter={this.move}
        style={{
          zIndex: 1,
          transition: "all 0.6s ease, border 0.2s ease",
          transform: `rotate(${this.state.deg}deg)`,
          backgroundColor: "transparent",
          position: "absolute",
          left: `${this.state.left}%`,
          top: `${this.state.top}%`,
          borderRadius: "60px",
          width: `${this.props.size}px`,
          height: `${this.props.size}px`,
          borderWidth: "15px",
          borderColor: "#fe6f27",
          borderStyle: "outset",
        }}
      ></div>
    );
  }
}

export default Balls;
