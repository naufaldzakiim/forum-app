import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <form className="flex flex-col text-lg items-center gap-3 w-full">
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="w-full border-b px-2" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="w-full border-b px-2" />
      <button type="button" onClick={() => login({ email, password })} className="bg-[#CEC2B2] hover:bg-[#92897e] text-lg rounded-lg px-2 w-fit">Login</button>
    </form>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};
