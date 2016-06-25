import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'

import TitleBar from '../components/title-bar';
import SideBar from '../components/side-bar';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpenSideBar: false
    };
  }

  switchSideBar() {
    this.setState({ isOpenSideBar: !this.state.isOpenSideBar });
  }

  render() {
    return (
      <div>
        <TitleBar onClickMenuButton={this.switchSideBar.bind(this)} />
        <SideBar open={this.state.isOpenSideBar} onRequestChange={this.switchSideBar.bind(this)}/>
        {this.props.children}
      </div>
    );
  }
}

export default connect(
)(Header);
