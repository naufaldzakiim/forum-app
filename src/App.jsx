import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import HomePage from './pages/HomePage';
import Navigation from './components/Navigation';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import LeaderBoardPage from './pages/LeaderBoardPage';
import ProfilePage from './pages/ProfilePage';
import NewThreadPage from './pages/NewThreadPage';
import { asyncPreloadProcess } from './states/isPreload/action';
import { asyncUnsetAuthUser } from './states/authUser/action';

function App() {
  const {
    authUser = null,
    isPreload = false,
  } = useSelector((states) => states);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncPreloadProcess());
  }, [dispatch]);

  const onLogOut = () => {
    dispatch(asyncUnsetAuthUser());
  };

  if (isPreload) {
    return null;
  }

  if (authUser === null) {
    return (
      <div>
        <main>
          <Routes>
            <Route path="/*" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </main>
      </div>
    );
  }

  return (
    <div>
      <header className="container mx-auto">
        <Navigation logout={onLogOut} />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/leaderboards" element={<LeaderBoardPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/new-thread" element={<NewThreadPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
