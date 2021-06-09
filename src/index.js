import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { createStore, applyMiddleware } from 'redux';
import { Provider } from "react-redux";
import { BrowserRouter as Router } from 'react-router-dom';
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducers from './Component/reducers/rootReducers';
import 'bootstrap/dist/css/bootstrap.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'


library.add(fab, faCheckSquare, faBars, faTimes);

const store = createStore(
  rootReducers,
  composeWithDevTools(applyMiddleware(thunk))
);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename="/">
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();