import React from "react";
import './trackOrder.css'

export default function TrackOrder() {
    return (
        <section id="trackOrder">
            <div className="trackOrder">
                <section class="trackOrderSection">
                    <aside>
                        <div className="p-0">
                            <h2>Track Order</h2>
                        </div>
                    </aside>
                    <main class="row track ">
                        <section class="col-lg-1 col-md-0 col-sm-0 col-0"></section>
                        <section class="col-lg-10 col-md-12 row">
                            <div class="col-md-6 col-sm-12 track p-0">
                                <h3>Easily Track Livestock
                                    With Their Chip Number</h3>
                                <p>
                                    Get to know the status of your order either by location or condition and also the specific
                                    amount of
                                    time it &apos;ll take the parcel to get to your current location
                                </p>
                            </div>
                            <div class="col-md-6 col-sm-12 livestock">
                                <h3>Track your livestock</h3>
                                <section class="row search">
                                    <input placeholder="Input your chip number here" class="col-lg-10 col-md-10 col-sm-10 col-10" />
                                    <button class="btn btn-success btn-trackSearch col-lg-2 col-md-2 col-sm-2 col-2">
                                        <span class="fa fa-search form-control-feedback searchIcon"></span>
                                    </button>
                                </section>
                            </div>
                        </section>
                        <section class="col-lg-1 col-md-0 col-sm-0 col-0">
                        </section>
                    </main>
                </section>
            </div>
        </section>
    )
}


