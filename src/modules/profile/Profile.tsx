import axios from 'axios'
import { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import './profile.scss'
import Reset from './reset/reset'
// import './sidebar.scss'
import Sidebar from './sidebar/sidebar'

function Profile(props: any) {
    const[flag,setflag]=useState(false)
    const [userDetails, setUserDetails] = useState(
        {
            fullName: "",
            email: "",
            phone: "",
            zipCode: "",
            location: "",
            address: ""
        })



    const [fullNameErrMsg, setfullNameErrMsg] = useState("")
    const [emailErrMsg, setemailErrMsg] = useState("")
    const [phoneErrMsg, setphoneErrMsg] = useState("")
    const [zipcodeErrMsg, setzipcodeErrMsg] = useState("")
    const [locationErrMsg, setlocationErrMsg] = useState("")
    const [addressErrMsg, setaddressErrMsg] = useState("")
    const [displayReset, setdisplayReset] = useState(false)


    const getToken = () => sessionStorage.getItem("token");

    useEffect(() => {
        axios.get("http://localhost:3005/users/" + getToken())
            .then(res => {
                if (res.data != "null") {
                    props.setUser(res.data)
                    let { fullName, email} = res.data
                    setUserDetails({ ...userDetails, fullName, email })
                    if (res.data?.phone != undefined) {
                        setUserDetails(res.data)
                    }
                }
            })
            .catch(err => console.log("No previous user found")
            )
    }, [])


    const changeHandler = (e: any) => {
        if (e.target.type=="number"&& e.target.maxLength>=e.target.value.length){
         setUserDetails({ ...userDetails, [e.target.name]: e.target.value })    
        }
        else{
        setUserDetails({ ...userDetails, [e.target.name]: e.target.value })}
    }

    const validations = (e: any) => {
        if (e.target.name === 'fullName') {
            let fullName = e.target.value;
            let fullNameErrMsg = '';
            if (fullName == undefined || fullName.length === 0) {
                setfullNameErrMsg("Please enter the Associate Name.")
                e.target.classList.add("field-error")
            } else {
                let nameReg = /^([a-zA-Z0-9 ]){4,15}$/
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
                    setlocationErrMsg("")
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

    const submitHandler = (e: any) => {
        e.preventDefault()
        console.log("profile sumbitted :", userDetails);
        console.log(props);


        axios.post("http://localhost:3005/users/" + props.redux.user.token, userDetails)
            .then((res: any) => {

            })
            .catch((err: any) => console.log(" Profile update error ", err));
    }

    function resetPasswordToggler() {
        // var profileBlock=document.getElementById('profileBlock')
        // // profileBlock.style.display = "none"
        // var resetBlock=document.getElementById('resetBlock')
        // // resetBlock.style.display = "block"
    }
    return (
        <div>
            <Sidebar></Sidebar>

            {props.redux.user &&
            <div className='profile-container'>

                
                <header>

                <div className="headingText">
                    <h2>Profile</h2>
                </div>
                </header>
                {!displayReset &&
                    <main id="mainContent">
                        <section className="profileSection">

                            
                                <div className="formContainer  " id='profileBlock'>
                                    
                                    
                                    <main className="row box col-sm-12">
                                        <section className="col-md-12 col-sm-12  row">
                                            <div className='profile' >
                                                <p> Fields with <span className="text-danger">*</span> are required</p><button className="btn btn-success btn-float-right col-2 " id="resetButton" type="button"
                                                    onClick={() => {
                                                        setdisplayReset(true)

                                                    }}> Reset Password</button>


                                            </div>

                                            <form onSubmit={submitHandler}>

                                                <div className="my-4 position-relative text-start">
                                                    <label className="col-md-12" htmlFor="name">Name<span className="text-danger">*</span></label>
                                                    <input type="text" id="name" name="fullName" value={userDetails.fullName} onChange={changeHandler} placeholder="Enter Name"
                                                        className="form-control"
                                                        // onChange={this.changeHandler}
                                                        onBlur={validations} required />
                                                    <p className="text-danger">{fullNameErrMsg}</p>
                                                </div>
                                                <div className="my-4 position-relative text-start">
                                                    <label htmlFor="phone">Phone<span className="text-danger">*</span></label>
                                                    <input  type="tel" maxLength={10}  id="phone" name="phone" value={userDetails.phone} onChange={changeHandler} className="form-control " placeholder="Enter Number"
                                                        //   onChange={this.changeHandler}
                                                        onBlur={validations} required />

                                                    <p className="text-danger">{phoneErrMsg}</p>
                                                </div>
                                                <div className="my-4 position-relative text-start">
                                                    <label htmlFor="email">Email<span className="text-danger">*</span></label>


                                                    <input type="email" id="email" name="email" disabled value={userDetails.email} onChange={changeHandler} className="form-control" placeholder="Enter Email"
                                                        onBlur={validations} />


                                                    <p className="text-danger">{emailErrMsg}</p>
                                                </div>
                                                <div className="my-4 position-relative text-start">
                                                    <label htmlFor="location">Location<span className="text-danger">*</span></label>
                                                    <input type="text" id="location" name="location" value={userDetails.location} onChange={changeHandler} className="form-control " placeholder="Enter Location"
                                                        onBlur={validations} required />
                                                    <p className="text-danger">{locationErrMsg}</p>
                                                </div>

                                                <div className="my-4 position-relative text-start">
                                                    <label htmlFor="zipCode">Zipcode<span className="text-danger">*</span></label>

                                                    <input maxLength={6} type="tel"  id="zipCode" name="zipCode" value={userDetails.zipCode} onChange={changeHandler} className="form-control " placeholder="Enter Zipcode"
                                                        onBlur={validations} required />
                                                    <p className="text-danger">{zipcodeErrMsg}</p>
                                                </div>
                                                <div className="my-4 position-relative text-start">
                                                    <label htmlFor="address">Delivery Address<span className="text-danger">*</span></label>

                                                    <input type="text" id="address" value={userDetails.address} onChange={changeHandler} name="address" className="form-control "
                                                        placeholder="Enter Address" onBlur={validations} required />
                                                    <p className="text-danger">{addressErrMsg}</p>
                                                </div>
                                                <div className="row justify-content-center">
                                                    <button onClick={()=>setflag(true)} type="submit" id="saveButton" className="btn btn-success col-md-4">Save</button>
                                                </div>
                                                {flag&&
                                                <p className='mt-2 text-center text-success'> Profile details Updated sucessfully </p>
                                                }
                                            </form>
                                        </section>
                                    </main>
                                    
                                </div>
                            
                                
                        </section>
                    </main>
                }
                
                




            </div >
            }
            {!props.redux.user && <div className='profile-err mt-5  text-center'><h2 className='text-danger'>** Please login and try again **</h2>
                </div>}
                {displayReset &&
                                <Reset setdisplayReset={setdisplayReset}></Reset>
                                }

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