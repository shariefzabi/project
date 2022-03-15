import axios from 'axios';
import { useState } from 'react';
import './reset.scss'


function Reset(props: any) {
    const[oldPassword,setOldPassword]=useState("")
    const[oldPasswordErrMsg,setOldPasswordErrMsg]=useState("")
    const[createPassword,setCreatePassword]=useState("")
    const[confirmPassword,setConfirmPassword]=useState("")
    const [passwordErrMsg,setPasswordErrMsg]=useState("")
    const[confirmPasswordErrMsg,setComfirmPasswordErrMsg]=useState("")
    

    const getToken = () => sessionStorage.getItem("token");
    const validations = (e: any) => {
        if (e.target.name === 'oldPassword') {
            let password = e.target.value;
            if (password == undefined || password.length === 0) {
                setOldPasswordErrMsg ( "Please enter the old password.")
                e.target.classList.add("field-error")
            }
            else{
                setOldPasswordErrMsg ("")
                e.target.classList.remove("field-error")
            }
        }


    if (e.target.name === 'createPassword') {
        let password = e.target.value;
        if (password == undefined || password.length === 0) {
            setPasswordErrMsg ( "Please enter the new password.")
            e.target.classList.add("field-error")
        } else {
            let nameReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[A-Z])(?=.*[a-z])[a-zA-Z0-9!@#$%^&*]{6,16}$/
            if (!nameReg.test(password)) {
                 setPasswordErrMsg ( "Password should contain 4-15 characters, contain numbers, should contain one Upper-case and special characters(@,!,%)")
                e.target.classList.add("field-error")
            } else {
                setPasswordErrMsg ('')
                e.target.classList.remove("field-error")
            }
        }
    }
    if (e.target.name === 'confirmPassword') {
        let password = e.target.value;
        if (password == undefined || password.length === 0) {
            setComfirmPasswordErrMsg( "Please enter the confirm password.")
            e.target.classList.add("field-error")
        } else {
            if (password !== createPassword) {
                setComfirmPasswordErrMsg ( "Passwords did not match")
               
                e.target.classList.add("field-error")
            } else {
                setComfirmPasswordErrMsg('')
                e.target.classList.remove("field-error")
               
            }
        }
    }
}

    const submitHandler = (e:any) =>{
        e.preventDefault();
        console.log("submitted",getToken());
        
        let userDetails = {oldPassword,newPassword:createPassword}
        axios.post("http://localhost:3005/users/reset/" + getToken(),userDetails)
      .then(res => {
          if (res.data[0]=="success"){
          console.log("reset client:",res.data[1]);
          e.target.reset();}
          else{
              setOldPasswordErrMsg(res.data[1])
          }
      })
      .catch(err => console.log("No previous user found")
      )
        
    }

    return (
        <div>

            <section className="resetSection">
                <span  onClick={()=>props.setdisplayReset(false)}> <i className="pb-4 fa fa-long-arrow-left"></i></span>
                <div className='formContainer resetpage'><h3>Reset Password</h3>
                    <form onSubmit={submitHandler}>
                        <p> Fields with <span className="text-danger">*</span> are required</p>
                        <div >
                            <div className='position-relative'>
                                <label htmlFor="name">Old Password<span className="text-danger">*</span></label>
                                <img className="lock" src={require("../assets/lock.png")}></img>
                                <input value={oldPassword} onBlur={validations} onChange={(e)=>setOldPassword(e.target.value)} type="password" id="name" name="oldPassword" className="form-control" placeholder="Enter your old password" required/>
                                <p className='text-danger'>{oldPasswordErrMsg}</p>
                            </div>
                            <div className='position-relative'>
                                <label htmlFor="phone">Password<span className="text-danger">*</span></label>
                                <img className="lock" src={require("../assets/lock.png")}></img>
                                <input value={createPassword} onBlur={validations} type="password" onChange={(e)=>setCreatePassword(e.target.value)} id="phone" name="createPassword" className="form-control" placeholder="Enter New Password" required/>
                                <p className='text-danger'>{passwordErrMsg}</p>
                            </div>
                            <div className='position-relative'>
                                <label htmlFor="email">Retype Password<span className="text-danger">*</span></label>
                                <img className="lock" src={require("../assets/lock.png")}></img>
                                <input value={confirmPassword} onBlur={validations} onChange={(e)=>setConfirmPassword(e.target.value)} type="password" id="email" name="confirmPassword" className="form-control" placeholder="Retype New Password " required/>
                                <p className='text-danger'>{confirmPasswordErrMsg}</p>
                            </div>
                        </div>
                        <div className='text-center'>
                            <button type="submit" id="saveButton" className="btn btn-success  col-md-4">Save</button>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Reset