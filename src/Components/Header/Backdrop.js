import React from "react";

import Box from "@mui/material/Box";

class Backdrop extends React.PureComponent {
  render() {
    return <Box style={styles.backdrop} onClick={this.props.onClick} />;
  }
}

const styles = {
  backdrop: {
    position: "fixed",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    background: "rgba(0, 0, 0, 0.3)",
    zIndex: 100,
  },
};

export default Backdrop;
