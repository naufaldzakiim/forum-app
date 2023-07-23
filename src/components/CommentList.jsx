import React from 'react';
import PropTypes from 'prop-types';
import CommentItem, { commentItemShape } from './CommentItem';

export default function CommentList({ comments }) {
  return (
    <div className="flex flex-col gap-6">
      {comments.map((comment) => (
        <CommentItem key={comment.id} {...comment} />
      ))}
    </div>
  );
}

const commentsShape = {
  ...commentItemShape,
  authUser: PropTypes.string.isRequired,
};

CommentList.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentsShape)).isRequired,
};
