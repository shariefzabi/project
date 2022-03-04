import './shopping_cart.css'
import React from "react";
import {Link} from 'react-router-dom'
class Cart extends React.Component<any,any>{
    constructor(props:any) {
        super(props)
        this.state = {
            count: 1
        }
        this.clickHandler = this.clickHandler.bind(this)
    }

    clickHandler() {
        
        let count = this.state.count;
        count++;
        this.setState({count: count}, ()=>console.log(this.state.count, count))
        
    }
    render() {
        return (
            <>
                <header className="mainHeader">

                    <nav className="navbar navbar-expand-lg navbar-expand-sm row align-items-center justify-content-end">
                        <div className="col-auto m-auto">
                            <form className="d-flex form-group searchBar">
                                <span className="fa fa-search form-control-feedback searchIcon"></span>
                                <input type="text" className="form-control searchInput" placeholder="e.g.. orders" />
                            </form>
                        </div>
                        <div className="container-fluid col-auto d-none d-sm-block">
                            <div className="collapse navbar-collapse d-sm-none" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item notifications">

                                        <a type="button" className="position-relative text-white">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                                className="bi bi-bell" viewBox="0 0 16 16">
                                                <path
                                                    d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                                            </svg>
                                            <span
                                                className="position-absolute top-0 start-100 translate-middle p-2 bg-danger border border-light rounded-circle">
                                                <span className="visually-hidden">New alerts</span>
                                            </span>
                                        </a>
                                    </li>
                                    <li className="nav-item dropdown">

                                        <a className="btn text-white dropdown-toggle" href="#" role="button" id="dropdownMenuLink"
                                            data-bs-toggle="dropdown" aria-expanded="false">
                                            Ramon Ridw...
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                            <li><a className="dropdown-item" href="profile.html">My Profile</a></li>
                                            <li><a className="dropdown-item" href="orders.html">Orders</a></li>
                                            <li><a className="dropdown-item" href="invoice.html">Invoice</a></li>
                                            <li><a className="dropdown-item" href="payments.html">Payment</a></li>
                                            <li><a className="dropdown-item" href="trackOrder.html">Track Order</a></li>
                                            <li><a className="dropdown-item" href="logOut.html">Log out</a></li>
                                        </ul>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>

                </header>            

                <main id="mainContent" className="small-conatiner">
                    <section className='container'>
                        <div >
                            <ul className="cart_nav">
                            <Link to='/home'><li className="cart_link">Home <span>/</span></li></Link>
                            <Link to='/'><li className="cart_link"> Lagos <span>/</span></li></Link>
                            <Link to='/'><li className="cart_link"> Cattle Market  <span>/</span></li></Link>
                            <Link to='/'><li className="cart_link">Cart</li></Link>
                               
                                <br />
                            </ul>
                        </div>
                        <header>
                            <div className="cart_heading">
                                <p>Shopping Cart <span className="item_count">(1 item)</span></p>
                            </div>
                        </header>

                        <hr />
                    </section>
                    <div className="container tab">
                        <table className="tablecol">
                            <thead>
                                <tr >
                                    <th>Product Details</th>
                                    <th>Quantity</th>
                                    <th>Price</th>
                                    <th>Delivery Details</th>
                                </tr>
                            </thead>

                            <tbody>

                                <tr>
                                    <td> <span className="first-line">ID - 900085000597636</span>
                                        <span className="second-line">20/19/2019</span>
                                    </td>
                                    <td className="rectangle">{this.state.count}
                                        <button className="fas fa-plus incre" onClick={this.clickHandler}></button></td>
                                    <td>Out of Stock</td>
                                    <td><span>Awaiting Payment</span></td>
                                </tr>
                               
                            </tbody>

                        </table>
                    </div>
                    <div className="container">
                        <button className=" btn btn-success check_btn btn-lg btn-md btn-sm">Proceed Checkout</button>
                    </div>


                </main>
                <footer className=" text-light aa">
                    <section className="container part1 mt-xl-5">
                        <div className="row top-part pt-xl-5">
                            <div className=" col-lg-5  para pt-xl-5 ">
                                <article>The vision of Livestock247.com is to mitigate<br />
                                    the<br />
                                    spread of zoonotic diseases through the<br />
                                    provision of <br />
                                    fit-for-slaughter and traceable livestock to our customers.</article>
                            </div>
                            <div className="col-lg-3  px-5 quicklink bg-bubble">
                                <h3>Quicklinks</h3>
                                <ul className="list-unstyled">
                                    <li className="py-xl-2">
                                        <a href="#!" className="text-light text-decoration-none ">Home</a>
                                    </li>
                                    <li className="py-xl-2">
                                        <a href="#!" className="text-light text-decoration-none ">About Us</a>
                                    </li>
                                    <li className="py-xl-2">
                                        <a href="#!" className="text-light text-decoration-none ">Be a Partner</a>
                                    </li>
                                    <li className="pt-xl-2">
                                        <a href="#!" className="text-light text-decoration-none ">Blog</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-lg-4 quicklink">
                                <h3 className="pb-xl-2">CONTACTS</h3>
                                <div className="d-flex">
                                    <p>Phone: </p>
                                    <p className="px-xl-5">0906-290-3550</p>
                                </div>
                                <div className="d-flex">
                                    <p>E-mail: </p>
                                    <p className="px-xl-5">@livestock247.com</p>
                                </div>
                                <div className="d-flex ">
                                    <p>Address:</p>
                                    <p className="address"> 4th Floor, Valley View Plaza,
                                        99 Opebi Road, Ikeja, Lagos-Nigeria</p>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="app">
                        <div className="d-flex justify-content-center">
                            <a className=" text-decoration-none d-flex my-xl-5 pt-1" href="https://play.google.com/store">
                                <i className="fab fa-google-play p-1"></i>
                                <p className=" text-uppercase ">Get it on<br /><span className=" text-capitalize text">Google
                                    Play</span></p>
                            </a>
                            <a className=" mx-2 text-decoration-none my-xl-5 d-flex pt-1" href="https://www.apple.com/in/app-store/">
                                <i className="fab fa-apple p-1"></i>
                                <p className="">Download on the<br /><span className="text">App Store</span></p>
                            </a>
                        </div>
                    </section>
                    <section className="footerEnd">
                        <div className="row end">
                            <div className="col-md-12 col-lg-3 col-xl-3 text-end py-xl-2">
                                <p>&copy;2018 livestock247
                                </p>
                            </div>
                            <div className="col-md-12 col-lg-3 col-xl-3 d-flex terms  py-xl-2">
                                <a className="text-light text-decoration-none px-4" href="#">FAQ</a>
                                <a className="text-light text-decoration-none px-4" href="#">PRIVACY</a>
                                <a className="text-light text-decoration-none px-4" href="#">TERMS&nbsp;&amp;&nbsp;CONDITIONS</a>
                            </div>
                            <div className="col-md-12 col-lg-4 col-xl-4 icons  py-xl-2  d-flex ">
                                <a href="#"><i className="fab fa-facebook-square text-light px-2 logo"></i></a>
                                <a href="#"><i className="fab fa-google-plus-g text-light px-2 logo"></i></a>
                                <a href="#"><i className="fab fa-twitter text-light px-2 logo"></i></a>
                                <a href="#"><i className="fab fa-instagram text-light px-2 logo"></i></a>
                            </div>
                        </div>
                    </section>
                </footer>

            </>
        )
    }
}

export default Cart;