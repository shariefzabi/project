import React from "react";



class Form extends React.Component {
    render() {
        return (
            <div>
                <section class="form">
                    <h2> Leave A Comment</h2>
                    <p>Your email address will not be published but saved for the next time you comment.</p>
                    <form>
                        <span class="col-12 row">
                            <div class="col-md-6 col-sm-12">
                                <label class="col-12" for="name">Full Name</label>
                                <input class="col-12 input-x" type="text" name="name" placeholder="Full Name"></input>
                            </div>
                            <div class="col-md-6 col-sm-12">
                                <label class="col-12" for="email">Email</label>
                                <input class="col-12 input-x" type="email" name="email" placeholder="Email"></input>
                            </div>
                            <div>
                                <label class="col-12" for="comments">comment</label>
                                <textarea class="col-12 comment" placeholder="Your Comments" name="comments"></textarea>
                            </div>
                        </span>
                        <div>
                            <button class="btn btn-success sub-btn">Submit</button>
                        </div>
                    </form>
                </section>

            </div>
        )
    }
}

export default Form;