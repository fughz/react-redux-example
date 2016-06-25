import React, { Component, PropTypes } from 'react';
import Divider from 'material-ui/Divider';
import Subheader from 'material-ui/Subheader';
import {List, ListItem} from 'material-ui/List';
import Comment from './comment'

export default class CommentList extends Component {
  rawMarkup(text) {
    let rawMarkup = marked(text.toString(), {sanitize: true});
    return rawMarkup;
  }

  render() {
    const commentNodes = this.props.comments.map((comment, index) => {
      return (
        <ListItem
          primaryText={comment.author}
          secondaryText={this.rawMarkup(comment.text)}
        />
      );
    });
    return (
      <List>
        {commentNodes}
      </List>
    );
  }
}

CommentList.propTypes = {
  comments : PropTypes.array.isRequired
};
