import React, { useEffect, useState } from 'react';
import DimesionalPage from './3d_page/dimensionalpage';
// import DimesionalPage from './3d_page/dimensionalpage'
import './ordercreation.scss'
import { connect } from "react-redux";
import Modal from '@mui/material/Modal';
import axios from 'axios';

function BuyNow(props: any) {
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [selectdata, setSelectData] = useState<any[]>([]);
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
    const [productdetailsflag, setProductdetailsflag] = useState(true);
    const [addFlag, setAddFlag] = useState(false);
    const [viewFlag, setViewFlag] = useState(false);
    const [Errmsg, setErrmsg] = useState('');
    useEffect(() => {
        axios.get("http://localhost:3005/orders/productfilters")
            .then((res) => {
                console.log("product details from be", res.data)
                setSelectData(res.data)
            })
            .catch((err) => console.log(err)
            )
        return () => {
            setOpen(false)
        }
    }, [])

    const productsubmitHandler = (e: any, productDetails: any) => {
        e.preventDefault();
        if (props.user != null)
            setProductdetailsflag(false);
        // console.log("props in products", props);
        // console.log("productdetails", productDetails.type);
        // if (productDetails.type === 'Cow') {
        //     productDetails.price = productDetails.quantity * productDetails.weight * 50000;
        //     // setPrice(productDetails.quantity*productDetails.weight*50000);
        // } else if (productDetails.type === 'Goat') {
        //     productDetails.price = productDetails.quantity * productDetails.weight * 10000;
        // } else {
        //     productDetails.price = productDetails.quantity * productDetails.weight * 5000;
        // }
        // productDetails.delprice = 2000;
        // productDetails.totalprice = productDetails.price + productDetails.delprice;
        // productDetails.price=price;
        if (type != '' && quantity != '' && breed != '' && weight != '' && sex != '')
            props.storeProductdetails(productDetails);
        // console.log("productdetails", productDetails);
    }
    const addProduct = (products: any) => {
        setAddFlag(true);
        if (type != '' && quantity != '' && breed != '' && weight != '' && sex != '') {
            props.storeProductdetails(products);
        }
    }
    const resetHandler = (e: any) => {
        if (type === '' || quantity === '' || breed === '' || weight === '' || sex === '')
            setErrmsg("please select all details")
        if (type != '' && quantity != '' && breed != '' && weight != '' && sex != '') {
            setType(" ");
            setQuantity("");
            setBreed("");
            setWeight("");
            setSex("");
        }
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
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-describedby="modal-modal-description"
                sx={{ overflow: 'auto' }}
            >
                <>
                    {productdetailsflag &&
                        <div className='order-modal'>
                            <div className='ordercreation-container position-relative'>
                                <div className="text-center popupheading">
                                    <p>Yor are one step closer to buying your livestock</p>
                                </div>
                                <div className="form-paragraph  ">
                                    <p>Fill in the required information</p>
                                    {props.user === null &&
                                        <p className='text-danger text-center'>please login to your account</p>}
                                    {Errmsg != '' &&
                                        <p className='text-danger text-center'>{Errmsg}</p>
                                    }
                                </div>
                                <div className='viewall-icon'>
                                    <button className='cart-button' onClick={() => setViewFlag(true)}><img src={require("./assets/viewallproductsicon.png")} /></button>
                                </div>
                                <form onSubmit={(e) => productsubmitHandler(e, { type, quantity, weight, sex, breed })}>
                                    {addFlag === true &&
                                        !viewFlag &&
                                        Errmsg === '' &&
                                        <p className='text-primary text-center'>filter added</p>
                                    }

                                    {/* {!viewFlag && */}
                                    <div className='row'>
                                        <div className="col-md-2 productype-dropdown" >
                                            <div className="dropdown" >
                                                <select name="Type" required value={type} onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select" >
                                                    <option hidden value="">Type</option>
                                                    {
                                                        selectdata.map((item: any, i: any) => {
                                                            return (
                                                                item.Types.map((e: any, i: any) => {
                                                                    return (<option key={i} value={e}>{e}</option>)
                                                                })
                                                            )
                                                        })
                                                    }
                                                </select>
                                                <p className='text-danger'>{typeerrmsg}</p>
                                            </div>
                                        </div>
                                        <div className="col-md-2">
                                            <div className="dropdown" >
                                                <select name="Quantity" required value={quantity} onChange={(event) => Validate(event)} onBlur={(event) => Validate(event)} className="form-select" >
                                                    <option hidden value="">Quantity</option>
                                                    <option value="1">1</option>
                                                    <option value="2">2</option>
                                                    <option value="3">3</option>
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
                                                    <option value="1">1 KG</option>
                                                    <option value="2">2 KG</option>
                                                    <option value="3">3 KG</option>
                                                    <option value="4">4 KG</option>
                                                    <option value="5">5 KG</option>
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
                                                        type === "Cow" &&
                                                        selectdata[0].cowbreed.map((item: any, i: any) => {
                                                            return (<option value={item} key={i}>{item}</option>)
                                                        })
                                                    }
                                                    {
                                                        type != " " &&
                                                        type === "Goat" &&
                                                        selectdata[0].goatbreed.map((item: any, i: any) => {
                                                            return (<option value={item} key={i}>{item}</option>)
                                                        })
                                                    }
                                                    {
                                                        type != " " &&
                                                        type === "Pig" &&
                                                        selectdata[0].pigbreed.map((item: any, i: any) => {
                                                            return (<option value={item} key={i}>{item}</option>)
                                                        })
                                                    }
                                                </select>
                                                <p className='text-danger'>{breederrmsg}</p>

                                            </div>
                                            <div className='cart-icon'>
                                                <button className='cart-button' type='button' onClick={(e: any) => { addProduct({ type, quantity, weight, sex, breed }); resetHandler(e) }}><img src={require("./assets/addtocarticon.png")} /></button>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="mb-3">
                                        <button className="continuebutton btn btn-success">Continue</button>
                                    </div>
                                </form>
                            </div>

                        </div >
                    }
                    { !productdetailsflag  &&
                        <DimesionalPage></DimesionalPage>
                    }
                </>
            </Modal>
            <button className="buy-button text-white" onClick={() => { handleOpen(); setProductdetailsflag(true) }} >Buy Now</button>
        </div >

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