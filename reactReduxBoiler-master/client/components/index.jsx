import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {Route, Link} from 'react-router-dom';
import { createStore } from 'redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import App from './app.js';
import reducers from '../reducers';
import injectTapEventPlugin from 'react-tap-event-plugin';
import User from './user.js';
import Error from './error.js';


injectTapEventPlugin();


ReactDOM.render(
<MuiThemeProvider>
  <Provider store={createStore(reducers)}>
    <App />
    <Route path="/user/:accessToken/:refreshToken" component={User} />
    <Route path="/error/:errorMsg" component={Error} />
  </Provider>
</MuiThemeProvider>
 , document.querySelector('.container'));
