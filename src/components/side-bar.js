import React, { PropTypes, Component } from 'react';
import { Link } from 'react-router';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';

export default class SideBar extends Component {
  render() {
    return (
      <Drawer
        docked={false}
        open={this.props.open}
        onRequestChange={this.props.onRequestChange} >
        <MenuItem containerElement={<Link to="/home" />} primaryText="Home" />
        <MenuItem containerElement={<Link to="/about" />} primaryText="About" />
      </Drawer>
    );
  }
}

SideBar.PropTypes = {
  open: PropTypes.bool.isRequired,
  onRequestChange: PropTypes.func
}

SideBar.defaultProps = {
  onRequestChange: () => {}
}
