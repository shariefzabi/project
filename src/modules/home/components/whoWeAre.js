import "./assets/Aboutus.css"
export default function WhoWeAre() {
    return (
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
    )
}