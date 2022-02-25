import React from 'react';
import './payments.scss';

export default function Payments(){
    return(
        <div>
            <main id="mainContent">
        <section className="payments-section">
           <header>
               <div className="paymentsText">
                   <h2>Payments</h2>
               </div>
           </header>
           <div className="container">
               <table className="tabcol">
                   <thead>
                       <tr className="rowheader">
                           <th>Product Details</th>
                           <th>Amount</th>
                           <th>Date</th>
                           <th>Status</th>
                       </tr>
                   </thead>
                   <tbody>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-danger">Cancelled</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Paid</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Pending</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Paid</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-danger">Cancelled</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Paid</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Pending</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Paid</td>
                       </tr>
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-primary">Paid</td>
                       </tr>
       
                       <tr>
                           <td> ID - 900085000597636</td>
                           <td>N 250,000.00</td>
                           <td>14/02/2019</td>
                           <td className="btn btn-danger">Cancelled</td>
                       </tr>
       
                   </tbody>
               </table>
           </div>
       </section>
    </main>
        </div>
    )
}
