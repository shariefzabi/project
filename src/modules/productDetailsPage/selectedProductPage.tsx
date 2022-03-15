import React, { useState, useEffect } from "react";
import axios from 'axios';
import './productDetails.scss';
import { connect } from "react-redux";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from "@mui/material";


function SelectedProductDetails(props: any) {

    let [product, setProduct] = useState<any>([])
    let [products, setProducts] = useState([])
    let [location, setLocation] = useState(props.state.locName)
    let [market, setMarket] = useState('Cattle Market')
    let [isDisplaying, setIsDisplaying] = useState(true)
    let [isDisplayingDescription, setIssDisplayingDescription] = useState(true)
    let [isDisplayingReview, setIssDisplayingReview] = useState(false)
    let [count, setCount] = useState(1)
    let [selectedProductId, setSelectedProductId] = useState(props.state.productData)
    // let [marketType, setMarketType] = useState('cattleMarkets')



    useEffect(() => {
        axios.get("http://localhost:3005/market/marketDetails")
            .then(
                response => {
                    setProducts(response.data)
                }
            )
    }, []);

    useEffect(() => {
        let getProductUrl = "http://localhost:3005/market/selectedProductDetails/" + props.state.productData;
        axios.get(getProductUrl)
            .then(
                response => {
                    setProduct(response.data[0])
                }
            )
    }, []);
    // console.log(selectedProductId)
    console.log(product)

    const setLocationHandler = (event: any) => {
        setLocation(event.target.value)
    }

    const descriptionHandler = () => {
        setIssDisplayingDescription(true)
        setIssDisplayingReview(false)
    }

    const reviewHandler = () => {
        setIssDisplayingReview(true)
        setIssDisplayingDescription(false)
    }

    const countHandler = () => {
        setCount(count + 1)

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
                    <Link className="breadCrumbs" to='/products'>{location}</Link>
                </Breadcrumb.Item >
                <Breadcrumb.Item >
                    <Link className="breadCrumbs" to='/products'>{market}</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>
                    Animal id: {product._id}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
                <div className=" row">
                    <div className="locBox col-3 mt-3 p-0 bg-white">
                        {
                            products.map((e: any, ind) => {
                                let index = "#ind" + ind
                                return (

                                    <div data-bs-toggle="collapse" data-bs-target={index} aria-expanded="false" aria-controls="collapseExample" key={ind} >
                                        <button className="locbtn bg-white text-start px-3" onClick={setLocationHandler} value={e.locationName}>{e.locationName}</button>

                                        <div className="collapse " id={index.slice(1)}>
                                            <ul>
                                                <li className="mx-4"><span className="blue mx-2">&#9679;</span><button className="marketButton " onClick={setMarketHandler} value='Cattle Market'>Cattle Market<span>({e.cattleMarkets.length})</span></button></li>
                                                <li className="mx-4"><span className="blue mx-2">&#9679;</span><button className="marketButton " onClick={setMarketHandler} value='Sheep Market'>Sheep Market<span>({e.sheepMarkets.length})</span></button></li>
                                            </ul>
                                        </div>

                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="col-4 p-0">
                        Image
                    </div>
                    <div className="col-5 p-0">
                        <button className="wishListButton"><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                        <h3 id="marketHeading">ANIMAL ID - </h3>
                        <h3 className="mb-4" id="marketHeading">{product._id}</h3>
                        <p id="text_code">Product Code: {product.productCode}</p>
                        <p className="mb-2" id="text_code">Availability: {product.availability}</p>
                        <Rating className="iconFilled" name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        <p className="price">{product.price}</p>
                        <div>
                            <p className=" qty mb-1">Qty</p>
                            <div className="row quantity ms-0">
                                <p className="col m-0">{count}</p>
                                <button className="addbtn btn-primary col" onClick={countHandler}>+</button>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="sucessbtn btn btn-success">Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-3"></div>
                    <div className="col-9">
                        <button onClick={descriptionHandler}>Description</button>
                        <button onClick={reviewHandler}>Reviews(0)</button>
                        {isDisplayingDescription &&
                            <div>
                                <p>Animal ID-{product._id}</p>
                                <p>Weight-{product.weight}</p>
                                <p>Breed-{product.breed}</p>
                                <p>Animal ID-{product._id}</p>
                                <p>Source-{product.source}</p>
                                <p>Last Known Location-{props.state.locName}</p>
                                <p>Certified by Qualified Veterinary Professionals to be Traceable and Fit-For-Slaughter</p>
                            </div>
                        }
                        
                            
                        {isDisplayingReview &&
                            <div>
                                Review
                            </div>

                        }
                    </div>
                </div>
            </div>

        </div>


    )
}
const mapStateToProps = (state: any) => {
    console.log(state);
    return { state }
}
export default connect(mapStateToProps)(SelectedProductDetails)