import "./style.css";
import React from "react";
import CkEditorExampleComponent from "./CkEditorComponent";
import Header from "../../components/header/app_header";
import Footer from "../../components/footer/footer";

class  Blogform extends React.Component<any,any>{
    constructor(props:any) {
        super(props);
        this.state = {
            topic: "",
            discripton:"",
            // Error Messages 
            topicErrMsg: "",
            topicFlag:false
        }
    }
    getdata(a:any){
        this.setState({discripton:a})
    }
    changeHandler = (e: any) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    submitHandler = (e: any) => {
        e.preventDefault();
        if(this.state.topicFlag){
            console.log(this.state);
        }
    }
    
    validations = (e: any) => {
        if (e.target.name=== 'topic') {
            if (this.state.topic == undefined || this.state.topic.length === 0) {
                this.setState({topicErrMsg:"Please enter the title."})
                e.target.classList.add("field-error")
            } else {
                let nameReg = /^([a-zA-Z ]{10,100})$/
                // console.log(nameReg.test(username));
                if (!nameReg.test(this.state.topic)) {
                    this.setState({ topicErrMsg:"Accepts Alphabets, space & Min 10 to Max 100 Char" })
                    e.target.classList.add("field-error")
                } else {
                    e.target.classList.remove("field-error")
                    this.setState({topicErrMsg:"",topicFlag:true})
                }
            }
        }
    }
    reset(){
        this.setState({topic:"", discripton:"",})
    }
    render(){
        let{topic,topicErrMsg}=this.state;
        return (
            <>
            {/* <header><Header></Header></header> */}
            <div className="main">
                <section className="aboutus">
                    <h1>ADD BLOG</h1>
                    
                </section>

                <div className="container">
                    <h2>ADD BLOG</h2>
                
                <div  className="inner">
                    <div className="d-flex box">
                    <p>Fields with <span className="text-danger">*</span> are required</p>
                        <button type="button" className="btn btn-success btnreset" onClick={this.reset} >
                            Reset
                        </button>
                    </div>
                    
                    <div className="text-start box">
                        <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                        <input placeholder="Title" className=" form-control" name="topic" value={topic}  onChange={(e)=>{this.changeHandler(e);this.validations(e)}}></input>
                        <div>
                            <p className="text-danger">{topicErrMsg}</p>
                        </div>
                    </div>
                    <div className="box">
                        <label className="me-3 mt-3"><b>Upload Image<span className="text-danger">*</span></b></label>
                        <input type="file" id="myFile" name="filename"></input>
                    </div>
                    <div className="box">
                        <label className="me-3 mt-3"><b>discripton<span className="text-danger">*</span>:</b></label>
                        <CkEditorExampleComponent ></CkEditorExampleComponent>
                    </div>
                    <div className="mt-3 text-center">
                        <button type="button" className="btn form_button btn-success " onClick={this.submitHandler}>
                            Save
                        </button>
                    </div>
                    </div>
                </div>
    
            </div>
            {/* <footer><Footer></Footer></footer> */}
            </>
    
        );
    }
    
}

export default Blogform;