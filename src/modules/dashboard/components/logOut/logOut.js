import React from 'react'
import './logOut.css'

export default function LogOut() {
    return (

        <section id="login_page">
            <div className="logout">
                <section>
                    <aside>
                        <div className="p-0">
                            <h2>Log out</h2>
                        </div>
                    </aside>
                    <main className="row box">
                        <section className="col-md-1 col-sm-1 col-1"></section>

                        <section className="col-md-10 col-sm-10 col-10 row">
                            <div>
                                <h3>Time to Go?</h3>
                                <p>
                                    Please fill out the following form with your login credentials:
                                </p>
                            </div>

                            <form>

                                <label className="my-3">Name<span>*</span></label>
                                <div className="row">
                                    <div className="col-md-11 col-sm-10 col-10">
                                        <input type="text" placeholder="Ramon Ridwan" />
                                    </div>
                                    <div className="col-md-1 col-sm-1 col-1 pt-1">
                                        <i className="far fa-user"></i>
                                    </div>
                                </div>


                                <label>Password<span>*</span></label>
                                <div className="row">
                                    <div className="col-md-11 col-sm-10 col-10">
                                        <input type="password" placeholder=" **********" />
                                    </div>
                                    <div className="col-md-1 col-sm-1 col-1 pt-1">
                                        <i className="fas fa-unlock-alt"></i>
                                    </div>
                                </div>
                                <button className="btn btn-success my-5"><a href="#">Log In</a></button>
                            </form>


                        </section>
                        <section className="col-md-1 col-sm-1 col-1">
                        </section>

                    </main>
                </section>

            </div>
        </section>
    )
}