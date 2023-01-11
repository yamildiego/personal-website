import React, { Component } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

import "./index.css";

class Home extends Component {
  render() {
    return (
      <Box id={"home"} sx={styles.mainContainer}>
        <Box sx={styles.container}>
          <div className="Home">
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <LeftPanel />
              </Grid>
              <Grid item xs={12} md={6}>
                <RightPanel />
              </Grid>
            </Grid>
          </div>
        </Box>
      </Box>
    );
  }
}

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
  },
  container: {
    alignItems: "center",
    maxWidth: "1250px",
    paddingLeft: "25px",
    paddingRight: "25px",
  },
};

export default Home;
