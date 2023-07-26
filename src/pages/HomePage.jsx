import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiAddCircleFill } from 'react-icons/ri';
import ThreadList from '../components/ThreadList';
import Filter from '../components/Filter';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';

export default function HomePage() {
  const {
    threads = [],
    users = [],
    authUser,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((thread) => ({
    ...thread,
    owner: users.find((user) => user.id === thread.ownerId),
    authUser: authUser.id,
  }));

  const [selectedCat, setSelectedCat] = useState('');
  const categories = [...new Set(threads.map((thread) => thread.category))];

  const onSelectCatHandle = (e) => {
    const category = e.target.innerText;
    if (category === selectedCat) setSelectedCat('');
    else setSelectedCat(category);
  };

  const filteredThreads = (selectedCat !== '')
    ? threadList.filter((thread) => thread.category === selectedCat.split('#')[1])
    : threadList;

  return (
    <section className="container mx-auto max-w-5xl flex flex-col items-center text-[#282118] font-[Arapey] my-6 gap-6" id="homepage">
      <h1 className=" text-3xl">Threads</h1>
      <Filter categories={categories} selectedCategory={selectedCat} onSelect={onSelectCatHandle} />
      <ThreadList threads={filteredThreads} />
      <Link to="/new-thread"><RiAddCircleFill className="fixed bottom-5 right-5 text-[56px]" /></Link>
    </section>
  );
}
