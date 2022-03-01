import React from "react";



class Form extends React.Component {
    render() {
        return (
            <div>
                <section className="form">
                    <h2> Leave A Comment</h2>
                    <p>Your email address will not be published but saved for the next time you comment.</p>
                    <form>
                        <span className="col-12 row">
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12" htmlFor="name">Full Name</label>
                                <input className="col-12 input-x" type="text" name="name" placeholder="Full Name"></input>
                            </div>
                            <div className="col-md-6 col-sm-12">
                                <label className="col-12" htmlFor="email">Email</label>
                                <input className="col-12 input-x" type="email" name="email" placeholder="Email"></input>
                            </div>
                            <div>
                                <label className="col-12" htmlFor="comments">comment</label>
                                <textarea className="col-12 comment" placeholder="Your Comments" name="comments"></textarea>
                            </div>
                        </span>
                        <div>
                            <button className="btn btn-success sub-btn">Submit</button>
                        </div>
                    </form>
                </section>

            </div>
        )
    }
}

export default Form;