import './orderdisplay.scss'
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import PaymentMethod from '../../paymentMethod/paymentMethod'
import axios from 'axios';

// import PaymentMethod2 from '../../paymentMethod/paymentMethod'
function Orderdisplay(props: any) {
    // console.log("orderdisplay",props.user.fullName);
    const [orderdata, setOrderdata] = useState([]);
    const [paymentflag, setPaymentflag] = useState(false);
    //    const [cowPrice,setCowPrice]=useState(0);
    //    const [goatPrice,setGoatPrice]=useState(0);
    //    const [pigPrice,setPigPrice]=useState(0)
    console.log("orderdata", orderdata);

    useEffect(() => {
        axios.post("http://localhost:3005/orders/orderdetails", props)
            .then((res) => console.log("postresponse", res.data))
            .catch((err) => console.log("posterror", err));
        axios.get("http://localhost:3005/orders/orderdetails")
            .then((res) => {
                console.log(res.data);
                setOrderdata(res.data);
            })
            .catch((err) => console.log(err)
            )

    }, [])
    // if(props.orders.productdetails.type ==='Cow'){
    //     setCowPrice(props.orders.productdetails.quantity*props.orders.productdetails.weight*50000);
    // }else if(props.orders.productdetails.type ==='Goat'){
    //     setGoatPrice(props.orders.productdetails.quantity*props.orders.productdetails.weight*10000);
    // }else{
    //     setPigPrice(props.orders.productdetails.quantity*props.orders.productdetails.weight*10000);
    // }
    return (
        <>
            {!paymentflag &&
                <div className='order-display'>
                    {/* <div className="modal-body"> */}
                    <div className="modal-dialog modal-xl" >
                        <div className="modal-content">
                            <div className="modal-body">
                                <h2 className="heading-cartpage text-center">Product Added to Cart</h2>
                                {orderdata.map((item: any, i) => {
                                    return (<h3 key={i} className="heading-cartpage-Id"> Order ID - 90008500059{item.orderId + 1} has been placed you now have to proceed payment</h3>)
                                })}

                                <div className="body-card text-center">
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
                                        {props.orders.productdetails.type === 'Cow' &&
                                            <li> N{props.orders.productdetails.quantity * props.orders.productdetails.weight * 50000}.00</li>
                                        }
                                        {props.orders.productdetails.type === 'Goat' &&
                                            <li> N{props.orders.productdetails.quantity * props.orders.productdetails.weight * 10000}.00</li>
                                        }
                                        {props.orders.productdetails.type === 'Pig' &&
                                            <li> N{props.orders.productdetails.quantity * props.orders.productdetails.weight * 5000}.00</li>
                                        }
                                        <li className="product-head mt-2">Delivery Amount </li>
                                        <li> N2,000.00</li>
                                    </ul>
                                    <hr className="vl-right" />
                                    <ul className="body-list-items-total">
                                        <li className="product-head">Total Amount</li>
                                        {props.orders.productdetails.type === 'Cow' &&
                                            <li className="quantity-style"> N{props.orders.productdetails.quantity * props.orders.productdetails.weight * 50000 + 2000}.00</li>
                                        }
                                        {props.orders.productdetails.type === 'Goat' &&
                                            <li className="quantity-style"> N{props.orders.productdetails.quantity * props.orders.productdetails.weight * 10000 + 2000}.00</li>
                                        }
                                        {props.orders.productdetails.type === 'Pig' &&
                                            <li className="quantity-style"> N{props.orders.productdetails.quantity * props.orders.productdetails.weight * 5000 + 2000}.00</li>
                                        }
                                        {/* <li className="quantity-style">N{(props.orders.productdetails.quantity*props.orders.productdetails.weight*50000)+2000}.00</li> */}
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
