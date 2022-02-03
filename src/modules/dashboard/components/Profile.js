
import './profile.css'

export default function Profile() {
    return (<section className="profileSection">
        <header>
            <div className="headingText">
                <h2>Profile</h2>
            </div>
        </header>

        <div className="formContainer container-fluid " id='profileBlock'>
            <main className="row box">
                <section className="col-md-1 col-sm-1 col-1"></section>

                <section className="col-md-10 col-sm-10 col-10 row">


                    <form>

                        <p> Fields with <span className="text-danger">*</span> are required</p>

                        <button className="btn btn-success btn-float-right " id="resetButton" type="button" onclick="resetPasswordToggler()">Reset Password</button>

                        <label className="col-md-12" for="name">Name<span className="text-danger">*</span></label>
                        <div className="row">
                            <div className="col-md-11 col-sm-11 col-10">
                                <input type="text" id="name" name="name" className="inputBox " placeholder="Enter your name" />
                            </div>
                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                <i className="far fa-user"></i>
                            </div>
                        </div>


                        <label for="phone">Phone<span className="text-danger">*</span></label>
                        <div className="row">
                            <div className="col-md-11 col-sm-11 col-10">
                                <input type="text" id="phone" name="phone" className="inputBox " placeholder="Enter your Phone number" />
                            </div>
                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                <i className='fa fa-mobile-phone'></i>
                            </div>
                        </div>


                        <label for="email">Email<span className="text-danger">*</span></label>
                        <div className="row">
                            <div className="col-md-11 col-sm-11 col-10">
                                <input type="email" id="email" name="email" className="inputBox " placeholder="Enter your Email address" />
                            </div>
                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                <i className='fa fa-envelope-o'></i>
                            </div>
                        </div>


                        <label for="location">Location<span className="text-danger">*</span></label>
                        <div className="row">
                            <div className="col-md-11 col-sm-11 col-10">
                                <input type="text" id="location" name="location" className="inputBox " placeholder="Enter your Location" />
                            </div>
                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                <i className="fa fa-map-marker"></i>
                            </div>
                        </div>


                        <label for="zipCode">Zipcode<span className="text-danger">*</span></label>
                        <div className="row">
                            <div className="col-md-11 col-sm-11 col-10">
                                <input type="number" id="zipCode" name="zipCode" className="inputBox " placeholder="Enter your Zipcode" />
                            </div>
                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                <i className="fa fa-map-marker"></i>
                            </div>
                        </div>


                        <label for="address">Delivery Address<span className="text-danger">*</span></label>
                        <div className="row">
                            <div className="col-md-11 col-sm-11 col-10">
                                <input type="text" id="address" name="address" className="inputBox "
                                    placeholder="Enter your Delivery address" />
                            </div>
                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                <i className=" fas fa-dolly-flatbed"></i>
                            </div>
                        </div>


                        <button type="submit" id="saveButton" className="btn btn-success col-md-4">Save</button>
                    </form>


                </section>


            </main>
        </div>

        <div className="formContainer container-fluid form-control d-none" id="resetBlock">
            <main className="row box">

                <section className="col-md-1 col-sm-1 col-1"></section>

                <section className="col-md-10 col-sm-10 col-10 row">
                    <div className='resetpage'><h3>Reset Password</h3></div>

                    <form>

                        <p> Fields with <span className="text-danger">*</span> are required</p>

                        <div>

                            <label for="name">Old Password<span className="text-danger">*</span></label>
                            <div className="row">
                                <div className="col-md-11 col-sm-11 col-10">
                                    <input type="text" id="name" name="name" className="inputBox" placeholder="Enter your name" />
                                </div>
                                <div className="col-md-1 col-sm-1 col-1 pt-1">
                                    <font-awesome-icon icon="fa-thin fa-lock-keyhole"></font-awesome-icon>
                                    <i className='fa fa-lock'></i>
                                </div>
                            </div>


                            <label for="phone">Password<span className="text-danger">*</span></label>
                            <div className="row">
                                <div className="col-md-11 col-sm-11 col-10">
                                    <input type="password" id="phone" name="phone" className="inputBox" placeholder="Enter New Password" />
                                </div>
                                <div className="col-md-1 col-sm-1 col-1 pt-1">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>


                            <label for="email">Retype Password<span className="text-danger">*</span></label>
                            <div className="row">
                                <div className="col-md-11 col-sm-11 col-10">
                                    <input type="password" id="email" name="email" className="inputBox" placeholder="Retype New Password " />
                                </div>
                                <div className="col-md-1 col-sm-1 col-1 pt-1">
                                    <i className="fa fa-lock"></i>
                                </div>
                            </div>


                        </div>


                        <button type="submit" id="saveButton" className="btn btn-success col-md-4">Save</button>
                    </form>


                </section>

            </main>

        </div>
    </section>


    )
}