import "./forms_butchery.scss";
import React from "react";
import { Dialog } from "@mui/material";
import { connect } from "react-redux";
import axios from "axios";

class Butcherypopup extends React.Component<any, any> {
  myRef: React.RefObject<unknown>;

  constructor(props: any) {
    super(props);
    this.myRef = React.createRef();
    this.state = {
      name: "",
      butchery: "",
      number: "",
      email: "",
      conadd: "",
      state: "",
      city: "",

      nameErr: "",
      butcheryErr: "",
      numberErr: "",
      emailErr: "",
      conaddErr: "",
      stateErr: "",
      cityErr: "",

      openPopup: false,
      noErrors: true,
      submitFlag: true,
    };
  }
  changeHandler = (e: any) => {
    this.validate(e);
    this.setState({ [e.target.name]: e.target.value });
  };
  validate = (e: any) => {
    // console.log(e);
    let n = e.target.name;
    let v = e.target.value;
    let state = this.state;
    if (n === "name") {
      let re = /^[a-zA-Z ]{5,10}$/;
      if (v === "") {
        this.setState({ nameErr: "Please enter the Full Name." });
      } else if (!re.test(v)) {
        this.setState({
          nameErr: "Accepts Alphabets, space & Min 5 to Max 10 Char",
        });
      } else this.setState({ nameErr: "" });
    } else if (n === "butchery") {
      if (v != "2") {
        this.setState({
          butcheryErr: "Select Value as TWO or Change to Agent From",
        });
      } else this.setState({ butcheryErr: "" });
    } else if (n === "number") {
      let re =
        /((\+*)((0[ -]*)*|((91 )*))((\d{12})+|(\d{10})+))|\d{5}([- ]*)\d{6}/;
      if (v === "") {
        this.setState({ numberErr: "Please enter the Phone Number." });
      } else if (!re.test(v)) {
        this.setState({ numberErr: "Maximum 10 Digits" });
      }
      // state.nameErr = "";
      else this.setState({ numberErr: "" });
    } else if (n === "email") {
      let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
      if (v === "") {
        this.setState({ emailErr: "Please enter the Email Address." });
      } else if (!re.test(v)) {
        this.setState({ emailErr: "please enter email in a specific formate" });
      } else this.setState({ emailErr: "" });
    } else if (n === "conadd") {
      let re = /^[#.0-9a-zA-Z\s,-]+$/;
      if (v === "") {
        this.setState({ conaddErr: "Please Enter Address." });
      } else this.setState({ conaddErr: "" });
    } else if (n === "state") {
      let re = /^[A-Za-z]/;
      if (v === "") {
        this.setState({ stateErr: "Please Enter State." });
      } else this.setState({ stateErr: "" });
    } else if (n === "city") {
      let re = /^[A-Za-z]/;
      if (v === "") {
        this.setState({ cityErr: "Please Enter City." });
      } else this.setState({ cityErr: "" });
    }
  };
  handleOpen = () => this.setState({ openPopup: true });
  handleClose = () => this.setState({ openPopup: false });
  butcherySubmitHandler = (e: any) => {
    let { name, butchery, number, email, conadd, state, city } = this.state;
    e.preventDefault();
    // console.log("userDetails:", userDetails);

    axios
      .post("http://localhost:3005/butchery/add-butchery", {
        name,
        butchery,
        number,
        email,
        conadd,
        state,
        city,
      })
      .then((res: any) => {
        if (res.data == "success")
          this.props.setAgent({
            fullName: name,
            butchery,
            number,
            email,
            contactAddress: conadd,
            state: state,
            City: city,
          });
        else this.setState({ emailErrMsg: res.data });
      })
      .catch((err: any) => console.log(" User Form Error", err));
    this.props.setButchery({
      fullName: name,
      butchery,
      number,
      email,
      contactAddress: conadd,
      State: state,
      City: city,
    });
    console.log(this.props);
  };
  render() {
    return (
      <>
        <div className="be-an-agent modal-content">
          <div className="text-center popupheading">
            <p>Butchery/Abattoir</p>
          </div>
          <div className="form-paragraph">
            <p>
              Fill the form below and our experts will get in touch with you.
            </p>
          </div>
          <form onSubmit={this.butcherySubmitHandler}>
            <div className="mb-3">
              <img className="form-image" src={require("./assets/human.png")} />
              <label htmlFor="Full Name" className="col-form-label">
                Full Name
              </label>
              <input
                type="text"
                className="form-control form-page"
                name="name"
                id="Full Name"
                placeholder="Full Name"
                onChange={this.changeHandler}
                onBlur={this.validate}
                required
              />
              <p className="mb-1 text-center text-danger">
                {this.state.nameErr}
              </p>
            </div>
            <div className="mb-3">
              <label htmlFor="Agent" className="col-form-label select-label">
                Butchery/Abattoir
              </label>
              <select
                className="form-select"
                // defaultValue="2"
                value={this.state.butchery}
                name="butchery"
                aria-label="Default select example"
                onChange={this.changeHandler}
                onBlur={this.validate}
              >
                <option value="0">Individual</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              <p className="mb-1 text-center text-danger">
                {this.state.butcheryErr}
              </p>
            </div>
            <div className="mb-3">
              <img
                className="form-image"
                src={require("./assets/mobile.png")}
              />
              <label htmlFor="phone" className="col-form-label">
                Phone
              </label>
              <input
                type="number"
                className="form-control form-page"
                name="number"
                id="phone"
                placeholder="Phone"
                onChange={this.changeHandler}
                onBlur={this.validate}
                required
              />
              <p className="mb-1 text-center text-danger">
                {this.state.numberErr}
              </p>
            </div>
            <div className="mb-3">
              <img className="form-image" src={require("./assets/mail.png")} />
              <label htmlFor="Email" className="col-form-label">
                Email
              </label>
              <input
                type="email"
                className="form-control form-page"
                name="email"
                id="Email"
                placeholder="Email Address"
                onChange={this.changeHandler}
                onBlur={this.validate}
                required
              />
              <p className="mb-1 text-center text-danger">
                {this.state.emailErr}
              </p>
            </div>
            <div className="mb-3">
              <img
                className="form-image"
                src={require("./assets/location.png")}
              />
              <label htmlFor="Contact Address" className="col-form-label">
                Contact Address
              </label>
              <input
                type="text"
                className="form-control form-page"
                name="conadd"
                id="Contact Address"
                placeholder="Contact Address"
                onChange={this.changeHandler}
                onBlur={this.validate}
                required
              />
              <p className="mb-1 text-center text-danger">
                {this.state.conaddErr}
              </p>
            </div>
            <div className="mb-3">
              <img
                className="form-image"
                src={require("./assets/address1.png")}
              />
              <label htmlFor="State" className="col-form-label">
                State
              </label>
              <input
                type="text"
                className="form-control  form-page"
                name="state"
                id="State"
                placeholder="State"
                onChange={this.changeHandler}
                onBlur={this.validate}
                required
              />
              <p className="mb-1 text-center text-danger">
                {this.state.stateErr}
              </p>
            </div>
            <div className="mb-3">
              <img
                className="form-image"
                src={require("./assets/address2.png")}
              />
              <label htmlFor="Town/City" className="col-form-label">
                Town/City
              </label>
              <input
                type="text"
                className="form-control form-page"
                name="city"
                id="Town/City"
                placeholder="Town/City"
                onChange={this.changeHandler}
                onBlur={this.validate}
                required
              />
              <p className="mb-1 text-center text-danger">
                {this.state.cityErr}
              </p>
            </div>
            <div className="mb-3 text-center">
              <button type="submit" className="btn btn-success sendbutton">
                Send
              </button>
            </div>
          </form>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state: any) => {
  console.log(state);

  return {
    redux: state,
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    setButchery: (setButchery: any) =>
      dispatch({ type: "setButchery", payload: setButchery }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Butcherypopup);
//  export default Butcherypopup;
