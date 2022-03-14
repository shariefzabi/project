import './shopping_cart.css';
import React from 'react';
import { Link } from 'react-router-dom';
import appStore from '../../state/app_store';
import { addToCart } from './newcomponet/redux/Shopping/shopping-actions';
class Cart extends React.Component<any, any> {
  buttonData: any;
  getReduxData: any;
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      DataisLaoded: false,
      datalength: 0,
      id: 3,
      reduxData: '',
      buttonData: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }
  getButtonData() {
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }

  fetchProducts = () => {
    fetch('http://localhost:3005/animal/get-animal/Chennai/11')
      // this.setState({ items: getData.payload })
      .then((res) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        this.setState({ items: res.payload });
      });
    // console.log("++", getData);
  };

  clickHandler(id: any, price: any) {
    addToCart(id, price);
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }

  render() {
    const { DataisLoaded, items, datalength, id } = this.state;
    return (
      <>
        <header className="landingpage-header">
          <div className="d-flex flex-row-reverse bd-highlight">
            <nav className="navbar navbar-expand-lg navbar-light">
              <div className="container-fluid">
                <button className="navbar-toggler" type='button' data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon "></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <a className="nav-link active  text-white" aria-current="page" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="./AboutUs/index.html" target="blank">About Us</a>
                    </li>
                    <li className="nav-item dropdown">
                      <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                        data-bs-toggle="dropdown" aria-expanded="false">
                        Be a Partner
                      </a>

                      <ul className="dropdown-menu dropdown-menu-lg-start" aria-labelledby="navbarDropdown">
                        <span className="triangle-up" ></span>
                        <li><a className="dropdown-item " href="#">Be An Agent</a></li>
                        <li><a className="dropdown-item " href="#">Butchery & Abarttoir</a></li>
                      </ul>

                    </li>
                    <li className="nav-item">
                      <a className="nav-link text-white" href="./ourblog/index.html" target="blank">Blog</a>
                    </li>
                  </ul>
                  <form className="d-flex">
                    <button className="btn text-white buynow" type="button">Buy Now</button>
                  </form>
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
                  <div className='image'>
                    {/* <svg width="28" height="34" viewBox="0 0 28 34" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={(e) => this.getReduxData()}>
                      <path d="M13.8744 26.539H1.66016L4.21405 7.66235H23.5348L25.7556 23.763" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M19.9817 32.0908C23.3545 32.0908 26.0888 29.3565 26.0888 25.9836C26.0888 22.6107 23.3545 19.8765 19.9817 19.8765C16.6088 19.8765 13.8745 22.6107 13.8745 25.9836C13.8745 29.3565 16.6088 32.0908 19.9817 32.0908Z" fill="white" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M1.66016 26.5391L4.10301 32.091H19.4264" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M9.21008 9.88312L8.76593 7.10714C8.32177 4.22013 10.2094 1.55519 12.9854 1.11104C13.3185 1 13.5406 1 13.8737 1C16.7607 1 19.0926 3.33182 19.0926 6.21883C19.0926 6.55195 19.0926 6.77403 18.9815 7.10714L18.5374 9.88312" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                      <path d="M17.7686 24.4524C17.9684 24.3697 18.1751 24.2767 18.3887 24.1733C18.6091 24.0631 18.8227 23.946 19.0294 23.8219C19.2361 23.691 19.4325 23.5567 19.6185 23.4189C19.8115 23.2742 19.9837 23.1226 20.1353 22.9641H21.2102V30.1264H19.6702V24.9691C19.4635 25.1069 19.2327 25.2344 18.9778 25.3515C18.7228 25.4618 18.4748 25.5582 18.2336 25.6409L17.7686 24.4524Z" fill="#2078BF" />
                    </svg> */}
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </header>


        <main id="mainContent" className="small-conatiner">
          <section className="container">
            <div>
              <ul className="cart_nav">
                <Link to="/home">
                  <li className="cart_link">
                    Home <span>/</span>
                  </li>
                </Link>
                <Link to="/">
                  <li className="cart_link">
                    {' '}
                    Lagos <span>/</span>
                  </li>
                </Link>
                <Link to="/">
                  <li className="cart_link">
                    {' '}
                    Cattle Market <span>/</span>
                  </li>
                </Link>
                <Link to="/">
                  <li className="cart_link">Cart</li>
                </Link>

                <br />
              </ul>
            </div>
            <header>
              <div className="cart_heading">
                <p>
                  Shopping Cart{' '}
                  <span className="item_count">(item: {datalength})</span>
                </p>
              </div>
            </header>

            <hr />
          </section>
          <div className="container tab">
            <table className="tablecol">
              <thead>
                <tr>
                  <th>Product Details</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th>Delivery Details</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>
                    {' '}
                    <span className="first-line">
                      AnimalId - {items.animalId}
                    </span>
                    <br />
                    <br />
                    <span className="second-line">
                      900085000597636 : {items.animalId}
                    </span>
                  </td>
                  {console.log('++', datalength)}
                  <td className="rectangle">
                    {datalength}
                    <button
                      className="fas fa-plus incre"
                      onClick={(e) =>
                        this.clickHandler(items.animalId, items.price)
                      }
                    >+</button>
                  </td>
                  <td>{items.price * datalength}</td>
                  <td>
                    <span>Delivery Date/ Pick up:<br /> 2019-08-18</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="container">
            <button className=" btn btn-success check_btn btn-lg btn-md btn-sm">
              Proceed Checkout
            </button>
          </div>
        </main>
        <footer className=" text-light">
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
    );
  }
}

export default Cart;
