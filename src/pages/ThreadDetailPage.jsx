import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { asyncGetThreadDetail } from '../states/threadDetail/action';
import ThreadDetail from '../components/ThreadDetail';

export default function ThreadDetailPage() {
  const { id } = useParams();
  const { threadDetail = null, authUser } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetThreadDetail(id));
  }, [id, dispatch]);

  if (threadDetail === null) return null;

  return (
    <section className="container mx-auto flex flex-col my-6 max-w-5xl items-center text-[#282118] font-[Arapey]">
      <ThreadDetail threadDetail={threadDetail} authUser={authUser.id} />
    </section>
  );
}
