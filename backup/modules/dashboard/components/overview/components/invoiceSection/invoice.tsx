import "./invoice.scss"
export default function Invoice() {
    return (
        <div>
            <main id="sectionContent">
                <section className="invoiceSection">
                    <header className="row">
                        <div className="headingText col-8">
                            <h2>Invoice</h2>
                        </div>

                        <div className="dropdown col-4">
                            <a className="edit-toggler text-secondary" type="button" id="dropdownMenuButton1"
                                data-bs-toggle="dropdown" aria-expanded="false">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                    className="bi bi-three-dots edit-dropdown" viewBox="0 0 16 16">
                                    <path
                                        d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                                </svg>
                            </a>
                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                <li><a className="dropdown-item" href="#">Edit</a></li>
                                <li><a className="dropdown-item" href="#">Remove</a></li>
                            </ul>
                        </div>
                    </header>
                    <main className="invoice-body">
                        <h3 className="invoice-heading">Product Details</h3>
                        <hr className="hr-line" />
                        <p className="invoice-id">ID - 900085000597636<span>&#x25BE;</span></p>
                        <hr className="hr-line" />
                        <div className="table">
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
                            <hr className="hr-line" />
                            <p className="invoice-id">ID - 900085000597636<span >&#x25BE;</span></p>
                            <hr className="hr-line" />
                            <p className="invoice-id">ID - 900085000597636<span>&#x25BE;</span></p>
                        </div>
                    </main>
                </section>
            </main>
        </div>
    )

}