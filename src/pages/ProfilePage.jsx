/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { asyncUnsetAuthUser } from '../states/authUser/action';

export default function ProfilePage() {
  const { authUser } = useSelector((states) => states);
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
  };

  return (
    <div className="container mx-auto text-center">
      <h1 className="text-2xl font-bold">Profil</h1>
      <div className="flex flex-col items-center">
        <img src={authUser.avatar} alt="avatar" className="w-32 h-32 rounded-full" />
        <h2 className="text-xl font-bold">{authUser.name}</h2>
        <p className="text-gray-500">{authUser.email}</p>
        <div className="px-3 py-2 bg-slate-600 rounded-xl hover:cursor-pointer" onClick={onLogout}>Keluar</div>
      </div>
    </div>
  );
}
