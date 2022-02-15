import "./header.css"
import React from "react"

export default function Header() {
    return (
        <div>
            <header className="mainHeader">

                <nav className="navbar navbar-expand-lg navbar-expand-sm row align-items-center justify-content-end">
                    <div className="col-auto ms-auto">
                        <form className="d-flex form-group searchBar">
                            <span className="fa fa-search form-control-feedback searchIcon"></span>
                            <input type="text" className="form-control searchInput" placeholder="e.g.. orders" />
                        </form>
                    </div>
                    <div className="container-fluid col-auto">
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
        </div>

    )
}