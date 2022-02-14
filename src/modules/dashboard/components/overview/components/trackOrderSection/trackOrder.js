import React from "react";
import './trackOrder.css'

export default function TrackOrder() {
    return (
        <section id="trackOrder">
            <div className="trackOrder">
                <section class="trackOrderSection">
                    <aside className="row">
                        <div className="col-lg-11 col-md-11 col-sm-11 col-11 p-0">
                            <h2>Track Order</h2>
                        </div>
                        <div className="dropdown col-lg-1 col-md-1 col-sm-1 col-1 col">
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
                    </aside>
                    <main class="row track ">
                        <section class="col-lg-1 col-md-1 col-sm-0 col-0"></section>
                        <section class="col-lg-10 col-md-10 row">
                            <div class="col-md-6 col-sm-6 col-12 track p-0">
                                <h3>Easily Track Livestock
                                    With Their Chip Number</h3>
                                <p>
                                    Get to know the status of your order either by location or condition and also the specific
                                    amount of
                                    time it &apos;ll take the parcel to get to your current location
                                </p>
                            </div>
                            <div class="col-md-6 col-sm-6 col-12 livestock">
                                <h3>Track your livestock</h3>
                                <section class="row search">
                                    <input placeholder="Input your chip number here" class="col-lg-10 col-md-10 col-sm-10 col-9" />
                                    <button class="btn btn-success btn-trackSearch col-lg-2 col-md-2 col-sm-2 col-2">
                                        <span class="fa fa-search form-control-feedback searchIcon"></span>
                                    </button>
                                </section>
                            </div>
                        </section>
                        <section class="col-lg-1 col-md-1 col-sm-0 col-0">
                        </section>
                    </main>
                </section>
            </div>
        </section>
    )
}


