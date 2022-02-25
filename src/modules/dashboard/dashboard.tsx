import React from 'react';
import './dashboard.scss';
import { Link } from "react-router-dom";





function Dashboard() {
    return (
      <div className="dashboard">
        <h1>Dashboard</h1>
        {/* <TrackOrder></TrackOrder>  */}
        {/* <Orders></Orders> */}
        {/* <Invoice></Invoice> */}
          {/* <LogOut></LogOut>         */}
         {/* <Payments></Payments> */}
       {/* <Footer></Footer>
         */}
          <Link to="/">Go to Home</Link>
      </div>
    );
}

export default Dashboard;