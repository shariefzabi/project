import React from "react"
import "./assets/blogContent.css"

class Blogcontent extends React.Component{
    render(){
        return(
            <div>
                <div className="main-box">
                    {/* <img src="./blogContent/rectangle.png"></img> */}
                    {/* <img className="blog-content-img" src={require("./rectangle.png")} alt="logo2" /> */}

                    <div className="top-buttons">
                        <button type="button" className="btn-success"></button>
                        <button type="button" className="btn-primary"></button>
                    </div>
                </div>

                <section>
                    <div className="title">
                        <h1>THE MERIT OF RUNNING AN AGRICULTURAL BUSINESS IN NIGERIA 2019</h1>
                        <p>july 12 2019</p>
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
                </section>
            </div>
        )
    }

    
}
export default Blogcontent;