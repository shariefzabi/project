import { useEffect, useState} from 'react';
import { connect } from "react-redux";
import Sidebar from "../profile/sidebar/sidebar";
import "./logOut.scss";
import axios from 'axios';
// import Modal from '@mui/material/Modal';

 function LogOut(props:any) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);



  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [userError, setUserError] = useState("");
  const [usernameErrMsg, setUsernameErrMsg] = useState("");
  const [passwordErrMsg, setPasswordErrMsg] = useState("");

  const setToken = (token:any)=>{
    sessionStorage.setItem("token",token);
  }
 
 
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
          console.log("result from client:",res.data);
          
          if (res.data == "Invalid credentials")setUserError(res.data)
          else{
            setToken(res.data.token);
            props.setUser(res.data);
            window. location. reload();
          }
        })
        .catch((err:any)=>console.log(" User Login up Error",err));
  }

  return (
    <>
    <Sidebar></Sidebar>
    {/* <Modal
        open={open}
        onClose={handleClose}
        aria-describedby="modal-modal-description"
        sx={{overflow:'auto'}}
        > */}
    <main className="logout-container" id="mainContent">
      <section id="login_page">
        <div className="logout">
          <section>
            <aside>
              <div className="p-0">
                <h2>Log out</h2>
              </div>
            </aside>
            <main className="row box">
              {/* <section className="col-md-1 col-sm-1 col-1"></section> */}

              <section className="col-md-10 col-sm-10 col-10 row">
                <div>
                  <h3>Time to Go?</h3>
                  <p>
                    Please fill out the following form with your login
                    credentials:
                  </p>
                </div>

                <form onSubmit={(e)=>LoginSubmitHandler(e,{username:username.toLowerCase(),password})}>
                  <div className="position-relative">
                  <label className="form-label my-3">
                    Name<span>*</span>
                  </label>
                  <img className="user-icon" src={require("./assets/user.png")}></img>
                  
                    
                      <input type="text" name="username"
                      value={username}
                      className="form-control"
                      onChange={(e) => setUsername(e.target.value)}
                      onBlur={(e)=>validations(e)}  placeholder="User Name" />
                      <p className="text-danger">{usernameErrMsg}</p>
                    
                    {/* <div className="col-md-1 col-sm-1 col-1 pt-1"> */}
                      {/* <i className="far fa-user"></i> */}
                    {/* </div> */}
                  </div>
                  
                <div className="position-relative">
                  <label>
                    Password<span>*</span>
                  </label>
                  <img className="lock-icon" src={require("./assets/lock.png")}></img>
                  
                    
                      <input className="form-control" type="password" name="password"
                      value={password} placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      onBlur={(e)=>validations(e)} id="pwd" required />
                      <p className="text-danger">{passwordErrMsg}</p>
                    
                    {/* <div className="col-md-1 col-sm-1 col-1 pt-1"> */}
                      {/* <i className="fas fa-unlock-alt"></i> */}
                    {/* </div> */}
                </div>
                  
                  <button className="btn btn-success my-5" onClick={() => { handleOpen() }}>
                    Log In
                  </button>
                </form>
              </section>
              {/* <section className="col-md-1 col-sm-1 col-1"></section> */}
            </main>
          </section>
        </div>
      </section>
    </main>
    
    </>
  );
}
const mapStateToProps = (state: any) => { return { ...state } }

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setUser: (userDetails: any) => dispatch({ type: 'setUser', payload: userDetails })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LogOut);
