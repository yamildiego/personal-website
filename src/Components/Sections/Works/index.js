import React, { Component } from "react";
import { connect } from "react-redux";

import { BrowserView, MobileView } from "react-device-detect";

import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import bombieri from "../../../Assetss/bombieri.png";
import itsynch from "../../../Assetss/itsynch.png";
import freelance from "../../../Assetss/freelance.png";
import cursor from "../../../Assetss/cursor.png";
import finger from "../../../Assetss/finger.png";

import "./Works.css";

const experiences = [
  {
    key: 1,
    logo: itsynch,
    name: "ITysnch",
    url: "https://www.itsynch.com/",
    position: "Full Stack Developer",
    term: "Two years",
    tasks: [
      "Developing front end website architecture.",
      "Developing back end website applications.",
      "Designing and creating databases.",
      "Ensuring responsiveness of applications",
      "Designing and developing APIs.",
      "Creation and updating procedures, functions and triggers.",
    ],
  },
  {
    key: 2,
    logo: bombieri,
    name: "Bombieri",
    url: "https://www.bombieri.com.ar/",
    position: "Jr Full Stack Developer",
    term: "Two and a half years",
    tasks: [
      "Production, modification, and maintenance of websites.",
      "Seeing through a project from conception to finished product.",
      "Implementing responsive design for mobile sites.",
      "Testing the site during development for usability and fixing any bugs.",
      "Bringing a designer’s concept to life with HTML, CSS, and JavaScript.",
      "Edition and updating of the database design.",
      "Packaging the code for deployment.",
    ],
  },
  {
    key: 3,
    logo: freelance,
    name: "Freelance",
    url: "https://www.yamildiego.com",
    position: "FrontEnd Developer",
    term: "Since I was 17 years old",
    tasks: [
      "Requirements analysis.",
      "Client/Server side developments.",
      "Design  and develop custom software.",
      "Applications deployment and launch.",
    ],
  },
];

class Works extends Component {
  state = { selected: 1, isHover: false, noswitching: true };

  setSelected = (selected) => {
    if (selected != null) {
      if (this.state.isHover) {
        this.setState({ noswitching: false });
        setTimeout(() => this.setState({ isHover: true, noswitching: true, selected }), 500);
      } else {
        this.setState({ isHover: true, selected });
      }
    } else this.setState({ isHover: false });
  };

  render() {
    return (
      <Box sx={styles.mainContainer}>
        <Box id={"works"} sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Box sx={styles.title}>Work experience</Box>
            <BrowserView>
              <Box sx={{ display: !this.state.isHover ? "block" : "none" }}>
                <Box sx={{ fontSize: "18px", fontFamily: "Quicksand", textAlign: "center" }}>Move your cursor over the companies</Box>
                <img className="Cursor" src={cursor} alt="" />
              </Box>
            </BrowserView>
            <MobileView>
              <Box sx={{ display: !this.state.isHover ? "block" : "none" }}>
                <Box sx={{ fontSize: "18px", fontFamily: "Quicksand", textAlign: "center" }}>Move your finger over the companies</Box>
                <img className="Finger" src={finger} alt="" />
              </Box>
            </MobileView>
            <Box sx={{ marginTop: !this.state.isHover ? 0 : "23.2px", textAlign: "center", cursor: "default", userSelect: "none" }}>
              <span onMouseLeave={() => this.setSelected(null)}>
                {experiences.map((experience, index) => {
                  return (
                    <React.Fragment key={index}>
                      <span
                        onMouseEnter={() => this.setSelected(index)}
                        className="Company"
                        style={styles.text}
                      >{`${experience.name} `}</span>
                    </React.Fragment>
                  );
                })}
              </span>
              <Box sx={{ display: "flex", justifyContent: "center" }}>
                <Grid
                  container
                  sx={{
                    justifyContent: "center",
                    transition: "all 0.8s ease, border 1s ease",
                    opacity: this.state.isHover && this.state.noswitching ? 1 : 0,
                  }}
                >
                  <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                    <Box>
                      <img
                        style={{ margin: "8px", transition: "all 0.8s ease, border 1s ease" }}
                        src={experiences[this.state.selected].logo}
                        alt={experiences[this.state.selected].name}
                      />
                      <Box sx={{ fontSize: "14px", fontFamily: "Quicksand", transition: "all 0.8s ease, border 1s ease" }}>
                        {experiences[this.state.selected].name}
                      </Box>
                    </Box>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                    <Box sx={{ textAlign: "left", m: 3 }}>
                      <Box sx={{ fontSize: "25px", lineHeight: "38px", fontFamily: "Quicksand" }}>
                        <span style={{ fontWeight: "bold" }}>{experiences[this.state.selected].position}</span>
                      </Box>
                      <Box sx={{ lineHeight: "38px", fontFamily: "Quicksand" }}>
                        <span>My task</span>
                      </Box>
                      <ul style={{ paddingInlineStart: "35px", listStyleType: "circle", margin: 0 }}>
                        {experiences[this.state.selected].tasks.map((task, index) => {
                          return (
                            <li key={index} style={{ fontFamily: "Quicksand", lineHeight: "25px" }}>
                              {task}
                            </li>
                          );
                        })}
                      </ul>
                      <Box sx={{ lineHeight: "38px", fontFamily: "Quicksand" }}>
                        <span>Term:</span>
                      </Box>
                      <Box sx={{ lineHeight: "20px", fontFamily: "Quicksand", paddingLeft: "35px" }}>
                        <span>{experiences[this.state.selected].term}</span>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
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
    minHeight: "100vh",
  },
  title: {
    lineHeight: "130px",
    fontFamily: "Bangers",
    fontSize: "40px",
    color: "#222",
  },
  text: {
    fontSize: "28px",
    fontFamily: "Quicksand",
  },
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(Works);
