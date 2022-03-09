import React from 'react'
import './asset/paymentMethod.scss'
import axios from "axios"
import { connect } from "react-redux"

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
      // err
      card_numberErr: '',
      cvv_numberErr: '',
      month_yearErr: '',
      cost: ""

    }
  }
  // componentDidMount() {
  //   console.log("start");
  //   axios.get("http://localhost:3005/product/cost/1")
  //     .then((res) => {
  //       console.log(res.data);
  //       this.setState({ cost: res.data })
  //     })
  //     .catch(err => {
  //       console.log("error: ", err);
  //     })
  //   console.log("end");
  // }
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
    let { month, year, card_number, cvv_number } = this.state;

    console.log("carddetails", { month, year, card_number, cvv_number })
    this.props.setCardDetails({ month, year, card_number, cvv_number })
    let cardDetails = {

      "cardDetails": {
        "cardNumber": card_number,
        "Month": month,
        "year": year,
        "CVV": cvv_number
      }
    }

    axios.post("http://localhost:3005/card/details", cardDetails)
      .then((res) => {
        console.log(res.data);
        this.setState({ cost: res.data })
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

    return (
      <div >
        <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} data-bs-backdrop="static" data-bs-toggle="modal">
          <div className="modal-dialog modal-dialog-centered ">
            <div className="modal-content">
              <div className="modal-body ">
                <div className='row'>
                  <h5 className="modal-title col-11" id="exampleModalToggleLabel">Payment Method</h5>
                  <button type="button" className="btn-close col-1" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <p>Choose your preferred payment<br /> method to continue</p>
                <section >
                  <input type="radio" name="payment"
                    className="form-check-input" id="Ravepay" value="Ravepay" onChange={this.changeHandler} checked={this.state.payment == 'Ravepay'}></input>
                  <label htmlFor="Ravepay">Pay With Ravepay</label><br></br>
                  <input type="radio" name="payment"
                    className="form-check-input" id="Pay_On_Delivery" value="Pay_On_Delivery" onChange={this.changeHandler} checked={this.state.payment == 'Pay_On_Delivery'} ></input>
                  <label htmlFor="Pay_On_Delivery">Pay On Delivery</label>
                </section>
                <div className="text-center">
                  <button className="btn btn-success" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Make Payment</button><br></br>
                </div>
              </div>
            </div>
          </div>
        </div>

        {
          this.state.payment == "Ravepay" && <div> <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
            <div className="modal-dialog modal-sm modal-dialog-centered">
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
                      <button onClick={(e) => this.submitHandler(e)} className="btn button-large btn-success mt-3" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" disabled={!(this.state.card_numberErr == '' && this.state.cvv_numberErr == '' && this.state.card_number !== '' && this.state.cvv_number !== '')}><img className="lock-icon" src={require("./asset/img/lock.png")}></img>Pay #200.00</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
            <div className="modal fade" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
              <div className="modal-dialog modal-dialog-centered modal-sm ">
                <div className="modal-content">
                  <div className="modal-body text-center">
                    <div className="Successfully_Placed_box">
                      <h3>&#10003;</h3>
                    </div>
                    <h5 className='Successfully_Placed'>Payment succesful</h5>
                    {/* <button className="btn btn-success" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Continue Shopping</button> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        }


        {
          this.state.payment == "Pay_On_Delivery" && <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
            <div className="modal-dialog modal-dialog-centered ">
              <div className="modal-content">
                <div className="modal-body text-center">
                  <div className="Successfully_Placed_box">
                    <h3>&#10003;</h3>
                  </div>
                  <h5 className='Successfully_Placed'>Order has been<br />Successfully Placed</h5>

                  <button className="btn btn-success" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Continue Shopping</button>
                </div>
              </div>
            </div>
          </div>
        }
        <a className="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Proceed Payment</a>
        <h1>{this.state.payment}</h1>
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