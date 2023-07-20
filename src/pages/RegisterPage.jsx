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
    <section className="container mx-auto flex flex-col items-center" id="loginpage">
      <h1>Login</h1>
      <RegisterInput login={onRegister} />
      <p>
        Already have an account?
        {' '}
        <Link to="/login">Login</Link>
      </p>
    </section>
  );
}
