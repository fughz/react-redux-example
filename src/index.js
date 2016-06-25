import React from 'react';
import { render } from 'react-dom'
import { Provider } from 'react-redux';
import { Router, browserHistory } from 'react-router'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import injectTapEventPlugin from "react-tap-event-plugin";

import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';

import configureStore from './store/configureStore';
import routes from './routes'

//Needed for onTouchTap
//Can go away when react 1.0 release
//Check this repo:
//https://github.com/zilverline/
injectTapEventPlugin();

const lightMuiTheme = getMuiTheme(lightBaseTheme);
const store = configureStore();
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
    <Provider store={store}>
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <Router history={history} routes={routes} />
      </MuiThemeProvider>
    </Provider>,
    document.getElementById('content')
);
