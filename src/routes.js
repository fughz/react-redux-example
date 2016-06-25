import React from 'react'
import { connect } from 'react-redux'
import { Route, IndexRoute, Redirect, Link } from 'react-router'

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
    {/*<DefaultRoute component={Sider} />*/}
    <IndexRoute component={App} />
    <Route path="about" component={About} />
    <Route path="*" component={PageNotFound} />
    <Redirect from="home" to="/" />
  </Route>
)

export default routes
