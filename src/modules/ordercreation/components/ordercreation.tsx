import React, { useState } from 'react';
import DimesionalPage from './3d_page/dimensionalpage';
// import DimesionalPage from './3d_page/dimensionalpage'
import './ordercreation.scss'
import { connect } from "react-redux";

function BuyNow(props: any) {
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [sex, setSex] = useState("");
    const [weight, setWeight] = useState("");
    const [breed, setBreed] = useState("");
    const [cow,setCow]=useState(["Aberdeen","Holstein","Hereford","simmental"]);
    const [sheep,setSheep]=useState(["Boer","American Pygmy","Saanen goat","angora"]);
    const [pig,setPig]=useState(["Duroc","Large White","Hampshire","Large Black"]);


    const [typeerrmsg, setTypeerrmsg] = useState("");
    const [quantityerrmsg, setQuantityerrmsg] = useState("");
    const [sexerrmsg, setSexerrmsg] = useState("");
    const [weighterrmsg, setWeighterrmsg] = useState("");
    const [breederrmsg, setBreederrmsg] = useState("");
    const [productdetailsflag, setProductdetailsflag] = useState(true);

    const productsubmitHandler = (e: any, productDetails: any) => {
        setProductdetailsflag(false);
        // console.log("props in products", props);
        // console.log("productdetails", productDetails);
        props.storeProductdetails(productDetails);
    }
    function Validate(event: any) {
        let name = event.target.name;
        let value = event.target.value;
        // console.log(name); 
        // console.log(value);
        if (name === "Type") {
            console.log(value);

            if (value === "") {
                setTypeerrmsg("please select the type*")
                event.target.classList.add("field-error")
            } else {
                event.target.classList.remove("field-error")
                setTypeerrmsg("");
                setType(value);
                // console.log(value);

            }
        }
        else if (name === "Quantity") {
            if (value === "") {
                setQuantityerrmsg("please select the Quantity*")
                event.target.classList.add("field-error")
            } else {
                event.target.classList.remove("field-error")
                setQuantityerrmsg("");
                setQuantity(value);
            }
        }
        else if (name === "Sex") {
            if (value === "") {
                setSexerrmsg("please select the Sex*")
                event.target.classList.add("field-error")
            } else {
                event.target.classList.remove("field-error")
                setSexerrmsg("");
                setSex(value);
            }
        }
        else if (name === "Weight") {
            if (value === "") {
                setWeighterrmsg("please select the Weight*")
                event.target.classList.add("field-error")
            } else {
                event.target.classList.remove("field-error")
                setWeighterrmsg("");
                setWeight(value);
            }
        }
        else if (name === "Breed") {
            if (value === "") {
                setBreederrmsg("please select the Breed*")
                event.target.classList.add("field-error")
            } else {
                event.target.classList.remove("field-error")
                setBreederrmsg("");
                setBreed(value);
            }
        }
    }
    return (
        <>
            <div>

                {/* <a className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ordercreation</a> */}

                <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" tabIndex={-1}>
                    <div className="modal-dialog modal-xl" >
                        <div className="modal-content">
                            {productdetailsflag &&
                                <div className='modal-body ordercreation-container'>
                                    <div className="text-center popupheading">
                                        <p>Yor are one step closer to buying your livestock</p>
                                    </div>
                                    <div className="form-paragraph  ">
                                        <p>Fill in the required information</p>
                                    </div>
                                    <div className='viewall-icon'>
                                        <img src={require("./assets/viewallproductsicon.png")} />
                                    </div>
                                    <form onSubmit={(e) => productsubmitHandler(e, { type, quantity, weight, sex, breed })}>
                                        <div className='row'>
                                            <div className="col-md-2 productype-dropdown" >
                                                <div className="dropdown" >
                                                    <select name="Type" required value={type} onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select" >
                                                        <option hidden value="">Type</option>
                                                        <option value="Cow">Cow</option>
                                                        <option value="Goat">Goat</option>
                                                        <option value="Pig">Pig</option>
                                                    </select>
                                                    <p className='text-danger'>{typeerrmsg}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">
                                                <div className="dropdown" >
                                                    <select name="Quantity" required value={quantity} onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select" >
                                                        <option hidden value="">Quantity</option>
                                                        <option value="One">One</option>
                                                        <option value="Two">Two</option>
                                                        <option value="Three">Three</option>
                                                    </select>
                                                    <p className='text-danger'>{quantityerrmsg}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">

                                                <div className="dropdown">
                                                    <select name="Sex" value={sex} required onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select" >
                                                        <option hidden value="">Sex</option>
                                                        <option value="Male">Male</option>
                                                        <option value="Female">Female</option>
                                                    </select>
                                                    <p className='text-danger'>{sexerrmsg}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">

                                                <div className="dropdown">
                                                    <select name="Weight" required value={weight} onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select" >
                                                        <option hidden value="">Weight</option>
                                                        <option value="One">One</option>
                                                        <option value="Two">Two</option>
                                                        <option value="Three">Three</option>
                                                    </select>
                                                    <p className='text-danger'>{weighterrmsg}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-2">

                                                <div className="dropdown">
                                                    <select name="Breed" required value={breed} onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select">
                                                        <option hidden value="">Breed</option>
                                                        {
                                                            type != " " &&
                                                              type ==="Cow" &&
                                                                 cow.map((item,i)=>{
                                                                     return(<option value={item} key={i}>{item}</option>)
                                                                 })       
                                                        }
                                                        {
                                                            type != " " &&
                                                              type ==="Goat" &&
                                                                 sheep.map((item,i)=>{
                                                                     return(<option value={item} key={i}>{item}</option>)
                                                                 })       
                                                        }
                                                        {
                                                            type != " " &&
                                                              type ==="Pig" &&
                                                                 pig.map((item,i)=>{
                                                                     return(<option value={item} key={i}>{item}</option>)
                                                                 })       
                                                        }
                                                        {/* <option value="One">One</option>
                                                        <option value="Two">Two</option>
                                                        <option value="Three">Three</option> */}
                                                    </select>
                                                    <p className='text-danger'>{breederrmsg}</p>

                                                </div>
                                                <div className='cart-icon'>
                                                    <img src={require("./assets/addtocarticon.png")} />
                                                </div>
                                            </div>

                                        </div>
                                        <div className="mb-3">
                                        <button  className="continuebutton btn btn-success">Continue</button>
                                    </div>
                                    </form>
                                    
                                </div>
                            }
                            {!productdetailsflag&&
                                <DimesionalPage></DimesionalPage>
                            }

                        </div>
                    </div>
                </div >
                <button className="buy-button text-white" onClick={()=>setProductdetailsflag(true)} data-bs-toggle="modal" data-bs-target="#exampleModal">Buy Now</button>

            </div >
            
        </>
    )

}
const mapStateToProps = (state: any) => {
    return {
        ...state
    }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {
        storeProductdetails: (productDetails: any) => dispatch({ type: 'store_productdetails', productDetails }),
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(BuyNow);