import React from 'react';

import './dashboard.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
// import Overview from './components/overview/overview';
// import LogOut from './components/logOut/logOut';
import Invoice from './components/invoice/invoice';






function Dashboard() {
    return (
      <div className="dashboard">
        <Header></Header>
        <Sidebar></Sidebar>
        {/* <Overview></Overview> */}
        <Invoice></Invoice>
        {/* <LogOut></LogOut> */}
        <Footer></Footer>
      </div>
    );
}

export default Dashboard;