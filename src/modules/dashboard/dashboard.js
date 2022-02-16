import React from 'react';

import './dashboard.css';
//import Header from './components/header/Header';
import Sidebar from './components/sidebar/sidebar';
<<<<<<< Updated upstream
//import Footer from './components/footer/footer';
//  import Overview from './components/overview/overview';
// import LogOut from './components/logOut/logOut';
//import Invoice from './components/invoice/invoice';
//import Payments from './components/payments/payments';
import Orders from './components/orders/orders';
=======
import Footer from './components/footer/footer';
import Overview from './components/overview/overview';
// import LogOut from './components/logOut/logOut';
// import Invoice from './components/invoice/invoice';
// import Payments from './components/payments/payments';
>>>>>>> Stashed changes






function Dashboard() {
    return (
      <div className="dashboard">
        {/* <Header></Header> */}
        <Sidebar></Sidebar>
<<<<<<< Updated upstream
         {/* <Overview></Overview>  */}
        {/* <Invoice></Invoice> */}
         {/* <LogOut></LogOut> */}
=======
         <Overview></Overview>
        
         {/* <LogOut></LogOut> */}
         {/* <Invoice></Invoice> */}
>>>>>>> Stashed changes
        {/* <Payments></Payments> */}
         <Orders></Orders>
        {/* <Footer></Footer>  */}
        
        
      </div>
    );
}

export default Dashboard;