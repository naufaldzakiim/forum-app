/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { BiLogOut } from 'react-icons/bi';

export default function Navigation({ logout }) {
  return (
    <nav className="container flex flex-row justify-between max-w-6xl mx-auto">
      <div>
        Forum App
      </div>
      <div className="flex flex-row gap-6">
        <Link to="/">Home</Link>
        <Link to="/leaderboards">Leaderboards</Link>
        <Link to="/profile">Profile</Link>
      </div>
      <div>
        <div onClick={logout}><BiLogOut /></div>
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  logout: PropTypes.func.isRequired,
};
