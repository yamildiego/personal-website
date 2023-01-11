import React, { Component } from "react";
import { connect } from "react-redux";

import Box from "@mui/material/Box";
import Link from "@mui/material/Link";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faMobileScreen, faAt } from "@fortawesome/free-solid-svg-icons";

class Contact extends Component {
  render() {
    return (
      <Box sx={styles.mainContainer}>
        <Box id={"contact"} sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Box sx={styles.title}>Contact</Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={{ fontSize: "25px", color: "#4dc247" }} icon={faWhatsapp} />
              <Link href="https://api.whatsapp.com/send?phone=61466273586" target="_blank">
                <span style={{ verticalAlign: "3px", paddingLeft: "15px" }}>+61 466273586</span>
              </Link>
            </Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={{ fontSize: "25px", color: "#222" }} icon={faMobileScreen} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px", cursor: "default" }}>+61 466273586</span>
            </Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={{ fontSize: "25px", color: "#222" }} icon={faAt} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px", cursor: "default" }}>yamildiego@gmail.com</span>
            </Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={{ fontSize: "25px", color: "#1b74e4" }} icon={faFacebook} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px" }}>
                <Link href="https://www.facebook.com/yamildieg0" target="_blank">
                  /yamildieg0
                </Link>
              </span>
            </Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={{ fontSize: "25px", color: "#24292f" }} icon={faGithub} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px" }}>
                <Link href="http://github.com/yamildiego" target="_blank">
                  /yamildiego
                </Link>
              </span>
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const styles = {
  mainContainer: {
    backgroundColor: "white",
    display: "flex",
    justifyContent: "center",
  },
  container: {
    maxWidth: "1250px",
    width: "100%",
  },
  subContainer: {
    width: "98%",
    margin: "auto",
    height: "80vh",
  },
  title: {
    lineHeight: "130px",
    fontFamily: "Bangers",
    fontSize: "40px",
    color: "#222",
  },
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(Contact);
