import React from 'react';

import './dashboard.css';
import Profile from './components/Profile';
import LogOut from './components2/logOut';
import TrackOrder from './components3/trackOrder'

function Dashboard() {
    return (<div className='dashboard'>
        <h1>Dashboard component</h1>
        <Profile></Profile>
        <LogOut></LogOut>
        <TrackOrder></TrackOrder>
    </div>);
}

export default Dashboard;