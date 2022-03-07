import React, { useState } from "react";
import './deliverydetails.scss'
import { connect } from "react-redux";
import axios from 'axios'
import PaymentMethod2 from '../../paymentMethod/paymentMethod'
import Orderdisplay from "../orderdisplay/orderdisplay";

class Deliverydetails extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            deliveryloc: " ",
            deliveryperiod: " ",
            deliverymode: " ",
            deliverylocerr: " ",
            deliveryperioderr: " ",
            deliverymodeErr: " ",
            orderdisplayFlag:true
        }
    }
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
        // console.log(e.target.value);
    }
    submitHandler = (e: any, deliveryDetails: any) => {
        e.preventDefault();
        console.log("props in createorder", this.props);
        console.log("delivery details", deliveryDetails);
        
        // let orderDetails1={...deliveryDetails,...this.props.products}
        // this.setState({orderDetails1});
        
        // console.log("hello",this.state.orderDetails1);
        axios.post("http://localhost:3005/orders/orderdetails",this.props.orders)
        .then((res)=>console.log("postresponse",res.data))
        .catch((err)=>console.log("posterror",err));
        this.props.createOrder(deliveryDetails);
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
        let { deliveryloc, deliveryperiod, deliverymode,orderdisplayFlag } = this.state;
        return (
            < >
            {orderdisplayFlag &&
            <div className='deliverydetailspage'>
                <div className="modal-body">
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
                                <option hidden value="">Delivery Mode</option>
                                <option value="Offline">Offline</option>
                                <option value="Online">Online</option>
                            </select>
                            <p className="text-danger err">{this.state.deliverymodeErr}</p>
                        </div>
                        
                        
                    </form>
                    <div className="mb-3 text-center">
                            <button className="btn btn-success continuebutton" data-bs-target="#exampleModalPayment" onClick={()=>this.setState({orderdisplayFlag:false})}>Continue</button>
                        </div>
                </div>
                
            </div>
             }
             {!orderdisplayFlag&&
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
        createOrder: (deliveryDetails: any) => dispatch({ type: 'store_order', deliveryDetails })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Deliverydetails);

