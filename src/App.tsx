import React from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<Home />}>
              
            </Route>
            <Route path="/dashboard" element={<Dashboard />}>
              
            </Route>
            </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
