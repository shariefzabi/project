import './forms.scss'

export default function BeanAgentPopup() {
    return (
        <>
            <a className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Be an Agent</a>

            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="text-center popupheading">
                            <p>Be an Agent</p>
                        </div>
                        <div className="form-paragraph">
                            <p>Fill the form below and our experts will get
                                in touch with you.</p>
                        </div>
                        <form>

                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/human.png")} />
                                <label for="Full Name" className="col-form-label">Full Name</label>
                                <input type="text" className="form-control" id="Full Name" placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                {/* <img className="form-image" src="./assets/triangle.png"/>  */}
                                <label for="Agent" className="col-form-label select-label">Agent</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Individual</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/mobile.png")} />
                                <label for="phone" className="col-form-label">Phone</label>
                                <input type="number" className="form-control" id="phone" placeholder="Phone" />
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/mail.png")} />
                                <label for="Email" className="col-form-label">Email</label>
                                <input type="email" className="form-control" id="Email" placeholder="Full Name" />
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/location.png")} />
                                <label for="Contact Address" className="col-form-label">Contact Address</label>
                                <input type="text" className="form-control " id="Contact Address" placeholder="Contact Address" />
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/address1.png")} />
                                <label for="Business Location" className="col-form-label">Business Location</label>
                                <input type="text" className="form-control " id="Business Location" placeholder="Contact Address" />
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/address2.png")} />
                                <label for="Town/City" className="col-form-label">Town/City</label>
                                <input type="text" className="form-control " id="Town/City" placeholder="Contact Address" />
                            </div>
                            <div className="mb-3 text-center">
                                <button type="button" className="btn btn-success sendbutton">Send</button>
                            </div>

                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}