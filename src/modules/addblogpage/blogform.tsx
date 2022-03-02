import "./style.css";
import React from "react";

class  Blogform extends React.Component{
    render(){
        return (
            <div>
                <section className="aboutus">
                    <h1>ADD BLOG</h1>
                    
                </section>

                <div className="container">
                    <h2>ADD BLOG</h2>
                    <div className="d-flex">
                    <p>Fields with * are required</p>
                        <button type="button" className="btn btn-success reset">
                            Reset
                        </button>
                    </div>
                    
                    <div className="text-start">
                        <label className="me-2"><b>Title:</b></label>
                        <input placeholder="Title" className=" form-control"></input>
                    </div>
                    <div className="">
                        <label className="me-3 mt-3"><b>Upload Image</b></label>
                        <input type="file" id="myFile" name="filename"></input>
                    </div>
                    <div className="mt-3 text-center">
                        <button type="button" className="btn btn-success form_button ">
                            Save
                        </button>
                    </div>
                </div>
    
            </div>
    
        );
    }
    
}

export default Blogform;