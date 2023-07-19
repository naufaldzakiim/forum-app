/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { BiUpvote, BiDownvote, BiComment } from 'react-icons/bi';
import parse from 'html-react-parser';
import { postedAt } from '../utils/index';

export default function ThreadItem(
  {
    id, title, body, category, createdAt, ownerId, upVotesBy, downVotesBy, totalComments,
  },
) {
  return (
    <div className="container flex flex-col gap-2 px-14 max-w-6xl">
      <header>
        <div>{category}</div>
        <h1>{title}</h1>
      </header>
      <div className="text-ellipsis line-clamp-4">
        {parse(body)}
      </div>
      <div className="flex flex-row gap-4 items-center">
        <div className="flex flex-row gap-[2px] items-center">
          <BiUpvote />
          <span>{upVotesBy.length}</span>
        </div>
        <div className="flex flex-row gap-[2px] items-center">
          <BiDownvote />
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
          <span>{ownerId}</span>
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

ThreadItem.propTypes = {
  ...threadItemShape,
};

export { threadItemShape };
