import React from 'react';
import "./orders.css";


export default function Orders() {
    return (
        <div>
            <main id="mainContent">
                <section className="order-section">
                    <header>
                        <div className="headingText">
                            <h2>Orders </h2>
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
                                    <td ><p className="button1 btn btn-primary"><span>Awaiting Payment</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-danger"><span>Cancelled Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-primary"><span>Received  Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-primary"><span>Received Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-danger"><span>Cancelled Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-primary"><span>Awaiting Payment</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-danger"><span>Cancelled Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-primary"><span>Received Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-primary"><span>Received Order</span></p></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-danger"><span>Cancelled Order</span>Cancelled Order</p></td>
                                </tr>
                                <tr className="line hr-line"></tr>
                                <tr>
                                    <td ><span className="wish">Wishlists</span></td>
                                    <td></td>
                                    <td></td>
                                    <td ><span className="orderrowheading">&#x1D14F</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><p className="button1 btn btn-primary"><span>Awaiting Payment</span></p></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}