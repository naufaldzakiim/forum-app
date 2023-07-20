import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncSetAuthUser } from '../states/authUser/action';

import LoginInput from '../components/LoginInput';

export default function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <section className="container mx-auto flex flex-col items-center" id="loginpage">
      <h1>Login</h1>
      <LoginInput login={onLogin} />
      <p>
        Don&apos;t have an account?
        {' '}
        <Link to="/register">Register</Link>
      </p>
    </section>
  );
}
