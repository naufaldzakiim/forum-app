import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CreateThreadInput({ create }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="flex flex-col w-full max-w-3xl gap-3">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Judul" className="border-2" />
      <input type="text" value={category} onChange={onCategoryChange} placeholder="Kategori" className="border-2" />
      <textarea value={body} onChange={onBodyChange} className="border-2" />
      <button type="button" onClick={() => create({ title, body, category })}>Buat Thread</button>
    </form>
  );
}

CreateThreadInput.propTypes = {
  create: PropTypes.func.isRequired,
};
