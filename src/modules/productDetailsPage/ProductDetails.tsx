import React, { useState, useEffect } from "react";
import axios from 'axios';
import './productDetails.css';
import { connect } from "react-redux";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductDetails(props: any) {

    let [products, setProducts] = useState([])
    let [location, setLocation] = useState(props.state.locName)
    let [market, setMarket] = useState('Cattle Market')
    let [isDisplaying, setIsDisplaying] = useState(true)
    // let [marketType, setMarketType] = useState('cattleMarkets')

    console.log(location)
    useEffect(() => {
        axios.get("http://localhost:3005/market/marketDetails")
            .then(
                response => {
                    setProducts(response.data)
                }
            )
    }, []);
    console.log(products)

    const setLocationHandler = (event: any) => {
        setLocation(event.target.value)
    }

    const setMarketHandler = (event: any) => {
        setMarket(event.target.value)
        setIsDisplaying(!isDisplaying)
        // if (market === 'Cattle Market') {
        //     setMarketType('cattleMarkets')
        // } else if (market === 'Sheep Market') {
        //     setMarketType('sheepMarkets')
        // }
    }

    return (
        <div id="productPage" className="productPage">
            <Breadcrumb id="sub">
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/location'>{location}</Link>
                </Breadcrumb.Item >
                <Breadcrumb.Item active>
                    {market}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
                <div className=" row">
                    <div className="col-3">
                        {
                            products.map((e: any) => {
                                // let locations = e.locationName
                                // if ({ location } === locations) {
                                return (
                                    <div className="accordion" id="accordionExample">
                                        <div className="accordion-item">
                                            <h2 className="accordion-header" id="headingOne">
                                                <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={setLocationHandler} value={e.locationName}>
                                                    {e.locationName}
                                                </button>
                                            </h2>
                                            <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                                <div className="accordion-body">
                                                    <ul>
                                                        <button onClick={setMarketHandler} value='Cattle Market'>Cattle Market<span>({e.cattleMarkets.length})</span></button>
                                                        <button onClick={setMarketHandler} value='Sheep Market'>Sheep Market<span>({e.sheepMarkets.length})</span></button>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                                // }
                                // else {
                                //     return (
                                //         <div className="accordion" id="accordionExample">
                                //             <div className="accordion-item">
                                //                 <h2 className="accordion-header" id="headingOne">
                                //                     <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" onClick={setLocationHandler} value={e.locationName}>
                                //                         {e.locationName}
                                //                     </button>
                                //                 </h2>
                                //                 <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                //                     <div className="accordion-body">
                                //                         <ul>
                                //                             <button onClick={setMarketHandler} value='Cattle Market'>Cattle Market<span>({e.cattleMarkets.length})</span></button>
                                //                             <button onClick={setMarketHandler} value='Sheep Market'>Sheep Market<span>({e.sheepMarkets.length})</span></button>
                                //                         </ul>
                                //                     </div>
                                //                 </div>
                                //             </div>
                                //         </div>

                                //     )
                                // }
                            })
                        }


                    </div>
                    <div className="col-9">
                        <h3 id="marketHeading">{market}</h3>
                        <h4 id="locationMarketHeading">{location} {market}</h4>
                        <hr />
                        <div className="card-deck">
                            {isDisplaying &&
                                products.map((product: any, i) => {
                                    if (product.locationName === location) {
                                        // if (market === 'Cattle Market') {
                                        // console.log(market)
                                        // console.log(product.cattleMarkets)
                                        return (
                                            product.cattleMarkets.map((e: any, i: any) => {
                                                // console.log('running')
                                                return (

                                                    // <p>Cattle</p>
                                                    <div key={i}>

                                                        <div className="card col-4 ">

                                                            <div className="card-body">

                                                                <h5 className="card-id">animal: {e._id}</h5>

                                                                <p className="card-price">p:{e.price}</p>

                                                                <button type="button" className="btn btn-success">Add to Cart</button>

                                                            </div>

                                                        </div>

                                                    </div>
                                                )
                                            })

                                        )
                                    }
                                })
                            }
                            {!isDisplaying &&
                                products.map((product: any, i) => {
                                    if (product.locationName === location) {
                                        return (
                                            product.sheepMarkets.map((e: any, i: any) => {
                                                // console.log('running')
                                                return (
                                                    // <p>Sheep</p>
                                                    <div key={i}>

                                                        <div className="card col-4 ">

                                                            <div className="card-body">

                                                                <h5 className="card-id">animal: {e._id}</h5>

                                                                <p className="card-price">p:{e.price}</p>

                                                                <button type="button" className="btn btn-success">Add to Cart</button>

                                                            </div>

                                                        </div>

                                                    </div>
                                                )
                                            })
                                        )
                                    }
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>


        </div >
    )
}
const mapStateToProps = (state: any) => {
    console.log(state);
    return { state }
}
export default connect(mapStateToProps)(ProductDetails)