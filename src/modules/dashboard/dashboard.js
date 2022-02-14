import React from 'react';

import './dashboard.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import Overview from './components/overview/overview';




function Dashboard() {
    return (<div className='dashboard'>
        <Header></Header>
        <Sidebar></Sidebar>
        <Footer></Footer>
        <Overview></Overview>
    </div>);
}

export default Dashboard;