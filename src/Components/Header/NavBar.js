import React, { Component } from "react";
import { connect } from "react-redux";
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
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box
          sx={{
            transition: "all 0.6s ease, border 0.2s ease",
            alignItems: "center",
            maxWidth: "1250px",
            width: "100%",
            position: "fixed",
            zIndex: 10,
            backgroundColor: this.state.isTop ? "transparent" : "white",
          }}
        >
          <Stack direction="row" sx={{ width: "98%", margin: "auto", justifyContent: "space-between", lineHeight: "110px" }}>
            <Box
              sx={{
                fontFamily: "Bangers",
                fontSize: "40px",
                textShadow: "0 0 2px #fe6f27",
              }}
            >
              <div
                onClick={this.scrollToTop}
                style={{
                  transition: "all 0.6s ease, border 0.2s ease",
                  opacity: this.state.isTop ? 0 : 1,
                  color: "#222",
                  cursor: "pointer",
                }}
              >
                Yamil Diego
              </div>
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
                      offset={-110}
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
              <Link
                onClick={this.props.onClick}
                activeClass="active"
                to={"contact"}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                style={styles.link}
              >
                <Button sx={{ minWidth: "150px", color: "white" }} color="warning" variant="contained">
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
    );
  }
}

const styles = {
  link: {
    paddingRight: "32px",
    fontSize: "18px",
    fontFamily: "Quicksand",
    textDecoration: "none",
    color: "#adadad",
    cursor: "pointer",
    userSelect: "none",
  },
};

function mapStateToProps(state, props) {
  return {};
}

export default connect(mapStateToProps)(NavBar);
