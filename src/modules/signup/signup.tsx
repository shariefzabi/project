// import "./assets/login.scss";
import React from "react";
import "bootstrap/dist/css/bootstrap.css"

class Signup extends React.Component <any,any>{
    constructor(props:any) {
        super(props);
        this.state = {
            fullname: "",
            email: "",            
            password: "",
            


            // Error Messages 
            fullnameErrMsg: "",
            emailErrMsg:"",
            passwordErrMsg: "",


        }
    }
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e: any) => {
        e.preventDefault();
        console.log(this.state);
    }
    


    validations = (e: any) => {
        // console.log(e.target.name);
        // console.log(e.target.value);
        // username

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
                console.log(username);
                console.log(nameReg);
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
                let emailReg = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/
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

        if (e.target.name === 'password') {
            let password = e.target.value;
            let passwordErrMsg = '';
            if (password == undefined || password.length === 0) {
                passwordErrMsg = "Please enter the password."
                this.setState({ passwordErrMsg })
                e.target.classList.add("field-error")
            } else {
                // let nameReg = /[a-zA-Z]{5, 30}/
                // let nameReg = /^((?![A-Z ]+$)(?![a-z ]+$)[a-zA-Z ]+){5, 30}$/
                let nameReg = /^([a-zA-Z ]{4,15}[@,!,%,#,$,&,*,?,^])$/
                console.log(password);
                // console.log(passwordReg);
                // console.log(passwordReg.test(password));
                if (!nameReg.test(password)) {
                    let passwordErrMsg = "Password should contain 4-15 characters, should contain one Upper-case and special characters(@,!,%)"
                    this.setState({ passwordErrMsg })
                    e.target.classList.add("field-error")
                } else {
                    passwordErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ passwordErrMsg })
                }
            }
        }

    }
    render() {
        let {
            username, password,email
        } = this.state;
        return (

            
            <div className="signup-window">
                <a className=" text-decoration-none text-dark" data-bs-toggle="modal"
                    role="button" href="#exampleModalToggle2">Signup</a>
                <div className="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
                    tabIndex={-1}>
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content text-black">
                            <div className="modal-body">
                                <div className="modal-title">
                                    <h5 id="exampleModalToggleLabel2">LogIn</h5>
                                    <p>Welcome back!</p>
                                    {/* <h2 className="col-1" data-bs-dismiss="modal" aria-label="Close">X</h2> */}
                                </div>
                                <form onSubmit={this.submitHandler} className="px-2 py-2 ">
                                    <div className="mb-3 text-start">
                                        <label htmlFor="uname" className="form-label">Name</label>
                                        <input type="text" name="username"
                                            value={username} placeholder="Username"
                                            className="form-control"
                                            onChange={this.changeHandler}
                                            onBlur={this.validations}  id="uname"  />
                                        <div>
                                            <p className="text-danger">{this.state.usernameErrMsg}</p>
                                        </div>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="email" className="form-control">Email</label>
                                        <input type="email" name="password"
                                            value={email} placeholder="Email"
                                            className="form-control"
                                            onChange={this.changeHandler}
                                            onBlur={this.validations}  id="pwd"  />

                                        <div>
                                            <p className="text-danger">{this.state.emailErrMsg}</p>
                                        </div>
                                        <div className="form-text text-end"><a href="#">I Forgot My Password</a></div>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="pwd" className="form-label">Password</label>
                                        <input type="password" name="password"
                                            value={password} placeholder="Password"
                                            className="form-control"
                                            onChange={this.changeHandler}
                                            onBlur={this.validations}  id="pwd"  />

                                        <div>
                                            <p className="text-danger">{this.state.passwordErrMsg}</p>
                                        </div>
                                        <div className="form-text text-end"><a href="#">I Forgot My Password</a></div>
                                    </div>
                                    

                                    <button type="submit" className="btn login btn-success">Login</button>
                                </form>
                            </div>
                            <div>
                                <p>
                                    <span className="text-success" >Don't have an account yet ? </span><a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> Sign up</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

export default Signup;