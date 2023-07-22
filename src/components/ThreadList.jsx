import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape, userShape } from './ThreadItem';

export default function ThreadList({ threads }) {
  return (
    <div className="flex flex-col gap-8">
      {threads.map((thread) => (
        <ThreadItem key={thread.id} {...thread} />
      ))}
    </div>
  );
}

const threadsShape = {
  ...threadItemShape,
  owner: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadsShape)).isRequired,
};
