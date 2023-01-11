import React, { Component } from "react";
import { connect } from "react-redux";

import NavBar from "./NavBar";
import Backdrop from "./Backdrop";
import SideDrawer from "./SideDrawer";

import * as configActions from "../../Actions/configActions";

class Header extends Component {
  handleOpen = () => this.props.dispatch(configActions.setIsSidebarOpen(false));

  render() {
    return (
      <React.Fragment>
        <NavBar />
        {this.props.isSideBarOpen && <Backdrop onClick={this.handleOpen} />}
        <SideDrawer onClick={this.handleOpen} />
      </React.Fragment>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isSideBarOpen: state.configReducer.isSideBarOpen,
  };
}

export default connect(mapStateToProps)(Header);
