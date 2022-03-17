import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Deliverydetails from "../deliverydetails/deliverydetails";

import './dimensionalpage.scss'
function DimesionalPage(props: any) {
    const [deliveryFlag, setDeliveryFlag] = useState(false);
    const [selectData, setSelectData] = useState([]);
    const [selectedProduct,setSelectedProduct] = useState({});
    //  console.log("ordersdatain 3d", selectedProduct);
    
    return (
        <>
            {!deliveryFlag &&
                <div className='order-modal bg-light'>
                    <div className="dimesionalpage-form">
                        <div className=''>
                            <div className="heading-dimension">
                                <p>Product Cattle market</p>
                            </div>
                            <div className="row ms-5">
                            {props.orders.map((order: any, i: any) => {
                                return (
                                        <div key={i} className="card product-cards m-3 col-3">
                                            <p>Type:{order.type}</p>
                                            <p>Breed:{order.breed}</p>
                                            <p>Product Code:{order.productCode}</p>
                                            <p>Availability:{order.availability}</p>
                                            <p>Price:{order.price}</p>
                                            <p>Weight:{order.weight}</p>
                                            <button className="btn btn-success add-to-cart-button"  onClick = {() => {setSelectedProduct(order);props.addToCart(order)}}>Add to Cart</button>
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
const mapDispatchToProps = (dispatch: Function) => {
    return {
        addToCart: (products: any) => dispatch({ type: 'addToCart', products })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DimesionalPage);