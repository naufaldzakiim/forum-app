/* eslint-disable react/jsx-one-expression-per-line */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { BiComment } from 'react-icons/bi';
import parse from 'html-react-parser';
import VoteButton from './VoteButton';
import { postedAt } from '../utils/index';
import { asyncUpVoteThread, asyncDownVoteThread, asyncNeutralVoteThread } from '../states/threads/action';

export default function ThreadItem(
  {
    id, title, body, category, createdAt, upVotesBy, downVotesBy, totalComments, owner, authUser,
  },
) {
  const isVotedUp = upVotesBy.includes(authUser);
  const isVotedDown = downVotesBy.includes(authUser);
  const { name } = owner;
  const dispatch = useDispatch();

  const onUpVoteClick = () => {
    if (isVotedUp) {
      dispatch(asyncNeutralVoteThread(id));
    } else {
      dispatch(asyncUpVoteThread(id));
    }
  };

  const onDownVoteClick = () => {
    if (isVotedDown) {
      dispatch(asyncNeutralVoteThread(id));
    } else {
      dispatch(asyncDownVoteThread(id));
    }
  };

  return (
    <div className="container flex flex-col gap-2 max-w-4xl py-6 px-6 rounded-xl bg-white">
      <header className="flex flex-col gap-2">
        <div className="border w-fit rounded-lg px-2 py-[2px]">
          <span>#</span>
          <span>{category}</span>
        </div>
        <Link to={`/thread/${id}`} className="text-xl">{title}</Link>
      </header>

      <div className="text-ellipsis line-clamp-4">
        {parse(body)}
      </div>

      <div className="flex flex-row gap-4 items-center">
        <VoteButton type="up" isActive={isVotedUp} onClick={onUpVoteClick} count={upVotesBy.length} />
        <VoteButton type="down" isActive={isVotedDown} onClick={onDownVoteClick} count={downVotesBy.length} />

        <div className="flex flex-row gap-[3px] items-center text-lg">
          <BiComment />
          <span>{totalComments}</span>
        </div>

        <div className="items-center text-base flex flex-row gap-3">
          <div>
            Oleh {name}
          </div>
          <div className="items-center">{postedAt(createdAt)}</div>
        </div>
      </div>
    </div>
  );
}

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
};

const userShape = {
  id: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
  owner: PropTypes.shape(userShape),
  authUser: PropTypes.string.isRequired,
};

ThreadItem.defaultProps = {
  owner: {},
};

export { threadItemShape, userShape };
