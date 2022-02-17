import React from 'react';
import "./payments.css";


export default function Payments() {
    return (
        <div>
            <main id="paymentsContent">
                <section className="payments-section">
                <header className="row">
                        <div className="headingText col">
                            <h2>Payments</h2>
                        </div>

                        <div className="dropdown col">
                            <a className="edit-toggler text-secondary" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    className="bi bi-three-dots edit-dropdown" viewBox="0 0 16 16">
                                    <path
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Remove</a></li>
                            </ul>
                        </div>
                    </header>
                    <div className="payments">
                        <table className="tabcol">
                            <thead>
                                <tr className="rowheader">
                                    <th>Product Details</th>
                                    <th>Amount</th>
                                    <th>Date</th>
                                    <th className="rowheaderstatus">Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>ID - 900085000597636</td>
                                    <td>N250,000</td>
                                    <td>14/02/2019</td>
                                    <td ><button className=' button1 btn btn-danger'>Cancelled</button></td>
                                </tr>
                                <tr>
                                    <td>ID - 900085000597636</td>
                                    <td>N250,000</td>
                                    <td>14/02/2019</td>
                                    <td ><button className=' button1 btn btn-primary'>Paid</button></td>
                                </tr>
                                <tr>
                                    <td>ID - 900085000597636</td>
                                    <td>N250,000</td>
                                    <td>14/02/2019</td>
                                    <td ><button className=' button1 btn btn-primary'>Pending</button></td>
                                </tr>
                                <tr>
                                    <td>ID - 900085000597636</td>
                                    <td>N250,000</td>
                                    <td>14/02/2019</td>
                                    <td ><button className=' button1 btn btn-primary'>Paid</button></td>
                                </tr>
                            </tbody>
                        </table>
                        <div className='col-md-12 text-center '><button type='button' className='button1 btn btn-success'>View Orders</button></div>
                    </div>
                </section>
            </main>
        </div>
    )
}