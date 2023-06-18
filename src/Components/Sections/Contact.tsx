import React, { Component } from "react";

import { Box, Link } from "@mui/material";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp, faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
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
              <FontAwesomeIcon style={styles.icon} icon={faMobileScreen} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px", cursor: "default" }}>+61 466273586</span>
            </Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={styles.icon} icon={faAt} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px", cursor: "default" }}>yamildiego@gmail.com</span>
            </Box>
            <Box sx={{ lineHeight: "38px" }}>
              <FontAwesomeIcon style={{ fontSize: "25px", color: "#1b74e4" }} icon={faLinkedin} />
              <span style={{ verticalAlign: "3px", paddingLeft: "15px" }}>
                <Link href="https://www.linkedin.com/in/yamildiego" target="_blank">
                  /yamildiego
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
    pl: 2,
    pr: 2,
    height: "90vh",
  },
  title: {
    fontWeight: "bold",
    lineHeight: "80px",
    fontSize: "30px",
    color: "#444",
  },
  icon: {
    fontSize: "25px",
    color: "#222",
  },
};

export default Contact;
