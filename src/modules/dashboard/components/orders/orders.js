import React from 'react';
import "./orders.css";


export default function Orders() {
    return (
        <div>
            <main id="mainContent">
                <section className="order-section">
                    <header>
                        <div className="ordersText">
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
                                    <th className="rowheaderstatus">Status <span className="orderrowheading">&#x1D14F</span></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td ><span className="button btn btn-primary">Awaiting Payment</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-danger">Cancelled Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-primary">Received  Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-primary">Received Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-danger">Cancelled Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-primary">Awaiting Payment</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-danger">Cancelled Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-primary">Received Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-primary">Received Order</span></td>
                                </tr>
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><span className="button btn btn-danger">Cancelled Order</span></td>
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
                                    <td><span className="button btn btn-primary">Awaiting Payment</span></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </section>
            </main>
        </div>
    )
}