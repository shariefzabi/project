import { useState } from 'react'
import { connect } from 'react-redux'
import './profile.scss'

function Profile(props: any) {
    const user = props.redux.user
    const [fullName,setFullName] = useState(user!=null ? user.fullName:"")
    const [email,setEmail] = useState(user!=null ? user._id:"")
    const [phone,setPhone ] = useState(user?.phone!=undefined ? user.phone:"")
    const [zipCode, setZipCode] = useState(user?.zipCode!=undefined ? user.zipCode:"")
    const [location, setLocation] = useState(user?.location!=undefined ? user.location:"")
    const [address, setAddress] = useState(user?.address!=undefined ? user.address:"")
    function resetPasswordToggler() {
        // var profileBlock=document.getElementById('profileBlock')
        // // profileBlock.style.display = "none"
        // var resetBlock=document.getElementById('resetBlock')
        // // resetBlock.style.display = "block"

    }

    return (
        <div className='profile-container'>
            {console.log("Props from profile:", props)
            }
            <main id="mainContent">
                <section className="profileSection">
                    <header>
                        <div className="headingText">
                            <h2>Profile</h2>
                        </div>
                    </header>
                    <div className="formContainer container-fluid " id='profileBlock'>
                        <main className="row box col-sm-12">
                            <section className="col-md-12 col-sm-12  row">
                                <form>
                                    <div className='profile' >
                                        <p> Fields with <span className="text-danger">*</span> are required</p>
                                        <button className="btn btn-success btn-float-right " id="resetButton" type="button" onClick={resetPasswordToggler}>Reset Password</button>
                                    </div>
                                    <label className="col-md-12" htmlFor="name">Name<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="name" name="name" value={fullName} onChange={(e)=>setFullName(e.target.value)} className="inputBox" placeholder="Enter Name" />
                                        </div>
                                    </div>
                                    <label htmlFor="phone">Phone<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="phone" name="phone" value={phone} onChange={(e)=>setPhone(e.target.value)} className="inputBox " placeholder="Enter Number" />
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1 pt-1">
                                            <i className='fa fa-mobile-phone'></i>
                                        </div>
                                    </div>
                                    <label htmlFor="email">Email<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="email" id="email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)} className="inputBox" placeholder="Enter Email" />
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1 pt-1">
                                            <i className='fa fa-envelope-o'></i>
                                        </div>
                                    </div>
                                    <label htmlFor="location">Location<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="location" name="location" value={location} onChange={(e)=>setLocation(e.target.value)} className="inputBox " placeholder="Enter Location" />
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1 pt-1">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                    </div>
                                    <label htmlFor="zipCode">Zipcode<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="number" id="zipCode" name="zipCode" value={zipCode} onChange={(e)=>setZipCode(e.target.value)} className="inputBox " placeholder="Enter Zipcode" />
                                        </div>
                                        <div className="col-md-1 col-sm-1 col-1 pt-1">
                                            <i className="fa fa-map-marker"></i>
                                        </div>
                                    </div>
                                    <label htmlFor="address">Delivery Address<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} name="address" className="inputBox "
                                                placeholder="Enter Address" />
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
                    {/* <div className="formContainer container-fluid form-control " id="resetBlock">
                        <main className="row box">
                            <section className="col-md-10 col-sm-10 col-10 row">
                                <div className='resetpage'><h3>Reset Password</h3></div>
                                <form>
                                    <p> Fields with <span className="text-danger">*</span> are required</p>
                                    <div>
                                        <label htmlFor="name">Old Password<span className="text-danger">*</span></label>
                                        <div className="row">
                                            <div className="col-md-11 col-sm-11 col-10">
                                                <input type="text" id="name" name="name" className="inputBox" placeholder="Enter your name" />
                                            </div>
                                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                                <i className='fa fa-lock'></i>
                                            </div>
                                        </div>
                                        <label htmlFor="phone">Password<span className="text-danger">*</span></label>
                                        <div className="row">
                                            <div className="col-md-11 col-sm-11 col-10">
                                                <input type="password" id="phone" name="phone" className="inputBox" placeholder="Enter New Password" />
                                            </div>
                                            <div className="col-md-1 col-sm-1 col-1 pt-1">
                                                <i className="fa fa-lock"></i>
                                            </div>
                                        </div>
                                        <label htmlFor="email">Retype Password<span className="text-danger">*</span></label>
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
                    </div> */}
                </section>
            </main>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    // console.log(state);
    return { redux: state }
}


const mapDispatchToProps = (dispatch: Function) => {
    return {
        setUser: (userDetails: any) => dispatch({ type: 'setUser', payload: userDetails })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);