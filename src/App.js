import React, { Component } from 'react';
import { Route } from "react-router-dom";
import PrePage from './Component/pages/PrePage';
import Home from './Component/pages/Home';
import About from './Component/pages/About';
import Work from './Component/pages/Work';
import Contact from './Component/pages/Contact';
import CookiesPolicy from './Component/pages/CookiesPolicy';
import GenericNotFound from './Component/pages/GenericNotFound';
import SwitchWithSlide from './Component/SwitchWithSlide/SwitchWithSlide';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <SwitchWithSlide>
          <Route exact path="/" component={props => <PrePage {...props} />} />
          <Route exact path="/home" component={props => <Home {...props} />} />
          <Route exact path="/about" component={props => <About {...props} />} />
          <Route exact path="/work" component={props => <Work {...props} />} />
          <Route exact path="/contact" component={props => <Contact {...props} />} />
          <Route exact path="/cookies-policy" component={props => <CookiesPolicy {...props} />} />
          <Route exact path='*' component={props => <GenericNotFound {...props} />} />
        </SwitchWithSlide>
      </React.Fragment>
    );
  }
}

export default App;

    //     {/* <IntlProvider locale={this.props.lang} messages={lenguanges[this.props.lang]}> */ }
    // {/* <LayoutApp > */ }
    // {/* <AlertCookies /> */ }
    // {/* <HandleError></HandleError> */ }

    // {/* </LayoutApp> */ }
    // {/* </IntlProvider> */ }
