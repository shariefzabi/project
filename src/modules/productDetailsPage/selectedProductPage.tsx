import React, { useState, useEffect } from "react";
import axios from 'axios';
import './productDetails.scss';
import { connect } from "react-redux";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Rating } from "@mui/material";
import { createFalse } from "typescript";



var serverUrl = "http://localhost:3005/";
function SelectedProductDetails(props: any) {

    let [product, setProduct] = useState<any>([])
    let [products, setProducts] = useState([])
    let [latestProducts, setLatestProducts] = useState<any>([])
    let [location, setLocation] = useState(props.state.locName)
    let [market, setMarket] = useState('Cattle Market')
    let [isDisplaying, setIsDisplaying] = useState(true)
    let [isDisplayingDescription, setIssDisplayingDescription] = useState(true)
    let [isDisplayingReview, setIssDisplayingReview] = useState(false)
    let [count, setCount] = useState(1)
    let [selectedProductId, setSelectedProductId] = useState(props.state.productData)
    let [inWhishlist, setInWhishlist] = useState(false)

    let [price, setPrice] = useState(0);
    let [productId, setProductId] = useState('')
    // let [marketType, setMarketType] = useState('cattleMarkets')


    useEffect(() => {
        axios.get("http://localhost:3005/market/latestProducts")
            .then(
                response => {
                    setLatestProducts(response.data)
                }
            )
    }, []);


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

        setPrice(product.price)
        setProductId(product._id)
        // console.log("priceteam6", product.price);
        // console.log("price", price);

        // props.quantity(++count, price);
    }, []);
    // console.log(selectedProductId)
    product.email = props.state.user.email

    console.log("whislist", product)




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
    const decrement = () => {
        setCount(count - 1)
    }
    function addToCart() {
        let items = [count, parseInt(`${price}`), productId]
        props.quantity(items);
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

    // var serverUrl = "http://localhost:3005/";
    let imagePath = "";
    if (typeof product.image === 'object') {
        imagePath = serverUrl + product.image.filename;
    }
    //whislist post

    const addtoWishlist = () => {
        setInWhishlist(true)

        const products = { product }
        try {
            axios.post("http://localhost:3005/orders/wishlists", products)
        } catch (err) {
            console.error(err)
        }
    }

    //wishlist delete

    const deleteFromWishlist = () => {
        setInWhishlist(false)
        try {
            axios.delete("http://localhost:3005/orders/wishlists/" + product._id)
        } catch (err) {
            console.error(err)
        }
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
                    <div className="col-4 mt-3 p-0">

                        <img className="Image" src={imagePath} />

                        {/* < img className="productImage" src={"http://localhost:3005/" +product.image.filename } /> */}
                    </div>
                    <div className="col-5 mt-3 p-0">


                        {!inWhishlist &&
                            <button className="wishListButton" onClick={addtoWishlist}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                        }
                        {inWhishlist &&
                            <button className="wishListButton" onClick={deleteFromWishlist}><img className="wishListImg" src={require("./assets/whislistDelete.png")}></img></button>

                        }



                        <h3 className="p-0" id="marketHeading">ANIMAL ID - </h3>
                        <h3 className="mb-3 p-0" id="marketHeading">{product._id}</h3>
                        <p id="text_code">Product Code: {product.productCode}</p>
                        <p className="mb-2" id="text_code">Availability: {product.availability}</p>
                        <Rating className="iconFilled" name="half-rating-read" defaultValue={4} precision={0.5} readOnly />
                        <p className="price">{product.price}</p>
                        <div>
                            <p className=" qty mb-1">Qty</p>
                            <div className="row quantity ms-0 addbtn2">
                                <button className="btn btn-primary col" onClick={decrement}>-</button>
                                <p className="col m-auto">{count}</p>
                                <button className="btn btn-primary col" onClick={countHandler}>+</button>
                            </div>
                        </div>
                        <div>
                            <button type="button" className="sucessbtn btn btn-success" onClick={addToCart} >Add to Cart</button>
                        </div>
                    </div>
                </div>

                <div className="row">
                    {/* ///////Latest Products///// */}
                    <div className="col-3">
                        <h3 className="fontColor">Latest</h3>
                        {
                            latestProducts.map((product: any, i: any) => {
                                let imagePath = "";
                                if (typeof product.image === 'object') {
                                    imagePath = serverUrl + product.image.filename;
                                }
                                return (
                                    <div key={i}>
                                        <div className="card mb-2 ">
                                            <div className=" latestCards" id={product._id}>
                                                {/* <button className="wishListButton" onClick={addtoWishlist}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button> */}
                                                <div className="latestProduct d-flex">
                                                    <div >
                                                        <img className="latestProductImage" id={product._id} src={imagePath} />
                                                    </div>
                                                    <div className="latestProductDetails">
                                                        <h5 className="card-id" id={product._id}>Animal ID: {product._id}</h5>
                                                        <p className="card-price" id={product._id}>{product.price}</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                )
                            })}
                    </div>
                    {/* /////Latest Products Ending-Team 5/////  */}
                    <div className="col-9 ">
                        <button className="descripbtn" onClick={descriptionHandler}>Description</button>
                        <button className="descripbtn" onClick={reviewHandler}>Reviews(0)</button>
                        {isDisplayingDescription &&
                            <div className="descriptionbox">
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
                            <div className="review">
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

const mapDispatchToProps = (dispatch: Function) => {
    return {

        quantity: (count: any) => dispatch({ type: 'itemslength', payload: count })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SelectedProductDetails)