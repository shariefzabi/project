import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import Sidebar from '../sidebar/sidebar';
import "./orders.scss";


function Orders(props: any) {
    const [orders, setOrders] = useState<any[]>([]);
    const [wishlists, setWishlists] = useState<any[]>([]);
    useEffect(() => {
        // const email = props.user.email;
        // const token=props.user.token;
        const getToken = () => localStorage.getItem("token");
        axios.get("http://localhost:3005/orders/orderdetails/" + getToken())
            .then((res) => {
                console.log("orders display get response", res.data);
                setOrders(res.data);
            })
            .catch((err) => console.log(err)
            )
        axios.get("http://localhost:3005/orders/wishlists/"+getToken())
            .then((res) => {
                console.log("wishlists display get response", res.data);
                setWishlists(res.data);
            })
            .catch((err) => console.log(err)
            )
    }, [])

    return (

        <div className='row'>
            <div className='col-0 col-sm-1 col-md-1 col-lg-1 col-xl-1'>
                <Sidebar> </Sidebar>
            </div>
            <div className='orders-dashboard col-12 col-sm-11 col-md-11 col-lg-11 col-xl-11'>

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
                                    {
                                        orders.map((order: any, i: any) => {
                                            const products: any = order.cartproducts;
                                            return (
                                                products.map((product: any, i: any) => {
                                                    return (
                                                        <tr key={i}>
                                                            <td> <span className="first-line">ID - {product._id}</span>
                                                                <span className="second-line">{order.date}</span></td>
                                                            <td>{product.productCode}</td>
                                                            <td>{product.availability}</td>
                                                            {order.paymentStatus !== 'cancelled order' &&
                                                                order.paymentStatus !== undefined &&
                                                                <td ><button className=' button1 btn btn-primary'>{order.paymentStatus}</button></td>
                                                            }
                                                            {order.paymentStatus === undefined &&
                                                                <td ><button className=' button1 btn btn-danger'>order cancelled</button></td>
                                                            }
                                                        </tr>
                                                    )
                                                })

                                            )
                                        })}
                                    <tr className='border-top'>
                                        <td ><span className="wish">Wishlists</span></td>
                                        <td></td>
                                        <td></td>
                                        <td ><span className="orderrowheading">&#x1D14F;</span></td>
                                    </tr>
                                    {wishlists.map((wishlist, i) => {
                                        return (
                                            <tr key={i}>
                                                <td> <span className="first-line">ID - {wishlist.product._id}</span>
                                                    <span className="second-line">{wishlist.product.updatedAt}</span></td>
                                                <td>{wishlist.product.productCode}</td>
                                                <td>{wishlist.product.availability}</td>
                                                <td><button className=' button1 btn btn-primary'>Awaiting Payment</button></td>
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
