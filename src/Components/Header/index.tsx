import connectWithDispatch from "../../Hooks/connectWithDispatch";

import NavBar from "./NavBar";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";

import * as appActions from "../../Actions/appActions";

interface HeaderProps {
  isSideBarOpen: boolean;
  setIsSidebarOpen: (value: boolean) => void;
}

const Header = (props: HeaderProps) => {
  const { isSideBarOpen, setIsSidebarOpen } = props;

  return (
    <>
      <NavBar />
      {isSideBarOpen && <Backdrop onClick={() => setIsSidebarOpen(false)} />}
      <SideDrawer onClick={() => setIsSidebarOpen(false)} />
    </>
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

export default connectWithDispatch(Header, mapStateToProps, mapDispatchToProps);
