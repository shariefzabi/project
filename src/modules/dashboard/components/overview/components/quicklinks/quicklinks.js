import './quicklinks.css'
export default function Quicklinks() {
    return (
        <div>
            <main id="mainContent">
                <section className="quicklinks">
                    <header className="row">
                        <div className="headingText col">
                            <h2>Quicklinks</h2>
                        </div>

                        <div className="dropdown col">
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
                    <main className="quicklinksCards row row-cols-2 row-cols-sm-2 row-cols-md-4 g-5rem">
                        <div className="col">
                            <div className="card">

                                <img src={require("./images/orders.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Orders</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={require("./images/invoice.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Invoices</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={require("./images/payments.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Payments</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div className="card">
                                <img src={require("./images/trackorder.png")} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title text-center">Track Orders</h5>
                                </div>
                            </div>
                        </div>
                    </main>
                </section>
            </main>
        </div>
    )
}