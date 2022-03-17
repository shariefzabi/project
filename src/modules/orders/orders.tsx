import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../profile/sidebar/sidebar';
import "./orders.scss";


function Orders(props: any) {
    const [orders, setOrders] = useState<any[]>([]);
    const [wishlists, setWishlists] = useState<any[]>([]);
    useEffect(() => {
        const id = props.user.email;
        axios.get("http://localhost:3005/orders/orderdetails/" + id)
            .then((res) => {
                console.log("orders display get response", res.data);
                setOrders(res.data);
            })
            .catch((err) => console.log(err)
            )
        axios.get("http://localhost:3005/orders/wishlists/" + id)
            .then((res) => {
                console.log("wishlists display get response", res.data);
                setWishlists(res.data);
            })
            .catch((err) => console.log(err)
            )
    }, [])

    return (
        <div className='row'>
            <div className='col-1 mt-5 pt-5'>
                <Sidebar />
            </div>
            <div className='col-11 orders-dashboard'>
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
                                    {orders.map((order, i) => {
                                        return (
                                            <tr key={i}>
                                                <td> <span className="first-line">ID - {order.productId}</span>
                                                    <span className="second-line">{order.date}</span></td>
                                                <td>{order.productcode}</td>
                                                <td>{order.availability}</td>
                                                {order.status !== 'cancelled order' &&
                                                    <td ><button className=' button1 btn btn-primary'>{order.status}</button></td>
                                                }
                                                {order.status === 'cancelled order' &&
                                                    <td ><button className=' button1 btn btn-danger'>{order.status}</button></td>
                                                }
                                            </tr>
                                        )
                                    })}

                                    {/* <tr>
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
                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span></td>
                                    <td>Bunaji</td>
                                    <td>Out of Stock</td>
                                    <td><button className=' button1 btn btn-primary'>Awaiting Payment</button></td>
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
                                </tr>*/}
                                    <tr className="line hr-line"></tr>
                                    <tr>
                                        <td ><span className="wish">Wishlists</span></td>
                                        <td></td>
                                        <td></td>
                                        <td ><span className="orderrowheading">&#x1D14F;</span></td>
                                    </tr>
                                    {wishlists.map((wishlist, i) => {
                                        return (
                                            <tr>
                                                <td> <span className="first-line">ID - {wishlist.productId}</span>
                                                    <span className="second-line">{wishlist.date}</span></td>
                                                <td>{wishlist.productcode}</td>
                                                <td>{wishlist.availability}</td>
                                                <td><button className=' button1 btn btn-primary'>{wishlist.status}</button></td>
                                            </tr>
                                        )
                                    })}


                                </tbody>
                            </table>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}
const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orders);
