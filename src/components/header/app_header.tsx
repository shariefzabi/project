import React from "react";
import bar from "./asset/group2.png";
import cross from "./asset/group35.png";
import triangle from "./asset/triangle.png";
import { Link } from "react-router-dom";
import "./app_header.scss";
// import BuyNow from "../../modules/ordercreation/components/ordercreation";
import Login from "../../modules/login/components/login";
import { connect } from "react-redux";
import PopUp from "../../modules/locationPage/locationPopUp";
import BeanAgentPopup from "../../modules/be an agent form copy/form1";
import Butcherypopup from "../../modules/butchery_form_page/form2";
import AgentModel from "../../modules/AgentModel(Mod) copy/AgentModel1";
import ButcheryModel from "../../modules/butchery_form/butcherypopup";
import axios from "axios";

class Header extends React.Component<any, any> {
  componentDidMount() {
    // this.props.setToken(this.getToken)
    // console.log("team6", this.props.redux.quantity[0]);
    // let rupeess = this.props.redux.quantity[1];
    // console.log("team6dssd", parseInt(rupeess));

    axios
      .get("http://localhost:3005/users/" + this.getToken())
      .then((res) => {
        if (res.data != "null") this.props.setUser(res.data);
        else this.props.setUser(null);
      })
      .catch((err) => console.log("No previous user found"));
  }
  getToken = () => sessionStorage.getItem("token");

  logOut = () => {
    sessionStorage.clear();
    this.props.setUser(null);
  };
  render() {
    console.log("header values::", this.props);

    const {
      redux: { user },
    } = this.props as any;

    return (
      <header className="landingpage-header d-lg-flex justify-content-end">
        <div className="small_bar">
          <img
            className="bar_img"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            src={bar}
          />
          <div
            className="modal fade"
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-fullscreen-sm-down">
              <div className="modal-content ">
                <div className="modal-body small_menu">
                  <img
                    className="close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    src={cross}
                  />
                  <div className="text-center">
                    <Link
                      to="/"
                      className="menu_content_small"
                      onClick={() => alert("cgh")}
                    >
                      Home
                    </Link>
                    <Link to="/aboutus" className="menu_content_small">
                      About Us
                    </Link>
                    <Link to="/" className="menu_content_small ">
                      Be a Partner
                      <img src={triangle} />
                    </Link>
                    <Link to="/" className="menu_content_small sub">
                      Be an Agent
                    </Link>
                    <Link to="/" className="menu_content_small sub">
                      Butchery & Abarttoir
                    </Link>
                    <Link to="/" className="menu_content_small">
                      Blog
                    </Link>
                    <button className="buy_button">Buy Now</button>
                    <button className=" log_button">Login</button>
                  </div>
                  <div className="menu_bottom d-flex justify-content-between">
                    <p className="menu_faqs">FAQ</p>
                    <p className="menu_faqs">Privacy</p>
                    <p className="menu_faqs">Terms & Conditions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" d-lg-flex justify-content-end big_bar">
          <div className="home">
            <Link to="/" className="menu_content">
              Home
            </Link>
          </div>
          <div className="home">
            <Link to="/aboutus" className="menu_content">
              About Us
            </Link>
          </div>
          {!user && (
            <div className="home">
              <div className="dropdown">
                <div
                  className="dropdown-toggle menu_content "
                  role="button"
                  id="dropdownMenuLink"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <Link to="/" className="text-white text-decoration-none">
                    Be a Partner
                  </Link>
                </div>
                {/* <img className="inverted_tri" aria-labelledby="dropdownMenuLink" src={triangle}/> */}
                <ul
                  className="dropdown-menu"
                  aria-labelledby="dropdownMenuLink"
                >
                  <span className="triangle-up"></span>
                  <li>
                    <AgentModel></AgentModel>
                  </li>
                  <li>
                    <ButcheryModel></ButcheryModel>
                  </li>
                </ul>
              </div>
            </div>
          )}
          <div className="home">
            <Link to="/blog" className="menu_content">
              Blog
            </Link>
          </div>
          {user && (
            <div className="home">
              <Link to="/addblogs" className="menu_content">
                Add Blogs
              </Link>
            </div>
          )}
          {user && (
            <div className="home">
              <Link to="/addproducts" className="menu_content">
                Add Products
              </Link>
            </div>
          )}
          <div className="menu_btn">
            <PopUp />
          </div>
          {!user && (
            <div className="menu_btn text-center">
              <Login />
            </div>
          )}

          {user && (
            <div className="nav-item dropdown user-profile">
              <a
                className="btn text-white dropdown-toggle"
                href="#"
                role="button"
                id="dropdownMenuLink"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {user.fullName}
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/orders">
                    Orders
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="invoice">
                    Invoice
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="payments">
                    Payment
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="trackOrder">
                    Track Order
                  </Link>
                </li>
                <li>
                  <Link
                    className="dropdown-item"
                    to="/logout"
                    onClick={this.logOut}
                  >
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          )}
          {/* team6 */}
          {
            user && (
              <div >
                <a
                  className="edit-toggler text-secondary popHover"
                  type="button"
                  id="dropdownMenuButton1"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <view
                    className="add-to-cart"
                    style={{ flexDirection: "row" }}
                  >
                    <div className="cart-count">
                      {/* <text style={{}}>{datalength}</text> */}
                      <p >{this.props.redux.quantity[0]}</p>

                    </div>
                    <svg
                      className="img "
                      width="26"
                      height="32"
                      viewBox="0 0 28 34"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    // onClick={(e) => this.getReduxData()}
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
                  className="dropdown-menu  cartPopUp "
                  aria-labelledby="dropdownMenuButton1"
                >
                  <div className="popItems">
                    <div className="animalid">
                      {/* <ul className="dropdown-item" key={items.animalId}>
                        <li className="btn btn-primary">X</li>
                        <li>Animal Id : </li>
                        <li className="aa">x {datalength}</li>
                        <br />
                      </ul> */}
                      <div className="row animaldetails">
                        <div className="col-6">
                          <p>ANIMAL ID - </p>
                          <p>{this.props.redux.quantity[2]}</p>
                        </div>
                        <div className="col-3">
                          <p> x </p>
                          <p>{this.props.redux.quantity[0]}</p>
                        </div>
                        <div className="float-right col-1" >
                          <p className="btn btn-primary">X</p>
                        </div>
                      </div>
                    </div><br></br>
                    <hr></hr>

                    {/* Sub-Total: {items.price * datalength} */}
                    <div className="row total">
                      <div className="col">
                        Sub-Total:
                      </div>
                      <div className="col text-end">
                        <p>{this.props.redux.quantity[1] * this.props.redux.quantity[0]}Rs</p>
                      </div>
                    </div>
                    <hr></hr>

                    <div className="row total">
                      <div className="col text-center">
                        Total:
                      </div>
                      <div className="col text-end">
                        {this.props.redux.quantity[1] * this.props.redux.quantity[0]}Rs
                      </div>
                    </div>
                    {/* <div className="total">
                      <p className="dropdown-item" ref="#">
                        Total: {items.price * datalength}
                        
                      </p>
                    </div> */}


                    <div className="option">
                      <Link to="/shoppingcart" className="btn btn-success view">
                        View Cart
                      </Link>
                      <button className="btn btn-success">Checkout</button>
                    </div>
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </header>
    );
  }
}
// export default Header;

const mapStateToProps = (state: any) => {
  console.log("team6", state);

  return {
    redux: state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // setToken : (token:any)=> dispatch({type:"setToken",payload:token})
    setUser: (userDetails: any) =>
      dispatch({ type: "setUser", payload: userDetails }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
