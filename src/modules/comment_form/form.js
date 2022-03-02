import React from "react";
import './styles.css'



class Form extends React.Component {

    constructor() {
        super();
        this.myRef = React.createRef();
        this.state = {
            name: "",
            email: "",
            comment: "",
            nameErr: "",
            emailErr: "",
            commentErr: "",
            noErrors: true,
            submitFlag :true
        }

    }
    changeHandler = (e) => {
        this.validate(e);
        this.setState({ [e.target.name]: e.target.value });

    }


    submitHandler = (e) => {
        alert("hii");
        e.preventDefault();
        state.submitFlag = true;
        let n = e.target.name;
        let v = e.target.value;
        let state = this.state;
        if (n === "name") {
            if (v === "") {
                state.nameErr = "Please enter the Associate Name.";
            }
            else
                state.nameErr = "";
        }
        else if (n === "email") {
            if (v === "") {
                state.emailErr = "Please enter the Associate Name.";
            }
            else
                state.emailErr = "";
        }
        else if (n === "comment") {

            if (v === "") {
                state.commentErr = "Please Enter Comments";
            }
            else
                state.commentErr = "";
        }
    


        this.setState(state);
        let {
            nameErr,
            emailErr,
            commentErr } = this.state;
        let errors = [nameErr,
            emailErr,
            commentErr];
        let { name,
            email,
            comment } = this.state;
        let values = [name,
            email,
            comment];

        let a = (values.every((i) => i.length !== 0)) && (errors.every((i) => i.length === 0));
        this.setState({ noErrors: (!a) });
    }

    validate = (e) => {
        // console.log(e);
        let n = e.target.name;
        let v = e.target.value;
        let state = this.state;
        if (n === "name") {
            let re = /^[a-zA-Z ]{5,10}$/;
            if (v === "") {
                state.nameErr = "Please enter the Associate Name.";
            }
            else if (!re.test(v)) {
                state.nameErr = "Accepts Alphabets, space & Min 5 to Max 10 Char";
            }
            else
                state.nameErr = "";
        }
        else if (n === "email") {
            let re=/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if (v === "") {
                state.emailErr = "Please enter the Associate Name.";
            }
            else if (!re.test(v)) {
                state.emailErr = "please enter email in a specific formate";
            }
            else
                state.emailErr = "";
        }
        else if (n === "comment") {
            let re = /^[a-zA-Z ]{50,200}$/;
            console.log("hi this comment");
            if (v === "") {
                state.commentErr = "Please Enter Comments";
            }
            else if (!re.test(v)) {
                state.commentErr = "Accepts Alphabets, space & Min 50 to Max 200 Char";
            }
            else
                state.commentErr = "";
        }



        this.setState(state);
        let {
            nameErr,
            emailErr,
            commentErr } = this.state;
        let errors = [nameErr,
            emailErr,
            commentErr];
        let { name,
            email,
            comment } = this.state;
        let values = [name,
            email,
            comment];

        let a = (values.every((i) => i.length !== 0)) && (errors.every((i) => i.length === 0));
        this.setState({ noErrors: (!a) });
    }
    render() {
        return (
            <div>
                <section className="form">
                    <h2> Leave A Comment</h2>

                    <form>
                        <span className="col-12 row">
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12" htmlFor="name">Full Name</label>
                                <input className="col-12 input-x" type="text" name="name" id="name" placeholder="Full Name"
                                    onChange={this.changeHandler}
                                    onBlur={this.validate}
                                ></input>
                                <p className="ms-1 text-danger">{this.state.nameErr}</p>

                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12" htmlFor="email">Email</label>
                                <input className="col-12 input-x" type="email" name="email" id="inputEmail" placeholder="Email"
                                    onChange={this.changeHandler}
                                    onBlur={this.validate} ></input>
                                <p className="ms-1 text-danger">{this.state.emailErr}</p>

                            </div>
                            <div>
                                <label className="col-12" htmlFor="comments">comment</label>
                                <textarea className="col-12 comment" placeholder="Your Comments" id="comment" name="comment"
                                    onChange={this.changeHandler}
                                    onBlur={this.validate}
                                ></textarea>
                                <p className="ms-1 text-danger">{this.state.commentErr}</p>

                            </div>
                        </span>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success sub-btn" onClick={this.submitHandler} className="m-2 btn btn-primary">Submit</button>
                        </div>
                    </form>
                </section>

            </div>
        )
    }
}

export default Form;