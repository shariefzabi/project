import React, { useEffect, useState } from "react";
import "../landing_page/assets/landing_page.scss";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { addToCart } from "./newcomponet/redux/Shopping/shopping-actions";


const LandingPage = () => {
    const [items, setItems] = useState();

    useEffect(() => {
        fetch('http://localhost:3005/animal/get-animal/Tirupati/1')
            // this.setState({ items: getData.payload })
            .then((res) => res.json())
            // .then((res) => console.log(res))
            .then(res => {
                setItems(res.payload)
            })

    }, [])

    console.log("^^^^", items);

    return (
        <>
            <main>
                <section className="order-livestock">
                    <article>
                        <h5><b>ANIMAL ID : 89987656788654568</b></h5>
                        <div className="option">
                            {/* <Link to="/shoppingcart" className="btn btn-success view">
                                        <span>Add to cart</span>
                            </Link> */}
                            <button onClick={() => addToCart(items.animalId, items.price)} className="btn btn-success view">Add to cart</button>

                        </div>
                    </article>
                </section>
            </main>

        </>
    )

}

const mapDispatchToProps = dispatch => {
    return {
        addToCart: (animalId) => dispatch(addToCart(animalId))
    }
}
export default connect(null, mapDispatchToProps)(LandingPage);