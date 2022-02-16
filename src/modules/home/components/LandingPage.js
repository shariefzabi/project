import React from "react";
import "./assets/style.css";
export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <header className="heading">
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button " data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon "></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link  text-white" aria-current="page" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" href="./AboutUs/index.html" target="blank">About Us</a>
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
                                            <a className="nav-link active text-white" href="./ourblog/index.html" target="blank">Blog</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <button className="btn text-white buynow" type="button">Buy Now</button>
                                        <button className="btn btn-success login" type="button">Login</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                <main>
                    <section>
                        <div className="container-fluid d-flex section1">
                            <article>
                                <div className="container theory-x">
                                    <div className="theorya text-white">
                                        <p>Order your <span style={{ color: "#2078BF" }}><strong>Livestock</strong></span></p>
                                        <p>and Get Them Delivered</p>
                                        <p> at your Doorstep</p>
                                    </div>
                                    <div className="theoryb text-white">
                                        <p className="text"><em>-Buy Fit-for-Slaughter and Traceable Livestock.</em></p>
                                        <p className="text"><em>-Get it Processed at a Livestock247.com Certified Butchery /
                                            Abattoir.</em></p>
                                        <p className="text"><em> -We Deliver to your address of choice.</em></p>
                                    </div>
                                    <div className="buttons">
                                        <button className="btn btn-success learnmore">Learn More</button>
                                        <button className="btn text-white buynow2">Buy Now</button>
                                    </div>
                                </div>
                            </article>
                            <aside>
                                <img className="checkboard" src={require("./assets/Img/Base.png")} alt="checkboard" />
                            </aside>
                        </div>
                    </section>

                    <section>
                        <div className="sell-livestock d-flex">
                            <article>
                                <ul className="heading text-white">
                                    <li>Sell your Livestock to</li>
                                    <li>Potential Buyers on our</li>
                                    <li>Platform Painlessly</li>
                                </ul>
                                <ul className="description text-white">
                                    <li>Livestock producer, merchant or rancher’s sell his product </li>
                                    <li>and get good value</li>
                                    <li>without stress and any in exception of the middlemen bugs.</li>
                                </ul>
                                <ul className="questions text-white">
                                    <li>Are you a livestock merchant, trader, or producer?</li>
                                    <li>Are you a rancher?</li>
                                    <li>Do you need a platform to sell your livestock that <br /> works 24/7 all day every day?</li>
                                </ul>
                                <button className="btn btn-success" type="submit">Learn More</button>
                            </article>
                            <aside >
                                <img className="chessboard" src={require("./assets/Img/Base.png")} alt="checkboard" />
                            </aside>
                        </div>
                    </section>

                    <section>
                        <div className="track-livestock d-flex">
                            <img className="animal goat-left" src={require("./assets/animals/ram.png")} alt="animal" />
                            <img className="animal goat-mid" src={require("./assets/animals/ram.png")} alt="animal" />
                            <img className="animal goat-right" src={require("./assets/animals/ram.png")} alt="animal" />
                            <img className="animal cow-right" src={require("./assets/animals/cow.png")} alt="animal" />
                            <img className="animal cow-mid" src={require("./assets/animals/cow.png")} alt="animal" />
                            <img className="animal cow-left" src={require("./assets/animals/cow.png")} alt="animal" />
                            <article>
                                <p className="heading text-white">
                                    Easily Track Livestock With Their Chip Number
                                </p>
                                <p className="description text-white">Get to know the status of your order either by location or
                                    condition and also the specific amount of time it’ll take the parcel to get to your current location
                                </p>
                            </article>
                            <aside className="search-livestock text-white">
                                <p className="searchbar-heading">Track your livestock </p>
                                <form className="d-flex">
                                    <input type="text" placeholder="Input Your Chip Number Here" name="search" size="25" />
                                    <img src={require("./assets/Img/Group 20.png")} />
                                </form>
                            </aside>
                        </div>
                    </section>

                    <section className="position-relative d-flex about-us">
                        <aside className="about-us-bluerectangle">
                            <img src={require("./assets/Img/blue bg.png")} alt="blue bg" />
                            <img className="position-absolute start-0 chessboard" src={require("./assets/Img/chessboard.png")} alt="chessboard" />
                        </aside>
                        <article>
                            <h2>About Us</h2>
                            <div className="description">
                                <ul className="top-part">
                                    <li>Livestock247.com is an online livestock market and
                                        listing platform.</li>
                                    <li>We are based in Africa, Nigeria. </li>
                                </ul>
                                <ul className="bottom-part">
                                    <li>We work together to create and produce good food
                                        that we are proud of for people and organisations. </li>
                                    <li>We believe in bringing together;</li>
                                </ul>
                            </div>
                            <div className="d-flex flex-wrap about-us-menu">
                                <figure>
                                    <img src={require("./assets/Img/buyers.png")} alt="logo" />
                                    <figcaption>Buyers</figcaption>
                                </figure>
                                <figure>
                                    <img src={require("./assets/Img/sellers.png")} alt="logo" />
                                    <figcaption>Sellers</figcaption>
                                </figure>
                                <figure>
                                    <img src={require("./assets/Img/ranchers.png")} alt="logo" />
                                    <figcaption>Ranchers</figcaption>
                                </figure>
                                <figure>
                                    <img src={require("./assets/Img/livestock.png")} alt="logo" />
                                    <figcaption>Livestock Merchants and Traders </figcaption>
                                </figure>
                                <figure>
                                    <img src={require("./assets/Img/veternary.png")} alt="logo" />
                                    <figcaption>Veterinary Professionals</figcaption>
                                </figure>
                                <figure>
                                    <img src={require("./assets/Img/logistics.png")} alt="logo" />
                                    <figcaption>Haulage and Logistics Companies</figcaption>
                                </figure>
                                <figure>
                                    <img src={require("./assets/Img/financial serivce.png")} alt="logo" />
                                    <figcaption>Financial Service Providers</figcaption>
                                </figure>
                            </div>
                            <button className="btn btn-success">Discover</button>
                        </article>
                    </section>

                    <section className="be-a-partner">
                        <header>Be a Partner</header>
                        <div className="d-flex ">
                            <div className="agent-checkbox">
                                <img className="Be-a-partner-image" src={require("./assets/Img/checker.png")} alt="#" />
                                <p className="content-heading"><strong>Become an Agent</strong></p>
                                <p className="content">
                                    A Livestock247.com agent must be a qualified veterinary professional certified by
                                    the veterinary council of Nigeria (VCN) or the Nigeria institute of animal science (NIAS)
                                </p>
                                <button type="button">Discover</button>
                            </div>
                            <div>
                                <img className="Be-a-partner-image" src={require("./assets/Img/checker.png")} alt="#" />
                                <p className="content-heading"><strong>Butchery/Abattoir</strong></p>
                                <p className="content">
                                    A Livestock247.com agent must be a qualified veterinary professional certified by
                                    the veterinary council of Nigeria (VCN) or the Nigeria institute of animal science (NIAS)
                                </p>
                                <button type="button">Discover</button>
                            </div>
                        </div>
                    </section>

                    <section className="landingpage-video d-flex align-items-center justify-content-center">
                        <img className="play-button" src={require("./assets/Img/Icon.png")} alt="play-button" />
                    </section>

                    <section className="our-blog container-fluid bcolor cards">
                        <header className="sub-title">Our Blog</header>
                        <div className="row row-cols-1 row-cols-lg-4 row-cols-xs-1">
                            <div className="cards">
                                <div className="card">
                                    <img src={require("./assets/Img/card.png")} alt="Image" className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-content">04 JUNE 2019</p>

                                        <p className="card-heading">ONLINE PLATFORMnb TO BRIDGE LIVESTOCK.....</p>

                                        <p className="card-content">There is a moment in the life of any aspiring astronomer that it is
                                            time
                                            to
                                            buy that
                                            first telescope.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <img src={require("./assets/Img/card.png")} alt="Image" className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-content">12 JUNE 2019</p>

                                        <p className="card-heading">WHY COW MILK SHOULDN’T BE CONSUM....</p>

                                        <p className="card-content">There is a moment in the life of any aspiring astronomer that it is
                                            time
                                            to
                                            buy that
                                            first telescope.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cards">
                                <div className="card">
                                    <img src={require("./assets/Img/card.png")} alt="Image" className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-content">21 APRIL 2019</p>

                                        <p className="card-heading">THE MERIT OF RUNNING AN AGRICULTURAL BU.....</p>

                                        <p className="card-content">There is a moment in the life of any aspiring astronomer that it is
                                            time
                                            to
                                            buy that
                                            first telescope.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="cards">


                                <div className="card">
                                    <img src={require("./assets/Img/card.png")} alt="Image" className="card-img-top" />
                                    <div className="card-body">
                                        <p className="card-content">28 MARCH 2019</p>

                                        <p className="card-heading">WHY DO ROASTERS CROW ALL DAY? </p>

                                        <p className="card-content">There is a moment in the life of any aspiring astronomer that it is
                                            time
                                            to
                                            buy that
                                            first telescope.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </section>

                    <section className="our-partners">
                        <div className="d-flex justify-content-between head-part">
                            <h2>Our Partners</h2>
                            <aside className="arrows align-self-center">
                                <img src={require("./assets/Img/leftarrow.png")} type="button" data-bs-target="#our-partners-carousel"
                                    data-bs-slide="prev" />
                                <img src={require("./assets/Img/rightarrow (1).png")} type="button" data-bs-target="#our-partners-carousel"
                                    data-bs-slide="next" />
                            </aside>
                        </div>
                        <div className="d-flex justify-content-around mb-5">
                            <img src={require("./assets/Img/sponge.png")} alt="sponge" />
                            <img src={require("./assets/Img/farm_gate.png")} alt="farm_gate" />
                            <img src={require("./assets/Img/sterling.png")} alt="sterling" />
                            <img src={require("./assets/Img/LD4D.png")} alt="LD4D" />
                            <img src={require("./assets/Img/meat.png")} alt="The Meat Embassy" />
                        </div>
                    </section>

                    <section className="clients">
                        <div className="d-flex justify-content-between head-part">
                            <h2>Satisfied Clients</h2>
                            <aside className="arrows align-self-center">
                                <img src={require("./assets/Img/leftarrow.png")} type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="prev" />
                                <img src={require("./assets/Img/rightarrow (1).png")} type="button" data-bs-target="#carouselExampleIndicators"
                                    data-bs-slide="next" />
                            </aside>
                        </div>
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="d-flex">
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">I really love the product and the delight coupons you
                                                guys always serve me with</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Daniel Toyin</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Sales Rep. Vegax Initiative</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">Quality product for the money</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Ogunbiyi Ibrahim</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Marketer. Dreamland Tech.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">I highly recommend this service</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Chukwu Ebuka</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Ceo. Spareparts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex">
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">I really love the product and the delight coupons
                                                you
                                                guys always serve me with</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Daniel Toyin</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Sales Rep. Vegax Initiative</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">Quality product for the money</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Ogunbiyi Ibrahim</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Marketer. Dreamland Tech.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">I highly recommend this service</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Chukwu Ebuka</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Ceo. Spareparts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex">
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">I really love the product and the delight coupons
                                                you
                                                guys always serve me with</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Daniel Toyin</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Sales Rep. Vegax Initiative</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">Quality product for the money</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Ogunbiyi Ibrahim</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Marketer. Dreamland Tech.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="card p-4 m-3">
                                            <p className="carousel-description">I highly recommend this service</p>
                                            <div className="d-flex flex-row justify-content-between">
                                                <div className="d-flex align-items-center">
                                                    <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                                    <label htmlFor="radiobtn" className="client-details">Chukwu Ebuka</label>
                                                </div>
                                                <div>
                                                    <p className="client-details mt-3">Ceo. Spareparts</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center">
                            <span href="#" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1">&#9900;</span>
                            <span type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                                aria-label="Slide 2">&#9900;</span>
                            <span type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                                aria-label="Slide 3">&#9900;</span>
                        </div>

                    </section>
                </main>

                <footer className="landing-footer">
                    <section >
                        <article className="app-benefits">
                            <div>
                                <h3>Get More Benefits</h3>
                                <h5 className="pb-3"> DOWNLOAD THE APP</h5>
                                <p> Download our Mobile Application to continue enjoying or service on the go with your smartphone</p>
                            </div>
                            <div className="app-stores">
                                <img src={require("./assets/Img/Google Play.png")} alt="googleplay" height="50px" width="130px" />
                                <img src={require("./assets/Img/Appstore.png")} alt="apple" height="50px" width="130px" />
                            </div>
                        </article>
                        <div className="mobile">
                            <img src={require("./assets/Img/Group 2.png")} />
                        </div>
                    </section>
                    <section className="d-flex subscribe-block">
                        <div className="news text-white">
                            <p className="latestnews pt-3">Get our latest news</p>
                            <p className="newsletter">Newsletter</p>
                        </div>
                        <form className="d-flex">
                            <input className="form-control" type="text" placeholder="Email Address" name="search" size="25" />
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
                                <img className="me-4" src={require("./assets/Img/Google Play.png")} alt="googleplay" height="30px" width="87px" />
                                <img src={require("./assets/Img/Appstore.png")} alt="apple" height="30px" width="87px" />
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
            </>
        )
    }
}