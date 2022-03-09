import React, { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import './productDetails.css';


export default function ProductDetails() {
    let [products, setProducts] = useState([])
    const navigate = useNavigate();

    const fetchProducts = (async () => {
        try {
            const response = await axios.get("http://localhost:3005/market/marketDetails")
            setProducts(response.data);
        } catch (err) {
            console.error(err)
        }
    })


    const { locationName } = products
    console.log(locationName)

    return (
        <div id="productPage">
            <p id="sub">Home / Location / Cattle Market</p>
            <div className="container">
                <div className="row">
                    <div className="col-2 locNames ">
                        location names

                    </div>
                    <div className="col-10">
                        <h3 id="marketHeading">Cattle&#32;Market</h3>
                        <h4 id="locationMarketHeading">Location&#32;Cattle&#32;Market</h4>
                        <hr />
                        <div className="card-deck d-flex ">
                            <div className="card col-4 m-2 ">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">
                                    <h5 className="card-id">Animal id</h5>
                                    <p className="card-price">Price</p>
                                    <button type="button" className="btn btn-success">Success</button>

                                </div>
                            </div>
                            <div className="card col-4 m-2 ">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">

                                    <h5 className="card-id">Animal id</h5>
                                    <p className="card-price">Price</p>
                                    <button type="button" className="btn btn-success">Success</button>
                                </div>
                            </div>
                            <div className="card col-4  m-2">
                                <img className="card-img-top" src="..." alt="Card image cap" />
                                <div className="card-body">

                                    <h5 className="card-id">Animal id</h5>
                                    <p className="card-price">Price</p>
                                    <button type="button" className="btn btn-success">Success</button>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}