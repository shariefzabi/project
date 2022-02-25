import "./assets/Aboutus.scss"
export default function Family() {
    return (
        <div className="family">
            <p className="family-head">Meet The Family</p>
            <img src={require("./assets/img/Rectangle 3.png")} alt="Rectangle 3" />
            <p className="family-text">The CEO with some team members of Technology, Quality Control, Digital Marketing
                Strategy, Logistic, Finance and Customer Support</p>
        </div>

    )
}