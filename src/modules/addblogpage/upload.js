import React, { useState } from 'react';
import axios from 'axios';
import "./blogform.scss";
import { Link } from "react-router-dom";
import { Editor } from 'primereact/editor';
import 'primereact/resources/primereact.min.css'

const User = () => {
    const [newUser, setNewUser] = useState(
        {

            photo: '',
            blogs: [],
            topic: "",
            text1: '',
            id: '',
            // Error Messages
            dicErrMsg: "",
            topicErrMsg: "",
            disFlag: true,
            topicFlag: "",
            finalFlag: false, 
            finalMsg: ''
        }
    );

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('birthdate', newUser.birthdate);
        formData.append('name', newUser.name);

        axios.post('http://localhost:5000/users/add/', formData)
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
    }

    const handleChange = (e) => {
        setNewUser({ ...newUser, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewUser({ ...newUser, photo: e.target.files[0] });
    }

    return (
        <div className="main blogform-container">
            <section className="aboutus">
                <h1>ADD BLOG</h1>

            </section>
            <div className="container">
                <h2>ADD BLOG</h2>
                <form onSubmit={handleSubmit} encType='multipart/form-data'>
                    <div className="inner">
                        <div className=" box">
                            <p>Fields with <span className="text-danger">*</span> are required</p>
                        </div>
                        <div className="text-start box">
                            <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                            <input placeholder="Title" id="validationTooltip01" className=" form-control" name="topic" value={newUser.topic} onChange={handleChange}></input>
                            {newUser.topicFlag === "on" &&
                                <p className="text-danger">{newUser.topicErrMsg}</p>}
                        </div>
                        <div className="box">
                            <div className="mb-3">
                                <label className="me-2"><b>Image<span className="text-danger">*</span>:</b></label>
                                <input
                                    type="file"
                                    accept=".png, .jpg, .jpeg"
                                    name="photo"
                                    onChange={handlePhoto}
                                />
                                <div className="invalid-feedback">Example invalid form file feedback</div>
                            </div>
                        </div>

                        <div className="box">
                            <label className="me-3 mt-3"><b>Description<span className="text-danger">*</span></b></label>
                            <Editor style={{ height: '320px' }} value={newUser.text1} onTextChange={(e) =>  setNewUser({ ...newUser, text1: e.textValue })} />
                        </div>
                        {newUser.disFlag && <p className="text-danger ms-5">{newUser.dicErrMsg}</p>

                        }


                        <div className="mt-3 text-center">
                            {newUser.finalFlag &&
                                <Link to="/blog"><p className="text-success ms-5">{newUser.finalMsg}</p></Link>
                            }
                            <button type="submit" className="btn form_button btn-success ">
                                Save
                            </button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    );
}

export default User;
