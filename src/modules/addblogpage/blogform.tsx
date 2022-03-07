import "./style.css";
import React from "react";
import { Editor } from 'primereact/editor';
import 'primereact/resources/primereact.min.css'

class Blogform extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            topic: "",
            text1: '',
            // Error Messages
            dicErrMsg: "",
            topicErrMsg: "",
            disFlag: false,
            topicFlag: false
        }
    }
    getdata(a: any) {
        this.setState({ discripton: a })
    }
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e: any) => {
        if (this.state.topicFlag && this.state.disFlag) {
            console.log(this.state);
        }else{
            this.validate();
        }
    }

    validations = (e: any) => {
        if (this.state.topic == undefined || this.state.topic.length === 0) {
            this.setState({ topicErrMsg: "Please enter the title." })
            e.target.classList.add("field-error")
        } else {
            let nameReg = /^([a-zA-Z ]{10,100})$/
            if (!nameReg.test(this.state.topic)) {
                this.setState({ topicErrMsg: "Accepts Alphabets, space & Min 10 to Max 100 Char" })
                e.target.classList.add("field-error")
            } else {
                e.target.classList.remove("field-error")
                this.setState({ topicErrMsg: "", topicFlag: true })
            }
        }
    }
    validate = () => {
        if (this.state.topic == "" || this.state.text1.length === 0) {
            this.setState({ dicErrMsg: "Please enter the Description." })
        } else {
            this.setState({ dicErrMsg: "", disFlag: true })
        }
    }
   

    render() {
        let { topic, topicErrMsg } = this.state;
        return (
            <>
                <div className="main">
                    <section className="aboutus">
                        <h1>ADD BLOG</h1>

                    </section>

                    <div className="container">
                        <h2>ADD BLOG</h2>

                        <div className="inner">
                            <div className=" box">
                                <p>Fields with <span className="text-danger">*</span> are required</p>
                            </div>

                            <div className="text-start box">
                                <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                                <input placeholder="Title" className=" form-control" name="topic" value={topic} onChange={(e) => { this.changeHandler(e); this.validations(e) }}></input>
                                <div>
                                    <p className="text-danger">{topicErrMsg}</p>
                                </div>
                            </div>
                            <div className="box">
                                <div className="mb-3">
                                    <label className="me-2"><b>Image<span className="text-danger">*</span>:</b></label>
                                    <input type="file" className="form-control" aria-label="file example" required />
                                        <div className="invalid-feedback">Example invalid form file feedback</div>
                                </div>
                            </div>
                            <div className="box">
                                <label className="me-3 mt-3"><b>Description<span className="text-danger">*</span></b></label>
                                <Editor style={{ height: '320px' }} value={this.state.text1} onTextChange={(e) => {this.setState({ text1: e.htmlValue }) }} />
                                {!this.state.disFlag &&
                                    <p className="text-danger">{this.state.disErrMsg}</p>
                                }
                            </div>
                            <div className="mt-3 text-center">
                                <button type="submit" className="btn form_button btn-success " onClick={this.submitHandler}>
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </>

        );
    }

}

export default Blogform;