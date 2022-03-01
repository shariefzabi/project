import React from 'react';
// import DimesionalPage from './3d_page/dimensionalpage'
import './ordercreation.scss'
export default function BuyNow() {
    return (
        <div>
            <button className="buy_button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Buy Now</button>
            {/* <a className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ordercreation</a> */}

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" >
                    <div className="modal-content">
                        <div className="text-center popupheading">
                            <p>Yor are one step closer to buying your livestock</p>
                        </div>
                        <div className="form-paragraph  ">
                            <p>Fill in the required information</p>
                        </div>
                        <div className='viewall-icon'>
                            <img src={require("./assets/viewallproductsicon.png")} />
                        </div>
                        <form >
                            <div className='row'>
                                <div className="col-md-3 productype-dropdown" >
                                    <div className="dropdown" >
                                        <select className="form-select" >
                                            <option selected>Type</option>
                                            <option value="1">Cow</option>
                                            <option value="2">Goat</option>
                                            <option value="3">Pig</option>
                                        </select>

                                    </div>
                                </div>
                                <div className="col-md-2">
                                    <div className="dropdown" >
                                        <select className="form-select">
                                            <option selected>Quantity</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-1">

                                    <div className="dropdown">
                                        <select className="form-select" >
                                            <option selected>Sex</option>
                                            <option value="1">Male</option>
                                            <option value="2">Female</option>

                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">

                                    <div className="dropdown">
                                        <select className="form-select" >
                                            <option selected>Weight</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="col-md-2">

                                    <div className="dropdown">
                                        <select className="form-select">
                                            <option selected>Breed</option>
                                            <option value="1">One</option>
                                            <option value="2">Two</option>
                                            <option value="3">Three</option>
                                        </select>

                                    </div>
                                    <div className='cart-icon'>
                                        <img src={require("./assets/addtocarticon.png")} />
                                    </div>
                                </div>
                                <div className="mb-3">
                                    {/* <DimesionalPage></DimesionalPage> */}
                                    <button className="Continuebutton btn btn-success" data-bs-toggle="modal" data-bs-target="#dimensionalModal" data-bs-whatever="@mdo">Continue</button> 
                                    <div className="modal fade" id="dimensionalModal" aria-labelledby="exampleModalLabel1" aria-hidden="true">
                                        <div className="modal-dialog modal-xl" >
                                            <div className="modal-content"></div>
                                            <div className="heading-page">
                                                <h1>View the 3d representation of the product before you make payment</h1>
                                            </div>
                                            <div>
                                                <h3 className="head-2">Hints for better experience</h3>
                                                <p className="description">Pan mouse around to view  product in 360 degree</p>
                                                <p className="description description-1">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                                                <p className="description description-2">Shortcut “z” is to zoom-in, “shift+z” is to zoom-out</p>
                                                <p className="description description-3">Pan mouse around to view  product in 360 degree</p>
                                                <p className="description description-4">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                                            </div>
                                            <div className="button-226">
                                                <button className="btn btn-success"> Continue</button>
                                            </div>
                                        </div>
                                    </div> 
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div >


        </div >
    )

}