import React from "react";
import './styles.css'
import axios from "axios";


class Form extends React.Component<any, any> {
    myRef: React.RefObject<unknown>;

    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            name: "",
            email: "",
            comment: "",
            id:"",
            nameErr: "",
            emailErr: "",
            commentErr: "",
            noErrors: true,
            submitFlag: true,
            topicFlag:"",
        }

    }
    changeHandler = (e: any) => {
        this.validate(e);
        this.setState({ [e.target.name]: e.target.value });

    }


    submitHandler = (e: any, data: any) => {

        e.preventDefault();
        axios.get("http://localhost:3005/comments")
            .then(res => {
                this.setState({ comments: res.data, id: res.data.length })
               
            })
        if (this.state.topicFlag === "off") {
            axios.post("http://localhost:3005/addcomment", data)
                .then((res: any) => {
                    if (res.data == "success") {
                        console.log(res.data);
                    }
                    else
                        this.setState({ emailErrMsg: res.data })
                })
                .catch((err: any) => console.log("can't add the comment", err));
        } else {
            this.validate(e);
        }
    }

    validate = (e: any) => {
        // console.log(e);
        let n = e.target.name;
        let v = e.target.value;
        let state = this.state;
        if (n === "name") {
            let re = /^[a-zA-Z ]{5,10}$/;
            if (v === "") {
                // state.nameErr = "Please enter the Associate Name.";
                this.setState({ nameErr: "Please enter the Associate Name." })
            }
            else if (!re.test(v)) {
                // state.nameErr = "Accepts Alphabets, space & Min 5 to Max 10 Char";
                this.setState({ nameErr: "Accepts Alphabets, space & Min 5 to Max 10 Char" })
            }
            else
                // state.nameErr = "";
                this.setState({ nameErr: "" })
        }
        else if (n === "email") {
            let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if (v === "") {
                // state.emailErr = "Please enter the Associate Name.";
                this.setState({ emailErr: "Please enter the Associate Name." })
            }
            else if (!re.test(v)) {
                // state.emailErr = "please enter email in a specific formate";
                this.setState({ emailErr: "please enter email in a specific formate" })
            }
            else
                // state.emailErr = "";
                this.setState({ emailErr: "" })
        }
        else if (n === "comment") {
            let re = /^[a-zA-Z ]{50,200}$/;
            // console.log("hi this comment");
            if (v === "") {
                // state.commentErr = "Please Enter Comments";
                this.setState({ commentErr: "Please Enter Comments" })
            }
            else if (!re.test(v)) {
                // state.commentErr = "Accepts Alphabets, space & Min 50 to Max 200 Char";
                this.setState({ commentErr: "Accepts Alphabets, space & Min 50 to Max 200 Char" })
            }
            else
                // state.commentErr = "";
                this.setState({ commentErr: "" })
        }


    }
    render() {
        let { name, email, comment ,id } = this.state;
        return (

            <div>
                <section className="form">
                    <h2> Leave A Comment</h2>

                    <form onSubmit={(e) => { this.submitHandler(e, { "name":name, "email": email, "comment":comment ,"id": id + 1 }) }}>
                        <span className="col-12 row">
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12" htmlFor="name">Full Name</label>
                                <input className="col-12 input-x" type="text" name="name" id="name" placeholder="Full Name" value={name}
                                    onChange={this.changeHandler}
                                    onBlur={this.validate}
                                ></input>
                                <p className="ms-1 text-danger">{this.state.nameErr}</p>

                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12" htmlFor="email">Email</label>
                                <input className="col-12 input-x" type="email" name="email" id="inputEmail" placeholder="Email" value={email}
                                    onChange={this.changeHandler}
                                    onBlur={this.validate} ></input>
                                <p className="ms-1 text-danger">{this.state.emailErr}</p>

                            </div>
                            <div>
                                <label className="col-12" htmlFor="comments">comment</label>
                                <textarea className="col-12 comment" placeholder="Your Comments" id="comment" name="comment" value={comment}
                                    onChange={this.changeHandler}
                                    onBlur={this.validate}
                                ></textarea>
                                <p className="ms-1 text-danger">{this.state.commentErr}</p>

                            </div>
                        </span>
                        <div className="text-center">
                            <button type="submit" className="btn btn-success sub-btn m-2 btn btn-primary" >Submit</button>
                        </div>
                    </form>
                </section>

            </div>
        )
    }
}

export default Form;