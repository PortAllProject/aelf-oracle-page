import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import logo from './logo.svg';
import { Button } from 'antd';
import './App.less';
import {Home} from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button type="primary">Button</Button>

        <Router>
          <div>
            <nav>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/users">Users</Link>
                </li>
              </ul>
            </nav>

            {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
            <Switch>
              {/*<Route path="/about">*/}
              {/*  <About />*/}
              {/*</Route>*/}
              {/*<Route path="/users">*/}
              {/*  <Users />*/}
              {/*</Route>*/}
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
        </Router>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
