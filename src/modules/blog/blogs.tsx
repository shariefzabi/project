import React from "react";
import arrow from "./assets/img/Icon (1).png";
import axios from "axios"
import './assets/styles.css'

class Blogtable extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
        this.state = {
            blogs: [],
        }
    }
    init(){
        axios.get("http://localhost:3005/blogs")
            .then(res => {
                this.setState({ blogs: res.data})
                console.log(this.state.blogs);
                
            })
    }
    render() {
        return (
            <div onLoad={this.init}>
                <section className="blog text-center">
                    <h1 >Blog</h1>
                    <span className="aboutus-content ">Home/Blog</span>
                </section>
                <section className="blog-content">
                    <article className="text-center txt">The latest and best articles selected by our editorial choice</article>
                </section>
                <section className="text-center">
                    <div className="d-lg-flex justify-content-between main_box  ">
                        <div className="left_box">
                            <div className="first_box md-2 "><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p></div>
                            <div className="d-lg-flex justify-content-between two_box">
                                <div className="second_box"><p className="info_ver">WHY DO ROASTERS
                                    CROW ALL DAY?</p> </div>
                                <div className="third_box "><p className="info_ver">THE MERIT OF RUNNING
                                    AN AGRICU-LTURAL BU.....</p></div>
                            </div>
                            <div className="img_hor"><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p><img className="arrow_img" src={arrow} /></div>
                            <div className="d-lg-flex justify-content-between two_box">
                                <div className="second_box"><p className="info_ver">COW MILK
                                    SHOULDN’T BE CONSUM....</p> </div>
                                <div className="third_box"><p className="info_ver">THE MERIT OF RUNNING
                                    AN AGRICU-LTURAL BU.....</p></div>
                            </div>
                        </div>
                        <div className="right_box">
                            <div className="d-lg-flex justify-content-between two_box">
                                <div className="second_box "><p className="info_ver">COW MILK
                                    SHOULDN’T BE CONSUM....</p> </div>
                                <div className="third_box img_box"><p className="info_ver">THE MERIT OF RUNNING
                                    AN AGRICU-LTURAL BU.....</p><img className="arrow_img" src={arrow} /></div>
                            </div>
                            <div className="first_box md-2"><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p></div>
                            <div className="d-lg-flex justify-content-between two_box">
                                <div className="second_box"><p className="info_ver">COW MILK
                                    SHOULDN’T BE CONSUM....</p> </div>
                                <div className="third_box"><p className="info_ver">THE MERIT OF RUNNING
                                    AN AGRICU-LTURAL BU.....</p></div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        );
    }
}

export default Blogtable;