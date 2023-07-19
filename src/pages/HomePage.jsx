/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import api from '../utils/api';
// import { asyncAddThread, asyncDownVoteThread, asyncUpVoteThread, asyncNeutralVoteThread } from '../states/threads/action';

export default function HomePage() {
  const {
    threads = [],
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPopulateUsersAndThreads());
  }, [dispatch]);

  const threadList = threads.map((talk) => ({
    ...talk,
  }));

  return (
    <section className="container mx-auto flex flex-col items-center" id="homepage">
      <h1>Diskusi tersedia</h1>
      <ThreadList threads={threads} />
    </section>
  );
}
