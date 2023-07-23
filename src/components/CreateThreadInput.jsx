import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function CreateThreadInput({ create }) {
  const [title, onTitleChange] = useInput('');
  const [category, onCategoryChange] = useInput('');
  const [body, onBodyChange] = useInput('');

  return (
    <form className="flex flex-col w-full max-w-3xl gap-3 text-xl items-center">
      <input type="text" value={title} onChange={onTitleChange} placeholder="Judul" className="border-2 px-2 py-1 w-full" />
      <input type="text" value={category} onChange={onCategoryChange} placeholder="Kategori" className="border-2 px-2 py-1 w-full" />
      <textarea value={body} onChange={onBodyChange} className="border-2 resize-none px-2 py-1 min-h-[124px] w-full" />
      <button type="button" onClick={() => create({ title, body, category })} className="bg-[#CEC2B2] hover:bg-[#92897e] text-lg rounded-lg px-2 w-fit">Buat Thread</button>
    </form>
  );
}

CreateThreadInput.propTypes = {
  create: PropTypes.func.isRequired,
};
