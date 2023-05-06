import connectWithDispatch from "../../Hooks/connectWithDispatch";

import { Button, Stack, Box } from "@mui/material";

import { Link } from "react-scroll";

const links = [
  { key: 1, to: "home", label: "Home" },
  { key: 2, to: "skills", label: "Skills" },
  { key: 3, to: "works", label: "Work experience" },
  { key: 4, to: "portfolio", label: "Portfolio" },
];

interface SideDrawerProps {
  isSideBarOpen: boolean;
  onClick: () => void;
}

const SideDrawer = (props: SideDrawerProps) => {
  const { isSideBarOpen, onClick } = props;

  return (
    <Box sx={isSideBarOpen ? styles.sideDrawerOpen : styles.sideDrawer}>
      <Stack sx={{ mt: 12, pl: 4 }}>
        {links.map((link) => {
          return (
            <Box sx={{ m: 2 }}>
              <Link
                onClick={onClick}
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
            </Box>
          );
        })}
        <Box sx={{ m: 2 }}>
          <Link
            onClick={onClick}
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
      </Stack>
    </Box>
  );
};

const styles = {
  link: {
    paddingRight: "32px",
    fontSize: "18px",
    fontFamily: "Quicksand",
    textDecoration: "none",
    color: "#adadad",
    cursor: "pointer",
  },
  sideDrawer: {
    height: "100%",
    background: "white",
    boxShadow: "1px 0 7px rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "70%",
    maxWidth: "250px",
    zIndex: "200",
    transform: "translateX(-100%)",
    transition: "transform 0.3s ease-out",
  },
  ul: {
    listStyle: "none",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    height: "100%",
  },
  sideDrawerOpen: {
    height: "100%",
    background: "white",
    boxShadow: "1px 0 7px rgba(0, 0, 0, 0.5)",
    position: "fixed",
    top: "0",
    left: "0",
    width: "70%",
    maxWidth: "250px",
    zIndex: "200",
    transition: "transform 0.3s ease-out",
    transform: "translateX(0)",
  },
};

const mapStateToProps = (state: StateType) => {
  return {
    isSideBarOpen: state.appReducer.isSideBarOpen,
  };
};

export default connectWithDispatch(SideDrawer, mapStateToProps);
