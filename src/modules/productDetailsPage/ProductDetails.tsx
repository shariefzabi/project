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
    let [marketType, setMarketType] = useState("Cattle Market")
    let [selectedLocationName, setSelectedLocationName] = useState(props.state.locName)
    
    useEffect(() => {
        axios.get("http://localhost:3005/market/marketDetails")
            .then(
                response => {
                    setProducts(response.data)
                }
            )
    }, []);

//for dynamic market heading
    const marketTypeHandler = () => {setMarketType("Cattle Market")}
    const markettypeHandler = () => {setMarketType("Sheep Market")}
    
//npt working dynamic product data
    // console.log(products[0].sheepMarkets[0])


    return (
        <div id="productPage">
            <Breadcrumb id="sub">
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/location'>{selectedLocationName}</Link>
                </Breadcrumb.Item >
                <Breadcrumb.Item active>
                   {marketType}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
                <div className="row">
                    <div className="col-3 locNames ">
                        {
                            products.map((e: any) => {
                                let locations = e.locationName;
                                if (selectedLocationName === locations) {
                                    return (
                                        <Accordion defaultActiveKey={e} flush>
                                            <Accordion.Item eventKey={e}>
                                                <Accordion.Header onClick={()=>{setSelectedLocationName(e.locationName)}}>{e.locationName}</Accordion.Header>
                                                <Accordion.Body>
                                                <p onClick={marketTypeHandler}>Cattle Market <span>{e.cattleMarkets.length}</span></p>  
                                                </Accordion.Body>
                                                <Accordion.Body>
                                                <p onClick={markettypeHandler}>Sheep Market <span>{e.sheepMarkets.length}</span></p> 
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )
                                }
                                else {
                                    return (
                                        <Accordion flush>
                                            <Accordion.Item eventKey={e}>
                                                <Accordion.Header onClick={()=>{setSelectedLocationName(e.locationName)}}>{e.locationName}</Accordion.Header>
                                                <Accordion.Body>
                                                  <p onClick={marketTypeHandler}>Cattle Market <span>{e.cattleMarkets.length}</span></p>  
                                                </Accordion.Body>
                                                <Accordion.Body>
                                                   <p onClick={markettypeHandler}>Sheep Market <span>{e.sheepMarkets.length}</span></p> 
                                                </Accordion.Body>
                                            </Accordion.Item>
                                        </Accordion>
                                    )
                                }
                            })
                        }
                    </div>
                    <div className="col-9">
                        <h3 id="marketHeading">{marketType}</h3>
                        <h4 id="locationMarketHeading">{selectedLocationName}&#32;{marketType}</h4>
                        <hr />
                        <div className="card-deck d-flex ">
                        {
                            products.map((e: any) => {
                                return(
                                    
                                    <div className="card col-4 ">
                                        <div className="card-body">
                                            {/* <h5 className="card-id">animal:{e.sheepMarkets}</h5>
                                            <p className="card-price">p:{e.sheepMarkets.price}</p> */}
                                            <button type="button" className="btn btn-success">Success</button>
                                        </div>
                                </div>

                                )
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