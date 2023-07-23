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
    <section className="container h-[75vh] mx-auto my-auto flex flex-col items-center justify-center text-[#282118] font-[Arapey]" id="loginpage">
      <div className="bg-white px-6 py-4 rounded-3xl flex flex-col items-center min-w-[18rem]">
        <h1 className="text-3xl text-center">Login</h1>
        <LoginInput login={onLogin} />
        <p className="text-lg mt-6">
          Belum punya akun?
          {' '}
          <Link to="/register" className="underline">Daftar</Link>
        </p>
      </div>
    </section>
  );
}
