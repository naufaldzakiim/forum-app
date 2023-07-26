/* eslint-disable react/button-has-type */
import React from 'react';
import PropTypes from 'prop-types';
import {
  BiUpvote, BiSolidUpvote, BiDownvote, BiSolidDownvote,
} from 'react-icons/bi';

export default function VoteButton({
  type, isActive, onClick, count,
}) {
  if (type === 'up') {
    return (
      <div className="flex flex-row gap-[2px] items-center text-lg">
        <button onClick={onClick}>
          {isActive ? <BiSolidUpvote className="text-green-600" /> : <BiUpvote />}
        </button>
        <span>{count}</span>
      </div>
    );
  }

  if (type === 'down') {
    return (
      <div className="flex flex-row gap-[2px] items-center text-lg">
        <button onClick={onClick}>
          {isActive ? <BiSolidDownvote className="text-red-600" /> : <BiDownvote />}
        </button>
        <span>{count}</span>
      </div>
    );
  }
}

VoteButton.propTypes = {
  type: PropTypes.oneOf(['up', 'down']).isRequired,
  isActive: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};
