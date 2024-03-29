import { Box } from "@mui/material";

import connectWithDispatch from "../../Hooks/connectWithDispatch";

import * as appActions from "../../Actions/appActions";

import "./MenuIcon.css";

interface MenuIconProps {
  isSideBarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const MenuIcon = (props: MenuIconProps) => {
  const { setIsSidebarOpen, isSideBarOpen } = props;

  const handleOpen = () => setIsSidebarOpen(!isSideBarOpen);

  return (
    <Box sx={{ mr: 2 }}>
      <button onClick={handleOpen} className={`MenuIconBtn ${isSideBarOpen ? "MenuIconOpen" : ""}`}>
        <i className="MenuIconBars"></i>
      </button>
    </Box>
  );
};

const mapStateToProps = (state: StateType) => {
  return {
    isSideBarOpen: state.appReducer.isSideBarOpen,
  };
};

const mapDispatchToProps: MapDispatchToProps = {
  setIsSidebarOpen: appActions.setIsSidebarOpen,
};

export default connectWithDispatch(MenuIcon, mapStateToProps, mapDispatchToProps);
