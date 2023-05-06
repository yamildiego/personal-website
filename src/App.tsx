import { createTheme, ThemeProvider } from "@mui/material/styles";

import connectWithDispatch from "./Hooks/connectWithDispatch";

import Header from "./Components/Header";
import Decorations from "./Components/Decorations";
import Home from "./Components/Sections/Home";
import Skills from "./Components/Sections/Skills";
import Works from "./Components/Sections/Works";
import Portfolio from "./Components/Sections/Portfolio";
import Contact from "./Components/Sections/Contact";

interface AppProps {
  theme: any;
}

const App = (props: AppProps) => {
  const mdTheme = createTheme(props.theme);

  return (
    <ThemeProvider theme={mdTheme}>
      <>
        <Header />
        <Decorations />
        <Home />
        <Skills />
        <Works />
        <Portfolio />
        <Contact />
      </>
    </ThemeProvider>
  );
};

function mapStateToProps(state: StateType) {
  return {
    theme: state.configReducer.theme,
  };
}

export default connectWithDispatch(App, mapStateToProps);
