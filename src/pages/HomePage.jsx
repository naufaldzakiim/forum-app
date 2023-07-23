import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { RiAddCircleFill } from 'react-icons/ri';
import ThreadList from '../components/ThreadList';
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

  return (
    <section className="container mx-auto max-w-5xl flex flex-col items-center text-[#282118] font-[Arapey] my-6 gap-6" id="homepage">
      <h1 className=" text-3xl">Diskusi tersedia</h1>
      <ThreadList threads={threadList} />
      <Link to="/new-thread"><RiAddCircleFill className="fixed bottom-5 right-5 text-[56px]" /></Link>
    </section>
  );
}
