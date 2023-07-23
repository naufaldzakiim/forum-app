/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { userShape } from './ThreadItem';

export default function Navigation({ authUser }) {
  return (
    <nav className="fixed top-0 container bg-[#f3f2ec] flex flex-row justify-between max-w-5xl mx-auto items-center h-16 font-[Arapey] text-[#282118] border-b-2 border-opacity-80 border-[#282118]">
      <div className="font-bold text-3xl">
        Forum App
      </div>
      <div className="flex flex-row gap-1 text-xl items-center">
        <Link to="/" className="hover:bg-[#A2967E] hover:bg-opacity-50 rounded-md px-2">Threads</Link>
        <Link to="/leaderboards" className="hover:bg-[#A2967E] hover:bg-opacity-50 rounded-md px-2">Leaderboards</Link>
      </div>
      <Link to="/profile" className="flex flex-row items-center gap-2">
        <div className="text-xl hover:underline hover:underline-offset-2">
          Profile
        </div>
        <img src={authUser.avatar} alt="avatar" className="w-8 h-8 rounded-full" />
      </Link>
    </nav>
  );
}

Navigation.propTypes = {
  authUser: PropTypes.shape(userShape).isRequired,
};
