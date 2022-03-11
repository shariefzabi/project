import "./invoice1.scss"
import { useState } from "react"
import { connect } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios"
import downArrow from "./assets/img/uptriangle.png";
import upArrow from "./assets/img/downtriangle.png";

function invoiceToggle(e: any) {

    if (e.target.src == upArrow) {
        e.target.src = downArrow;
    }
    else
        e.target.src = upArrow;
}
function Invoice1(props: any) {
    const [invoiceFlag, setinvoiceFlag] = useState(true);
    let [invoice, setInvoice] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/invoicedetails/details")
            .then((res) => {
                let res_data = res.data
                setInvoice(res_data)
            })
            .catch(err => {
                console.log("error: ", err);
            })
        if (props.user == null) {
            setinvoiceFlag(false);
        }
    }, [])
    return (
        <main id="mainContent">
            {
                props.user === null &&
                <p className='text-danger text-center'>please login to your account</p>
            }
            {invoiceFlag && <div>
                < section className="invoiceSection">
                    <header >
                        <div className="headingText ">
                            <h2>Invoice</h2>
                        </div>
                    </header>
                    <main className="invoice-body">
                        <h3 className="invoice-heading">Product Details</h3>
                        <hr className="hr-line" />
                        {
                            // console.log(data["invoicedata"]["type"])
                            invoice.map((data, ind) => {
                                let index = "#ind" + ind
                                return (
                                    <div key={ind}>
                                        <p className="invoice-id">ID - {data["invoicedata"]["orderId"]}<img className="text-end" onClick={(e) => invoiceToggle(e)} data-bs-toggle="collapse" data-bs-target={index} aria-expanded="false" aria-controls="collapseExample" src={upArrow}></img></p>
                                        <div className="table collapse" id={index.slice(1)}>
                                            <div>
                                                <table>
                                                    <thead>
                                                        <tr className="Hrow">
                                                            <th>Type</th>
                                                            <th className="dbl">Sex</th>
                                                            <th>Date</th>
                                                            <th>Quantity</th>
                                                            <th>Weight</th>
                                                            <th>
                                                                <span className="first-line">Product</span>
                                                                <span>Amount</span>
                                                            </th>
                                                            <th className="dbl">
                                                                <span className="first-line">Delivery</span>
                                                                <span>Amount</span>
                                                            </th>
                                                            <th >
                                                                <span className="first-line">Total</span>
                                                                <span>Amount</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="Brow">
                                                            <td>{data["invoicedata"]["type"]}</td>
                                                            <td className="dbl">{data["invoicedata"]["sex"]}</td>
                                                            <td>14/02/2019</td>
                                                            <td>{data["invoicedata"]["quantity"]}</td>
                                                            <td>{data["invoicedata"]["weight"]}</td>
                                                            <td>
                                                                <span className="first-line">N {data["invoicedata"]["productAmount"]}</span>
                                                                <span>0.00</span>
                                                            </td>
                                                            <td className="dbl ">N {data["invoicedata"]["deliveryAmount"]}.00</td>
                                                            <td>
                                                                <span className="first-line">N {data["invoicedata"]["totalAmount"]}</span>
                                                                <span>0.00</span>
                                                            </td>
                                                        </tr>
                                                    </tbody>
                                                </table>
                                            </div>
                                            <div className="head">
                                                <h3>
                                                    <span className="first-line">Payment Information</span>
                                                    <span><i>Via {data["invoicedata"]["payment"]}</i></span>
                                                </h3>
                                                <div className="row m-0">
                                                    <div className="col-5 inv-bd-lp text-end p-0">
                                                        <p>Bank Name:</p>
                                                        <p>Account Number:</p>
                                                        <p>Account Name:</p>
                                                    </div>
                                                    <div className="col-1 inv-vr p-0"></div>
                                                    <div className="col-5  col-sm-3 inv-bd-lp text-start p-0">
                                                        <p>First Bank</p>
                                                        <p>{data["invoicedata"]["cardNumber"]}</p>
                                                        <p>Olubodun Akinleye</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <hr className="hr-line" />
                                    </div>
                                )
                            })
                        }
                    </main>
                </section>
            </div>
            }
        </main >
    )
}
const mapStateToProps = (state: any) => {
    console.log(state);

    return {
        ...state
    }
}
export default connect(mapStateToProps)(Invoice1);