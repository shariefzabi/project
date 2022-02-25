import React from "react";

import frontarrow from "./assets/img/frontarrow.png";
import backarrow from "./assets/img/backarrow.png";

class Image extends React.Component {
    render() {
        return (
            <div>
                <section class="aboutus d-flex justify-content-end align-items-end">
                    <div class="button-arrow">
                        <button class="btn btn-success arrow-button"><img class="arrow-img" src={frontarrow} /></button>
                        <button class="btn btn-primary arrow-button"><img class="arrow-img" src={backarrow} /></button>
                    </div>
                </section>
            </div>
        )
    }
}

export default Image;
