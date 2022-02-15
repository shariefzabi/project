import React from 'react';


function beaPartner() {
    return (
        <>
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
        </>
    )
}
export default beaPartner;