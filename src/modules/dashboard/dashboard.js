import React from 'react';

import './dashboard.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import Overview from './components/overview/overview';
import LogOut from './components/logOut/logOut';






function Dashboard() {
    return (
      <div className="dashboard">
        <Header></Header>
        <Sidebar></Sidebar>
        <Overview></Overview>
        <LogOut></LogOut>
        <Footer></Footer>
      </div>
    );
}

export default Dashboard;