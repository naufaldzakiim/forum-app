import React from 'react';
import Filter from '../components/Filter';
import '../index.css';

export default {
  title: 'Filter',
  component: Filter,
};

const categories = ['category1', 'category2', 'category3'];

export function Default() {
  const [selectedCategory, setSelectedCategory] = React.useState('');
  const onSelect = (e) => {
    const category = e.target.innerText;
    if (category === selectedCategory) setSelectedCategory('');
    else setSelectedCategory(category);
  };
  return <Filter categories={categories} selectedCategory={selectedCategory} onSelect={onSelect} />;
}
