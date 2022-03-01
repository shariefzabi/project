import "./assets/login.scss";
export default function Login() {
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
                                    <input type="email" className="form-control" id="unmae" placeholder="Name"/>
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

        </div>)
}