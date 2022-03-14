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
    useEffect(() => {
        axios.get("http://localhost:3005/market/marketDetails")
          .then(
            response => {
              setProducts(response.data)
            }
          )
      }, []);
      console.log(products)

    return (
        <div id="productPage" className="productPage">
            <Breadcrumb id="sub">
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/location'>{props.state.locName}</Link>
                </Breadcrumb.Item >
                <Breadcrumb.Item active>
                    
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container">
            <div className=" row">
                <div className="col-3">
                    {
                        products.map((e:any)=>{
                            let locations=e.locationName
                            if(props.state.locName===locations){
                                return(
                                    <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {e.locationName}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                               <ul>
                                                   <li>cattle market<span>({e.cattleMarkets.length})</span></li>
                                                   <li>sheep market<span>({e.sheepMarkets.length})</span></li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                )
                            }
                            else{
                                return(
                                    <div className="accordion" id="accordionExample">
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id="headingOne">
                                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                            {e.locationName}
                                            </button>
                                        </h2>
                                        <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                            <div className="accordion-body">
                                               <ul>
                                                   <li>cattle market<span>({e.cattleMarkets.length})</span></li>
                                                   <li>sheep market<span>({e.sheepMarkets.length})</span></li>
                                               </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                )
                            }
                        })
                    }
                   

                </div>
                <div className="col-9">
                    <h3 id="marketHeading">CattleMarkets</h3>
                    <h4 id="locationMarketHeading">{props.state.locName} cattle Market</h4>
                    <hr/>
                    <div className="card-deck">
                    {
                        products.map((product:any,i)=>{
                            if(product.locationName===props.state.locName){
                            return (
                                product.cattleMarkets.map((e:any,i:any)=>{
                                    return (
                                        <div key={i}>
                                             
                                            <div className="card col-4 ">

                                                <div className="card-body">

                                                    <h5 className="card-id">animal: {e.animalId}</h5>

                                                    <p className="card-price">p:{e.price}</p>

                                                    <button type="button" className="btn btn-success">Add to Cart</button>

                                                </div>

                                           </div>

                                            {/* <p>{e.animalId}</p>
                                            <p>{e.price}</p> */}
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