import { hover } from '@testing-library/user-event/dist/hover';
import axios from 'axios';
import React, { useState } from 'react';
import './style.css';
import appStore from '../../../state/app_store';
import { addToCart } from '../newcomponet/redux/Shopping/shopping-actions';
import { Link } from 'react-router-dom';

export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      DataisLoaded: false,
      reduxData: '',
      buttonData: '',
      datalength: 0,
    };
  }

  componentDidMount() {
    this.fetchProducts();
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }

  getButtonData(id, price, props) {
    addToCart(id, price);
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }

  fetchProducts = () => {
    fetch('http://localhost:3005/animal/get-animal/Chennai/8')
      // this.setState({ items: getData.payload })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        this.setState({ items: res.payload });
      });
    // console.log("++", getData);
  };

  render() {
    const { DataisLoaded, items, id, datalength } = this.state;
    return (
      <>
        <header className="landingpage-header">
          <div className="d-flex flex-row-reverse bd-highlight">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
                >
                  <span className="navbar-toggler-icon "></span>
                </button>
                <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
                >
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a
                        className="nav-link active  text-white"
                        aria-current="page"
                        href="/"
                      >
                        Home
                      </a>
                    </li>
                    <li className="nav-item">
                      <a
                        className="nav-link text-white"
                        href="/"
                        target="blank"
                      >
                        About Us
                      </a>
                    </li>
                    <li className="nav-item dropdown">
                      <a
                        className="nav-link dropdown-toggle text-white"
                        href="/"
                        id="navbarDropdown"
                        role="button"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Be a Partner
                      </a>

                      <ul
                        className="dropdown-menu dropdown-menu-lg-start"
                        aria-labelledby="navbarDropdown"
                      >
                        <span className="triangle-up"></span>
                        <li>
                          <a className="dropdown-item " href="/">
                            Be An Agent
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item " href="/">
                            Butchery & Abarttoir
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link " href="/" target="blank">
                        Blog
                      </a>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <button className="btn text-white buynow" type="button">
                      Buy Now
                    </button>
                  </form>
                  <li className="nav-item dropdown">
                    <a
                      className="nav-link dropdown-toggle text-white"
                      href="/"
                      id="navbarDropdown"
                      role="button"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Ramon Ridw...
                    </a>
                    <ul
                      className="dropdown-menu dropdown-menu-lg-start"
                      aria-labelledby="navbarDropdown"
                    >
                      <span className="triangle-up"></span>
                      <li>
                        <a className="dropdown-item" href="profile.html">
                          My Profile
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="orders.html">
                          Orders
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="invoice.html">
                          Invoice
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="payments.html">
                          Payment
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="trackOrder.html">
                          Track Order
                        </a>
                      </li>
                      <li>
                        <a className="dropdown-item" href="logOut.html">
                          Log out
                        </a>
                      </li>
                    </ul>
                  </li>
                  <div></div>
                  <a
                    className="edit-toggler text-secondary"
                    type="button"
                    id="dropdownMenuButton1"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <view
                      className="add-to-cart"
                      style={{ flexDirection: 'row' }}
                    >
                      <div className='cart-count'
                        
                      >
                        <text
                          style={{
                            
                          }}
                        >
                          {datalength}
                        </text>
                      </div>
                      <svg
                        className="img"
                        width="28"
                        height="34"
                        viewBox="0 0 28 34"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={(e) => this.getReduxData()}
                      >
                        <path
                          d="M13.8744 26.539H1.66016L4.21405 7.66235H23.5348L25.7556 23.763"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        {/* <path d="M19.9817 32.0908C23.3545 32.0908 26.0888 29.3565 26.0888 25.9836C26.0888 22.6107 23.3545 19.8765 19.9817 19.8765C16.6088 19.8765 13.8745 22.6107 13.8745 25.9836C13.8745 29.3565 16.6088 32.0908 19.9817 32.0908Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" /> */}
                        <path
                          d="M1.66016 26.5391L4.10301 32.091H19.4264"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M9.21008 9.88312L8.76593 7.10714C8.32177 4.22013 10.2094 1.55519 12.9854 1.11104C13.3185 1 13.5406 1 13.8737 1C16.7607 1 19.0926 3.33182 19.0926 6.21883C19.0926 6.55195 19.0926 6.77403 18.9815 7.10714L18.5374 9.88312"
                          stroke="white"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        {/* <path d="M17.7686 24.4524C17.9684 24.3697 18.1751 24.2767 18.3887 24.1733C18.6091 24.0631 18.8227 23.946 19.0294 23.8219C19.2361 23.691 19.4325 23.5567 19.6185 23.4189C19.8115 23.2742 19.9837 23.1226 20.1353 22.9641H21.2102V30.1264H19.6702V24.9691C19.4635 25.1069 19.2327 25.2344 18.9778 25.3515C18.7228 25.4618 18.4748 25.5582 18.2336 25.6409L17.7686 24.4524Z" fill="#2078BF" /> */}
                      </svg>
                    </view>
                  </a>
                  <div
                    className="dropdown-menu box"
                    aria-labelledby="dropdownMenuButton1"
                  >
                    <div>
                      <div className="animalid">
                        <ul
                          className="dropdown-item"
                          key={items.animalId}
                          style={{ color: hover }}
                        >
                          {console.log('++==', datalength)}
                          <li className="btn btn-primary">X</li>
                          <li>AnimalId : x {datalength}</li>
                          <br />
                          <br />
                          <li>900085000597636 : {items.animalId}</li>
                        </ul>
                      </div>
                      <br />
                      <hr></hr>
                    </div>
                    <ul className="subtotal">
                      <li className="dropdown-item" ref="#">
                        Sub-Total: {items.price * datalength}
                      </li>
                    </ul>
                    <hr></hr>
                    <ul className="total">
                      <li className="dropdown-item" ref="#">
                        Total: {items.price * datalength}
                      </li>
                    </ul>
                    <div className="option">
                      <Link to="/shoppingcart" className="btn btn-success view">
                        View Cart
                      </Link>
                      <button className="btn btn-success">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>
        <section className="order-livestock">
          <article>
            <h5>
              <b>ANIMAL ID : {items.animalId}</b>
            </h5>
            <h5>89987656788654568 </h5>
            <div className="option">
              <button
                onClick={(e) => this.getButtonData(items.animalId, items.price)}
                className="btn btn-success view"
              >
                Add to cart
              </button>
              {/* onClick={() => addToCart(items.animalId, items.price)} */}
            </div>
          </article>
        </section>
      </>
    );
  }
}
