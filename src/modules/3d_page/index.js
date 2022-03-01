import React from "react";
 
import './index.css'
function DimesionalPage(){
    return(
        <div>
            <div  className = "heading-page">
            <h1>View the 3d representation of the product before you make payment</h1>
            </div>
            <div>
                <h3 className = "head-2">Hints for better experience</h3>
                <p className = "description">Pan mouse around to view  product in 360 degree</p>
                <p className = "description description-1">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                <p className = "description description-2">Shortcut “z” is to zoom-in, “shift+z” is to zoom-out</p>
                <p className = "description description-3">Pan mouse around to view  product in 360 degree</p>
                <p className = "description description-4">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
            </div>
            <div className = "button-226">
                <button className = "btn btn-success"> Continue</button>
            </div>
        </div>
    )
}

export default DimesionalPage;