import React from 'react';
import HomeView from '../views/Home';
import { HashRouter as Router, Switch, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <HomeView />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
