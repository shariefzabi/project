import React from 'react';
import DimesionalPage from './3d_page/dimensionalpage';
// import DimesionalPage from './3d_page/dimensionalpage'
import './ordercreation.scss'
export default function BuyNow() {
    return (
        <>
        <div className='ordercreation-container'>
            
            {/* <a className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ordercreation</a> */}

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" tabIndex={-1}>
                <div className="modal-dialog modal-xl" >
                    <div className="modal-content">
                        <div className='modal-body'>
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
                                    
                                </div>
                            </form>
                            <div className="mb-3">
                                        <button className="continuebutton btn btn-success" data-bs-toggle="modal" data-bs-target="#dimensionalModal" data-bs-whatever="@mdo">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <button className="buy_button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Buy Now</button>
            
        </div >
        <DimesionalPage></DimesionalPage>
        </>
    )

}