import { useState } from 'react'
import { connect } from 'react-redux'
import './profile.scss'

function Profile(props: any) {


    const user = props.redux.user
    const [fullName, setFullName] = useState(user != null ? user.fullName : "")
    const [email, setEmail] = useState(user != null ? user._id : "")
    const [phone, setPhone] = useState(user?.phone != undefined ? user.phone : "")
    const [zipCode, setZipCode] = useState(user?.zipCode != undefined ? user.zipCode : "")
    const [location, setLocation] = useState(user?.location != undefined ? user.location : "")
    const [address, setAddress] = useState(user?.address != undefined ? user.address : "")

    const [fullNameErrMsg, setfullNameErrMsg] = useState("")
    const [emailErrMsg, setemailErrMsg] = useState("")
    const [phoneErrMsg, setphoneErrMsg] = useState("")
    const [zipcodeErrMsg, setzipcodeErrMsg] = useState("")
    const [locationErrMsg, setlocationErrMsg] = useState("")
    const [addressErrMsg, setaddressErrMsg] = useState("")




    const validations = (e: any) => {
        if (e.target.name === 'name') {
            let fullName = e.target.value;
            let fullNameErrMsg = '';
            if (fullName == undefined || fullName.length === 0) {
                setfullNameErrMsg("Please enter the Associate Name.")
                e.target.classList.add("field-error")
            } else {
                let nameReg = /^([a-zA-Z ]{4,15})$/
                console.log(nameReg.test(fullName));
                if (!nameReg.test(fullName)) {
                    setfullNameErrMsg("Accepts Alphabets, space & Min 3 to Max 15 Char")
                    // this.setState({ fullNameErrMsg })

                    e.target.classList.add("field-error")
                } else {
                    setfullNameErrMsg('')
                    e.target.classList.remove("field-error")
                    // this.setState({ fullNameErrMsg })

                }
            }
        }

        //  phone no
        if (e.target.name === 'phone') {
            let phone = e.target.value;
            let phoneErrMsg = '';
            if (phone == undefined || phone.length === 0) {
                setphoneErrMsg("Please enter the phone number.")

                e.target.classList.add("field-error")
            } else {
                let phoneReg = /^([0-9]{10})$/
                if (!phoneReg.test(phone)) {
                    setphoneErrMsg("Invalid phone number")
                    e.target.classList.add("field-error")
                } else {
                    setphoneErrMsg('')
                    e.target.classList.remove("field-error")

                }
            }
        }
        // email
        if (e.target.name === 'email') {
            let email = e.target.value;
            let emailErrMsg = '';
            if (email == undefined || email.length === 0) {
                setemailErrMsg("Please enter the email.")

                e.target.classList.add("field-error")
            } else {
                let emailReg = /^[a-zA-Z0-9.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                if (!emailReg.test(email)) {
                    setemailErrMsg("Invalid Email-Id")

                    e.target.classList.add("field-error")
                } else {
                    setemailErrMsg('')
                    e.target.classList.remove("field-error")

                }
            }
        }
        // location

        if (e.target.name === 'location') {
            let location = e.target.value;
            let locationErrMsg = '';
            if (location == undefined || location.length === 0) {
                setlocationErrMsg("Please enter the location.")

                e.target.classList.add("field-error")
            } else {
                let locationReg = /^([a-zA-Z ]{4,20})$/
                if (!locationReg.test(location)) {
                    setlocationErrMsg("Invalid location")

                    e.target.classList.add("field-error")
                } else {
                    setemailErrMsg('')
                    e.target.classList.remove("field-error")

                }
            }
        }
        // zipcode

        if (e.target.name === 'zipCode') {
            let zipcode = e.target.value;
            let zipcodeErrMsg = '';
            if (zipcode == undefined || zipcode.length === 0) {
                setzipcodeErrMsg("Please enter the zipcode.")

                e.target.classList.add("field-error")
            } else {
                let zipcodeReg = /^([0-9]{6})$/
                if (!zipcodeReg.test(zipcode)) {
                    setzipcodeErrMsg("Invalid zipcode")

                    e.target.classList.add("field-error")
                } else {
                    setzipcodeErrMsg('')
                    e.target.classList.remove("field-error")

                }
            }
        }
        // address
        if (e.target.name === 'address') {
            let address = e.target.value;
            let addressErrMsg = '';
            if (address == undefined || address.length === 0) {
                setaddressErrMsg("Please enter the address.")

                e.target.classList.add("field-error")

            } else {
                setaddressErrMsg('')
                e.target.classList.remove("field-error")

            }
        }
    }



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
                                    <div className="my-4 position-relative text-start">
                                        <label className="col-md-12" htmlFor="name">Name<span className="text-danger">*</span></label>
                                        <input type="text" id="name" name="name" value={fullName} onChange={(e) => setFullName(e.target.value)} placeholder="Enter Name"
                                            className="form-control"
                                            // onChange={this.changeHandler}
                                            onBlur={validations} required />
                                        <p className="text-danger">{fullNameErrMsg}</p>
                                    </div>
                                    <div className="my-4 position-relative text-start">
                                    <label htmlFor="phone">Phone<span className="text-danger">*</span></label>
                                        <input type="text" id="phone" name="phone" value={phone} onChange={(e) => setPhone(e.target.value)} className="form-control " placeholder="Enter Number"
                                                //   onChange={this.changeHandler}
                                                onBlur={validations} required />
                                        
                                        <p className="text-danger">{phoneErrMsg}</p>
                                    </div>
                                    <div className="my-4 position-relative text-start">
                                    <label htmlFor="email">Email<span className="text-danger">*</span></label>
                                    
                                        
                                            <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder="Enter Email"
                                                onBlur={validations} required />

                                        
                                    <p className="text-danger">{emailErrMsg}</p>
                                    </div>
                                    <div className="my-4 position-relative text-start">
                                    <label htmlFor="location">Location<span className="text-danger">*</span></label>
                                      <input type="text" id="location" name="location" value={location} onChange={(e) => setLocation(e.target.value)} className="form-control " placeholder="Enter Location"
                                                onBlur={validations} required />
                                    <p className="text-danger">{locationErrMsg}</p>
                                    </div>

                                    <div className="my-4 position-relative text-start">
                                    <label htmlFor="zipCode">Zipcode<span className="text-danger">*</span></label>
                                    
                                            <input type="text" id="zipCode" name="zipCode" value={zipCode} onChange={(e) => setZipCode(e.target.value)} className="form-control " placeholder="Enter Zipcode"
                                                onBlur={validations} required />

                                        

                                    
                                    <p className="text-danger">{zipcodeErrMsg}</p>
                                    </div>
                                    <div className="my-4 position-relative text-start">
                                    <label htmlFor="address">Delivery Address<span className="text-danger">*</span></label>
                                    
                                            <input type="text" id="address" value={address} onChange={(e) => setAddress(e.target.value)} name="address" className="form-control "
                                                placeholder="Enter Address" onBlur={validations} required />

                                       

                                   
                                    <p className="text-danger">{addressErrMsg}</p>
                                    </div>
                                    <div className="row justify-content-center">
                                    <button type="submit" id="saveButton" className="btn btn-success col-md-4">Save</button>
                                    </div>
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
            
        </div >
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