import "./style.css";
import React from "react";
import CkEditorExampleComponent from "./CkEditorComponent";

class  Blogform extends React.Component{
    
    render(){
        return (
            <div className="main">
                <section className="aboutus">
                    <h1>ADD BLOG</h1>
                    
                </section>

                <div className="container">
                    <h2>ADD BLOG</h2>
                
                <div  className="inner">
                    <div className="d-flex box">
                    <p>Fields with <span className="text-danger">*</span> are required</p>
                        <button type="button" className="btn btn-success reset">
                            Reset
                        </button>
                    </div>
                    
                    <div className="text-start box">
                        <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                        <input placeholder="Title" className=" form-control" ></input>
                    </div>
                    <div className="box">
                        <label className="me-3 mt-3"><b>Upload Image<span className="text-danger">*</span></b></label>
                        <input type="file" id="myFile" name="filename"></input>
                    </div>
                    <div className="box">
                        <label className="me-3 mt-3"><b>discripton<span className="text-danger">*</span>:</b></label>
                        <CkEditorExampleComponent></CkEditorExampleComponent>
                    </div>
                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-success form_button ">
                            Save
                        </button>
                    </div>
                    </div>
                </div>
    
            </div>
    
        );
    }
    
}

export default Blogform;