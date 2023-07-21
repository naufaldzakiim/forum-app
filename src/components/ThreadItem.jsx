/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {
  BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote, BiComment,
} from 'react-icons/bi';
import parse from 'html-react-parser';
import { postedAt } from '../utils/index';
import { asyncUpVoteThread, asyncDownVoteThread } from '../states/threads/action';

export default function ThreadItem(
  {
    id, title, body, category, createdAt, user, upVotesBy, downVotesBy, totalComments,
    ownerName, authUser,
  },
) {
  const isVotedUp = upVotesBy.includes(authUser);
  const isVotedDown = downVotesBy.includes(authUser);
  const { name } = user;
  const dispatch = useDispatch();

  const onUpVoteClick = () => {
    dispatch(asyncUpVoteThread(id));
  };

  const onDownVoteClick = () => {
    dispatch(asyncDownVoteThread(id));
  };
  return (
    <div className="container flex flex-col gap-2 px-14 max-w-6xl">
      <header>
        <div>
          <span>#</span>
          <span>{category}</span>
        </div>
        <h1>{title}</h1>
      </header>

      <div className="text-ellipsis line-clamp-4">
        {parse(body)}
      </div>

      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row gap-[2px] items-center">
          <div onClick={onUpVoteClick}>
            {isVotedUp ? <BiSolidUpvote className="text-green-600" /> : <BiUpvote />}
          </div>
          <span>{upVotesBy.length}</span>
        </div>

        <div className="flex flex-row gap-[2px] items-center">
          <div onClick={onDownVoteClick}>
            {isVotedDown ? <BiSolidDownvote className="text-red-600" /> : <BiDownvote />}
          </div>
          <span>{downVotesBy.length}</span>
        </div>

        <div className="flex flex-row gap-[3px] items-center">
          <BiComment />
          <span>{totalComments}</span>
        </div>

        <div className="items-center">{postedAt(createdAt)}</div>
        <div className="items-center">
          Dibuat oleh
          {' '}
          <span>{name}</span>
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
  ownerId: PropTypes.string.isRequired,
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
  user: PropTypes.shape(userShape),
  authUser: PropTypes.string.isRequired,
};

ThreadItem.defaultProps = {
  user: {},
};

export { threadItemShape };
