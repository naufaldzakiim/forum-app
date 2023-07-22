import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail/action';

export default function CommentInput({ threadId }) {
  const [content, onContentChange] = useInput('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(asyncAddComment({ id: threadId, content }));
  };

  return (
    <form className="flex flex-col">
      <textarea value={content} onChange={onContentChange} className="border-2" />
      <button type="button" onClick={onSubmit}>Kirim komentar</button>
    </form>
  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};
