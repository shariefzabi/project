import "./footer.css"
import React from "react"

export default function Footer() {
    return (
        <div>
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
        </div>
    )
}