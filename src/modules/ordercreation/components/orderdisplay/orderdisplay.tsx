import './orderdisplay.scss'
import { connect } from "react-redux";
import { useEffect, useState } from 'react';
import PaymentMethod from '../../paymentMethod/paymentMethod'
import axios from 'axios';

function Orderdisplay(props: any) {
    const [orderdata, setOrderdata] = useState({}) as any;
    const [paymentflag, setPaymentflag] = useState(false);
    const [products, setProducts] = useState<any[]>([]);
    // const [productPrice, setProductPrice] = useState(0);
    let productPrice = 0;
    useEffect(() => {
        // const orderdata={user:{...props.user},props.orders};
        
        // const orderId=props.orderdetails.orderId;
        // axios.patch("http://localhost:3005/orders/orderdetails/"+{orderId},)

    }, [])
    const updateprice=(price:any)=>{
        const orderId=props.orderdetails.orderId;
        props.orderdetails.totalprice=price;
        props.orderdetails.deliveryprice=2000;
        price={
            totalprice: props.orderdetails.totalprice,
            deliveryprice: props.orderdetails.deliveryprice
        }
        const orderid=props.orderdetails.orderId;
        console.log("props",props.orderdetails);   
        axios.post("http://localhost:3005/orders/orderdetails/"+orderid,price)
        .then((res)=>console.log("price obj response",res.data))
        .catch((err)=>console.log(err)
        )
        setPaymentflag(true)
    }


    return (
        <>
            {
                console.log("order Details:", props.orderdetails)
                
            }
            {!paymentflag &&
                <div className='order-modal'>
                    <div className='order-display'>
                        {/* <div className="modal-body"> */}
                        <div className="modal-body-orderdisplay">
                            <h2 className="heading-cartpage text-center">Product Added to Cart</h2>
                            <h3 className="heading-cartpage-Id"> Order ID -<b>{props.orderdetails.orderId}</b> has been placed you now have to proceed payment</h3>


                            <div className="body-card border-secondary text-center">
                                <img src={require("../assets/Vector.png")} className="mt-3" />
                                <h4 className="body-head">Hello, {props.user.fullName}</h4>
                                <p className="body-description">Your order <span className="body-head">{props.orders[0].breed} {props.orders[0].type} </span> has been added to your basket to proceed for checkout</p>
                            
                                <div className='row border-top border-secondary mx-3'>
                                    <div className='col-6'>
                                        <h4 className="body-head-Product mt-3">Product Details</h4>
                                        <div className='items-container'>
                                            {

                                                props.orderdetails.cartproducts.map((item: any, ind: any) => {
                                                    console.log("itemss", item);
                                                    productPrice+=Number(item.price.slice(0, item.price.length - 2))
                                                    return (
                                                        <ul className="body-list-items m-auto" key={ind}>
                                                            <li className="mt-4">Type: {item.type} <span className="weight-items">Quantity : {item.quantity}</span></li>
                                                            <li className="mt-3">Sex: {item.sex} <span className="weight-items">Weight : {item.weight}</span></li>
                                                            <li className="mt-3">Breed: {item.breed}</li>
                                                        </ul>

                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                       <ul className="body-list-items-amount col-3 border-end border-secondary border-start m-auto p-2 ">
                                        <li className="product-head">Product Amount </li>
                                        <li>Rs {productPrice}</li>
                                        <li className="product-head mt-2">Delivery Amount </li>
                                        <li>Rs 2000.00</li>
                                    </ul>
                                 
                                    <ul className="body-list-items-total m-auto col-3 p-2">
                                        <li className="product-head">Total Amount</li>
                                        <li className="quantity-style">Rs {productPrice + 2000}.00</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mb-3 text-center">
                                <button className="btn btn-success continuebutton" onClick={() =>{updateprice(productPrice);}}>Proceed Payment</button>
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
