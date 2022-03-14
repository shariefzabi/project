import React from 'react'
import './asset/paymentMethod.scss'
import axios from "axios"
import { connect } from "react-redux"
import { Link } from "react-router-dom";

class PaymentMethod extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      payment: 'Ravepay',
      card_number: '',
      cvv_number: '',
      month_year: '',
      month: "",
      year: "",
      date: "",
      orderId: 0,
      // err
      card_numberErr: '',
      cvv_numberErr: '',
      month_yearErr: '',
      totalprice:0,
      cost: "",
      flag1: true,
      flag2: true,
      flag3: true

    }
  }
  componentDidMount() {
    axios.get("http://localhost:3005/orders/orderdetails")
      .then((result) => {
        console.log("productdetails", result.data);
        let { orderId, date } = result.data[0]
        let { totalprice } = result.data[0].productdetails

        console.log(orderId)
        this.setState({ orderId, date, totalprice})
        console.log("stATE ORDERID", this.state.orderId, typeof (this.state.orderId),this.state.date)
      })
      .catch(err => {
        console.log("error: ", err);
      })

  }
  changeHandler = (event: any) => {
    // let { payment } = this.state;
    this.setState({ [event.target.name]: event.target.value });
    // this.setState({ payment: event.target.value })
  }
  validation = (e: any) => {
    // card NUmber
    if (e.target.name === 'card_number') {
      let card_number = e.target.value;
      card_number = card_number - 0
      let card_numberErr = '';
      if (card_number == undefined || card_number.length === 0) {
        card_numberErr = "Please enter the card number."
        this.setState({ card_numberErr })
      } else {
        let re = /^[0-9]{12}$/;
        if (!re.test(card_number)) {
          let card_numberErr = "Invalid card number"
          this.setState({ card_numberErr })
        } else {
          card_numberErr = '';
          // e.target.classList.remove("field-error")
          this.setState({ card_numberErr, card_number })
        }
      }
    }
    // Month & year
    if (e.target.name === 'month_year') {
      let month_year = e.target.value;
      let month_yearErr = '';
      // [12,22]
      let [month, year] = e.target.value.split("/");
      month = month - 0;
      year = year - 0;
      console.log("month", month_year);
      console.log('year', year);
      if (month_year == undefined || month_year.length === 0) {
        month_yearErr = "Please enter the Month and Year."
        this.setState({ month_yearErr })
      }

      else {

        // let re1 = /^[0-9]{1,12}$/;
        // let re2 = /^[0-9]{22,50}$/;
        if (!((month >= 1 && month <= 12) && (year >= 22 && year <= 50))) {
          month_yearErr = "Invalid Month and Year (MM/YY)"
          this.setState({ month_yearErr })
        } else {
          month_yearErr = '';
          // e.target.classList.remove("field-error")
          this.setState({ month_yearErr, month, year })
        }
      }
    }
    // CVV number
    if (e.target.name === 'cvv_number') {
      let cvv_number = e.target.value;
      cvv_number = cvv_number - 0
      let cvv_numberErr = '';
      if (cvv_number == undefined || cvv_number.length === 0) {
        cvv_numberErr = "Please enter the card CVV."
        this.setState({ cvv_numberErr })
      } else {
        let re = /^[0-9]{3}$/;
        if (!re.test(cvv_number)) {
          let cvv_numberErr = "Invalid card CVV"
          this.setState({ cvv_numberErr })
        } else {
          cvv_numberErr = '';
          // e.target.classList.remove("field-error")
          this.setState({ cvv_numberErr, cvv_number })
        }
      }
    }

  }
  submitHandler = (e: any) => {
    e.preventDefault()



    this.setState({ flag2: false })
    let { month, year, payment, card_number, cvv_number, orderId, date } = this.state;

    console.log("carddetails", { month, year, card_number, cvv_number })

    let { breed, quantity, sex, type, weight, price, delprice,totalprice } = this.props.redux.orders.productdetails;

    // let product_amount = this.props.redux.orders.productdetails.quantity * this.props.redux.orders.productdetails.weight * 50000;
    // let deliveryAmount = 5505;
    // let totalAmount = 578;
    // let orderId = 64875;

    // let product_amount = this.props.redux.orders.productdetails.quantity * this.props.redux.orders.productdetails.weight * 50000;
    // let deliveryAmount = this.props.redux.orders.productdetails.quantity * this.props.redux.orders.productdetails.weight * 10000;
    // let totalAmount = this.props.redux.orders.productdetails.quantity * this.props.redux.orders.productdetails.weight * 50000 + 2000;
    this.props.setCardDetails({ month, year, card_number, cvv_number })
    console.log("originalInvoice", this.state.orderId)
    let invoicedata = {

      "invoicedata": {
        "orderId": orderId,
        'payment': payment,
        "cardNumber": card_number,
        "Month": month,
        "year": year,
        "CVV": cvv_number,
        "type": type,
        "breed": breed,
        "quantity": quantity,
        "sex": sex,
        "weight": weight,
        "productAmount": price,
        "deliveryAmount": delprice,
        "totalAmount": totalprice,
        "date": date
      }

    }

    axios.post("http://localhost:3005/card/details", invoicedata)
      .then((result) => {
        console.log("invoicedata", result.data);
        // this.setState({ cost: res.data })
      })
      .catch(err => {
        console.log("error: ", err);
      })

    this.setState({
      card_number: '',
      cvv_number: '',
      month_year: ''
    })

  }

  render() {
    // console.log(this.props.redux.orders.productdetails);
    // let { breed, quantity, sex, type, weight } = this.props.redux.orders.productdetails;
    // console.log("breed", breed);


    return (
      <div className='paymentmethod'>
        {/* <div className="modal fade" id="exampleModalPayment" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" data-bs-toggle="modal" tabIndex={-1} data-bs-backdrop="static"> */}
        {this.state.flag1 &&
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-body ">

                <h5 className="modal-title " id="exampleModalToggleLabel">Payment Method</h5>
                {/* <button type="button" className="btn-close btn-cancele col-1" data-bs-dismiss="modal" aria-label="Close"></button> */}

                <p>Choose your preferred payment<br /> method to continue</p>
                <section >
                  <input type="radio" name="payment"
                    className="form-check-input " id="Ravepay" value="Ravepay" onChange={this.changeHandler} checked={this.state.payment == 'Ravepay'}></input>
                  <label htmlFor="Ravepay" className='payment_label'>Pay With Ravepay</label><br></br>
                  <input type="radio" name="payment"
                    className="form-check-input" id="Pay_On_Delivery" value="Pay_On_Delivery" onChange={this.changeHandler} checked={this.state.payment == 'Pay_On_Delivery'} ></input>
                  <label htmlFor="Pay_On_Delivery" className='payment_label'>Pay On Delivery</label>
                </section>
                <div className="text-center">
                  <button className="btn btn-success payment_button" onClick={() => this.setState({ flag1: false })}>Make Payment</button><br></br>
                </div>
              </div>
            </div>
          </div>
        }

        {!this.state.flag1 &&
          <div>
            {this.state.payment == "Ravepay" &&
              <div>

                <div className="modal-dialog modal-sm modal-dialog-centered">
                  {this.state.flag2 &&
                    <div className="modal-content">
                      <div className="text-center mt-3 border-bottom border-2">
                        <p className="form-text  text-center" id="exampleModalToggleLabel">Card</p>
                        {/* <p className="form-text pe-4 me-4 text-center" id="exampleModalToggleLabel">Account</p> */}
                        {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                      </div>

                      <div className="modal-body ">
                        <p className="form-text ps-1 text-start m-0">Fill in your data</p>

                        <form  >
                          {/* card Number */}
                          <img className="placeholder-img" src={require("./asset/img/card.png")} alt=""></img>
                          <input className=" form-control " type="text" value={this.state.card_number} name="card_number" placeholder="Card number" onChange={this.changeHandler} onBlur={this.validation} />
                          <p className="text-danger text-start m-0">{this.state.card_numberErr}</p>
                          {/* Month year */}
                          <img className="placeholder-img" src={require("./asset/img/calendar.png")} alt=""></img>
                          <input className="form-control " type="text" value={this.state.month_year} placeholder="MM/YY" name="month_year" onChange={this.changeHandler} onBlur={this.validation} />
                          <p className="text-danger text-start m-0">{this.state.month_yearErr}</p>
                          {/* CVV number */}
                          <img className="placeholder-img" src={require("./asset/img/CVV.png")} alt=""></img>
                          <input className="form-control " type="text" value={this.state.cvv_number} name="cvv_number" placeholder="CVV" onChange={this.changeHandler} onBlur={this.validation} />
                          <p className="text-danger text-start m-0">{this.state.cvv_numberErr}</p>
                          <div className="text-center mb-3 mt-4 ">
                            <button onClick={(e) => { this.submitHandler(e) }} className="btn button-large btn-success mt-3" disabled={!(this.state.card_numberErr == '' && this.state.cvv_numberErr == '' && this.state.card_number !== '' && this.state.cvv_number !== '')}><img className="lock-icon" src={require("./asset/img/lock.png")}></img>{`Pay ${this.state.totalprice}`}</button>
                            {/* <button onClick={(e) => this.submitHandler(e)} className="btn button-large btn-success mt-3" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" ><img className="lock-icon" src={require("./asset/img/lock.png")}></img>Pay #200.00</button> */}
                          </div>
                        </form>
                      </div>
                    </div>
                  }
                  {!this.state.flag2 &&
                    <div className="modal-content" data-bs-toggle="modal">
                      <div className="modal-body text-center">
                        <div className="Successfully_Placed_box">
                          <h3>&#10003;</h3>
                        </div>
                        <h5 className='Successfully_Placed'>Payment succesful</h5>
                        {/* <button className="btn btn-success" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Continue Shopping</button> */}
                      </div>
                    </div>
                  }
                </div>
              </div>
            }
            {this.state.payment == "Pay_On_Delivery" &&
              //  <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
              <div className="modal-dialog modal-dialog-centered " data-bs-toggle="modal">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <div className="Successfully_Placed_box">
                      <h3>&#10003;</h3>
                    </div>
                    <h5 className='Successfully_Placed'>Order has been<br />Successfully Placed</h5>
                    <Link to="/products">
                      <button className="btn btn-success" data-bs-toggle="modal">Continue Shopping</button>
                    </Link>
                    {/* <button className="btn btn-success" data-bs-toggle="modal"><Link to='/products'>Continue Shopping</Link></button> */}
                  </div>
                </div>
              </div>
              //  </div>
            }
          </div>
        }


        {/* {this.state.payment == "Pay_On_Delivery" &&  */}
        {/* <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <div className="Successfully_Placed_box">
                    <h3>&#10003;</h3>
                  </div>
                  <h5 className='Successfully_Placed'>Order has been<br />Successfully Placed</h5>
                  {/* <Link to="/products">
                    <button className="btn btn-success" data-bs-toggle="modal">Continue Shopping</button>
                  </Link> */}
        {/* <button className="btn btn-success" data-bs-toggle="modal"><Link to='/products'>Continue Shopping</Link></button>
                </div>
              </div>
            </div>
          </div> */}
        {/* } */}
        {/* <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Proceed Payment</a>
        <h1>{this.state.payment}</h1> */}
      </div>
    )
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);

  return {
    redux: state
  }
}

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setCardDetails: (cardDetails: any) => dispatch({ type: 'storeCardDetails', payload: cardDetails })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PaymentMethod);