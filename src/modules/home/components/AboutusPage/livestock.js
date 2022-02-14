import "./assets/Aboutus.css"
import Footer from "./footer"
export default function Aboutus() {
    return (
        <div>
            <header className="heading">
                <div className="d-flex flex-row-reverse bd-highlight">
                    <nav className="navbar navbar-expand-lg navbar-light">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button " data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon "></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active text-white" href="#">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  text-white" href="#">About Us</a>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown"
                                            role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Be a Partner
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item " href="#">Be An Agent</a></li>
                                            <li><a className="dropdown-item " href="#">Butchery & Abarttoir</a></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link  text-white">Blog</a>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <button className="btn border border-info text-white buynow">Buy Now</button>
                                    <button className="btn btn-success  text-white login">Login</button>
                                </form>
                            </div>
                        </div>
                    </nav>
                </div>
            </header>
            <section className="aboutus">
                <h1>About Us</h1>
                <p className="aboutus-content">Home/About Us</p>
            </section>


            <section className="d-flex ">
                <div className="who-we-are">
                    <div className="theory-y text-white">
                        <p className="subtitle">Who We Are</p>
                        <div className="theory">
                            <ul className="livestock247">
                                <li>Livestock247.com is an online livestock market and listing</li>
                                <li>platform.</li>
                                <li>We are based in Africa, Nigeria.</li>
                                <li className="mt-4">We work together to create and produce good food that we
                                    are proud of for people and organizations.</li>
                                <li>we believe in bringing together;</li>
                            </ul>
                            <div className="d-flex  logo ">
                                <div>
                                    <img src={require("./assets/img/shopping.png")} alt="logo" />
                                    <figcaption>Buyers</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/payment-method (1).png")} alt="logo" />
                                    <figcaption>Sellers</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/farmer.png")} alt="logo" />
                                    <figcaption>Ranchers</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/suitcase.png")} alt="logo" />
                                    <figcaption>Livestock Merchants and Traders</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/doctor.png")} alt="logo" />
                                    <figcaption>Veterinary professionals</figcaption>
                                </div>
                            </div>

                            <div className=" d-flex logo2">
                                <div>
                                    <img src={require("./assets/img/delivery-truck.png")} alt="logo2" />
                                    <figcaption>Haulage and Logistics Companies</figcaption>
                                </div>
                                <div>
                                    <img src={require("./assets/img/customer-service.png")} alt="logo2" />
                                    <figcaption>Financial Service Providers</figcaption>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div>
                    <img className="checkboard-b" src={require("./assets/img/Image.png")} alt="checkboard" />
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


          <Footer></Footer>

        </div>
    )
}