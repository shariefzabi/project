import React, { useState } from 'react';
import DimesionalPage from './3d_page/dimensionalpage';
// import DimesionalPage from './3d_page/dimensionalpage'
import './ordercreation.scss'
import mapDispatchToProps from "../ordercreationstate/ordercreationactions";
import mapStateToProps from "../ordercreationstate/orderstateMap";
import { connect } from "react-redux";

function BuyNow(props:any) {
    const [type, setType] = useState("");
    const [quantity, setQuantity] = useState("");
    const [sex, setSex] = useState("");
    const [weight, setWeight] = useState("");
    const [breed, setBreed] = useState("");

    const [typeerrmsg, setTypeerrmsg] = useState("");
    const [quantityerrmsg, setQuantityerrmsg] = useState("");
    const [sexerrmsg, setSexerrmsg] = useState("");
    const [weighterrmsg, setWeighterrmsg] = useState("");
    const [breederrmsg, setBreederrmsg] = useState("");
    const onsubmitHandler=(e:any,productDetails:any)=>{
        console.log("props in products",props);
        console.log("productdetails",productDetails);  
        props.storeProductdetails(productDetails);
    }
    function Validate(event:any) {
        let name = event.target.name;
        let value = event.target.value; 
        // console.log(name); 
        // console.log(value);
         if (name === "Type") { 
             console.log(value);
             
             if (value === "") {
                setTypeerrmsg("please select the type*") 
        } else {
            setTypeerrmsg(""); 
            setType(value);
            // console.log(value);
            
        }
    }
        else if(name==="Quantity"){
            if(value===""){
                setQuantityerrmsg("please select the Quantity*") 
            } else {
                setQuantityerrmsg(""); 
                setQuantity(value);
            }
        }
        else if(name==="Sex"){
            if(value===""){
                setSexerrmsg("please select the Sex*") 
            } else {
                setSexerrmsg(""); 
                setSex(value);
            }
        }
        else if(name==="Weight"){
            if(value===""){
                setWeighterrmsg("please select the Weight*") 
            } else {
                setWeighterrmsg(""); 
                setWeight(value);
            }
        }
        else if(name==="Breed"){
            if(value===""){
                setBreederrmsg("please select the Breed*") 
            } else {
                setBreederrmsg(""); 
                setBreed(value);
            }
        }
     }
    return (
        <>
        <div className='ordercreation-container'>
            
            {/* <a className="btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">ordercreation</a> */}

            <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true" tabIndex={-1}>
                <div className="modal-dialog modal-xl" >
                    <div className="modal-content">
                        <div className='modal-body'>
                            <div className="text-center popupheading">
                                <p>Yor are one step closer to buying your livestock</p>
                            </div>
                            <div className="form-paragraph  ">
                                <p>Fill in the required information</p>
                            </div>
                            <div className='viewall-icon'>
                                <img src={require("./assets/viewallproductsicon.png")} />
                            </div>
                            <form>
                                <div className='row'>
                                    <div className="col-md-3 productype-dropdown" >
                                        <div className="dropdown" >
                                        <select name = "Type" value ={type} onChange = {(event) => Validate(event)} onBlur = {(event) => Validate(event)} className="form-select" >
                                            <option  hidden value="">Type</option>
                                            <option value="Cow">Cow</option>
                                            <option value="Goat">Goat</option>
                                            <option value="Pig">Pig</option>
                                        </select>
                                        <p className='text-danger'>{typeerrmsg}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">
                                        <div className="dropdown" >
                                        <select  name = "Quantity" value ={quantity} onChange = {(event) => Validate(event)} onBlur = {(event) => Validate(event)} className="form-select" >
                                            <option  hidden  value="">Quantity</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                        <p className='text-danger'>{quantityerrmsg}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-1">

                                        <div className="dropdown">
                                        <select name = "Sex" value = {sex} onChange = {(event) => Validate(event)} onBlur = {(event) => Validate(event)} className="form-select" >
                                            <option  hidden value="">Sex</option>
                                            <option value="Male">Male</option>
                                            <option value="Female">Female</option>
                                        </select>
                                        <p className='text-danger'>{sexerrmsg}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">

                                        <div className="dropdown">
                                        <select name = "Weight" value ={weight} onChange = {(event) => Validate(event)} onBlur = {(event) => Validate(event)} className="form-select" >
                                            <option  hidden value="">Weight</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                        <p className='text-danger'>{weighterrmsg}</p>
                                        </div>
                                    </div>
                                    <div className="col-md-2">

                                        <div className="dropdown">
                                        <select name = "Breed" value ={breed} onChange = {(event) => Validate(event)} onBlur = {(event) => Validate(event)} className="form-select">
                                            <option  hidden value="">Breed</option>
                                            <option value="One">One</option>
                                            <option value="Two">Two</option>
                                            <option value="Three">Three</option>
                                        </select>
                                        <p className='text-danger'>{breederrmsg}</p>

                                        </div>
                                        <div className='cart-icon'>
                                            <img src={require("./assets/addtocarticon.png")} />
                                        </div>
                                    </div>
                                    
                                </div>
                            </form>
                            <div className="mb-3">
                                        <button className="continuebutton btn btn-success" onClick={(e)=>onsubmitHandler(e,{type,quantity,weight,sex,breed})} data-bs-toggle="modal" data-bs-target="#dimensionalModal" data-bs-whatever="@mdo">Continue</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
            <button className="buy_button" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@mdo">Buy Now</button>
            
        </div >
        <DimesionalPage></DimesionalPage>
        </>
    )

}
export default connect(mapStateToProps,mapDispatchToProps)(BuyNow);