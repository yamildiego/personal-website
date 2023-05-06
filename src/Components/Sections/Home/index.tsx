import React, { Component } from "react";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import LeftPanel from "./LeftPanel";
import RightPanel from "./RightPanel";

import { isMobile } from "react-device-detect";

class Home extends Component {
  render() {
    return (
      <Box id={"home"} sx={styles.mainContainer}>
        <Box sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Grid container spacing={2}>
              <Grid item xs={12} md={6}>
                <LeftPanel />
              </Grid>
              <Grid item xs={12} md={6}>
                <RightPanel />
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Box>
    );
  }
}

const styles = {
  mainContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "100px",
    paddingTop: isMobile ? "0px" : "50px",
  },
  container: {
    alignItems: "center",
    maxWidth: "1250px",
  },
  subContainer: {
    pl: 2,
    pr: 2,
  },
};

export default Home;
