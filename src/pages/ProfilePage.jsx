/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { asyncUnsetAuthUser } from '../states/authUser/action';

export default function ProfilePage() {
  const { authUser } = useSelector((states) => states);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(asyncUnsetAuthUser());
    navigate('/');
  };

  return (
    <div className="container mx-auto flex flex-col bg-[#FFFFFF] max-w-xs my-12 py-6 px-6 rounded-xl text-center font-[Arapey] gap-5 text-[#282118]">
      <h1 className="text-3xl font-bold">Profil</h1>
      <div className="flex flex-col items-center gap-3">
        <img src={authUser.avatar} alt="avatar" className="w-32 h-32 rounded-full" />
        <div>
          <h2 className="text-2xl font-bold">{authUser.name}</h2>
          <p className="text-gray-500 text-base">{authUser.email}</p>
        </div>
        <div className="px-3 py-1 border border-[#47150e] hover:bg-[#47150e] hover:text-white rounded-xl hover:cursor-pointer" onClick={onLogout}>Keluar</div>
      </div>
    </div>
  );
}
