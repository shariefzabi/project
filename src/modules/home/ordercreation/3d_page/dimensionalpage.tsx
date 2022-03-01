import React from "react";
import Deliverydetails from "../deliverydetails/deliverydetails";

import './dimensionalpage.scss'
function DimesionalPage() {
    return (
        <div>
            <button className="Continuebutton btn btn-success" data-bs-toggle="modal" data-bs-target="#3dexampleModal" data-bs-whatever="@mdo">Continue</button>

            <div className="modal fade" id="3dexampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                        <Deliverydetails></Deliverydetails>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default DimesionalPage;