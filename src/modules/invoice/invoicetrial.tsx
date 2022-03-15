import "./invoice1.scss"
import { useState } from "react"
import { connect } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios"
import upArrow from "./assets/img/uptriangle.png";
import downArrow from "./assets/img/downtriangle.png";

function invoiceToggle(e: any) {



    if (e.target.src == upArrow) {
        e.target.src = downArrow;
    }
    else
        e.target.src = upArrow;
    // let image: any = document.querySelector(index)
    //     console.log("photo", image)
    //     console.log(image.src) 
    //     if (image.src == upArrow) {
    //         image.src = downArrow;
    //         console.log("downarrow", image.src == downArrow)
    //     }
    //     else
    //         image.src = upArrow;
}
function Invoice1(props: any) {
    const [invoiceFlag, setinvoiceFlag] = useState(true);
    let [invoice, setInvoice] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:3005/orders")
            .then((res) => {
                let res_data = res.data
                // console.log("data", res_data[0]["orders"][0]);
                console.log(res_data);

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
                !props.user &&
                <p className='text-danger text-center'>please login to your account</p>
            }
            {props.user && <div>
                < section className="invoiceSection">
                    <header >
                        <div className="headingText ">
                            <h2>Invoice</h2>
                        </div>
                    </header>
                    <main className="invoice-body">
                        <h3 className="invoice-heading invoice-border mb-0">Product Details</h3>
                        {
                            invoice.map((data, ind) => {
                                // console.log("dat", data);
                                let orders: any = data["orders"];
                                console.log(data["orderId"]);
                                console.log(data["date"]);

                                console.log(orders);
                                let index = "#ind" + ind
                                // let index1 = "ind" + ind
                                return (
                                    <div>
                                        <div data-bs-toggle="collapse" data-bs-target={index} aria-expanded="false" aria-controls="collapseExample" key={ind} >
                                            <p className="invoice-id invoice-border">ID - {data["orderId"]}<img className="text-end" id={`${ind}`} onClick={(e) => invoiceToggle(e)} src={upArrow}></img></p>
                                            <div className=" invoice-border table collapse mb-0" id={index.slice(1)}>
                                                <table className="mt-4" key={ind}>
                                                    <thead>
                                                        <tr className="Hrow">
                                                            <th className="dbl">Type</th>
                                                            <th className="dbl">Sex</th>
                                                            <th className="dbl">Date</th>
                                                            <th className="dbl">Quantity</th>
                                                            <th className="dbl">Weight</th>
                                                            <th className="dbl">
                                                                <span className="first-line">Product</span>
                                                                <span>Amount</span>
                                                            </th >
                                                            <th className="dbl">
                                                                <span className="first-line">Delivery</span>
                                                                <span>Amount</span>
                                                            </th >
                                                            <th className="dbl">
                                                                <span className="first-line">Total</span>
                                                                <span>Amount</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        orders.map((item: any, ind: any) => {
                                                            console.log("item", item);
                                                            console.log("items", item["type"]);

                                                            // let index = "#ind" + ind
                                                            // let index1 = "ind" + ind

                                                            return (
                                                                <tbody>
                                                                    <tr className="Brow">
                                                                        <td>{item["type"]}</td>
                                                                        <td className="dbl">{item["sex"]}</td>
                                                                        <td>{data["date"]}</td>
                                                                        <td>{item["quantity"]}</td>
                                                                        <td>{item["weight"]}Kg</td>
                                                                        <td>
                                                                            <span className="first-line">&#8377; {item["price"]}</span>
                                                                            <span>0.00</span>
                                                                        </td>
                                                                        <td className="dbl ">&#8377; {item["delprice"]}.00</td>
                                                                        <td>
                                                                            <span className="first-line">&#8377;{item["totalprice"]}</span>
                                                                            <span>0.00</span>
                                                                        </td>
                                                                    </tr>
                                                                </tbody>


                                                            )

                                                        })
                                                    }
                                                </table>
                                                <div className="head">
                                                    <h3>
                                                        <span className="first-line">Payment Information</span>
                                                        <span><i>Via </i></span>
                                                        {/* <span><i>Via {data["invoicedata"]["payment"]}</i></span> */}
                                                    </h3>
                                                    <div className="row mb-0">
                                                        <div className="col-5 inv-bd-lp text-end p-0">
                                                            <p>Bank Name:</p>
                                                            <p>Account Number:</p>
                                                            <p>Account Name:</p>
                                                        </div>
                                                        <div className="col-1 inv-vr p-0"></div>
                                                        <div className="col-5  col-sm-3 inv-bd-lp text-start p-0">
                                                            <p>NA</p>
                                                            <p>NA</p>
                                                            <p>NA</p>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        </div>

                                    </div>

                                )

                            })

                        }
                    </main>
                    {/* <main className="invoice-body">
                        <h3 className="invoice-heading invoice-border mb-0">Product Details</h3>
                        {
                            // console.log(data["invoicedata"]["type"])
                            invoice.map((data, ind) => {
                                let index = "#ind" + ind
                                let index1 = "ind" + ind
                                return (
                                    <div data-bs-toggle="collapse" data-bs-target={index} aria-expanded="false" aria-controls="collapseExample" key={ind} >
                                        <p className="invoice-id invoice-border">ID - {data["invoicedata"]["orderId"]}<img className="text-end" id={`${ind}`} onClick={(e) => invoiceToggle(e)} src={upArrow}></img></p>
                                        <div className=" invoice-border table collapse mb-0" id={index.slice(1)}>
                                            <div>
                                                <table className="mt-4">
                                                    <thead>
                                                        <tr className="Hrow">
                                                            <th className="dbl">Type</th>
                                                            <th className="dbl">Sex</th>
                                                            <th className="dbl">Date</th>
                                                            <th className="dbl">Quantity</th>
                                                            <th className="dbl">Weight</th>
                                                            <th className="dbl">
                                                                <span className="first-line">Product</span>
                                                                <span>Amount</span>
                                                            </th >
                                                            <th className="dbl">
                                                                <span className="first-line">Delivery</span>
                                                                <span>Amount</span>
                                                            </th >
                                                            <th className="dbl">
                                                                <span className="first-line">Total</span>
                                                                <span>Amount</span>
                                                            </th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                        <tr className="Brow">
                                                            <td>{data["invoicedata"]["type"]}</td>
                                                            <td className="dbl">{data["invoicedata"]["sex"]}</td>
                                                            <td>{data["invoicedata"]["date"]}</td>
                                                            <td>{data["invoicedata"]["quantity"]}</td>
                                                            <td>{data["invoicedata"]["weight"]}Kg</td>
                                                            <td>
                                                                <span className="first-line">&#8377; {data["invoicedata"]["productAmount"]}</span>
                                                                <span>0.00</span>
                                                            </td>
                                                            <td className="dbl ">&#8377; {data["invoicedata"]["deliveryAmount"]}.00</td>
                                                            <td>
                                                                <span className="first-line">&#8377;{data["invoicedata"]["totalAmount"]}</span>
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
                                                <div className="row mb-0">
                                                    <div className="col-5 inv-bd-lp text-end p-0">
                                                        <p>Bank Name:</p>
                                                        <p>Account Number:</p>
                                                        <p>Account Name:</p>
                                                    </div>
                                                    <div className="col-1 inv-vr p-0"></div>
                                                    <div className="col-5  col-sm-3 inv-bd-lp text-start p-0">
                                                        <p>NA</p>
                                                        <p>NA</p>
                                                        <p>NA</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </main> */}
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