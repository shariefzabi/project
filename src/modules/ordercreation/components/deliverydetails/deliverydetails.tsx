import React, { useState } from "react";
import './deliverydetails.scss'
import { connect } from "react-redux";
import axios from 'axios'
// import PaymentMethod2 from '../../paymentMethod/paymentMethod'
import Orderdisplay from "../orderdisplay/orderdisplay";

class Deliverydetails extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            deliveryloc: " ",
            deliveryperiod: " ",
            deliverymode: " ",
            cartproducts : {cartproducts:this.props.cartProducts,email : this.props.user.email,token:localStorage.getItem("token")},
            deliverylocerr: " ",
            deliveryperioderr: " ",
            deliverymodeErr: " ",
            orderdisplayFlag:true,
            orderDetails:props.orders,
            Id:0
        }
    } 
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
        console.log("this.props.quantityarr",this.props.quantityarr);
    }
    submitHandler = (e: any, deliveryDetails: any) => {
        e.preventDefault();
        // console.log("cartProductssss",this.state.cartproducts);
        axios.post("http://localhost:3005/orders/orderdetails",{...this.state.cartproducts,deliveryDetails})
        .then((res)=>{console.log("postresponse",res.data)
        this.props.createOrder(res.data);
        this.setState({orderdisplayFlag:false})
            })
        .catch((err)=>console.log("posterror",err));
    }
    validations = (e: any) => {
        let name = e.target.name;
        let value = e.target.value;
        console.log(name, value);
        if (name === 'deliveryloc') {
            let deliverylocerr = '';
            if (value == undefined || value.length === 0) {
                deliverylocerr = "Please enter the delivery location."
                e.target.classList.add("field-error")
                this.setState({ deliverylocerr })
            } else {
                deliverylocerr = ''
                e.target.classList.remove("field-error")
                this.setState({ deliverylocerr })
            }
        } else if (name === 'deliveryperiod') {
            let deliveryperioderr = '';
            if (value == undefined || value.length === 0) {
                deliveryperioderr = "Please enter the delivery period."
                e.target.classList.add("field-error")
                this.setState({ deliveryperioderr })
            } else {
                deliveryperioderr = ''
                e.target.classList.remove("field-error")
                this.setState({ deliveryperioderr })
            }
        } else if (name === 'deliverymode') {
            let deliverymodeErr = '';
            if (value == undefined || value.length === 0) {
                deliverymodeErr = "Please select delivery mode."
                e.target.classList.add("field-error")
                console.log(deliverymodeErr);

                this.setState({ deliverymodeErr })
            } else {
                deliverymodeErr = ''
                e.target.classList.remove("field-error")
                this.setState({ deliverymodeErr })
            }
        }
    }
    render() {
        let { deliveryloc, deliveryperiod, deliverymode,orderdisplayFlag} = this.state;
        return (
            < >
            {orderdisplayFlag &&
            <div className='order-modal'>
            <div className='deliverydetailspage'>
                <div className="">
                    <div className="text-center popupheading">
                        <p>You are one step closer to buying your lifestock</p>
                    </div>
                    <div className="form-paragraph">
                        <p>Fill in the required information</p>
                    </div>
                    <form className='text-start' onSubmit={(e) => this.submitHandler(e, { deliveryloc, deliveryperiod, deliverymode })}>
                        <div className="mb-3">
                            <label htmlFor="Delivery Location" className="col-form-label">Delivery Location</label>
                            <input type="text" className="form-control" id="Delivery Location"  placeholder="Delivery Location" name="deliveryloc" onChange={this.changeHandler}
                                onBlur={this.validations} required/>
                            <p className="text-danger err">{this.state.deliverylocerr}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Delivery Period" className="col-form-label">Delivery Period</label>
                            <input type="text" className="form-control" id="Delivery Period" placeholder="Delivery Period" name="deliveryperiod" onChange={this.changeHandler} onBlur={this.validations} required/>
                            <p className="text-danger err">{this.state.deliveryperioderr}</p>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="Agent" className="col-form-label select-label">Delivery Mode</label>
                            <select className="form-select" name="deliverymode" required value={this.state.deliverymode} aria-label="Default select example" onBlur={this.validations} onChange={(e) => { this.changeHandler(e); this.validations(e) }}>
                                <option hidden value="" style={{color:"#dcdcdc"}}>Delivery Mode</option>
                                <option value="Prime">Prime</option>
                                <option value="Non-Prime">Non-Prime</option>
                            </select>
                            <p className="text-danger err">{this.state.deliverymodeErr}</p>
                        </div>
                        <div className="mb-3 text-center">
                            <button type="submit" role="button" className="btn btn-success continuebutton">Continue</button>
                        </div>
                    </form>
                </div>
            </div>   
            </div>
            }
            {!orderdisplayFlag  &&
                <Orderdisplay></Orderdisplay>
            }
            </>  
        )
    }
}
const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        createOrder: (deliveryDetails: any) => dispatch({ type: 'store_order', payload:deliveryDetails })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deliverydetails);

