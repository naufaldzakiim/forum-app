import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import parse from 'html-react-parser';
import { postedAt } from '../utils/index';
import VoteButton from './VoteButton';
import { asyncUpVoteComment, asyncDownVoteComment, asyncNeutralVoteComment } from '../states/threadDetail/action';

export default function CommentItem({
  id, content, createdAt, owner, upVotesBy, downVotesBy, authUser,
}) {
  const dispatch = useDispatch();
  const { name, avatar } = owner;
  const isVotedUp = upVotesBy.includes(authUser);
  const isVotedDown = downVotesBy.includes(authUser);

  const onUpVoteCommentClick = () => {
    if (isVotedUp) {
      dispatch(asyncNeutralVoteComment(id));
    } else {
      dispatch(asyncUpVoteComment(id));
    }
  };

  const onDownVoteCommentClick = () => {
    if (isVotedDown) {
      dispatch(asyncNeutralVoteComment(id));
    } else {
      dispatch(asyncDownVoteComment(id));
    }
  };

  return (
    <div className="flex flex-col">
      <header className="flex flex-row gap-7 items-center">
        <img src={avatar} alt={`${name} avatar`} className="h-[45px] rounded-full" />
        <div className="flex flex-col">
          <p>{name}</p>
          <p>{postedAt(createdAt)}</p>
        </div>
      </header>
      <div>
        {parse(content)}
      </div>
      <div className="flex flex-row gap-4">
        <VoteButton type="up" isActive={isVotedUp} onClick={onUpVoteCommentClick} count={upVotesBy.length} />
        <VoteButton type="down" isActive={isVotedDown} onClick={onDownVoteCommentClick} count={downVotesBy.length} />
      </div>
    </div>
  );
}

const commentItemShape = {
  id: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  owner: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
  }).isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
};

CommentItem.propTypes = {
  ...commentItemShape,
  authUser: PropTypes.string.isRequired,
};

export { commentItemShape };
