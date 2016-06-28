import React from 'react'
import { connect } from 'react-redux'
import { Route, IndexRedirect, Redirect, Link } from 'react-router'

import Header from './containers/header'
import App from './containers/app';
import About from './components/about';

class PageNotFound extends React.Component {
  render() {
    return (
      <div>
        <h1>Page Not Found.</h1>
        <p>Go to <Link to="/">Home Page</Link></p>
      </div>
    )
  }
}
export default connect(
)(PageNotFound);

const routes = (
  <Route path="/" component={Header}>
    <IndexRedirect to="/home" />
    <Route path="home" component={App} />
    <Route path="about" component={About} />
    <Route path="*" component={PageNotFound} />
  </Route>
)

export default routes
