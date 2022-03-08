import React from "react";
import "./styles.css";

class Comment extends React.Component {

    render() {
        return (
            <section className="clients">
                <div className="d-flex justify-content-between head-part">
                    <h2>Satisfied Client Comments</h2>
                    <aside className="arrows align-self-center">
                        <img className="arrows" src={require("./Img/leftarrow.png")} data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="prev" />
                        <img src={require("./Img/rightarrow (1).png")} data-bs-target="#carouselExampleIndicators"
                            data-bs-slide="next" />
                    </aside>
                </div>
                <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="d-lg-flex">
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
                    <span data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active"
                        aria-current="true" aria-label="Slide 1">&#9900;</span>
                    <span data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1"
                        aria-label="Slide 2">&#9900;</span>
                    <span data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2"
                        aria-label="Slide 3">&#9900;</span>
                </div>

            </section>
        )
    }
}

export default Comment;