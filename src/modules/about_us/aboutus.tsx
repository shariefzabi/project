
import "./assets/Aboutus.scss";
export default function Aboutus() {
    return (
        <div className="body aboutus-container">
            <section className="aboutus">
                <h1>About Us</h1>
                <div className="aboutus-paragraph">
                    <p className="aboutus-content">Home/About Us</p>
                </div>
            </section>


            <section className="d-flex ">
                <div className="who-we-are">
                    <div className="theory-y text-white">
                        <p className="subtitle">Who We Are</p>
                        <div className="theory">
                            <div className="livestock247">
                                <p className="li">Livestock247.com is an online livestock market and listing platform.</p>
                                <p className="li">We are based in Africa, Nigeria</p>
                                <p className="li divider">We work together to create and produce good food that we
                                    are proud of for people and organizations</p>
                                <p className="li">we believe in bringing together;</p>
                            </div>
                            <div className="d-flex  logo ">
                                <div>
                                    <img src={require("./assets/img/shopping-1.png")} alt="logo" />
                                    <figcaption className="figcaption-1">Buyers</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/payment-method-1.png")} alt="logo" />
                                    <figcaption>Sellers</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/farmer-1.png")} alt="logo" />
                                    <figcaption>Ranchers</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/suitcase-1.png")} alt="logo" />
                                    <figcaption>Livestock Merchants and Traders</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/doctor-1.png")} alt="logo" />
                                    <figcaption>Veterinary professionals</figcaption>
                                </div>
                            </div>

                            <div className=" d-flex logo2">
                                <div>
                                    <img src={require("./assets/img/delivery-truck-1.png")} alt="logo2" />
                                    <figcaption>Haulage and Logistics Companies</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/customer-service-1.png")} alt="logo2" />
                                    <figcaption>Financial Service Providers</figcaption>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <img className="checkboard-b real_img" src={require("./assets/img/Image.png")} alt="checkboard" />
                    <img className="checkboard-b responcive_img" src={require("./assets/img/responcive_2.png")} alt="checkboard" />
                    <img className="checkboard-b blue_container_responcive" src={require("./assets/img/blue_rectangle.png")}></img>

                </div>
            </section>



            <div className="section-d">
                <div className="d-flex ">
                    <div>
                        <img className="bluerectangle" src={require("./assets/img/blue bg.png")} alt="blue bg" />
                        <img className="chessboard " src={require("./assets/img/chessboard.png")} alt="chessboard" />
                    </div>
                    <div>
                        <p className="features">Features</p>
                        <div className="discript">
                            <ul className="bulletsremove">
                                <li>
                                    <p className="mb-0">Ability to buy fit for slaughter and traceable livestock, and Livestock product.</p>
                                </li>
                                <li>
                                    <p className="mb-0"> Ability to sell Livestock by Merchants, Ranchers and feedlot operators etc.</p>
                                </li>
                                <li>
                                    <p className="mb-0">Ability to buy Livestock from anywhere in Nigeria and get it delivered.</p>
                                </li>
                                <li>
                                    <p className="mb-0"> Ability to buy Livestock according to breed, weight, colour, age and sex</p>
                                </li>
                                <li>
                                    <p className="mb-0"> Ability to trace purchased livestock from "farm to plate" Secure online payment Fast and
                                        stress-free delivery</p>
                                </li>
                                <li>
                                    <button className="btn btn-success brochure">Dowload Our Brochure</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <div className="family">
                <p className="family-head">Meet The Family</p>
                <img src={require("./assets/img/Rectangle 3.png")} alt="Rectangle 3" />
                <p className="family-text">The CEO with some team members of Technology, Quality Control, Digital Marketing
                    Strategy, Logistic, Finance and Customer Support</p>
            </div>


            <footer className="container-fluid  section-c">
                <section className="d-flex img-section">
                    <div className="container text-white ">
                        <p className="latestnews text-center">Get our latest news</p>
                        <p className="newsletter">Newsletter</p>
                    </div>
                    <div className="container search text-white">
                        <form className="searchbar d-flex">
                            <input className="searchinput " type="text" placeholder="Email Address" name="search" size={25} />
                            <button className="text-white">Subscribe <img src={require("./assets/img/frontarrow.png")} className="ps-3" />
                            </button>
                        </form>
                    </div>
                </section>
                <section className="footer-2 text-white">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="paragraph">
                                    <p>The vision of Livestock247.com is to mitigate the spread of zoonotic diseases through the  provision of fit-for-slaughter and traceable livestock to our customers.
                                    </p>
                                </div>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>
                                        <h3>Quicklinks</h3>
                                    </li>
                                </ul>
                                <ul className="in-li">
                                    <li>Home</li>
                                    <li>About Us</li>
                                    <li>Be a Partner</li>
                                    <li>Blog</li>
                                </ul>
                            </div>
                            <div className="col">
                                <ul>
                                    <li>
                                        <h3>CONTACTS</h3>
                                    </li>
                                </ul>
                                <div className="row">
                                    <div className="col">
                                        <ul>
                                            <li>Phone</li>
                                            <li>E-mail</li>
                                            <li>Address</li>
                                        </ul>
                                    </div>
                                    <div className="col">
                                        <ul>
                                            <li>09062-2903550</li>
                                            <li>@Livestock247.com</li>
                                            <li>4th Floor ,valley view Plazza,
                                                99 Opebi Road,IKeja,Lagesngeria
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center">
                        <img src={require("./assets/img/Google Play.png")} alt="googleplay" height="50px" width="130px" />
                        <img src={require("./assets/img/Appstore.png")} alt="apple" height="50px" width="130px" />
                    </div>
                    <div className="footer-last container">
                        <div className="row">
                            <div className="col-2">
                                <span>&#169; 2018 LIVESTOCK</span>
                            </div>
                            <div className="col-8 faq">
                                <ul className="d-flex  footer-list">
                                    <li>FAQ</li>
                                    <li className="privacy">PRIVACY</li>
                                    <li>TERMS & CONDITIONS</li>
                                </ul>
                            </div>
                            <div className="col-2 text-end icons">

                                <img className="pe-3" src={require("./assets/img/facebook.png")} />
                                <img className="pe-3" src={require("./assets/img/google.png")} />
                                <img className="pe-3" src={require("./assets/img/skype.png")} />
                                <img className="pe-3" src={require("./assets/img/instagram.png")} />
                            </div>
                        </div>
                    </div>
                </section>
            </footer>

        </div>
    )
}