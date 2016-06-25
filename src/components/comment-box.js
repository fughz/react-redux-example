import React, { Component, PropTypes } from 'react';
import {Card, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';

import CommentList from './comment-list';
import CommentForm from './comment-form';

export default class CommentBox extends Component {
  componentDidMount() {
    this.props.actions.fetchComments();
    setInterval(this.props.actions.fetchComments, 2000);
  }

  render() {
    return (
      <Card>
        <CardHeader
          title="Comments" />
        <CardText>
          <CommentList comments={this.props.comments} />
          <CommentForm onCommentSubmit={this.props.actions.saveComment} />
        </CardText>
      </Card>
    );
  }
}

CommentBox.propTypes = {
  actions : PropTypes.object.isRequired,
  comments : PropTypes.array.isRequired
};
