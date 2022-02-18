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