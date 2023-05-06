import React, { Component } from "react";

import { Box, Grid, Link } from "@mui/material";

import bombieri from "../../Assets/bombieri.png";
import itsynch from "../../Assets/itsynch.png";
import freelance from "../../Assets/freelance.png";

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
  render() {
    return (
      <Box sx={styles.mainContainer}>
        <Box id={"works"} sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Box sx={styles.title}>Work experience</Box>
            <Box sx={{ mb: 4, textAlign: "center", cursor: "default", userSelect: "none" }}>
              {experiences.map((experience, index: number) => {
                return (
                  <Box key={index} sx={{ display: "flex", justifyContent: "center" }}>
                    <Grid
                      container
                      sx={{
                        justifyContent: "center",
                        transition: "all 0.8s ease, border 1s ease",
                      }}
                    >
                      <Grid item xs={12} sm={12} md={12} lg={4} xl={4}>
                        <Box>
                          <img
                            style={{ margin: "8px", transition: "all 0.8s ease, border 1s ease" }}
                            src={experience.logo}
                            alt={experience.name}
                          />
                          <Box sx={{ fontSize: "14px", fontFamily: "Quicksand", transition: "all 0.8s ease, border 1s ease" }}>
                            <Link href={experience.url} target="_blank" rel="noopener">
                              {experience.name}
                            </Link>
                          </Box>
                        </Box>
                      </Grid>
                      <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <Box sx={{ textAlign: "left", m: 3 }}>
                          <Box sx={{ fontSize: "25px", lineHeight: "38px", fontFamily: "Quicksand" }}>
                            <span style={{ fontWeight: "bold" }}>{experience.position}</span>
                          </Box>
                          <Box sx={{ lineHeight: "38px", fontFamily: "Quicksand" }}>
                            <span>My task</span>
                          </Box>
                          <ul style={{ paddingInlineStart: "35px", listStyleType: "circle", margin: 0 }}>
                            {experience.tasks.map((task, index) => {
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
                            <span>{experience.term}</span>
                          </Box>
                        </Box>
                      </Grid>
                    </Grid>
                  </Box>
                );
              })}
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

export default Works;
