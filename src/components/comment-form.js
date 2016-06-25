import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom'

import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

export default class CommentForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    const author = ReactDOM.findDOMNode(this.refs.author).value.trim();
    const text = ReactDOM.findDOMNode(this.refs.text).value.trim();
    if (!text || !author) {
      return;
    }
    this.props.onCommentSubmit({author: author, text: text});
    ReactDOM.findDOMNode(this.refs.author).value = '';
    ReactDOM.findDOMNode(this.refs.text).value = '';
  }
  render() {
    return (
      <div>
        <TextField hintText="Your name" ref="aurhor" /><br />
        <TextField
          hintText="Say something..."
          multiLine={true}
          ref="text" /><br />
        <RaisedButton
          label="submit"
          primary={true}
          onTouchTap={this.handleSubmit} />
      </div>
    );
  }
}

CommentForm.propTypes = {
  onCommentSubmit : PropTypes.func.isRequired
};
