import React, { Suspense } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.less';
import { Home } from './pages/Home';

const App: React.FC = () => {
  return (
    <Suspense fallback={null}>
      <Router>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </Suspense>
  );
};

export default App;
