import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";
import axios from "axios";


class Signup extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            fullName: "",
            email: "",
            createPassword: "",
            confirmPassword: "",

            // Error Messages 
            fullNameErrMsg: "",
            emailErrMsg: "",
            passwordErrMsg: "",
            confirmPasswordErrMsg: ""

        }
    }

    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    setToken = (token:any)=>{
        sessionStorage.setItem("token",token);
      }

    validations = (e: any) => {
        if (e.target.name === 'fullName') {
            let fullName = e.target.value;
            let fullNameErrMsg = '';
            if (fullName == undefined || fullName.length === 0) {
                fullNameErrMsg = "Please enter the Associate Name."
                this.setState({ fullNameErrMsg })
                e.target.classList.add("field-error")
            } else {
                let nameReg = /^([a-zA-Z ]{4,15})$/
                console.log(nameReg.test(fullName));
                if (!nameReg.test(fullName)) {
                    let fullNameErrMsg = "Accepts Alphabets, space & Min 3 to Max 15 Char"
                    this.setState({ fullNameErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    fullNameErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ fullNameErrMsg })
                }
            }
        }

        // email
        if (e.target.name === 'email') {
            let email = e.target.value;
            let emailErrMsg = '';
            if (email == undefined || email.length === 0) {
                emailErrMsg = "Please enter the email."
                this.setState({ emailErrMsg })
                e.target.classList.add("field-error")
            } else {
                let emailReg = /^[a-zA-Z0-9.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                if (!emailReg.test(email)) {
                    let emailErrMsg = "Invalid Email-Id)"
                    this.setState({ emailErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    emailErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ emailErrMsg })
                }
            }
        }

        if (e.target.name === 'createPassword') {
            let password = e.target.value;
            let passwordErrMsg = '';
            if (password == undefined || password.length === 0) {
                passwordErrMsg = "Please enter the password."
                this.setState({ passwordErrMsg })
                e.target.classList.add("field-error")
            } else {
                let nameReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/
                if (!nameReg.test(password)) {
                    let passwordErrMsg = "Password should contain 4-15 characters, contain numbers, should contain one Upper-case and special characters(@,!,%)"
                    this.setState({ passwordErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    passwordErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ passwordErrMsg })
                }
            }
        }
        if (e.target.name === 'confirmPassword') {
            let password = e.target.value;
            let { createPassword } = this.state;
            let confirmPasswordErrMsg = '';
            if (password == undefined || password.length === 0) {
                confirmPasswordErrMsg = "Please enter the confirm password."
                this.setState({ confirmPasswordErrMsg })
                e.target.classList.add("field-error")
            } else {
                if (password !== createPassword) {
                    let confirmPasswordErrMsg = "Passwords did not match"
                    this.setState({ confirmPasswordErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    confirmPasswordErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ confirmPasswordErrMsg })
                }
            }
        }
    }

    signUpSubmitHandler = (e: any, userDetails: any) => {
        e.preventDefault();
        // console.log("userDetails:", userDetails);

        axios.post("http://localhost:3005/users/signup",userDetails)
        .then((res:any)=>{
            if (res.data[0] == "success"){
            this.setToken(res.data[1].token)
            this.props.setUser(res.data[1])}
         
            else
            this.setState({emailErrMsg:res.data[1]})
        })
        .catch((err:any)=>console.log(" User Sign up Error",err));
    }

    render() {
        let {
            fullName, createPassword, email, confirmPassword
        } = this.state;
        // console.log("signup props::::",this.props);
        
        return (
            <div className="signup-window">
                    <div className="modal-title text-center">
                        <h4>Sign Up</h4>
                        <p>Before we proceed further...</p>
                    </div>
                    <form onSubmit={(e) => this.signUpSubmitHandler(e, { fullName, password:createPassword,_id: email.toLowerCase()})}>
                        <div className="mb-3 position-relative text-start">

                            <label htmlFor="fullName" className="form-label">Full Name</label>
                            <img className="user-icon" src={require("./assets/user.png")}></img>
                            <input type="text" name="fullName"
                                value={fullName} placeholder=" Full Name"
                                
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="fullName" required/>
                                <p className="text-danger">{this.state.fullNameErrMsg}</p>
                        </div>
                        <div className="mb-3  position-relative text-start">
                            <label htmlFor="email" className="form-label" >Email</label>
                            <img className="user-icon" src={require("./assets/email.png")}></img>
                            <input type="email" name="email"
                                value={email} placeholder="Email"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="email" required/>

                                <p className="text-danger">{this.state.emailErrMsg}</p>

                        </div>
                        <div className="mb-3 position-relative text-start">
                            <label htmlFor="createpwd" className="form-label">Password</label>
                            <img className="user-icon" src={require("./assets/lock.png")}></img>
                            <input type="password" name="createPassword"
                                value={createPassword} placeholder="Password"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="createpwd" required/>

                                <p className="text-danger">{this.state.passwordErrMsg}</p>
                        </div>
                        <div className="mb-3 position-relative text-start">
                            <label htmlFor="confpwd" className="form-label">Confirm Password</label>
                            <img className="user-icon" src={require("./assets/lock.png")}></img>
                            <input type="password" name="confirmPassword"
                                value={confirmPassword} placeholder="Confirm Password"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="confpwd" required/>

                                <p className="text-danger">{this.state.confirmPasswordErrMsg}</p>
                        </div>
                        <div className='row justify-content-center'>
                    <button type="submit" className="btn col-3 login btn-success">Sign Up</button>
                  </div>
                    </form>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    console.log(state);
    return {redux:state}
}


const mapDispatchToProps = (dispatch: Function) =>{
    return {
        setUser: (userDetails: any) => dispatch({type: 'setUser', payload: userDetails})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);