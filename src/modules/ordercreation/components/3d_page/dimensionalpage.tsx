import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Deliverydetails from "../deliverydetails/deliverydetails";

import './dimensionalpage.scss'
function DimesionalPage(props: any) {
    const [deliveryFlag, setDeliveryFlag] = useState(false);
    const [selectData, setSelectData] = useState([]);
    console.log("ordersdatain 3d", props.orders);
    return (
        <>
            {!deliveryFlag &&
                <div className='order-modal'>
                    <div className="dimesionalpage-form">
                        <div className=''>
                            <div className="heading-dimension">
                                <p>Product Cattle market</p>
                            </div>
                            <div className="row">
                            {props.orders.map((order: any, i: any) => {
                                return (
                                        <div key={i} className="card product-cards m-3 col-3">
                                            <p>Type:{order.type}</p>
                                            <p>Product Code:{order.productCode}</p>
                                            <p>Availability:{order.availability}</p>
                                            <p>Price:{order.price}</p>
                                            <p>Weight:{order.weight}</p>
                                        </div>
                                   )
                            })}
                            </div>
                            

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
const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}
export default connect(mapStateToProps)(DimesionalPage);