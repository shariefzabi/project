import "./assets/login.scss";
import React from "react";
// export default function Login() 
import "bootstrap/dist/css/bootstrap.css"

    class Login extends React.Component {
        constructor() {
            super();
            this.state = {
                username: "",
                password: "",
                
    
                // Error Messages 
                usernameErrMsg: '',
                passwordErrMsg: "",
    
            }
        }
        changeHandler = (e:any) => {
            this.setState({ [e.target.name]: e.target.value })
        }
        submitHandler = (e:any) => {
            e.preventDefault();
            console.log(this.state);
        }
        profileChangeHandler = (e:any) => {
            if (e.target.files.length === 0) {
                return;
            }
            let profileImg = e.target.files[0];
            this.setState({ profileImg })
        }
    
        
        
        validations = (e:any) => {
            // console.log(e.target.name);
            // console.log(e.target.value);
    
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
                
                if (e.target.name === 'password') {
                    let password = e.target.value;
                    let passwordErrMsg = '';
                    if (password == undefined || password.length === 0) {
                        passwordErrMsg = "Please enter the password."
                        this.setState({ passwordErrMsg })
                        e.target.classList.add("field-error")
                    } else  {
                        // let nameReg = /[a-zA-Z]{5, 30}/
                        // let nameReg = /^((?![A-Z ]+$)(?![a-z ]+$)[a-zA-Z ]+){5, 30}$/
                        let nameReg = /^([a-zA-Z ]{4,15}[@,!,%,#,$,&,*,?,^][A-Z])$/
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
            // let {
            //     username, password, 
            // } = this.state;
    return (
        <div className="login-window">
            <a className=" text-decoration-none text-white" data-bs-toggle="modal"
            role="button" href="#exampleModalToggle">Login</a>
            <div className="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
                tabIndex={-1}>
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content text-black">
                        <div className="modal-body">
                            <div className="modal-title">
                                <h5 id="exampleModalToggleLabel">LogIn</h5>
                                <p>Welcome back!</p>
                                {/* <h2 className="col-1" data-bs-dismiss="modal" aria-label="Close">X</h2> */}
                            </div>
                            <form className="px-2 py-2 ">
                                <div className="mb-3 text-start">
                                    <label htmlFor="uname" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="uname" placeholder="Name"/>
                                </div>
                                <div className="mb-3 text-start">
                                    <label htmlFor="pwd" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="pwd" placeholder="Password"/>
                                        <div className="form-text text-end"><a href="#">I Forgot My Password</a></div>
                                </div>
                                
                                <button type="submit" className="btn login btn-success">Login</button>
                            </form>
                        </div>
                        <p>

                        
                        <span className="text-success" >Don't have an account yet ? </span><a data-bs-target="#exampleModalToggle2" data-bs-toggle="modal"> Sign up</a>
                    </p></div>
                </div>
            </div>

        </div>
        )
        }
    }

export default Login