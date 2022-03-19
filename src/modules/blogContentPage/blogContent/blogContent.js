import React from "react"
import "./assets/blogContent.css"
import axios from "axios"
import Comment from "../comments/comments"
import Form from "../comment_form/form"

class Blogcontent extends React.Component {
    constructor() {
        super()
        this.state = {
            blogs: [],
            id: 0,
            url:'http://localhost:3005/'
        }
    }
    componentDidMount() {
        axios.get("http://localhost:3005/blogs")
            .then(res => {
                // console.log(res.data);
                this.setState({ blogs: res.data })
                // console.log(this.state.blogs);
            })
        let params = (new URL(document.location)).searchParams;
        // console.log(params.get('id'));
        const id = params.get('id');
        const num = + id
        this.setState({ id: num })
    }
    carousel(v) {
        // let params = (new URL(document.location)).searchParams;
        if (v) {
            if (this.state.id === this.state.blogs.length ) {
                this.setState({ id: 1 })
            } else {
                this.setState({ id: this.state.id + 1 })
            }
        } else {
            if (this.state.id === 1) {
                this.setState({ id: this.state.blogs.length})
            } else {
                this.setState({ id: this.state.id - 1 })
            }
        }
    }
    render() {
        let { blogs, id } = this.state
        // console.log("blog id :" + id);
        return (

            <div>
                {/* <div className="main-box">
                    <div className="top-buttons">
                        <button type="button" className="btn-success left-carousel " onClick={() => { this.carousel(false) }}></button>
                        <button type="button" className="btn-primary right-carousel " onClick={() => { this.carousel(true) }}></button>
                    </div>
                </div> */}
                {blogs.map((e, i) => {
                    if (e.id == id)

                        return (
                        <div key={i}>
                            <div className="main-box">
                               <img className="main-img" src={this.state.url + e.photo} ></img>
                                <div className="top-buttons">
                                    <button type="button" className="btn-success left-carousel " onClick={() => { this.carousel(false) }}/>
                                    <button type="button" className="btn-primary right-carousel " onClick={() => { this.carousel(true) }}/>
                                </div>
                            </div>
                            <div className="contenttitle">
                                <p className="title">{e.topic}</p>
                                <p className="blogdate">{e.date.slice(0, 10)}</p>
                            </div>
                            <div className="discription">
                                <p className="txt">{e.about}</p>
                            </div>
                        </div>)

                }
                )}

                {/* <section>
                    <div className="contenttitle">
                        <p className="title1">THE MERIT OF RUNNING AN AGRICULTURAL BUSINESS IN NIGERIA 2019</p>
                        <p className="blogdate">july 12 2019</p>
                    </div>
                </section>
                <section className="discription">
                    <p className="txt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical Latin
                        literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable
                        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.</p>
                    <p className="txt">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                    <p className="txt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable
                        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.</p>
                    <p className="txt">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classNameical
                        Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at
                        Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem
                        Ipsum passage, and going through the cites of the word in classNameical literature, discovered the undoubtable
                        source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
                        of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular
                        during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.</p>
                    <p className="txt">The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections
                        1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact
                        original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
                </section> */}
                <Form id={this.state.id}></Form>
                <Comment id={this.state.id} />
            </div>
        )
    }


}
export default (Blogcontent);
// export default Blogcontent;