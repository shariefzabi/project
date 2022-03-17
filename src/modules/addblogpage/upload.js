import React, { useState } from 'react';
import axios from 'axios';
import { Editor } from 'primereact/editor';
import 'primereact/resources/primereact.min.css'
import './newStyle.css'

const User = () => {
    const [newUser, setNewUser] = useState(
        {
            topic: '',
            date: Date(),
            photo: '',
            about: ''
        }
    );
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('photo', newUser.photo);
        formData.append('date', newUser.date);
        formData.append('topic', newUser.topic);
        formData.append('about', newUser.about);

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
                />
                </div>
                <div className="text-start box">
                 <label className="me-2"><b>Title<span className="text-danger">*</span>:</b></label>
                <input
                    type="text"
                    className='form-control'
                    placeholder="topic"
                    name="topic"
                    value={newUser.topic}
                    onChange={handleChange}
                /></div>
                <div className="text-start box">
                <label className="me-3 mt-3"><b>Description<span className="text-danger">*</span></b></label>
                <Editor
                    style={{ height: '320px' }}
                    value={newUser.about}
                    onTextChange={(e) => { setNewUser({ ...newUser, about: e.textValue }) }} />
                </div>
                <div className="mt-3 text-center">
                <button
                    type="submit"
                    className='btn form_button btn-success '
                >submit</button></div>
                
            </form></div>
    </>
    );
}

export default User;