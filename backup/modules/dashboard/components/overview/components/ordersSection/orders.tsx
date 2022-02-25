import React from 'react';
import "./orders.scss";


export default function Orders() {
    return (
        <div>
            <main id="ordersContent">
                <section className="order-section">
                    <header className="row">
                        <div className="headingText col-8">
                            <h2>Orders</h2>
                        </div>

                        <div className="dropdown col-4">
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
                    <div className="orders">
                        <table className="tabcol">
                            <thead>
                                <tr className="rowheader">
                                    <th>Product Details</th>
                                    <th>Product Code</th>
                                    <th>Availability</th>
                                    <th className="rowheaderstatus">Status <span className="orderrowheading">&#x25BE;</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td ><button className=' button1 btn btn-primary'>Awaiting Payment</button></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><button className=' button1 btn btn-danger'>Cancelled Order</button></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><button className=' button1 btn btn-primary'>Received Order</button></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><button className=' button1 btn btn-primary'>Received Order</button></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><button className=' button1 btn btn-danger'>Cancelled Order</button></td>
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