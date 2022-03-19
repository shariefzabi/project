import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Deliverydetails from "../deliverydetails/deliverydetails";
import './dimensionalpage.scss'

var serverUrl = "http://localhost:3005/";
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
                                let imgPath=" ";
                                if(typeof(order.image) === 'object'){
                                    imgPath=serverUrl+order.image.filename;
                                }
                                return (
                                        <div key={i} className="card product-cards m-3 col-3">
                                            <img className="" src={imgPath} height="150px" width="100%"></img>
                                            <p><b>Type:</b>{order.type}</p>
                                            <p><b>Breed:</b>{order.breed}</p>
                                            <p><b>Product Code:</b>{order.productCode}</p>
                                            <p><b>Availability:</b>{order.availability}</p>
                                            <p><b>Price:</b>{order.price}</p>
                                            <p><b>Weight:</b>{order.weight}</p>
                                            <button className="btn btn-success add-to-cart-button"  onClick = {() => {setSelectedProduct(order);props.addToCart(order)}}>Add to Cart</button>
                                        </div>
                                   )
                            })}
                            </div>
                            

                            <div>
                                <button type="button" className="btn btn-success text-center continuebutton" onClick={() => setDeliveryFlag(true)}>continue</button>
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