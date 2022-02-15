import React from "react";
import arrow from "./assets/img/Icon (1).png";
import "./assets/styles.css";

class Blogtable extends React.Component {
    render() {
        return (
            <div>
                <section className="blog">
                    <h1 className="text-center">Blog</h1>
                    <p className="aboutus-content text-center">Home/Blog</p>
                </section>
                <section class="blog-content">
                    <article class="text-center txt">The latest and best articles selected by our editorial choice</article>
                </section>
                <section className="text-center">
                    <div className="d-lg-flex justify-content-between main_box ">
                        <div className="left_box">
                            <div className="first_box md-2"><p className="info">ONLINE PLATFORM TO BRIDGE IN LIVESTOCK.....</p></div>
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