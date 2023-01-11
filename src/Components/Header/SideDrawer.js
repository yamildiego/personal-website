import React from "react";
import { connect } from "react-redux";

import Button from "@mui/material/Button";

import { Link } from "react-scroll";
import "./SideDrawer.css";

const links = [
  { key: 1, to: "home", label: "Home" },
  { key: 2, to: "skills", label: "Skills" },
  { key: 3, to: "works", label: "Work experience" },
  { key: 4, to: "portfolio", label: "Portfolio" },
];

class SideDrawer extends React.PureComponent {
  render() {
    let drawerClasses = this.props.isSideBarOpen ? "SideDrawer SideDrawerOpen" : "SideDrawer";

    return (
      <nav className={drawerClasses}>
        <ul>
          {links.map((link) => {
            return (
              <li key={link.key}>
                <Link
                  onClick={this.props.onClick}
                  activeClass="active"
                  to={link.to}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  style={styles.link}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
          <li>
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
          </li>
        </ul>
      </nav>
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
  return {
    isSideBarOpen: state.configReducer.isSideBarOpen,
  };
}

export default connect(mapStateToProps)(SideDrawer);
