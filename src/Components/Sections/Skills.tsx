import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMarker, faCode, faDatabase, faFaceSmile } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@mui/material";

import Lines from "../Decorations/Lines";

let skills = [
  {
    key: 1,
    icon: faCode,
    title: "FrontEnd",
    subtitle: "Sone:",
    description: "CSS3, HTML5, JavaScript, JQuery, TypeScript, React, React Native, Responsive design, Bootstrap, Material UI.",
  },
  {
    key: 2,
    icon: faDatabase,
    title: "BackEnd",
    description: "PHP, Node.js, AdonisJS5, Django, MongoDB, MySQL, SQL Server, PostgreSQL, JSON, XML.",
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

const Skills = () => {
  return (
    <Box sx={styles.mainContainer} onMouseMove={() => {}}>
      <Lines />
      <Box id={"skills"} sx={styles.container}>
        <Box sx={styles.subContainer}>
          <Box sx={styles.title}>Skills</Box>
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
          <Box sx={styles.myStoryTitle}>Programming Skills and Expertise</Box>
          <Box sx={styles.myStory}>
            As an experienced developer, I've worked with many libraries on various projects. I know popular libraries like Axios, i18next,
            MUI, Font Awesome, Bootstrap, Redux, Mongoose, Nodemailer, Stripe, LocalForage, Lodash, react-router, Auth0, and react-csv. This
            has helped me build strong and scalable apps for clients and employers. I'm proud of my ability to quickly learn and adapt to
            new technologies, so I stay updated with the latest developments. With a successful track record of delivering efficient code,
            I'm confident I can handle any programming challenge.
          </Box>
          <Box sx={styles.myStoryTitle}>My story</Box>
          <Box sx={styles.myStory}>
            I am an Argentinian guy that started to travel around the world in 2017, I love meeting new people, learning different cultures,
            and trying new food. I enjoy cooking, listening to music and audio books, I consider myself a creative person, I completely
            freak out with teasers/bogglers/puzzles/speed cubes and lateral thinking puzzles, basically every game that challenges my mind.
            I love learning new techniques and programming languages and libs. My girlfriend recently got me for my birthday my very first
            3D printer and I started to learning a little bit of 3D design and it’s a great hobby. Also I have a web server, pretty old but
            enough good to use it as my lab. 😁
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

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
    paddingBottom: "32px",
  },
  subContainer: {
    pl: 2,
    pr: 2,
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    lineHeight: "80px",
    fontSize: "30px",
    color: "#ffe1d1",
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
    fontSize: "38px",
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
    pl: 1,
    pr: 1,
    fontSize: "32px",
    lineHeight: "60px",
    fontFamily: "Quicksand",
    color: "#dc5b15",
    textShadow: "0 0 2px white",
  },
  myStory: {
    pl: 1,
    pr: 1,
    fontSize: "18px",
    textAlign: "justify",
    lineHeight: "30px",
    fontFamily: "Quicksand",
    color: "white",
  },
};

export default Skills;
