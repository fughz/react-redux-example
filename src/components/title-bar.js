import React, { PropTypes, Component } from 'react';
import AppBar from 'material-ui/AppBar';

export default class Header extends Component {
  render() {
    return (
      <AppBar
        title="React + Redux + Material UI"
        onLeftIconButtonTouchTap={this.props.onClickMenuButton}/>
    );
  }
}

Header.propTypes = {
  onClickMenuButton: PropTypes.func
}

Header.defaultProps = {
  onClickMenuButton: () => {}
}
