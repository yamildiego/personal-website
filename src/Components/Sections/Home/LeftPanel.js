import React, { Component } from "react";
import { connect } from "react-redux";
import prefix from "react-prefixer";

import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

class LeftPanel extends Component {
  render() {
    return (
      <Box sx={styles.container}>
        <Box sx={styles.title} className={"Title"}>
          Hi! I am Yamil Diego,
        </Box>
        <Box sx={styles.body} className={"BodyHome"}>
          <Box sx={styles.text}>
            <Box className={"TextHome"}>
              I am a Full stack developer, I have worked for multiple companies mainly administration and maintenance.
            </Box>
            <Box className={"TextHome"}>
              I am lookig for my next challenge a job that can appeal to my creative side I have 5 years of experience as a developer and
              love working with React and other hip frameworks.
            </Box>
          </Box>
        </Box>
        <Button sx={styles.btn} color="warning" variant="outlined">
          contact
        </Button>
      </Box>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    zIndex: 2,
    position: "relative",
  },
  title: {},
  body: {
    mt: "4%",
    top: "1px",
    fontSize: "24px",
    textAlign: "justify",
    lineHeight: "2.8rem",
  },
  text: prefix({
    background: "linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%))",
    backgroundClip: "text",
    textFillColor: "transparent",
  }),
  btn: {
    minWidth: "150px",
    lineHeight: "30px",
    display: "flex",
    margin: "auto",
    marginTop: "16px",
  },
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(LeftPanel);
