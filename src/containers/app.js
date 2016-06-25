import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import CommentBox from '../components/comment-box';
import * as commentActions from '../actions/comment';

class App extends Component {
  render() {
    return (
      <div>
        <CommentBox comments={this.props.comments} actions={this.props.commentActions}/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state.comment;
}

function mapDispatchToProps(dispatch) {
  return {
    commentActions: bindActionCreators(commentActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
