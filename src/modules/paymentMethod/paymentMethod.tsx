import React, { useState } from 'react'
import './asset/paymentMethod.css'

export default function PaymentMethod() {
  const [payment_Method, setpayment_Method] = useState({
    payment: 'Ravepay'
  })
  const handleChange = (event:any) => {
    const name = event.target.name;
    console.log(name);
    const value = event.target.value;
    console.log(value);
    console.log(payment_Method);
    setpayment_Method({
      ...payment_Method,
      payment: value
    })
  }
  return (
    <div >
      <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1} data-bs-backdrop="static">
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
                  className="form-check-input" id="Ravepay" value="Ravepay" onChange={handleChange} checked={payment_Method.payment == 'Ravepay'}></input>
                <label htmlFor="Ravepay">Pay With Ravepay</label><br></br>
                <input type="radio" name="payment"
                  className="form-check-input" id="Pay_On_Delivery" value="Pay_On_Delivery" onChange={handleChange} checked={payment_Method.payment == 'Pay_On_Delivery'} ></input>
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
        payment_Method.payment == "Ravepay" && <div> <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
          <div className="modal-dialog modal-sm modal-dialog-centered">
            <div className="modal-content">
              <div className="text-center mt-3 border-bottom border-2">
                <p className="form-text  text-center" id="exampleModalToggleLabel">Card</p>
                {/* <p className="form-text pe-4 me-4 text-center" id="exampleModalToggleLabel">Account</p> */}
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
              </div>

              <div className="modal-body ">
                <p className="form-text ps-1">Fill in your data</p>
                <input className=" form-control  mt-1" type="text" placeholder="Card number" />
                <img className="placeholder-img" src={require("./asset/img/card.png")} alt=""></img>
                <input className="form-control mt-1" type="text" placeholder="MM/YY" />
                <img className="placeholder-img" src={require("./asset/img/calendar.png")} alt=""></img>
                <input className="form-control mt-1" type="text" placeholder="CVV" />
                <img className="placeholder-img" src={require("./asset/img/CVV.png")} alt=""></img>

              </div>
              <div className="text-center mb-3 mt-4 ">
                <button className="btn button-large btn-success mt-3" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal"><img className="lock-icon" src={require("./asset/img/lock.png")}></img>Pay #200.00</button>

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
        payment_Method.payment == "Pay_On_Delivery" && <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex={-1}>
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
      <h1>{payment_Method.payment}</h1>
    </div>
  )
}