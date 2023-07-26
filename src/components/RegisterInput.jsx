import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

export default function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  const handleSubmit = (e) => {
    e.preventDefault();
    register({ name, email, password });
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col text-lg items-center gap-3 w-full">
      <input type="email" value={email} onChange={onEmailChange} placeholder="Email" className="w-full border-b px-2" />
      <input type="text" value={name} onChange={onNameChange} placeholder="Name" className="w-full border-b px-2" />
      <input type="password" value={password} onChange={onPasswordChange} placeholder="Password" className="w-full border-b px-2" />
      <button type="submit" className="bg-[#CEC2B2] hover:bg-[#92897e] text-lg rounded-lg px-2 w-fit">Register</button>
    </form>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};
