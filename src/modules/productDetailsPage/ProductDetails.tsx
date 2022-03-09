import React, { useState,useEffect} from "react";
import axios from 'axios';
import './productDetails.css';
import { connect } from "react-redux";



function ProductDetails(props: any) {

    let [products, setProducts] = useState([])
    // console.log(props.locName)
    let selectedLocationName = props.state.locName


    useEffect(()=>{
        axios.get("http://localhost:3005/market/marketDetails")
        .then(
            response=>{
                setProducts(response.data)
            }
        )
    },[]);

    // console.log(products)

    
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
            <p id="sub">Home / Location / Cattle Market</p>
            <div className="container">
                <div className="row">
                    <div className="col-2 locNames ">
                        <div>                          
                           {
                               products.map((e:any)=>{
                                   return(
                                    <div>
                                    <button className="btn " role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">                                                                                
                                        {e.locationName}                                                                              
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                        <li><a className="dropdown-item" >Cattle Market()</a></li>
                                        <li><a className="dropdown-item">Sheep Market()</a></li>
                                    </ul>
                                    </div>
                                   )
                               })                           
                       }
                        </div>
                    </div>
                    <div className="col-10">
                        <h3 id="marketHeading">Cattle&#32;Market</h3>
                        <h4 id="locationMarketHeading">Location&#32;Cattle&#32;Market</h4>
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
        </div>
    )
}
const mapStateToProps = (state: any) => {
    console.log(state);
    return { state }
}
export default connect(mapStateToProps)(ProductDetails)