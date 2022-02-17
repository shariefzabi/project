import React from "react";
import bar from "./asset/Group 2.png"
import cross from "./asset/Group 35.png"
import triangle from "./asset/Triangle.png"
// import invertedtri from "./asset/Trianglein.png"
import "./style.css"
class Menu extends React.Component {
    render() {
        return (
            <header className="landingpage-header d-lg-flex justify-content-end">
                <div className="small_bar">
                    <img className="bar_img" data-bs-toggle="modal" data-bs-target="#staticBackdrop" src={bar} />
                    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                        <div class="modal-dialog modal-fullscreen-sm-down">
                            <div class="modal-content ">
                                <div class="modal-body small_menu">
                                    <img className="close" data-bs-dismiss="modal" aria-label="Close" src={cross} />
                                    <div className="text-center">
                                        <a href="#" className="menu_content_small">Home</a>
                                        <a href="#" className="menu_content_small">About Us</a>
                                        <a href="#" className="menu_content_small">Be a Partner<img src={triangle} /></a>
                                        <a class="menu_content_small sub" href="#">Be an Agent</a>
                                        <a class="menu_content_small sub" href="#">Butchery & Abarttoir</a>
                                        <a href="#" className="menu_content_small">Blog</a>
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
                    <div className="home"><a href="#" className="menu_content">Home</a></div>
                    <div className="home"><a href="#" className="menu_content">About Us</a></div>
                    <div className="home">
                        <div class="dropdown">
                            <a class="dropdown-toggle menu_content" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                                Be a Partner
                            </a>
                            {/* <img className="inverted_tri" aria-labelledby="dropdownMenuLink" src={triangle}/> */}
                            <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <span className="triangle-up" ></span>
                                <li><a class="dropdown-item" href="#">Be an Agent</a></li>
                                <li><a class="dropdown-item" href="#">Butchery & Abarttoir</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="home"><a href="#" className="menu_content">Blog</a></div>
                    <div className="menu_btn"><button className="buy_button">Buy Now</button></div>
                    <div className="menu_btn"><button className=" log_button">Login</button></div>
                </div>

            </header>
        )
    }
}
export default Menu;