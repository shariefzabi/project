import React from "react";
// import sub from "./assets/img/Group 3.png";
// import gpay from  "./assets/img/Google Play.png";
// import appstore from "./assets/img/Appstore.png";


class Footer extends React.Component{
  render(){
      return(
          <div>
              <footer className="landing-footer">
                    <section >
                        <article className="app-benefits">
                            <div>
                                <h3>Get More Benefits</h3>
                                <h5 className="pb-3"> DOWNLOAD THE APP</h5>
                                <p> Download our Mobile Application to continue enjoying or service on the go with your smartphone</p>
                            </div>
                            <div className="app-stores">
                                <img src={require("./assets/img/google_play.png")} alt="googleplay" height="50px" width="130px" />
                                <img src={require("./assets/img/Appstore.png")} alt="apple" height="50px" width="130px" />
                            </div>
                        </article>
                        
                    </section>
                    <section className="d-flex subscribe-block">
                        <div className="heading text-white">
                            <p className="m-0">Get our latest news</p>
                            <h2 >Newsletter</h2>
                        </div>
                        <form className="d-flex">
                            <input className="form-control" type="text" placeholder="Email Address" name="search" size={25} />
                            <button className="btn btn-success p-2">Subscribe
                            </button>
                        </form>

                    </section>
                    <section className="links-part">
                        <section className="footer-mid text-white d-flex">
                            <aside>

                                <p>The vision of Livestock247.com is to mitigate the spread of zoonotic diseases through the
                                    provision of fit-for-slaughter and traceable livestock to our customers.
                                </p>

                            </aside>
                            <article className="navigator">
                                <h3>Quicklinks</h3>
                                <ul>
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Be a Partner</li>
                                    <li>Blog</li>
                                </ul>
                            </article>
                            <article className="contacts">
                                <h3>CONTACTS</h3>
                                <div className="d-flex">
                                    <ul>
                                        <li>Phone</li>
                                        <li>E-mail</li>
                                        <li>Address</li>
                                    </ul>
                                    <ul className="address">
                                        <li>09062-2903550</li>
                                        <li>@Livestock247.com</li>
                                        <li>4th Floor, Valley View Plaza, 99 Opebi Road,IKeja,Lagos-Nigeria.
                                        </li>
                                    </ul>
                                </div>
                            </article>
                        </section>
                        <section>
                            <div className="my-4 text-center">
                                <img className="me-4" src={require("./assets/img/google_play.png")} alt="googleplay" height="30px" width="87px" />
                                <img src={require("./assets/img/Appstore.png")} alt="apple" height="30px" width="87px" />
                            </div>
                        </section>
                        <section className="d-flex justify-content-between bottom-line">
                            <div>
                                <span>&#169; 2018 LIVESTOCK</span>
                            </div>
                            <ul className="d-flex">
                                <li>FAQ</li>
                                <li>PRIVACY</li>
                                <li>TERMS &#38; CONDITIONS</li>
                            </ul>
                            <div className="text-end social-icons">
                                <img src={require("./assets/Icons/fb.png")} alt="fb" />
                                <img src={require("./assets/Icons/google.png")} alt="google" />
                                <img src={require("./assets/Icons/instagram.png")} alt="instagram" />
                                <img src={require("./assets/Icons/twitter.png")} alt="twitter" />
                            </div>
                        </section>
                    </section>
                </footer>
          </div>
      )
  }
}

export default Footer;