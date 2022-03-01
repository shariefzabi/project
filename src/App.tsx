import React from 'react';
import './App.scss';
import Dashboard from './modules/dashboard/dashboard';
import Home from './modules/home/Home';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import NavBar from './modules/header/navbar';
import LandingPage from './modules/landing_page/LandingPage';
import Aboutus from './modules/about_us/aboutus';
import Blog from './modules/blog/final';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavBar/>
          <Routes>
            <Route path="/" element={<LandingPage/>}>
            </Route>
            <Route path="/aboutus" element={<Aboutus/>}>
            </Route>
            <Route path="/blog" element={<Blog/>}>
            </Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;
