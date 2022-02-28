import React from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}


export default App;
