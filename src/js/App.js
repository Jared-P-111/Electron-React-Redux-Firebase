import React from 'react';
import HomeView from '../views/Home';
import { Router, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <HomeView />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
