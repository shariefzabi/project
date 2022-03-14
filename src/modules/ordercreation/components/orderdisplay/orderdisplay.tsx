import './orderdisplay.scss'
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import PaymentMethod from '../../paymentMethod/paymentMethod'
import axios from 'axios';

function Orderdisplay(props: any) {
    // console.log("orderdisplay",props.user.fullName);
    const [orderdata, setOrderdata] = useState([]);
    const [paymentflag, setPaymentflag] = useState(false);
    // console.log("orderdata", orderdata);

    useEffect(() => {
        const orderdata={user:{...props.user},...props.orders};
        // console.log("orders",orderdata);
        
        axios.post("http://localhost:3005/orders/orderdetails", orderdata)
            .then((res) => console.log("orderdata postresponse", res.data))
            .catch((err) => console.log("posterror", err));
        axios.get("http://localhost:3005/orders/orderdetails")
            .then((res) => {
                // console.log("orderdisplay get response",res.data);
                setOrderdata(res.data);
            })
            .catch((err) => console.log(err)
            )

    }, [])
    return (
        <>
            {!paymentflag &&
            <div className='order-modal'>
                <div className='order-display'>
                    {/* <div className="modal-body"> */}
                    
                            <div className="modal-body-orderdisplay">
                                <h2 className="heading-cartpage text-center">Product Added to Cart</h2>
                                {orderdata.map((item: any, i) => {
                                    return (<h3 key={i} className="heading-cartpage-Id"> Order ID -<b>{item.orderId + 1}</b> has been placed you now have to proceed payment</h3>)
                                })}

                                <div className="body-card position-relative text-center">
                                    <img src={require("../assets/Vector.png")} className="mt-3" />
                                    <h4 className="body-head">Hello, {props.user.fullName}</h4>
                                    <p className="body-description">Your order <span className="body-head">{props.orders.productdetails.breed} {props.orders.productdetails.type} </span> has been added to your basket to proceed for checkout</p>
                                    <hr className="ruler" />
                                    <h4 className="body-head-Product">Product Details</h4>
                                    <ul className="body-list-items">
                                        <li className="mt-4">Type: {props.orders.productdetails.type} <span className="weight-items">Quantity : {props.orders.productdetails.quantity}</span></li>
                                        <li className="mt-3">Sex: {props.orders.productdetails.sex} <span className="weight-items">Weight : {props.orders.productdetails.weight} KG</span></li>
                                        <li className="mt-3">Breed: {props.orders.productdetails.breed}</li>
                                    </ul>
                                    <hr className="vl" />
                                    <ul className="body-list-items-amount">
                                        <li className="product-head">Product Amount </li>
                                        <li>N{props.orders.productdetails.price}.00</li>         
                                        <li className="product-head mt-2">Delivery Amount </li>
                                        <li> N{props.orders.productdetails.delprice}.00.00</li>
                                    </ul>
                                    <hr className="vl-right" />
                                    <ul className="body-list-items-total">
                                        <li className="product-head">Total Amount</li>
                                        <li className="quantity-style">N{props.orders.productdetails.totalprice}.00</li>
                                    </ul>
                                </div>
                                {/* <button className="proceed-button">Proceed Payment</button> */}
                                {/* </div> */}
                                <div className="mb-3 text-center">
                                    <button className="btn btn-success continuebutton" onClick={() => setPaymentflag(true)}>Proceed Payment</button>
                                </div>
                            </div>
                        </div>
                        </div>
            }
            {paymentflag &&
                <PaymentMethod></PaymentMethod>
            }
            {/* <PaymentMethod2></PaymentMethod2> */}

        </>

    )
}
// export default Orderdisplay
const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Orderdisplay);
