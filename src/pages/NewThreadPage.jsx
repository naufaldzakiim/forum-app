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
    <section className="container mx-auto max-w-6xl flex flex-col items-center w-full">
      <h1>Buat Diskusi Baru</h1>
      <CreateThreadInput create={onCreate} />
    </section>
  );
}
