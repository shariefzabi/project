import React from "react";


class Menu extends React.Component {
    render() {
        return (
            <div>
                <header className="heading">
                    <div className="d-flex flex-row-reverse bd-highlight">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="container-fluid">
                                <button className="navbar-toggler" type="button " data-bs-toggle="collapse"
                                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                    aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon "></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <a className="nav-link active text-white" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link  text-white" href="#">About Us</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link text-white" href="#">
                                                Be a Partner
                                            </a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link  text-white">Blog</a>
                                        </li>
                                    </ul>
                                    <form className="d-flex">
                                        <button className="btn text-white buynow">Buy Now</button>
                                        <button className="btn text-white login">Login</button>
                                    </form>
                                </div>
                            </div>
                        </nav>
                    </div>
                </header>

            </div>
        )
    }
}

export default Menu;
