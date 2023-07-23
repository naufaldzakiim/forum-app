import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { asyncAddThread } from '../states/threads/action';
import CreateThreadInput from '../components/CreateThreadInput';

export default function NewThreadPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onCreate = ({ title, body, category }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <section className="container my-6 mx-auto max-w-6xl flex flex-col gap-3 items-center w-full text-[#282118] font-[Arapey]">
      <h1 className="text-3xl">Buat Diskusi Baru</h1>
      <CreateThreadInput create={onCreate} />
    </section>
  );
}
