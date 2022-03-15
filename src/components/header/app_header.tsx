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
    
    axios.get("http://localhost:3005/users/" + this.getToken())
      .then(res => {
        
        if (res.data != "null") this.props.setUser(res.data)
        else this.props.setUser(null)
      })
      .catch(err => console.log("No previous user found")
      )

  }
  getToken = () => sessionStorage.getItem("token");

  logOut = () => {
    sessionStorage.clear();
    this.props.setUser(null)
  }
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
                  <Link className="dropdown-item" to="/" onClick={this.logOut}>
                    Log out
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </header>
    );
  }
}
// export default Header;

const mapStateToProps = (state: any) => {
  // console.log(state);

  return {
    redux: state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    // setToken : (token:any)=> dispatch({type:"setToken",payload:token})
    setUser: (userDetails: any) => dispatch({ type: 'setUser', payload: userDetails })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
