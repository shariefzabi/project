import React from 'react';


function sellLivestock() {
    return (
        <>
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
        </>
    )
}
export default sellLivestock;