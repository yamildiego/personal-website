import React, { Component } from "react";
import { connect } from "react-redux";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarker, faCode, faDatabase, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import Lines from "../../Decorations/Lines";

import * as configActions from "../../../Actions/configActions";

import "./Skills.css";

let skills = [
  {
    key: 1,
    icon: faCode,
    title: "FrontEnd",
    subtitle: "Sone:",
    description: "CSS3, HTML5, JavaScript, JQuery, AngularJS, TypeScript, React, React Native, Resposive design, Bootstrap, Material UI.",
  },
  {
    key: 2,
    icon: faDatabase,
    title: "BackEnd",
    description: "PHP, .NET, Node.js, MongoDB, MySQL, SQL Server, PostgreSQL, RestFul Api, JSON, XML.",
  },
  {
    key: 3,
    icon: faFaceSmile,
    title: "Personal Skills",
    description:
      "I am a friendly guy, easy going, responsible, oriented details, creative, always looking for improvement, learn and grows up.",
  },
  {
    key: 4,
    icon: faMarker,
    title: "Others",
    description: "GitHub, Photoshop, OOP, Imperative, Logical, Functional, ORM, Database Design",
  },
];

class Skills extends Component {
  onMouseMove = (e) => this.props.dispatch(configActions.setCoordinates({ x: e.screenX, y: e.screenY }));

  render() {
    return (
      <Box sx={styles.mainContainer} onMouseMove={this.onMouseMove}>
        <Lines />
        <Box id={"skills"} sx={styles.container}>
          <Box sx={styles.subContainer}>
            <Box sx={styles.title}>Skills</Box>
            <Box>{JSON.stringify(this.props.coordinates)}</Box>
            <Grid container>
              {skills.map((sk) => {
                return (
                  <Grid item key={sk.key} xs={12} md={6} lg={3} xl={3}>
                    <Box sx={styles.card}>
                      <Box sx={styles.iconSkill}>
                        <FontAwesomeIcon icon={sk.icon} />
                      </Box>
                      <Box sx={styles.titleSkill}>{sk.title}</Box>
                      <Box sx={styles.descriptionSkill}>{sk.description}</Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
            <Box sx={styles.myStoryTitle}>My story</Box>
            <Box sx={styles.myStory} className={"myStory"}>
              I am an Argentinian guy that started to travel around the world in 2017, I love meeting new people, learning different
              cultures, and trying new food. I enjoy cooking, listening to music and audio books, I consider myself a creative person, I
              completely freak out with teasers/bogglers/puzzles/speed cubes and lateral thinking puzzles, basically every game that
              challenges my mind. I love learning new techniques and programming languages and libs. My girlfriend recently got me for my
              birthday my very first 3D printer and I started to learning a little bit of 3D design and it’s a great hobby. Also I have a
              web server, pretty old but enough good to use it as my lab. 😁
            </Box>
          </Box>
        </Box>
      </Box>
    );
  }
}

const styles = {
  mainContainer: {
    position: "relative",
    backgroundColor: "#ff8c4d",
    boxShadow: "inset 0 0 10px #000000",
    display: "flex",
    justifyContent: "center",
  },
  decorations: {
    position: "absolute",
    color: "white",
    width: "50%",
    borderTop: "5px solid white",
    left: 0,
    top: 0,
    borderRadius: "20px",
    transform: "rotate(45deg)",
  },
  container: {
    maxWidth: "1250px",
    width: "100%",
    marginBottom: "32px",
  },
  subContainer: {
    width: "98%",
    margin: "auto",
    position: "relative",
  },
  title: {
    lineHeight: "102px",
    fontFamily: "Bangers",
    fontSize: "40px",
    color: "white",
  },
  card: {
    height: "290px",
    flex: 1,
    boxShadow: "inset 0 0 10px #dc5b15",
    padding: 1,
    margin: 1,
  },
  iconSkill: {
    textAlign: "center",
    fontSize: "4rem",
    color: "#ffaa7c",
    margin: "6px",
  },
  titleSkill: {
    fontSize: "42px",
    marginBottom: 2,
    textAlign: "center",
    color: "#d74d00",
  },
  descriptionSkill: {
    fontFamily: "Quicksand",
    fontSize: "18px",
    textAlign: "center",
    color: "#bc561f",
    lineHeight: "24px",
    marginTop: 2,
  },
  myStoryTitle: {
    fontSize: "32px",
    lineHeight: "60px",
    fontFamily: "Quicksand",
    color: "#dc5b15",
    textShadow: "0 0 2px white",
  },
  myStory: {
    fontSize: "18px",
    textAlign: "justify",
    lineHeight: "30px",
    fontFamily: "Quicksand",
    color: "white",
  },
};

function mapStateToProps(state, props) {
  return {
    coordinates: state.configReducer.coordinates,
  };
}

export default connect(mapStateToProps)(Skills);
