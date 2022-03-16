import './orderdisplay.scss'
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import PaymentMethod from '../../paymentMethod/paymentMethod'
import axios from 'axios';

function Orderdisplay(props: any) {
    const [orderdata, setOrderdata] = useState({}) as any;
    const [paymentflag, setPaymentflag] = useState(false);
    const [products,setProducts]=useState<any[]>([]);

    useEffect(() => {
        // const orderdata={user:{...props.user},props.orders};
        const orderdata={} as any;
        orderdata.email=props.user.email;
        orderdata.orders=props.orders[0];
        orderdata.deliveryDetails=props.deliveryDetails;
        orderdata.date=new Date();
        // setOrderdata(orderdata);
        // console.log("orders",orderdata);
        
        axios.post("http://localhost:3005/orders/orderdetails", orderdata)
            .then((res) =>{ 
                console.log("orderdata postresponse", res.data)
                setOrderdata(res.data);
                // const products=res.data.orders;
                // setProducts(products);
            })
            
            .catch((err) => console.log("posterror", err));
        // axios.get("http://localhost:3005/orders/orderdetails")
        //     .then((res) => {
        //         console.log("orderdisplay get response",res.data);
        //         setOrderdata(res.data.orders)
        //     })
        //     .catch((err) => console.log(err)
        //     )
        

    }, [])
    
    
    return (
        <>
            {!paymentflag &&
            <div className='order-modal'>
                <div className='order-display'>
                    {/* <div className="modal-body"> */} 
                            <div className="modal-body-orderdisplay">
                                 <h2 className="heading-cartpage text-center">Product Added to Cart</h2>
                                 <h3 className="heading-cartpage-Id"> Order ID -<b>{orderdata.orderId} {orderdata.date}</b> has been placed you now have to proceed payment</h3>
                                

                                <div className="body-card position-relative text-center">
                                    <img src={require("../assets/Vector.png")} className="mt-3" />
                                    <h4 className="body-head">Hello, {props.user.fullName}</h4>
                                    <p className="body-description">Your order <span className="body-head">{props.orders[0].breed} {props.orders[0].type} </span> has been added to your basket to proceed for checkout</p>
                                    <hr className="ruler" />
                                    <h4 className="body-head-Product">Product Details</h4>
                                    <ul className="body-list-items">
                                        <li className="mt-4">Type: {props.orders[0].type} <span className="weight-items">Quantity : {props.orders[0].quantity}</span></li>
                                        <li className="mt-3">Sex: {props.orders[0].sex} <span className="weight-items">Weight : {props.orders[0].weight}</span></li>
                                        <li className="mt-3">Breed: {props.orders[0].breed}</li>
                                    </ul>
                                    <hr className="vl" />
                                    <ul className="body-list-items-amount">
                                        <li className="product-head">Product Amount </li>
                                        <li>Rs {Number(props.orders[0].price.slice(0,props.orders[0].price.length-2))}</li>         
                                        <li className="product-head mt-2">Delivery Amount </li>
                                        <li>Rs 2000.00</li>
                                    </ul>
                                    <hr className="vl-right" />
                                    <ul className="body-list-items-total">
                                        <li className="product-head">Total Amount</li>
                                        <li className="quantity-style">Rs {Number(props.orders[0].price.slice(0,props.orders[0].price.length-2))+2000}.00</li>
                                    </ul>
                                </div> 
                                
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
