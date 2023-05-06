import React, { Component } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

import MenuIcon from "./MenuIcon";

const links = [
  { key: 1, to: "home", label: "Home" },
  { key: 2, to: "skills", label: "Skills" },
  { key: 3, to: "works", label: "Work experience" },
  { key: 4, to: "portfolio", label: "Portfolio" },
];

class NavBar extends Component {
  state = { isTop: true };

  componentDidMount = () => {
    document.addEventListener("scroll", this.checkScroll);
  };

  componentWillUnmount = () => {
    document.removeEventListener("scroll", this.checkScroll);
  };

  checkScroll = () => {
    const isTop = window.scrollY < 30;
    if (isTop !== this.state.isTop) this.setState({ isTop });
  };

  scrollToTop = () => {
    scroll.scrollToTop();
  };

  render() {
    return (
      <Box sx={styles.navbar}>
        <Box sx={{ ...styles.navbarContainer, backgroundColor: this.state.isTop ? "transparent" : "white" }}>
          <Box sx={styles.navbarSubcontainer}>
            <Stack direction="row" sx={{ width: "98%", margin: "auto", justifyContent: "space-between", lineHeight: "80px" }}>
              <Box onClick={this.scrollToTop} style={{ ...styles.home, opacity: this.state.isTop ? 0 : 1 }}>
                Yamil Diego
              </Box>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
                <Stack direction="row" sx={{ width: "100%" }}>
                  {links.map((link) => {
                    return (
                      <Link
                        key={link.key}
                        activeClass="active"
                        to={link.to}
                        spy={true}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        style={styles.link}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </Stack>
              </Box>
              <Box sx={{ display: { xs: "none", sm: "none", md: "block", lg: "block", xl: "block" } }}>
                <Link activeClass="active" to={"contact"} spy={true} smooth={true} offset={-70} duration={500} style={styles.link}>
                  <Button sx={styles.btnContact} color="warning" variant="contained">
                    contact
                  </Button>
                </Link>
              </Box>
              <Box sx={{ display: { xs: "block", sm: "block", md: "none", lg: "none", xl: "none" } }}>
                <MenuIcon />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Box>
    );
  }
}

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "center",
  },
  navbarContainer: {
    transition: "all 0.6s ease, border 0.2s ease",
    alignItems: "center",
    width: "100%",
    position: "fixed",
    zIndex: 10,
  },
  navbarSubcontainer: {
    maxWidth: "1250px",
    margin: "auto",
  },
  link: {
    paddingRight: "32px",
    fontSize: "18px",
    fontFamily: "Quicksand",
    textDecoration: "none",
    color: "#adadad",
    cursor: "pointer",
  },
  btnContact: {
    minWidth: "150px",
    color: "white",
  },
  home: {
    transition: "all 0.6s ease, border 0.2s ease",
    color: "#222",
    cursor: "pointer",
    fontFamily: "Bangers",
    fontSize: "40px",
    textShadow: "0 0 2px #fe6f27",
    paddingLeft: "16px",
  },
};

export default NavBar;
