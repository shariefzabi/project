import Deliverydetails from "../deliverydetails/deliverydetails";

import './dimensionalpage.scss'
function DimesionalPage() {
    return (
    <>
        <div className="dimesionalpage-form">
            {/* <button className="Continuebutton btn btn-success" data-bs-toggle="modal" data-bs-target="#3dexampleModal" data-bs-whatever="@mdo">Continue</button> */}
            <div className="modal fade" id="dimensionalModal" aria-labelledby="dimensionalModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl" >
                    <div className="modal-content">
                        <div className='modal-body'>
                            <div className="heading-dimension">
                                <p>View the 3d representation of the product before you make payment</p>
                            </div>
                            <div className="dimesional-description">
                                <h3 className="hint-heading">Hints for better experience</h3>
                                <p className="">Pan mouse around to view  product in 360 degree</p>
                                <p className="">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                                <p className="">Shortcut “z” is to zoom-in, “shift+z” is to zoom-out</p>
                                <p className="">Pan mouse around to view  product in 360 degree</p>
                                <p className="">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                            </div>
                            <div>
                                <button type="button" className="btn btn-success continuebutton" data-bs-toggle="modal" data-bs-target="#deliverydetailsModal" data-bs-whatever="@mdo">continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
        </div >
        <Deliverydetails></Deliverydetails>
        </>
    
    )
}

export default DimesionalPage;