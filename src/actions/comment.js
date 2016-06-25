import {fetch, save} from '../lib/comment-api-driver'

export const SUBMIT_COMMENT = 'SUBMIT_COMMENT'
export const RECEIVE_COMMENTS = 'RECEIVE_COMMENTS'

export function submitCommet(comment) {
  return {
    type: SUBMIT_COMMENT,
    comment
  };
}

export function receiveComments(comments) {
  return {
    type: RECEIVE_COMMENTS,
    comments
  };
}

export function fetchComments() {
  return dispatch => {
    fetch("http://localhost:3002/api/comments")
      .then((comments) => {
        dispatch(receiveComments(comments.data));
      }).catch((error) => {
        console.error(error);
      });
  };
}

export function saveComment(comment) {
  return dispatch => {
    dispatch(submitCommet(comment));
    save("http://localhost:3002/api/comments", comment)
      .then((comment) => {
        console.log("save comment");
      }).catch((error) => {
        console.error(error);
      });
  };
}
