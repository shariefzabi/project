import React from "react";
import bar from "./asset/Group 2.png";
import cross from "./asset/Group 35.png";
import triangle from "./asset/Triangle.png";
import { Link } from "react-router-dom";
import "./app_header.scss";
import Login from "../../modules/login/components/login";
import BuyNow from "../../modules/home/ordercreation/ordercreation";
class Header extends React.Component {
    render() {
        return (
            <header className="landingpage-header d-lg-flex justify-content-end">
                <div className="small_bar">
                    <img className="bar_img" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src={bar} />
                    <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex={-1} aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div className="modal-dialog modal-fullscreen-sm-down">
                            <div className="modal-content ">
                                <div className="modal-body small_menu">
                                    <img className="close" data-bs-dismiss="modal" aria-label="Close" src={cross} />
                                    <div className="text-center">
                                        <Link to="/" className="menu_content_small">Home</Link>
                                        <Link to="/aboutus" className="menu_content_small">About Us</Link>
                                        <Link to="/" className="menu_content_small ">Be a Partner<img src={triangle} /></Link>
                                        <Link to="/" className="menu_content_small sub" >Be an Agent</Link>
                                        <Link to="/" className="menu_content_small sub" >Butchery & Abarttoir</Link>
                                        <Link to="/" className="menu_content_small">Blog</Link>
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
                    <div className="home"><Link to="/" className="menu_content">Home</Link></div>
                    <div className="home"><Link to="/aboutus" className="menu_content">About Us</Link></div>
                    <div className="home">
                        <div className="dropdown">
                            <div className="dropdown-toggle menu_content " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                            <Link to="/" className="text-white text-decoration-none">Be a Partner</Link>
                            </div>
                            {/* <img className="inverted_tri" aria-labelledby="dropdownMenuLink" src={triangle}/> */}
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <span className="triangle-up" ></span>
                                <li><Link to="/" className="dropdown-item" >Be an Agent</Link></li>
                                <li><Link to="/" className="dropdown-item" >Butchery & Abarttoir</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="home"><Link to="/blog" className="menu_content">Blog</Link></div>
                    <div className="menu_btn"><BuyNow/></div>
                    <div className="menu_btn"><div className="pt-3 log_button text-center"><Login/></div></div>
                </div>
            </header>
        )
    }
}
export default Header;