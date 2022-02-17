import React from 'react';
import './dashboard.css';
import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
import Footer from './components/footer/footer';
import Orders from './components/orders/orders';
//import Overview from './components/overview/overview';
// import LogOut from './components/logOut/logOut';
// import TrackOrder from './components/trackOrder/trackOrder';
// import Invoice from './components/invoice/invoice';
// import Payments from './components/payments/payments';






function Dashboard() {
    return (
      <div className="dashboard">
        <Header></Header>
        <Sidebar></Sidebar>
        {/* <Overview></Overview>  */}
        {/* <TrackOrder></TrackOrder>  */}
          {/* <Invoice></Invoice> */}
          {/* <LogOut></LogOut>         */}
         {/* <Payments></Payments> */}
         <Orders></Orders>
       <Footer></Footer>
        
      </div>
    );
}

export default Dashboard;