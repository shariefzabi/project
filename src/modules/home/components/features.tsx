import "./assets/Aboutus.scss"
export default function Features() {
    return (
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
    )
}