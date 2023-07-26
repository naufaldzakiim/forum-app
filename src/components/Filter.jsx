/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import PropTypes from 'prop-types';

export default function Filter({ categories, selectedCategory = '', onSelect }) {
  if (selectedCategory !== '') {
    return (
      <div className="flex flex-row gap-3 w-full max-w-4xl">
        <div onClick={onSelect} className="border w-fit rounded-lg px-2 py-[2px] hover:cursor-pointer text-[#282118] font-[Arapey] bg-white">
          <span>{`${selectedCategory}`}</span>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-row gap-3 w-full max-w-4xl">
      {categories.map((category) => (
        <div onClick={onSelect} className="border w-fit rounded-lg px-2 py-[2px] hover:cursor-pointer text-[#282118] font-[Arapey] bg-white">
          <span>{`#${category}`}</span>
        </div>
      ))}
    </div>
  );
}

Filter.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedCategory: PropTypes.string.isRequired,
  onSelect: PropTypes.func.isRequired,
};
