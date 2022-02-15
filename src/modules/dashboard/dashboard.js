import React from 'react';

import './dashboard.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import Overview from './components/overview/overview';
// import LogOut from './components/logOut/logOut';
// import Statistics from './components/overview/statisticsSection/statistics';




function Dashboard() {
    return (<div className='dashboard'>
        <Header></Header>
        <Sidebar></Sidebar>
        <Overview></Overview>
        {/* <Statistics></Statistics> */}
        <Footer></Footer>
        {/* <LogOut></LogOut> */}
    </div>);
}

export default Dashboard;