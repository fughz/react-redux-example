import React, { Component, PropTypes } from 'react';
import ListItem from 'material-ui/List';

export default class Comment extends Component {
  rawMarkup() {
    let rawMarkup = marked(this.props.children.toString(), {sanitize: true});
    return { __html: rawMarkup };
  }
  render() {
    return (
      <ListItem
        primaryText={this.props.author}
        secondaryText={this.rawMarkup()}
      />
    );
  }
}

Comment.propTypes = {
  author : PropTypes.string.isRequired,
  children : PropTypes.string.isRequired
};
