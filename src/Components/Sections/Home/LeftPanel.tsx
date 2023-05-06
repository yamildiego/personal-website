import { Box, Button } from "@mui/material";

import { Link } from "react-scroll";

import { isMobile } from "react-device-detect";

interface LeftPanelProps {}

const LeftPanel = (props: LeftPanelProps) => {
  return (
    <Box sx={styles.container}>
      <Box sx={styles.title}>Hi! I am Yamil Diego,</Box>
      <Box sx={styles.body} className={"BodyHome"}>
        <Box sx={styles.text}>
          <Box className={"TextHome"}>
            I am a Full stack developer, I have worked for multiple companies mainly administration and maintenance.
          </Box>
          <Box className={"TextHome"}>
            I am lookig for my next challenge a job that can appeal to my creative side I have 5 years of experience as a developer and love
            working with React and other hip frameworks.
          </Box>
        </Box>
      </Box>

      <Link activeClass="active" to={"contact"} spy={true} smooth={true} offset={-70} duration={500}>
        <Button sx={styles.btn} color="warning" variant="outlined">
          contact
        </Button>
      </Link>
    </Box>
  );
};

const styles = {
  container: {
    flex: 1,
    zIndex: 2,
    position: "relative",
  },
  title: {
    fontWeight: "bold",
    color: "#444",
    fontSize: isMobile ? "30px" : "40px",
    cursor: "default",
  },
  body: {
    mt: "4%",
    top: "1px",
    fontSize: isMobile ? "17px" : "24px",
    textAlign: "justify",
    lineHeight: isMobile ? "1.8" : "2.8rem",
    userSelect: "none",
    paddingLeft: "5%",
    paddingRight: "5%",
  },
  text: {
    background: "linear-gradient(to right, hsl(98 100% 62%), hsl(204 100% 59%))",
    backgroundClip: "text",
    textFillColor: "transparent",
  },
  btn: {
    minWidth: "150px",
    lineHeight: "30px",
    display: "flex",
    margin: "auto",
    marginTop: "16px",
  },
};

export default LeftPanel;
