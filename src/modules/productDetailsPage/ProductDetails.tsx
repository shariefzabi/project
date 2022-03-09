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
    let [marketType, setMarketType] = useState("")
    let name = props.state.locName;
    // console.log(props.locName)
    let [selectedLocationName, setSelectedLocationName] = useState('')
    setSelectedLocationName(name)
    // console.log(selectedLocationName)


    useEffect(() => {
        axios.get("http://localhost:3005/market/marketDetails")
            .then(
                response => {
                    setProducts(response.data)
                }
            )
    }, []);

    const marketTypeHandler = () => {
        setMarketType("Cattle Market")
    }
    const markettypeHandler = () => {
        setMarketType("Sheep Market")
    }






    // const fetchProducts = (async () => {
    //     try {
    //         const response = await axios.get("http://localhost:3005/market/marketDetails", { params: { locationName: { selectedLocationName } } })
    //         setProducts(response.data.args);
    //     } catch (err) {
    //         console.error(err)
    //     }
    // })
    // fetchProducts();
    // const { locationName } = products
    // console.log(locationName)

    return (
        <div id="productPage">
            {/* <p id="sub">Home / Location / Cattle Market</p> */}
            <Breadcrumb id="sub">
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/location'>{selectedLocationName}</Link>
                </Breadcrumb.Item >
                <Breadcrumb.Item active>
                    selectedMarket
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
                <div className="row">
                    <div className="col-3 locNames ">


                        {
                            products.map((e: any) => {
                                // console.log(selectedLocationName, e.locationName)
                                let locations = e.locationName;
                                // let flag = true;
                                if (selectedLocationName === locations) {
                                    return (
                                        <Accordion defaultActiveKey={e} flush>
                                            <Accordion.Item eventKey={e}>
                                                <Accordion.Header>{e.locationName}</Accordion.Header>
                                                <Accordion.Body>
                                                    Cattle Market <span>{e.cattleMarkets.length}</span>
                                                </Accordion.Body>
                                                <Accordion.Body>
                                                    Sheep Market <span>{e.sheepMarkets.length}</span>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )
                                    // flag = false;
                                    // console.log(flag, locations)
                                }
                                else {
                                    return (
                                        <Accordion flush>
                                            <Accordion.Item eventKey={e}>
                                                <Accordion.Header>{e.locationName}</Accordion.Header>
                                                <Accordion.Body>
                                                    Cattle Market <span>{e.cattleMarkets.length}</span>
                                                </Accordion.Body>
                                                <Accordion.Body>
                                                    Sheep Market <span>{e.sheepMarkets.length}</span>
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )
                                    // console.log(flag, locations)

                                }
                            })
                        }

                    </div>
                    <div className="col-9">
                        <h3 id="marketHeading">{marketType}</h3>
                        <h4 id="locationMarketHeading">Location&#32;{marketType}</h4>
                        <hr />
                        <div className="card-deck d-flex ">
                            <div className="card col-4 m-2 ">
                                <div className="card-body">
                                    <h5 className="card-id">Animal id</h5>
                                    <p className="card-price">Price</p>
                                    <button type="button" className="btn btn-success">Success</button>
                                </div>
                            </div>
                            <div className="card col-4 m-2 ">
                                <div className="card-body">
                                    <h5 className="card-id">Animal id</h5>
                                    <p className="card-price">Price</p>
                                    <button type="button" className="btn btn-success">Success</button>
                                </div>
                            </div>
                            <div className="card col-4  m-2">

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
        </div >
    )
}
const mapStateToProps = (state: any) => {
    console.log(state);
    return { state }
}
export default connect(mapStateToProps)(ProductDetails)