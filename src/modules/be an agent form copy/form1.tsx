import './forms.scss'
import React from 'react';
class BeanAgentPopup extends React.Component<any,any>  {
    myRef: React.RefObject<unknown>;

    constructor(props:any) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            name: "",
            number:"",
            email: "",
            conadd:"",
            busadd:"",
            city:"",
            
            nameErr: "",
            numberErr:"",
            emailErr: "",
            conaddErr:"",
            busaddErr:"",
            cityErr:"",
            
            noErrors: true,
            submitFlag :true
        }

    }
    changeHandler = (e:any) => {
        this.validate(e);
        this.setState({ [e.target.name]: e.target.value });

    }
    validate = (e:any) => {
        // console.log(e);
        let n = e.target.name;
        let v = e.target.value;
        let state = this.state;
        if (n === "name") {
            let re = /^[a-zA-Z ]{5,10}$/;
            if (v === "") {
                this.setState({nameErr:"Please enter the Full Name."})
            }
            else if (!re.test(v)) {
                this.setState({nameErr:"Accepts Alphabets, space & Min 5 to Max 10 Char"})
            }
            else
                // state.nameErr = "";
                this.setState({nameErr:""})
        }
        else if(n==="number"){
            let re=/((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
            if(v === ""){
                this.setState({numberErr:"Please enter the Phone Number."})

            }
            else if (!re.test(v)) {
                this.setState({numberErr:"Maximum 10 Digits"})
            }
            else
                // state.nameErr = "";
                this.setState({numberErr:""})
        }

        else if (n === "email") {
            let re=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if (v === "") {
                this.setState({emailErr:"Please enter the Email Address."})
            }
            else if (!re.test(v)) {
             this.setState({emailErr:"please enter email in a specific formate"})
            }
            else
                this.setState({emailErr:""})
        }
         else if (n === "conadd") {
            let re = /^[#.0-9a-zA-Z\s,-]+$/;
            if (v === "") {
                this.setState({conaddErr:"Please Enter Address."})
            }
           
            else
                this.setState({conaddErr:""})
        }
        else if (n === "busadd") {
            let re = /^[#.0-9a-zA-Z\s,-]+$/;
            if (v === "") {
                this.setState({busaddErr:"Please Enter Address."})
            }
           
            else
                this.setState({busaddErr:""})
        }
        else if (n === "city") {
            let re = /^[A-Za-z]/;
            if (v === "") {
                this.setState({cityErr:"Please Enter City."})
            }
           
            else
                this.setState({cityErr:""})
        }
    }
   render() {
       
   
    return (
        <>
            <a className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Be an Agent</a>

            <div className="modal fade" id="exampleModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                                <label htmlFor="Full Name" className="col-form-label">Full Name</label>
                                <input type="text" className="form-control " name="name" id="Full Name" placeholder="Full Name"
                                 onChange={this.changeHandler}
                                 onBlur={this.validate} required />
                                 <p className="mb-1 text-center text-danger">{this.state.nameErr}</p>
                            </div>
                            <div className="mb-3">
                                <label htmlFor="Agent" className="col-form-label select-label">Agent</label>
                                <select className="form-select" aria-label="Default select example">
                                    <option selected>Individual</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/mobile.png")} />
                                <label htmlFor="phone" className="col-form-label">Phone</label>
                                <input type="text" className="form-control" name="number" id="phone" placeholder="Phone"
                                onChange={this.changeHandler}
                                onBlur={this.validate}  />
                                <p className="ms-1 text-center text-danger">{this.state.numberErr}</p>
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/mail.png")} />
                                <label htmlFor="Email" className="col-form-label">Email</label>
                                <input type="email" className="form-control" name="email" id="Email" placeholder="Email"
                                onChange={this.changeHandler}
                                onBlur={this.validate} />
                                <p className="ms-1 text-center text-danger">{this.state.emailErr}</p>
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/location.png")} />
                                <label htmlFor="Contact Address" className="col-form-label">Contact Address</label>
                                <input type="text" className="form-control "  name="conadd" id="Contact Address" placeholder="Contact Address" 
                                 onChange={this.changeHandler}
                                 onBlur={this.validate}/>
                                 <p className="ms-1 text-center text-danger">{this.state.conaddErr}</p>
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/address1.png")} />
                                <label htmlFor="Business Location" className="col-form-label">Business Location</label>
                                <input type="text" className="form-control " name="busadd" id="Business Location" placeholder="Business Address"
                                onChange={this.changeHandler}
                                onBlur={this.validate} />
                                <p className="ms-1 text-center text-danger">{this.state.busaddErr}</p>
                            </div>
                            <div className="mb-3">
                                <img className="form-image" src={require("./assets/address2.png")} />
                                <label htmlFor="Town/City" className="col-form-label">Town/City</label>
                                <input type="text" className="form-control "  name="city" id="Town/City" placeholder="Contact Address"
                                onChange={this.changeHandler}
                                onBlur={this.validate} />
                                <p className="ms-1 text-center text-danger">{this.state.cityErr}</p>
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
}
export default BeanAgentPopup;