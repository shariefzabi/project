import React from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='dashboard' element={<Dashboard />} />
  

      </Routes>
    </div>
  );
}


export default App;
