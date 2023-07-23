import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import Loading from './components/LoadingBar';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import ProfilePage from './pages/ProfilePage';
import LeaderboardsPage from './pages/LeaderboardsPage';
import NewThreadPage from './pages/NewThreadPage';
import ThreadDetailPage from './pages/ThreadDetailPage';
import { asyncPreloadProcess } from './states/isPreload/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <>
        <Loading />
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </>
    );
  }

  return (
    <>
      <Loading />
      <div className="relative">
        <header className="container mx-auto max-w-5xl">
          <Navigation authUser={authUser} />
        </header>
        <main className=" mt-[90px]">
          <Routes>
            <Route path="/*" element={<HomePage />} />
            <Route path="/leaderboards" element={<LeaderboardsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/new-thread" element={<NewThreadPage />} />
            <Route path="/thread/:id" element={<ThreadDetailPage />} />
          </Routes>
        </main>
      </div>
    </>
  );
}

export default App;
