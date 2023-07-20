/* eslint-disable max-len */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ThreadList from '../components/ThreadList';
import { asyncPopulateUsersAndThreads } from '../states/shared/action';
import {
  asyncAddThread, asyncDownVoteThread, asyncUpVoteThread, asyncNeutralVoteThread,
} from '../states/threads/action';

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

  // const onUpVoteThread = (threadId) => {
  //   const isUpVoted = threads.find((thread) => thread.id === threadId).upVotesBy.includes(authUser.id);
  //   dispatch(asyncUpVoteThread(threadId));
  // };

  const threadList = threads.map((thread) => ({
    ...thread,
    ownerId: users.find((user) => user.id === thread.ownerId).name,
  }));

  return (
    <section className="container mx-auto flex flex-col items-center" id="homepage">
      <h1>Diskusi tersedia</h1>
      <ThreadList threads={threadList} />
    </section>
  );
}
