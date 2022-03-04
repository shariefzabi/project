import "./assets/login.scss";
import React from "react";
import { connect } from 'react-redux';
import "bootstrap/dist/css/bootstrap.css"
// import Signup from "./signup";
import Signup from "./signup";


class Login extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            username: "",
            password: "",


            // Error Messages 
            usernameErrMsg: "",
            passwordErrMsg: "",
            userError:"",
            //Signup
            displaySignup:false

        }
    }
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e: any) => {
        e.preventDefault();
        console.log(e.target);
        
        // console.log("login:",this.props);
        let users = this.props.users;
        let {username,password,userError}=this.state;
        let found = false;
        for(let i=0;i<users.length;i++){
            if (users[i].username===username && users[i].createPassword===password){
                console.log("User details found!!!");
                console.log(("Login Success!!!"));
                userError = "";
                found = true;
                break;
            }
        }
        if (!found)
        userError = "User not found";
        this.setState({userError});

        
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
                    usernameErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ usernameErrMsg })
            }
        }

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
                // let nameReg = /^([a-zA-Z ]{4,15}[@,!,%,#,$,&,*,?,^])$/
                // console.log(password);
                // console.log(passwordReg);
                // console.log(passwordReg.test(password));
                // if (!nameReg.test(password)) {
                //     let passwordErrMsg = "Password should contain 4-15 characters, should contain one Upper-case and special characters(@,!,%)"
                //     this.setState({ passwordErrMsg })
                //     e.target.classList.add("field-error")
                // } else {
                    passwordErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ passwordErrMsg })
                // }
            }
        }

    }
    render() {
        let {
            username, password,displaySignup
        } = this.state;
        
        return (
            <div className="login-window">
                <div className="modal fade"  id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex={-1}>
                    <div  className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                        {
                            !displaySignup &&
                            <div className="modal-body">
                                <div className="modal-title">
                                    <h5 id="exampleModalToggleLabel">LogIn</h5>
                                    <p>Welcome back!</p>
                                </div>
                                {
                                    this.state.userError && 
                                    <div>
                                        <p className="text-danger">{this.state.userError}</p>
                                    </div>
                                }
                                <form onSubmit={this.submitHandler} className="px-2 py-2 ">
                                    <div className="mb-3 text-start">
                                        <label htmlFor="uname" className="form-label">Name</label>
                                        <input type="text" name="username"
                                            value={username} 
                                            className="form-control"
                                            onChange={this.changeHandler}
                                            onBlur={this.validations}  id="uname" placeholder="Name" />
                                        <div>
                                            <p className="text-danger">{this.state.usernameErrMsg}</p>
                                        </div>
                                    </div>
                                    <div className="mb-3 text-start">
                                        <label htmlFor="pwd" className="form-label">Password</label>
                                        <input type="password" name="password"
                                            value={password} placeholder="Password"
                                            className="form-control"
                                            onChange={this.changeHandler}
                                            onBlur={this.validations}  id="pwd" />

                                        <div>
                                            <p className="text-danger">{this.state.passwordErrMsg}</p>
                                        </div>
                                        <div className="form-text text-end"><a className="link" href="#">I Forgot My Password</a></div>
                                    </div>

                                    <button type="submit" className="btn login btn-success">Login</button>
                                </form>
                                <div><span className="text-success">Don't have an account ?</span>
                                    <a className="link text-decoration-none" onClick={()=>this.setState({displaySignup:true})}>Sign up</a>
                                </div>
                            </div>
                        }
                        {
                            displaySignup&&
                            <Signup/>
                        }
                        
                            
                            
                        </div>
                    </div>
                </div>

                <a className="pt-3 login-btn btn btn-success" onClick={()=>this.setState({displaySignup:false})} data-bs-toggle="modal" href="#exampleModalToggle" role="button">Login</a>
                
            </div>
        )
    }
}

const mapStateToProps = (state:any) => {
    console.log(state);
    
    return {
        ...state
    }
}

const mapDispatchToProps = (dispatch:Function) => {
    return {
        setUser: (userDetails:any) => dispatch({type: 'setUser', payload:userDetails})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);