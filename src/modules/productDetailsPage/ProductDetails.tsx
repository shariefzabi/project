import React, { useState, useEffect } from "react";
import axios from 'axios';
import './productDetails.scss';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function ProductDetails(props: any) {

    let [products, setProducts] = useState([])
    let [location, setLocation] = useState(props.state.locName)
    let [market, setMarket] = useState('Cattle Market')
    let [isDisplaying, setIsDisplaying] = useState(true)
    let [showCount, setShowCount] = useState(5)
    const navigate = useNavigate();
    // let [isOpened, setIsOpened] = useState('')
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

        if (event.target.id === "") {
            event.target.id = 'opened'
        } else if (event.target.id === "opened") {
            event.target.id = ''
        }
        // class_name = 'opened'
        // setIsOpened(class_name)
    }
    const productDataHandler = (e: any) => {
        e.preventDefault();
        navigate("/selectedProduct");
        props.setProductDetails(e.target.id)
        // setSelectedProduct(e.target.id)
        // console.log('sdfghj',selectedProduct)
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

    const showHandler = (event: any) => {
        setShowCount(event.target.value)
        console.log(market)
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
                <div className="row">
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
                    <div className="col-9">
                        <h3 id="marketHeading">{market}</h3>
                        <h4 id="locationMarketHeading">{location} {market}</h4>
                        {/* <hr /> */}
                        <div className="horizontalRule"></div>
                        <div className="sort-filter my-5 d-flex justify-content-end">
                            <p className="d-inline pt-2">Sort by</p>
                            <select className="dropdownToggle "
                                placeholder="Default"
                                required>
                                <option className="dropdownItem" selected disabled value="" hidden>Default</option>
                                <option className="dropdownItem" >Price High to Low</option>
                                <option className="dropdownItem" >Price Low To High</option>
                            </select>
                            <p className="d-inline pt-2">Show</p>
                            <select className="dropdownToggle "
                                placeholder="Default"
                                onChange={showHandler}
                                required>
                                <option className="dropdownItem" selected>5</option>
                                <option className="dropdownItem" >4</option>
                                <option className="dropdownItem" >3</option>
                            </select>
                        </div>
                        <div className="card-deck row row-cols-3">
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

                                                        <div className="card mb-4">
                                                            {/* <Link to="/selectedProduct" > */}
                                                            <div className="card-body" onClick={productDataHandler} id={e.animalId}>
                                                                <button className="wishListButton"><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                <div className="emptydiv" id={e.animalId}></div>
                                                                <img src={`data:image/jpeg;based64,${e.image}`} />

                                                                <h5 className="card-id" id={e.animalId}>Animal ID: {e._id}</h5>

                                                                <p className="card-price" id={e.animalId}>Price:{e.price}</p>
                                                                <div className="text-center">
                                                                    <button type="button" className="btn btn-success">Add to Cart</button>
                                                                </div>
                                                            </div>

                                                            {/* </Link> */}



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
                                                        <div className="card mb-4">
                                                            {/* <Link to="/selectedProduct" > */}
                                                            <div className="card-body" onClick={productDataHandler} id={e.animalId}>
                                                                <button className="wishListButton"><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                <div className="emptydiv" id={e.animalId}></div>
                                                                {/* <img src=`data:image/jpeg;based64,+btoa(${e.image})` /> */}


                                                                <h5 className="card-id" id={e.animalId}>animal: {e._id}</h5>

                                                                <p className="card-price" id={e.animalId}>p:{e.price}</p>
                                                                <div className="text-center">
                                                                    <button type="button" className="btn btn-success">Add to Cart</button>
                                                                </div>
                                                            </div>

                                                            {/* </Link> */}



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
const mapDispatchToProps = (dispatch: Function) => {
    return {

        setProductDetails: (productData: any) => dispatch({ type: 'storeProductData', payload: productData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)