import React from 'react';

import './dashboard.css';
// import Profile from './components/Profile';
// import LogOut from './components2/logOut';
// import TrackOrder from './components3/trackOrder'
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import Quicklinks from './components/overview/quicklinks/quicklinks';
import TrackOrder from './components/overview/trackOrderSection/trackOrder';
import Profile from './components/profile/Profile';



function Dashboard() {
    return (<div className='dashboard'>
        {/* <h1>Dashboard component</h1> */}
        {/* <Profile></Profile>
        <LogOut></LogOut>
        <TrackOrder></TrackOrder> */}
        {/* Home */}
        <Header></Header>
        <Sidebar></Sidebar>
        <Quicklinks></Quicklinks>
        <Profile></Profile>
        <TrackOrder></TrackOrder>

    </div>);
}

export default Dashboard;