import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { asyncReceiveLeaderboards } from '../states/leaderboards/action';
import LeaderboardsList from '../components/LeaderboardsList';

export default function LeaderboardsPage() {
  const { leaderboards = [] } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncReceiveLeaderboards());
  }, [dispatch]);

  const leaderboardList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
  }));

  return (
    <div className="container flex flex-col mx-auto max-w-xl my-6 bg-white rounded-xl px-5 py-4 font-[Arapey] text-[#282118]">
      <h1 className="text-3xl text-center">Pengguna Teratas</h1>
      <LeaderboardsList leaderboards={leaderboardList} />
    </div>
  );
}
