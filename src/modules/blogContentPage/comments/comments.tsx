import React from "react";
import "./styles.css";
import axios from "axios";

class Comment extends React.Component<any, any> {

    constructor(props: any) {
        super(props);
        this.state = {
            comments: [],
        }

    }
    componentDidUpdate(prevProps:any) {
        if(prevProps.id !== this.props.id){
        axios.get("http://localhost:3005/comments/"+this.props.id)
            .then(res => {
                // console.log(res.data)
                this.setState({ comments: res.data })
            })}
    }
    render() {
        // console.log("comments get :"+this.props.id);
        
        // axios.get("http://localhost:3005/comments/" + this.props.id)
        //     .then(res => {
        //         // console.log(res.data)
        //         this.setState({ comments: res.data })
        //         // res.data.map((e: any, i: any) => {
        //         //     this.setState({ comments: [...this.state.comments, e.comments] })
        //         // })
        //     })
        let total = 0
        return (
            <section className="clients">
                <div className=" head-part">
                    <h2>Satisfied Client Comments</h2>
                </div>
                <div className="d-flex comment_box">
                    {this.state.comments.map((e: any, i: any) => {
                        return (
                            <div className="card p-4 m-3" key={i}>
                                <p className="carousel-description">{e.comment}</p>
                                <div className="d-flex flex-row justify-content-between">
                                    <div className="d-flex align-items-center">
                                        <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
                                        <label htmlFor="radiobtn" className="client-details">{e.name}</label>
                                    </div>
                                    <div>
                                        <p className="client-details mt-3">{e.email}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}



                </div>
            </section>
        )
    }
}

export default Comment;

// return (
{/* <div className="card p-4 m-3" key={i}>
    <p className="carousel-description">{e.comment}</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">{e.name}</label>
        </div>
        <div>
            <p className="client-details mt-3">{e.email}</p>
        </div>
    </div>
</div> */}
// )




{/* <div className="d-lg-flex">
<div className="card p-4 m-3">
    <p className="carousel-description">I really love the product and the delight coupons you
        guys always serve me with</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Daniel Toyin</label>
        </div>
        <div>
            <p className="client-details mt-3">Sales Rep. Vegax Initiative</p>
        </div>
    </div>
</div>
<div className="card p-4 m-3">
    <p className="carousel-description">Quality product for the money</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Ogunbiyi Ibrahim</label>
        </div>
        <div>
            <p className="client-details mt-3">Marketer. Dreamland Tech.</p>
        </div>
    </div>
</div>
<div className="card p-4 m-3">
    <p className="carousel-description">I highly recommend this service</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Chukwu Ebuka</label>
        </div>
        <div>
            <p className="client-details mt-3">Ceo. Spareparts</p>
        </div>
    </div>
</div>
</div>
</div>
<div className="carousel-item">
<div className="d-flex">
<div className="card p-4 m-3">
    <p className="carousel-description">I really love the product and the delight coupons
        you
        guys always serve me with</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Daniel Toyin</label>
        </div>
        <div>
            <p className="client-details mt-3">Sales Rep. Vegax Initiative</p>
        </div>
    </div>
</div>
<div className="card p-4 m-3">
    <p className="carousel-description">Quality product for the money</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Ogunbiyi Ibrahim</label>
        </div>
        <div>
            <p className="client-details mt-3">Marketer. Dreamland Tech.</p>
        </div>
    </div>
</div>
<div className="card p-4 m-3">
    <p className="carousel-description">I highly recommend this service</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Chukwu Ebuka</label>
        </div>
        <div>
            <p className="client-details mt-3">Ceo. Spareparts</p>
        </div>
    </div>
</div>
</div>
</div>
<div className="carousel-item">
<div className="d-flex">
<div className="card p-4 m-3">
    <p className="carousel-description">I really love the product and the delight coupons
        you
        guys always serve me with</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Daniel Toyin</label>
        </div>
        <div>
            <p className="client-details mt-3">Sales Rep. Vegax Initiative</p>
        </div>
    </div>
</div>
<div className="card p-4 m-3">
    <p className="carousel-description">Quality product for the money</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Ogunbiyi Ibrahim</label>
        </div>
        <div>
            <p className="client-details mt-3">Marketer. Dreamland Tech.</p>
        </div>
    </div>
</div>
<div className="card p-4 m-3">
    <p className="carousel-description">I highly recommend this service</p>
    <div className="d-flex flex-row justify-content-between">
        <div className="d-flex align-items-center">
            <input type="radio" className="carousel-radio m-2" id="radiobtn" name="radio" />
            <label htmlFor="radiobtn" className="client-details">Chukwu Ebuka</label>
        </div>
        <div>
            <p className="client-details mt-3">Ceo. Spareparts</p>
        </div>
    </div>
</div>
</div>
</div> */}