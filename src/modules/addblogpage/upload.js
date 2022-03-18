import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Editor } from 'primereact/editor';
import 'primereact/resources/primereact.min.css'
import './newStyle.css'
import { Link } from 'react-router-dom';

const AddBlog = () => {
    const [newBlog, setNewBlog] = useState(
        {
            topic: '',
            date: Date(),
            photo: '',
            about: '',
            id:''
        }
    );
    const [topicMain, setTopicmain] = useState({
        flag: true,
        errMsg: ""
    })
    const [aboutMain, setAboutmain] = useState({
        flag: "",
        errMsg: ""
    })
    const [final, setFinal] = useState({
        flag: false,
        errMsg: ""
    })
    const validate = () => {
        if (newBlog.about == "" || newBlog.about.length === 0) {
            setAboutmain({ errMsg: "Please enter the Description.", flag: true })
            // console.log("errr");

        } else {
            if (newBlog.about.length < 150) {
                setAboutmain({ errMsg: "the Entered the Description in below 150 words ", flag: true })
            }
            else {
                setAboutmain({ errMsg: "", flag: false })
                // console.log(this.state.disFlag);
            }
        }
    }

    const validations = () => {
        if (newBlog.topic == undefined || newBlog.topic.length === 0) {
            setTopicmain({ errMsg: "Please enter the title.", flag: "on" })
        } else {
            // let nameReg =  /^([a-zA-Z0-9 ]{4,15})$/
            if (newBlog.topic.length <= 9) {
                setTopicmain({ errMsg: "Accepts Alphabets, space & Min 10 to Max 100 Char", flag: "on" })
            } else {
                setTopicmain({ errMsg: "", flag: "off" })
                // console.log(this.state.topicFlag);

            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (topicMain.flag === "off" && newBlog.about.length >= 100) {
            const formData = new FormData();
            formData.append('photo', newBlog.photo);
            formData.append('date', newBlog.date);
            formData.append('topic', newBlog.topic);
            formData.append('about', newBlog.about);
            formData.append('id', newBlog.id);

            axios.post('http://localhost:3005/blogs/add', formData)
                .then(res => {
                    console.log(res);
                    setNewBlog({
                        topic: '',
                        date: Date(),
                        photo: '',
                        about: ''
                    })
                    setTopicmain({
                        flag: true,
                        errMsg: ""
                    })
                    setAboutmain({
                        flag: "",
                        errMsg: ""
                    })
                    setFinal({
                        flag: true,
                        errMsg: "Blog Added in Blog List, click here for Blogs"
                    })
                })
                .catch(err => {
                    console.log(err);
                });
        } else {
            validate();
            validations();
        }

    }
    const handleChange = (e) => {
        setNewBlog({ ...newBlog, [e.target.name]: e.target.value });
    }

    const handlePhoto = (e) => {
        setNewBlog({ ...newBlog, photo: e.target.files[0] });
    }
    useEffect (()=>{
        axios.get("http://localhost:3005/blogs")
            .then(res => {
                setNewBlog({ ...newBlog, id: res.data.length +1 })
                // console.log(newBlog.id);
            })
      },[])
    return (<>

        <section className="aboutus">
            <h1>ADD BLOG</h1>

        </section>
        <div className="container">
            <h2>ADD BLOG</h2>
            <form className='inner' onSubmit={handleSubmit} encType='multipart/form-data'>
                <div className='box'>
                    <p>Fields with <span className="text-danger">*</span> are required</p>
                </div>
                <div className="text-start box">
                    <label className="me-2"><b>Image<span className="text-danger">*</span>:</b></label>
                    <input
                        type="file"
                        accept=".png, .jpg, .jpeg"
                        className='form-control'
                        name="photo"
                        onChange={handlePhoto}
                        required
                    />
                </div>
                <div className="text-start box">
                    <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                    <input
                        type="text"
                        className='form-control'
                        placeholder="topic"
                        name="topic"
                        value={newBlog.topic}
                        onChange={handleChange}
                        onBlur={validations}
                    />
                    {topicMain.flag === "on" &&
                        <p className="text-danger">{topicMain.errMsg}</p>}
                </div>
                <div className="text-start box">
                    <label className="me-3 mt-3"><b>Description<span className="text-danger">*</span></b></label>
                    <Editor
                        style={{ height: '320px' }}
                        value={newBlog.about}
                        onTextChange={(e) => { setNewBlog({ ...newBlog, about: e.textValue }) }} />
                    {aboutMain.flag &&
                        <p className="text-danger">{aboutMain.errMsg}</p>}
                </div>
                <div className="mt-3 text-center">
                    {final.flag &&
                        <Link to="/blog"><p className="text-success ms-5">{final.errMsg}</p></Link>
                    }
                    <button
                        type="submit"
                        className='btn form_button btn-success '
                    >submit</button></div>

            </form></div>
    </>
    );
}

export default AddBlog;