import "./blogform.scss";
import React from "react";
import { Editor } from 'primereact/editor';
import 'primereact/resources/primereact.min.css'
import axios from "axios";
import { Link } from "react-router-dom";
// import { idText } from "typescript";

class Blogform extends React.Component<any, any>{
    constructor(props: any) {
        super(props);
        this.state = {
            blogs: [],
            topic: "",
            text1: '',
            id: '',
            // Error Messages
            dicErrMsg: "",
            topicErrMsg: "",
            disFlag: true,
            topicFlag:"",
            finalFlag:false,finalMsg:''
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3005/blogs")
            .then(res => {
                this.setState({ blogs: res.data, id: res.data.length +1 })
            })}
    componentDidUpdate(prevState:any) {
        if(prevState.finalFlag !== this.state.finalFlag){
        axios.get("http://localhost:3005/blogs")
            .then(res => {
                this.setState({ blogs: res.data, id: res.data.length +1 })
            })}}
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e: any, data: any) => {
        e.preventDefault();
        // console.log("heifurb");
        if(this.state.topicFlag == "off" && this.state.text1.length >=100){
            console.log("hiii");
            
        axios.post("http://localhost:3005/addblogs", data)
            .then((res: any) => {
                console.log("heloo");
                
                if (res.data == "success") {
                    console.log(res.data);
                    this.setState({ blogs: [],
                        topic: "",
                        text1: '',
                        id: '',
                        // Error Messages
                        dicErrMsg: "",
                        topicErrMsg: "",
                        disFlag: true,
                        topicFlag:"",
                        finalFlag:true ,
                        finalMsg:'Blog Added in Blog List, click here for Blogs',})
                }
                else
                    this.setState({ emailErrMsg: res.data })
            })
            .catch((err: any) => console.log("can't add the blog", err));
        }else{
            this.validations()
            this.validate()
            this.setState({finalFlag:false ,
                finalMsg:''})
        }
    }

    validations = () => {
        if (this.state.topic == undefined || this.state.topic.length === 0) {
            this.setState({ topicErrMsg: "Please enter the title." ,topicFlag:"on"})
            
        } else {
            // let nameReg =  /^([a-zA-Z0-9 ]{4,15})$/
            if (  this.state.topic.length <= 9) {
                this.setState({ topicErrMsg: "Accepts Alphabets, space & Min 10 to Max 100 Char" ,topicFlag:"on"})
            } else {
                this.setState({ topicErrMsg: "", topicFlag:"off"})
                console.log(this.state.topicFlag);
                
            }
        }
    }
    validate = () => {
        if (this.state.text1 == "" || this.state.text1.length === 0) {
            this.setState({ dicErrMsg: "Please enter the Description." })
            console.log("errr");
            
        } else {
            if(this.state.text1.length < 150 ){
            this.setState({ dicErrMsg: "the Entered the Description in below 150 words "})}
            else{
                this.setState({topicErrMsg: "",disFlag:false})
                console.log(this.state.disFlag);
            }
        }
    }


    render() {
        let { topic, topicErrMsg, text1, topicFlag ,id ,disFlag ,dicErrMsg, finalFlag ,finalMsg} = this.state;
        console.log("new :"+id);
        
        return (
            <>
                <div className="main blogform-container">
                    <section className="aboutus">
                        <h1>ADD BLOG</h1>

                    </section>
                   <div className="container">
                        <h2>ADD BLOG</h2>
                        <form className="needs-validation" onSubmit={(e) => { this.submitHandler(e, { "title": topic, "about": text1, "id":id  , "date":Date.now}) }}>
                            <div className="inner">
                                <div className=" box">
                                    <p>Fields with <span className="text-danger">*</span> are required</p>
                                </div>

                                <div className="text-start box">
                                    <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                                    <input placeholder="Title"  id="validationTooltip01"  className=" form-control" name="topic" value={topic} onChange={(e) => { this.changeHandler(e); this.validations() }}></input>
                                    {topicFlag === "on" &&
                                        <p className="text-danger">{topicErrMsg}</p>}
                                        

                                    
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
                                    <Editor style={{ height: '320px' }} value={text1} onTextChange={(e) => { this.setState({ text1: e.textValue}) }} />
                                </div>
                                {disFlag && <p className="text-danger ms-5">{dicErrMsg}</p> 
                        
                                }
                                
                               
                                <div className="mt-3 text-center">
                                    {finalFlag&&
                                        <Link to="/blog"><p className="text-success ms-5">{finalMsg}</p></Link>
                                    }
                                    <button type="submit" className="btn form_button btn-success ">
                                        Save
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>

        );
    }

}

export default Blogform;