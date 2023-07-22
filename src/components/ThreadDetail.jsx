/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-unused-vars */
import React from 'react';
import parse from 'html-react-parser';
import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import CommentList from './CommentList';
import { commentItemShape } from './CommentItem';
import CommentInput from './CommentInput';
import { postedAt } from '../utils';
import VoteButton from './VoteButton';
import { asyncUpVoteThreadDetail, asyncDownVoteThreadDetail, asyncNeutralVoteThreadDetail } from '../states/threadDetail/action';

export default function ThreadDetail({ threadDetail, authUser }) {
  const {
    id, owner, title, category, createdAt, body, upVotesBy, downVotesBy, comments,
  } = threadDetail;
  const isVotedUp = upVotesBy.includes(authUser);
  const isVotedDown = downVotesBy.includes(authUser);
  const dispatch = useDispatch();

  const onUpTDVoteClick = () => {
    if (isVotedUp) {
      dispatch(asyncNeutralVoteThreadDetail());
    } else {
      dispatch(asyncUpVoteThreadDetail());
    }
  };

  const onDownTDVoteClick = () => {
    if (isVotedDown) {
      dispatch(asyncNeutralVoteThreadDetail());
    } else {
      dispatch(asyncDownVoteThreadDetail());
    }
  };

  const commentList = comments.map((comment) => ({
    ...comment,
    authUser,
  }));

  return (
    <div className="container mx-auto max-w-5xl">
      <div className="flex flex-col gap-2">
        <div>
          <span>#{category}</span>
          <h1>{title}</h1>
        </div>
        <div className="flex flex-row gap-3">
          <img src={owner.avatar} alt={`${owner.name} avatar`} className="h-[30px] rounded-full" />
          <p>
            oleh{' '}{owner.name}
          </p>
          <p>{postedAt(createdAt)}</p>
        </div>
        <div>
          {parse(body)}
        </div>
        <div className="flex flex-row gap-1">
          <VoteButton type="up" isActive={isVotedUp} count={upVotesBy.length} onClick={onUpTDVoteClick} />
          <VoteButton type="down" isActive={isVotedDown} count={downVotesBy.length} onClick={onDownTDVoteClick} />
        </div>
      </div>
      <div>
        <h1>Beri komentar</h1>
        <CommentInput threadId={id} />
      </div>
      <div>
        <h1>Komentar({comments.length})
        </h1>
        <CommentList comments={commentList} />
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadDetailShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
};

ThreadDetail.propTypes = {
  threadDetail: PropTypes.shape(threadDetailShape).isRequired,
  authUser: PropTypes.string.isRequired,
};
