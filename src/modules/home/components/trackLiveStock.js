import React from "react";
import "./assets/style.css";
export default class trackLiveStock extends React.Component {
    render() {
        return (
            <>
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
            </>
        )
    }
}