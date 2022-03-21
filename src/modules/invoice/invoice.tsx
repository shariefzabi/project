import "./invoice.scss"
import { useState } from "react"
import { connect } from "react-redux";
import React, { useEffect } from "react";
import axios from "axios"
import upArrow from "./assets/img/uptriangle.png";
import downArrow from "./assets/img/downtriangle.png";
import Sidebar from "../sidebar/sidebar";



function Invoice(props: any) {

    const [invoiceFlag, setinvoiceFlag] = useState(true);
    let [invoice, setInvoice] = useState([]);
    const [userDetails, setUserDetails] = useState(
        {
            email: "",
        })

    let useremail = userDetails.email;
    // console.log("email", useremail);
    useEffect(() => {
        const getToken = () => localStorage.getItem("token");
        axios.get("http://localhost:3005/users/" + getToken())
            .then(res => {
                if (res.data != "null") {
                    props.setUser(res.data)
                    let { fullName, email } = res.data
                    setUserDetails({ ...userDetails, email })
                    if (res.data?.phone != undefined) {
                        setUserDetails(res.data)
                    }
                }
            })
            .catch(err => console.log("No previous user found")
            )
        if (props.user == null) {
            setinvoiceFlag(false);
        }


    }, [])
    useEffect(() => {
        axios.get("http://localhost:3005/invoicedetails/" + useremail)
            .then((res) => {
                let res_data = res.data
                setInvoice(res_data)
            })
            .catch(err => {
                console.log("error: ", err);
            })
    }, [useremail])
    function invoiceToggle(e: any) {
        console.log(e.target.childNodes[2])
        
        if (e.target.childNodes[2].src == upArrow) {
            e.target.childNodes[2].src = downArrow;
        }
        else
            e.target.childNodes[2].src = upArrow;
    }
    // console.log(window.innerWidth);

    return (
        <main className="row" id="mainContent">
            {
                !props.user &&
                <p className='text-danger text-center'>please login to your account</p>
            }
            <div className="col-0 col-sm-1 col-xl-1 col-md-1 col-lg-1">
                <Sidebar></Sidebar>
            </div>
            {props.user && <div className="col-12 col-sm-11 col-lg-11 col-xl-11 col-md-11">
                < section className="invoiceSection">
                    <header >
                        <div className="headingText ">
                            <h2>Invoice</h2>
                        </div>
                    </header>
                    <main className="invoice-body">
                        <h3 className="invoice-heading invoice-border mb-0">Product Details</h3>
                        {
                            invoice.map((data: any, ind) => {
                                // console.log("invoicxe data", data)





                                let cartproducts: any = data["cartproducts"];
                                let index = "#ind" + ind;
                                let totalAmmount = 0;
                                return (
                                    <div key={ind} >
                                        <p data-bs-toggle="collapse" data-bs-target={index} aria-expanded="false" aria-controls="collapseExample" onClick={(e) => invoiceToggle(e)} className="invoice-id invoice-border">ID - {data["invoiceId"]}<img  className="text-end" id={`${ind}`} src={upArrow}></img></p>
                                        <div className=" invoice-border table collapse mb-0" id={index.slice(1)}>
                                            <table className="mt-4" key={ind}>
                                                <thead>
                                                    <tr className="Hrow">
                                                        <th className="dbl">Type</th>
                                                        <th className="dbl ">Sex</th>
                                                        <th className="dbl">Date</th>
                                                        <th className="dbl">Quantity</th>
                                                        <th className="dbl">Weight</th>
                                                        <th className="dbl">
                                                            <span className="first-line">Product</span>
                                                            <span>Amount</span>
                                                        </th >
                                                        <th className="dbl ">
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
                                                    cartproducts.map((item: any, ind: any) => {
                                                        // console.log("invoicxe data item", item)
                                                        // console.log("type", item["type"]);
                                                        totalAmmount = totalAmmount + parseInt(item["price"]) + data["delliveryprice"];
                                                        // setTotalAmmount(totalAmmount)
                                                        // console.log(typeof (item["price"]));
                                                        return (
                                                            <tbody key={ind}>
                                                                <tr className="bRow">
                                                                    <td>{item["type"]}</td>
                                                                    <td className="dbl">{item["sex"]}</td>
                                                                    <td>{data["date"]}</td>
                                                                    <td>{item["quantity"]}</td>
                                                                    <td>{item["weight"]}</td>
                                                                    <td>
                                                                        <span className="first-line">&#8377;{parseInt(item["price"])}</span>
                                                                        <span>0.00</span>
                                                                    </td>
                                                                    <td className="dbl ">&#8377; {data["delliveryprice"]}.00</td>
                                                                    <td>
                                                                        <span className="first-line">&#8377;{parseInt(item["price"]) + data["delliveryprice"]}</span>
                                                                        <span>0.00</span>
                                                                    </td>
                                                                </tr>
                                                            </tbody>
                                                        )
                                                    })
                                                }
                                                <tfoot className="tableFooter">
                                                    <tr>

                                                        <td className="right text-end" colSpan={7}>Total Ammount:</td>
                                                        <td className="right p-0">&#8377;{totalAmmount}</td>
                                                    </tr>
                                                </tfoot>
                                            </table>
                                            <div className="head">
                                                <h3>
                                                    <span className="first-line">Payment Information</span>
                                                    <span><i>Via Ravepay </i></span>
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
    // console.log("email", state.user.email);
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch: Function) => {
    return {
        setUser: (userDetails: any) => dispatch({ type: 'setUser', payload: userDetails })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Invoice);