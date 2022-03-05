import "./assets/signup.scss";
import React from "react";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.css";


// import mapStateToProps from "../state/stateMap";
// import mapDispatchToProps from "./state/actions";
import axios from "axios";


class Signup extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            email: "",
            createPassword: "",
            confirmPassword: "",

            // Error Messages 
            usernameErrMsg: "",
            emailErrMsg: "",
            passwordErrMsg: "",
            confirmPasswordErrMsg: ""

        }
    }

    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    validations = (e: any) => {
        if (e.target.name === 'username') {
            let username = e.target.value;
            let usernameErrMsg = '';
            if (username == undefined || username.length === 0) {
                usernameErrMsg = "Please enter the Associate Name."
                this.setState({ usernameErrMsg })
                e.target.classList.add("field-error")
            } else {
                // let nameReg = /[a-zA-Z]{5, 30}/
                // let nameReg = /^((?![A-Z ]+$)(?![a-z ]+$)[a-zA-Z ]+){5, 30}$/
                let nameReg = /^([a-zA-Z ]{4,15})$/
                console.log(nameReg.test(username));
                if (!nameReg.test(username)) {
                    let usernameErrMsg = "Accepts Alphabets, space & Min 3 to Max 15 Char"
                    this.setState({ usernameErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    usernameErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ usernameErrMsg })
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
                // let nameReg = /[a-zA-Z]{5, 30}/
                // let nameReg = /^((?![A-Z ]+$)(?![a-z ]+$)[a-zA-Z ]+){5, 30}$/
                let emailReg = /^[a-zA-Z0-9.]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
                // console.log(email);
                // console.log(passwordReg);
                // console.log(passwordReg.test(password));
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
        // password

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

    submitHandler = (e: any, userDetails: any) => {
        e.preventDefault();
        console.log("userDetails:", userDetails);

        this.props.setUser(userDetails);

        axios.post("http://localhost:3005/users",userDetails)
        .then((res)=>console.log("postresponse",res.data))
        .catch((err)=>console.log("posterror",err)
        );
        
        // axios.get("http://localhost:3005/users")
        // this.props.createRecord(userDetails);

    }

    render() {
        let {
            username, createPassword, email, confirmPassword
        } = this.state;
        console.log("props of signup:", this.props);

        return (
            <div className="signup-window">
                <div className="modal-body">
                    <div className="modal-title">
                        <h5 id="exampleModalToggleLabel">Sign Up</h5>
                        <p>Before we proceed further...</p>
                    </div>
                    <form onSubmit={(e) => this.submitHandler(e, { username, createPassword,_id: email })} className="px-2 py-2 ">
                        <div className="mb-3 text-start">
                            <label htmlFor="username" className="form-label">Full Name</label>
                            <input type="text" name="username"
                                value={username} placeholder=" Full Name"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="username" />
                            <div>
                                <p className="text-danger">{this.state.usernameErrMsg}</p>
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="email" className="form-label" >Email</label>
                            <input type="email" name="email"
                                value={email} placeholder="Email"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="email" />

                            <div>
                                <p className="text-danger">{this.state.emailErrMsg}</p>
                            </div>

                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="createpwd" className="form-label">Password</label>
                            <input type="password" name="createPassword"
                                value={createPassword} placeholder="Password"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="createpwd" />

                            <div>
                                <p className="text-danger">{this.state.passwordErrMsg}</p>
                            </div>
                        </div>
                        <div className="mb-3 text-start">
                            <label htmlFor="confpwd" className="form-label">Confirm Password</label>
                            <input type="password" name="confirmPassword"
                                value={confirmPassword} placeholder="Confirm Password"
                                className="form-control"
                                onChange={this.changeHandler}
                                onBlur={this.validations} id="confpwd" />

                            <div>
                                <p className="text-danger">{this.state.confirmPasswordErrMsg}</p>
                            </div>
                        </div>
                        <button type="submit"   className="btn login btn-success" role="button">Sign Up</button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    console.log(state);
    
    return {
        redux:state
    }
}

const mapDispatchToProps = (dispatch:Function) => {
    return {
        setUser: (userDetails:any) => dispatch({type: 'setUser', payload:userDetails})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup);