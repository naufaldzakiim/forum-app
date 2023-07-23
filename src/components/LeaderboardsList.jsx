import React from 'react';
import PropTypes from 'prop-types';

export default function LeaderboardsList({ leaderboards }) {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-row justify-between text-2xl">
        <p>Pengguna</p>
        <p>Skor</p>
      </div>
      {leaderboards.map((leaderboard) => (
        <div key={leaderboard.user.id} className="flex flex-row justify-between text-xl">
          <div className="flex flex-row gap-3">
            <img src={leaderboard.user.avatar} alt={leaderboard.user.name} className="h-[30px] rounded-full" />
            <p>{leaderboard.user.name}</p>
          </div>
          <div>{leaderboard.score}</div>
        </div>
      ))}
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const leaderboardsShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardsList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardsShape)).isRequired,
};
