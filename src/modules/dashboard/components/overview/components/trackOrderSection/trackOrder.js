import React from "react";
import "./trackOrder.css";

export default function TrackOrder() {
  return (
    <div>
      <main id="sectionContent">
        <section class="trackOrderSection">
          <header className="row">
            <div className="headingText col-8">
              <h2>Track Order</h2>
            </div>

            <div className="dropdown col-4">
              <a className="edit-toggler text-secondary" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-three-dots edit-dropdown" viewBox="0 0 16 16">
                  <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                </svg>
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                <li><a className="dropdown-item" href="#">Edit</a></li>
                <li><a className="dropdown-item" href="#">Remove</a></li>
              </ul>
            </div>
          </header>
          <main class="track ">
            <section class="row row-cols-1 row-cols-sm-1 row-cols-md-2" id="rack">
              <div class="col rack ">
                <h3>Easily Track Livestock With Their Chip Number</h3>
                <p>
                  Get to know the status of your order either by location or
                  condition and also the specific amount of time it &apos;ll
                  take the parcel to get to your current location
                </p>
              </div>
              <div class="col  livestock">
                <h3>Track your livestock</h3>
                <section class="row search">
                  <input placeholder="Input your chip number here" class="col-8 search_input" />
                  <button class="btn btn-success btn-trackSearch col-2">
                    <span class="fa fa-search form-control-feedback searchIcon"></span>
                  </button>
                </section>
              </div>
            </section>
          </main>
        </section>
      </main>
    </div>
  );
}
