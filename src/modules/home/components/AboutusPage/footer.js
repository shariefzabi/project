import "./assets/Aboutus.css"
export default function Footer() {
    return (
        <footer className="container-fluid  section-c">
            <section className="d-flex img-section">
                <div className="container text-white ">
                    <p className="latestnews text-center">Get our latest news</p>
                    <p className="newsletter">Newsletter</p>
                </div>
                <div className="container search text-white">
                    <form className="searchbar d-flex">
                        <input className="searchinput " type="text" placeholder="Email Address" name="search" size="25" />
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
                            {/* <i className="fa fa-facebook"></i>
                                <i className="fa fa-google"></i>
                                <i className="fa fa-twitter"></i>
                                <i className="fa fa-instagram"></i> */}
                            <img className="pe-3" src={require("./assets/img/facebook.png")} />
                            <img className="pe-3" src={require("./assets/img/google.png")} />
                            <img className="pe-3" src={require("./assets/img/skype.png")} />
                            <img className="pe-3" src={require("./assets/img/instagram.png")} />
                        </div>
                    </div>
                </div>
            </section>
        </footer> 
    )
}