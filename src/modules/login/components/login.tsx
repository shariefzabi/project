import { useState} from 'react';
import { connect } from "react-redux";
import Signup from './signup';
import "./assets/login.scss";
import axios from 'axios';

// import Box from '@mui/material/Box';
// import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';


function Login(props:any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");
  const [displaySignup, setDisplaySignup] = useState(false);

  const validations = (e: any) => {

    if (e.target.name === 'username') {
      let enteredUsername = e.target.value;
      if (enteredUsername == undefined || enteredUsername.length === 0) {
        setUsernameErrMsg("Please enter the Associate Name.")
        e.target.classList.add("field-error")
      } else {
        e.target.classList.remove("field-error")
        setUsernameErrMsg("")
      }
    }

    if (e.target.name === 'password') {
      let enteredPassword = e.target.value;
      if (enteredPassword == undefined || enteredPassword.length === 0) {
        setPasswordErrMsg("Please enter the password.")
        e.target.classList.add("field-error")
      } else {
        e.target.classList.remove("field-error")
        setPasswordErrMsg("")
      }
    }
  }

  const LoginSubmitHandler = (e: any,userDetails:any) => {
    e.preventDefault();
    axios.post("http://localhost:3005/users/login",userDetails)
        .then( (res:any)=>{
          if (res.data == "Invalid credentials")setUserError(res.data)
          else{
            props.setUser(res.data);
            handleClose();}
        })
        .catch((err:any)=>console.log(" User Login up Error",err));
  }


  return ( 
    <div >
      <button className="pt-2 login-btn btn btn-success"
        onClick={() => { handleOpen(); setDisplaySignup(false) }}>Login</button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        sx={{overflow:'auto'}}
        >


        <div className='login-modal-container'>
          <div id="modal-modal-description" className='login-window' >
            {!displaySignup &&
              <div>
                <div className='modal-title text-center'>
                  <h4>LogIn</h4>
                  <p>Welcome back!</p>
                </div>
                {
                  userError && <p className="text-danger">{userError}</p>
                }

                <form onSubmit={(e)=>LoginSubmitHandler(e,{username:username.toLowerCase(),password})}>
                  <div className="mb-3 position-relative text-start">
                    <label htmlFor="uname" className="form-label">Name</label>
                    <img className="user-icon" src={require("./assets/user.png")}></img>
                    <input type="text" name="username"
                      value={username}
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      onBlur={(e)=>validations(e)} id="uname" placeholder="Name" required/>
                    <p className="text-danger">{usernameErrMsg}</p>
                  </div>
                  <div className="mb-3 position-relative text-start">
                    <label htmlFor="pwd" className="form-label">Password</label>
                    <img className="user-icon" src={require("./assets/lock.png")}></img>
                    <input type="password" name="password"
                      value={password} placeholder="Password"
                      className="form-control"
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={(e)=>validations(e)} id="pwd" required />
                    <p className="text-danger">{passwordErrMsg}</p>
                    <div className="form-text text-end"><a className="link" href="#">I Forgot My Password</a></div>
                  </div>
                  <div className='row justify-content-center'>
                    <button type="submit" className="btn col-3 login btn-success">Login</button>
                  </div>
                </form>

                <div className='pt-3 text-center'>
                  <span className="text-success">Don't have an account ? </span>
                  <a className="link text-decoration-none ps-2" onClick={() => setDisplaySignup(true)}> Sign up</a>
                </div>

              </div>
            }
            {
              displaySignup &&
              <Signup handleClose={handleClose}/>
            }
          </div>
        </div>
      </Modal>
    </div>
  );
}
const mapStateToProps = (state: any) => { return { ...state } }

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setUser: (userDetails: any) => dispatch({ type: 'setUser', payload: userDetails })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);