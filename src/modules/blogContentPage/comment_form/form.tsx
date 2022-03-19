import React from "react";
import './styles.css'
import axios from "axios";
import Comment from "../comments/comments";


class Form extends React.Component<any, any> {
    myRef: React.RefObject<unknown>;

    constructor(props: any) {
        super(props);
        this.myRef = React.createRef();
        this.state = {
            name: "",
            email: "",
            comment: "",
            // error
            nameErr: "",
            emailErr: "",
            commentErr: "",
            commentFlag:false,
            emailFlag:false,
            nameFlag:false,err:'',count:0
        }

    }
    changeHandler = (e: any) => {
        this.validate(e);
        this.setState({ [e.target.name]: e.target.value });

    }


    submitHandler = (e: any, data: any) => {
        e.preventDefault();
        let{commentFlag,
            emailFlag,
            nameFlag}=this.state
        if(commentFlag && emailFlag && nameFlag){
            // console.log(data);
            axios.post("http://localhost:3005/addcomment", data)
            .then((res: any) => {
                if (res.data == "success") {
                    // console.log(res.data);
                    this.setState({ 
                        name: "",
                        email: "",
                        comment: "",
                        // error
                        nameErr: "",
                        emailErr: "",
                        commentErr: "",
                        commentFlag:false,
                        emailFlag:false,
                        nameFlag:false,err:'',
                        count: this.state.count +1
                        })
                }
                else
                    this.setState({ emailErrMsg: res.data })
            })
            .catch((err: any) => console.log("can't add the blog", err));
            
        }else{
            this.setState({err:"please enter all fields correctly"})
        }
       
    }

    validate = (e: any) => {
        let n = e.target.name;
        let v = e.target.value;
        if (n === "name") {
            // let re = /^[a-zA-Z0-9]{5,30}$/;
            if (v === "") {
                this.setState({ nameErr: "Please enter the User Name." })
            }
            else if (v.length <=4) {
                this.setState({ nameErr: "Accepts Alphabets, space,digits & Min 5 to Max 30 Char" })
            }
            else
                this.setState({ nameErr: "" ,nameFlag:true})
        }
        else if (n === "email") {
            let re = /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
            if (v === "") {
                this.setState({ emailErr: "Please enter the Email." })
            }
            else if (!re.test(v)) {
                this.setState({ emailErr: "please enter Email in a specific formate" })
            }
            else
                this.setState({ emailErr: "" ,emailFlag:true})
        }
        else if (n === "comment") {
            // let re = /^[a-zA-Z0-9]{10,200}$/;
            if (v === "") {
                this.setState({ commentErr: "Please Enter Comments" })
            }
            else if (v.length <=9) {
                this.setState({ commentErr: "Accepts Alphabets, space & Min 10 to Max 200 Char" })
            }
            else
                this.setState({ commentErr: "" ,commentFlag:true})
        }


    }
    render() {
        let { name, email, comment ,count} = this.state;
        // console.log("comments put id :"+this.props.id);
        // console.log(count);
        
        return (

            <div>
                <section className="form">
                    <h2 className="commentheading"> Leave A Comment</h2>

                    <form onSubmit={(e) => { this.submitHandler(e, { "name":name, "email": email, "comment":comment ,"id":this.props.id ,'date':Date.now}) }}>
                        <span className="col-12 row">
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12 fullname" htmlFor="name">Full Name</label>
                                <input className="col-12 input-x fullnameinput " type="text" name="name" id="name" placeholder="Full Name" value={name}
                                    onChange={this.changeHandler}
                                    onBlur={this.validate}
                                ></input>
                                <p className="ms-1 text-danger namerr">{this.state.nameErr}</p>

                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12 Email" htmlFor="email">Email</label>
                                <input className="col-12 input-x emailinput" type="email" name="email" id="inputEmail" placeholder="Email" value={email}
                                    onChange={this.changeHandler}
                                    onBlur={this.validate} ></input>
                                <p className="ms-1 text-danger">{this.state.emailErr}</p>

                            </div>
                            <div>
                                <label className="col-12 commenttitle" htmlFor="comments">Comment</label>
                                <textarea className="col-12 comment commentinput" placeholder="Your Comments" id="comment" name="comment" value={comment}
                                    onChange={this.changeHandler}
                                    onBlur={this.validate}
                                ></textarea>
                                <p className="ms-1 text-danger">{this.state.commentErr}</p>

                            </div>
                        </span>
                        <div className=" sbutton">
                            <p className="ms-1 text-danger">{this.state.err}</p>
                            <button type="submit" className="btn btn-success doneBtn m-2 btn btn-primary " >Submit</button>
                        </div>
                    </form>
                </section>
                <Comment id={this.props.id}  count={this.state.count}/>
                
            </div>
        )
    }
}

export default Form;