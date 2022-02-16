import React from 'react';

import './overview.css';
import Quicklinks from './components/quicklinks/quicklinks';
import TrackOrder from './components/trackOrderSection/trackOrder';
import Statistics from './components/statisticsSection/statistics';
import Invoice from './components/invoiceSection/invoice';




function Overview() {
    return (<div className='dashboard'>
        <Quicklinks></Quicklinks>

        <Invoice></Invoice>
        <TrackOrder></TrackOrder>
        <Statistics></Statistics>

    </div>);
}

export default Overview;