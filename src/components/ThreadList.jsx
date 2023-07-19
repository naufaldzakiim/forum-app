/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

export default function ThreadList({ threads }) {
  return (
    <div className="flex flex-col gap-8">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
};
