import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import useInput from '../hooks/useInput';
import { asyncAddComment } from '../states/threadDetail/action';

export default function CommentInput({ threadId }) {
  const [content, onContentChange, setContent] = useInput('');
  const dispatch = useDispatch();

  const onSubmit = () => {
    dispatch(asyncAddComment({ id: threadId, content }));
    setContent('');
  };

  return (
    <form className="flex flex-col items-center gap-6">
      <textarea value={content} onChange={onContentChange} className="border-2 resize-none text-lg px-4 py-3 w-full h-[150px]" />
      <button type="button" onClick={onSubmit} className="bg-[#CEC2B2] hover:bg-[#92897e] text-lg rounded-lg px-2 w-fit">Kirim komentar</button>
    </form>
  );
}

CommentInput.propTypes = {
  threadId: PropTypes.string.isRequired,
};
