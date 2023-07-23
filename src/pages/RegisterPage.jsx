import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncRegisterUser } from '../states/users/action';
import RegisterInput from '../components/RegisterInput';

export default function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <section className="container h-[75vh] mx-auto my-auto flex flex-col items-center justify-center text-[#282118] font-[Arapey]" id="loginpage">
      <div className="bg-white px-6 py-4 rounded-3xl flex flex-col items-center min-w-[18rem]">
        <h1 className="text-3xl text-center">Register</h1>
        <RegisterInput register={onRegister} />
        <p className="text-lg mt-6">
          Sudah punya akun?
          {' '}
          <Link to="/login" className="underline">Masuk</Link>
        </p>
      </div>
    </section>
  );
}
