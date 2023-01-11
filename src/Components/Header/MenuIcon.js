import React, { Component } from "react";
import { connect } from "react-redux";

import * as configActions from "../../Actions/configActions";

import "./MenuIcon.css";

class MenuIcon extends Component {
  handleOpen = () => this.props.dispatch(configActions.setIsSidebarOpen(!this.props.isSideBarOpen));

  render() {
    return (
      <button onClick={this.handleOpen} className={`MenuIconBtn ${this.props.isSideBarOpen ? "MenuIconOpen" : ""}`}>
        <i className="MenuIconBars"></i>
      </button>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    isSideBarOpen: state.configReducer.isSideBarOpen,
  };
}

export default connect(mapStateToProps)(MenuIcon);
