import './reset.scss'


function Reset(props: any) {


    return (
        <div>

            <section className="resetSection">
                <div className='formContainer resetpage'><h3>Reset Password</h3>
                    <form >
                        <p> Fields with <span className="text-danger">*</span> are required</p>
                        <div >
                            <div className='position-relative'>
                                <label htmlFor="name">Old Password<span className="text-danger">*</span></label>
                                <img className="lock" src={require("../assets/lock.png")}></img>
                                <input type="text" id="name" name="name" className="form-control" placeholder="Enter your name" />
                            </div>



                            <div className='position-relative'>
                                <label htmlFor="phone">Password<span className="text-danger">*</span></label>
                                <img className="lock" src={require("../assets/lock.png")}></img>
                                <input type="password" id="phone" name="phone" className="form-control" placeholder="Enter New Password" />


                            </div>

                            <div className='position-relative'>
                                <label htmlFor="email">Retype Password<span className="text-danger">*</span></label>
                                <img className="lock" src={require("../assets/lock.png")}></img>
                                <input type="password" id="email" name="email" className="form-control" placeholder="Retype New Password " />


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