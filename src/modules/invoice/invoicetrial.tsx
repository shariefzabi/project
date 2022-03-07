import "./invoice1.scss"
import { useState } from "react"
import { connect } from "react-redux"
import triangle from "./assets/img/uptriangle.png";
import triangle1 from "./assets/img/downtriangle.png";

function invoiceToggle(e: any) {
    if (e.target.src == triangle1) {
        e.target.src = triangle;
    }
    else
        e.target.src = triangle1;



}

function Invoice1(props: any) {
    console.log("invoice", props)
    return (
        <div>
            <main id="mainContent">
                <section className="invoiceSection">
                    <header>
                        <div className="headingText">
                            <h2>Invoice</h2>
                        </div>
                    </header>
                    <main className="invoice-body">
                        <h3 className="invoice-heading">Product Details</h3>
                        <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<img className="text-end" onClick={(e) => invoiceToggle(e)} data-bs-toggle="collapse" data-bs-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample" src={triangle1}></img></p>
                        {/* <hr className="hr-line" /> */}
                        <div className="table collapse" id="collapseExample">
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
                                            <td>Cow</td>
                                            <td className="dbl">Female</td>
                                            <td>14/02/2019</td>
                                            <td>400</td>
                                            <td> 14000kg</td>
                                            <td>
                                                <span className="first-line">N 100,00000</span>
                                                <span>0.00</span>
                                            </td>
                                            <td className="dbl ">N 200,00 0.00</td>
                                            <td>
                                                <span className="first-line">N 100,00000</span>
                                                <span>0.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>


                            <div className="head">
                                <h3>
                                    <span className="first-line">Payment Information</span>
                                    <span><i>Via Ravepay</i></span>
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
                                        <p>6004568392</p>
                                        <p>Olubodun Akinleye</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<img className="text-end" onClick={(e) => invoiceToggle(e)} data-bs-toggle="collapse" data-bs-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample" src={triangle1}></img></p>
                        {/* <hr className="hr-line" /> */}
                        <div className="table collapse" id="collapseExample1">
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
                                            <td>Cow</td>
                                            <td className="dbl">Female</td>
                                            <td>14/02/2019</td>
                                            <td>400</td>
                                            <td> 14000kg</td>
                                            <td>
                                                <span className="first-line">N 100,00000</span>
                                                <span>0.00</span>
                                            </td>
                                            <td className="dbl ">N 200,00 0.00</td>
                                            <td>
                                                <span className="first-line">N 100,00000</span>
                                                <span>0.00</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>

                            </div>


                            <div className="head">
                                <h3>
                                    <span className="first-line">Payment Information</span>
                                    <span><i>Via Ravepay</i></span>
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
                                        <p>6004568392</p>
                                        <p>Olubodun Akinleye</p>
                                    </div>
                                </div>

                            </div>
                        </div>
                        {/* <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<span >&#x25BE;</span></p>
                        <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<span>&#x25BE;</span></p>
                        <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<span>&#x25BE;</span></p>
                        <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<span>&#x25BE;</span></p> */}
                    </main>

                </section>
            </main>
        </div>

    )

}
const mapStateToProps = (state: any) => {
    console.log(state);

    return {
        state
    }
}



export default connect(mapStateToProps)(Invoice1);