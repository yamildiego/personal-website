import React, { Component } from "react";
import { connect } from "react-redux";

import "./App.css";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Header from "./Header";
import Decorations from "./Decorations";

import Home from "./Sections/Home";
import Skills from "./Sections/Skills";
import Works from "./Sections/Works";
import Portfolio from "./Sections/Portfolio";
import Contact from "./Sections/Contact";

class App extends Component {
  render() {
    let mdTheme = createTheme(this.props.theme);

    return (
      <ThemeProvider theme={mdTheme}>
        <React.Fragment>
          <Header />
          <Decorations />
          <Home />
          <Skills />
          <Works />
          <Portfolio />
          <Contact />
        </React.Fragment>
      </ThemeProvider>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    theme: state.configReducer.theme,
  };
}

export default connect(mapStateToProps)(App);
