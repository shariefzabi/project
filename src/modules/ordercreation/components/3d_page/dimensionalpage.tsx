import axios from "axios";
import { useState, useEffect } from "react";
import { connect } from "react-redux";
import Deliverydetails from "../deliverydetails/deliverydetails";
import './dimensionalpage.scss'

var serverUrl = "http://localhost:3005/";
function DimesionalPage(props: any) {
    const [deliveryFlag, setDeliveryFlag] = useState(false);
    const [quantityData, setQuantityData] = useState<any[]>([]);
    const [selectedProduct,setSelectedProduct] = useState({});
    let quantityarr =props.orders[1];
    //  console.log("ordersdatain 3d", selectedProduct);
    // console.log("dpage",props.orders[1]);
    // const addquantity=(i:any)=>{
    //     quantityData.push(quantityarr[i])
    //     setQuantityData(quantityData);
    //     // console.log("quantityData",quantityData);
    // }
    return (
        <>
            {!deliveryFlag &&
                <div className='order-modal bg-light'>
                    <div className="dimesionalpage-form">
                        <div className=''>
                            <div className="heading-dimension">
                                <p>Product Cattle market</p>
                            </div>
                            <div className="d-flex ms-5">
                            {
                            props.orders[0].map((order: any, i: any) => {
                                let imgPath=" ";
                                if(typeof(order.image) === 'object'){
                                    imgPath=serverUrl+order.image.filename;
                                }
                                return (
                                        <div key={i} className="card product-cards m-3">
                                            <img className="" src={imgPath} height="150px" width="100%"></img>
                                            <p><b>Type:</b>{order.type}</p>
                                            <p><b>Breed:</b>{order.breed}</p>
                                            <p><b>Product Code:</b>{order.productCode}</p>
                                            <p><b>Availability:</b>{order.availability}</p>
                                            <p><b>Price:</b>{order.price}</p>
                                            <p><b>Weight:</b>{order.weight}</p>
                                            <button className="btn btn-success add-to-cart-button"  onClick = {() => {setSelectedProduct(order);props.addQuantity(quantityarr[i]);props.addToCart(order)}}>Add to Cart</button>
                                        </div>
                                   )
                            })}
                            </div>
                            <div className="text-center">
                                <button type="button" className="btn btn-success text-center continuebutton mb-5" onClick={() => setDeliveryFlag(true)}>continue</button>
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
        addQuantity: (quantity: any)=>dispatch({type: 'addQuantity',payload:quantity}),
        addToCart: (products: any) => dispatch({ type: 'addToCart', products })
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(DimesionalPage);