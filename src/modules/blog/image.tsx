import React from "react";

import frontarrow from "./assets/img/frontarrow.png";
import backarrow from "./assets/img/backarrow.png";

class Image extends React.Component {
    render() {
        return (
            <div>
                <section className="aboutus d-flex justify-content-end align-items-end">
                    <div className="button-arrow">
                        <button className="btn btn-success arrow-button"><img className="arrow-img" src={frontarrow} /></button>
                        <button className="btn btn-primary arrow-button"><img className="arrow-img" src={backarrow} /></button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Image;
