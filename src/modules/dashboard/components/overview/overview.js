import React from 'react';

import './overview.css';
import Quicklinks from './components/quicklinks/quicklinks';
import TrackOrder from './components/trackOrderSection/trackOrder';



function Overview() {
    return (<div className='dashboard'>
        <Quicklinks></Quicklinks>
        <TrackOrder></TrackOrder>
    </div>);
}

export default Overview;