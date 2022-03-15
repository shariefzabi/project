import { useState } from "react";
import Deliverydetails from "../deliverydetails/deliverydetails";

import './dimensionalpage.scss'
function DimesionalPage() {
    const [deliveryFlag, setDeliveryFlag] = useState(false);
    return (
        <>
            {!deliveryFlag &&
            <div className='order-modal'>
                <div className="dimesionalpage-form">
                            <div className=''>
                                <div className="heading-dimension">
                                    <p>View the 3d representation of the product before you make payment</p>
                                </div>
                                {/* <div className="d-flex">
                                    <div>
                                        <img src={require("../assets/cow.jpg")}></img>
                                    </div>
                                    <div className="dimesional-description">
                                        <h3 className="hint-heading">Hints for better experience</h3>
                                        <p className="">Pan mouse around to view  product in 360 degree</p>
                                        <p className="">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                                        <p className="">Shortcut “z” is to zoom-in, “shift+z” is to zoom-out</p>
                                        <p className="">Pan mouse around to view  product in 360 degree</p>
                                        <p className="">Scroll mouse wheel in to zoom into product and do the inverse to zoom out of product</p>
                                    </div>
                                </div> */}
                                <div>
                                    <button type="button" className="btn btn-success continuebutton" onClick={() => setDeliveryFlag(true)}>continue</button>
                                </div>
                            </div>
                        </div>
                        </div>
            }
            {deliveryFlag &&
                <Deliverydetails></Deliverydetails>
            }
        </>

    )
}

export default DimesionalPage;