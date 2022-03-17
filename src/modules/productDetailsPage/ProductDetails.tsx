import React, { useState, useEffect } from "react";
import axios from 'axios';
import './productDetails.scss';
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Link } from "react-router-dom";
import { Accordion } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


var serverUrl = "http://localhost:3005/";
function ProductDetails(props: any) {

    let [products, setProducts] = useState([])
    let [location, setLocation] = useState(props.state.locName)
    let [market, setMarket] = useState('Cattle Market')
    // let [isDisplaying, setIsDisplaying] = useState(true)
    let [cattleFlag, setCattleFlag] = useState(true)
    let [sheepFlag, setSheepFlag] = useState(true)
    let [showCount, setShowCount] = useState(5)
    let [sortValue, setSortValue] = useState('default')
    let [id, setId] = useState('')

    let [productId, setProductId] = useState("")

    let [inWhishlist, setInWhishlist] = useState(false)


    const navigate = useNavigate();
    // let [isOpened, setIsOpened] = useState('')
    // let [marketType, setMarketType] = useState('cattleMarkets')


    console.log(location)
    useEffect(() => {
        axios.get("http://localhost:3005/market/marketDetails")
            .then(
                response => {
                    setProducts(response.data)
                    setLocation(props.state.locName)
                }
            )
    }, [props.state.locName]);


    const setLocationHandler = (event: any) => {
        setLocation(event.target.value)
        // setId('opened')


        if (event.target.id === "") {
            event.target.id = 'opened'
        } else if (event.target.id === "opened") {
            event.target.id = ''
        }
        // class_name = 'opened'
        // setIsOpened(class_name)
    }
    const productDataHandler = (e: any) => {
        e.preventDefault();
        navigate("/selectedProduct");
        props.setProductDetails(e.target.id)
        // setSelectedProduct(e.target.id)
        // console.log('sdfghj',selectedProduct)
    }

    const cattleMarkettHandler = () => {
        setCattleFlag(true)
        setSheepFlag(true)

        setMarket("Cattle Market")
        // setIsDisplaying(isDisplaying )







    }
    const sheepMarketHandler = () => {

        setMarket("Sheep Market")

        setCattleFlag(false)
        setSheepFlag(false)

    }


    const sortHandler = (event: any) => {
        setSortValue(event.target.value)
    }

    const showHandler = (event: any) => {
        setShowCount(event.target.value)
        console.log(market)
    }

    const addToCart = () => {
        alert("Added")
    }

    //post wishlist data
    let wishlistData = {}

    const addtoWishlist = (product: any) => {
        

        setInWhishlist(true)






        product.email = props.state.user.email
        wishlistData = { product }
        try {
            axios.post("http://localhost:3005/orders/wishlists", wishlistData)
        } catch (err) {
            console.error(err)
        }
    }
    //wishlist delete

    const deleteFromWishlist = (e: any) => {

        setInWhishlist(false)
        try {
            axios.delete("http://localhost:3005/orders/wishlists/" + e._id)
        } catch (err) {
            console.error(err)
        }
    }











    return (
        <div id="productPage" className="productPage">
            <Breadcrumb id="sub">
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/'>Home</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item>
                    <Link className="breadCrumbs" to='/products'>{location}</Link>
                </Breadcrumb.Item >
                <Breadcrumb.Item active>
                    {market}
                </Breadcrumb.Item>
            </Breadcrumb>
            <div className="container-fluid">
                <div className=" productdetails row ">
                    <div className="locBox col-3  mt-3 p-0 bg-white">
                        {
                            products.map((e: any, ind) => {
                                let index = "#collapse" + ind
                                let index2 = "collapse" + ind
                                return (

                                    <div data-bs-toggle="collapse" data-bs-target={index} aria-expanded="false" aria-controls="collapseExample" key={ind} >
                                        <button className="locbtn bg-white text-start px-3" id={id} onClick={setLocationHandler} value={e.locationName}>{e.locationName}</button>

                                        <div className="collapse" id={index2}>
                                            <ul>
                                                <li ><button className="marketButton " onClick={cattleMarkettHandler} ><span className="blue mx-3">&#9679;</span>Cattle Market<span>({e.cattleMarkets.length})</span></button></li>
                                                <li ><button className="marketButton " onClick={sheepMarketHandler} ><span className="blue mx-3">&#9679;</span>Sheep Market<span>({e.sheepMarkets.length})</span></button></li>
                                            </ul>
                                        </div>

                                    </div>

                                )
                            })
                        }
                    </div>
                    <div className="productcards col-9 ">
                        <h3 id="marketHeading">{market}</h3>
                        <h4 id="locationMarketHeading">{location} {market}</h4>
                        {/* <hr /> */}
                        <div className="horizontalRule"></div>
                        <div className="sort-filter mt-5 mb-5 d-flex justify-content-end">
                            <p className="sort d-inline pt-2">Sort by</p>
                            <select className="dropdownToggle1"
                                onChange={sortHandler}
                                placeholder="Default"
                                required>
                                <option className="dropdownItem" selected value="default">Default</option>
                                <option className="dropdownItem" value="highToLow">Price High to Low</option>
                                <option className="dropdownItem" value="lowToHigh">Price Low To High</option>
                            </select>
                            <p className="sort d-inline pt-2">Show</p>
                            <select className="dropdownToggle2 "
                                placeholder="Default"
                                onChange={showHandler}
                                required>
                                <option className="dropdownItem" selected>5</option>
                                <option className="dropdownItem" >4</option>
                                <option className="dropdownItem" >3</option>
                            </select>
                        </div>
                        <div className="card-deck row row-cols-lg-3 row-cols-md-3 row-cols-sm-2 row-cols-2">
                            {cattleFlag &&
                                products.map((product: any, i) => {
                                    if (sortValue === "default") {
                                        if (product.locationName === location) {
                                            return (
                                                product.cattleMarkets.map((e: any, i: any) => {


                                                    let imagePath = "";
                                                    if (typeof e.image === 'object') {
                                                        imagePath = serverUrl + e.image.filename;
                                                    }

                                                    return (
                                                        <div key={i}>

                                                            <div className="card mb-4">
                                                                <div className="card-body" id={e._id}>
                                                                    {!inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => addtoWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                                                                    }
                                                                    {inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => deleteFromWishlist(e)}><img className="wishListImg" src={require("./assets/whislistDelete.png")}></img></button>
                                                                    }

                                                                    <div onClick={productDataHandler}>

                                                                        <img className="productImage" id={e._id} src={imagePath} />
                                                                        {/* <img src={`data:image/jpeg;based64,${e.image}`} /> */}

                                                                        <h5 className="card-id" id={e._id}>Animal ID: {e._id}</h5>

                                                                        <p className="card-price" id={e._id}>Price:{e.price}</p>
                                                                    </div>
                                                                    <div className=" text-center ">
                                                                        <button type="button" className="addcartbtn btn btn-success ">Add to Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            )
                                        }
                                    }// sort default end
                                    else if (sortValue === "highToLow") {
                                        if (product.locationName === location) {
                                            const highToLowData = [].concat(product.cattleMarkets).sort((a: any, b: any) => a.price < b.price ? 1 : -1)

                                            return (
                                                highToLowData.map((e: any, i: any) => {

                                                    let imagePath = "";
                                                    if (typeof e.image === 'object') {

                                                        imagePath = serverUrl + e.image.filename;
                                                    }
                                                    return (
                                                        <div key={i}>

                                                            <div className="card mb-4">
                                                                <div className="card-body" id={e._id}>
                                                                    {!inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => addtoWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                                                                    }
                                                                    {inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => deleteFromWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                    }                                                                    <div onClick={productDataHandler}>
                                                                        < img className="productImage" id={e._id} src={imagePath} />

                                                                        <h5 className="card-id" id={e._id}>Animal ID: {e._id}</h5>

                                                                        <p className="card-price" id={e._id}>Price:{e.price}</p>
                                                                    </div>

                                                                    <div className="text-center ">
                                                                        <button type="button" className="addcartbtn btn  btn-success" onClick={addToCart}>Add to Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            )
                                        }
                                    }//sort high to low
                                    else if (sortValue === "lowToHigh") {
                                        if (product.locationName === location) {
                                            const lowToHighData = [].concat(product.cattleMarkets).sort((a: any, b: any) => a.price < b.price ? -1 : 1)
                                            return (
                                                lowToHighData.map((e: any, i: any) => {

                                                    let imagePath = "";
                                                    if (typeof e.image === 'object') {
                                                        imagePath = serverUrl + e.image.filename;
                                                    }
                                                    return (
                                                        <div key={i}>

                                                            <div className="card mb-4">
                                                                <div className="card-body" id={e._id}>
                                                                    {!inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => addtoWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                                                                    }
                                                                    {inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => deleteFromWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                    }                                                                    <div onClick={productDataHandler}>
                                                                        <img className="productImage" id={e._id} src={imagePath} />

                                                                        <h5 className="card-id" id={e._id}>Animal ID: {e._id}</h5>

                                                                        <p className="card-price" id={e._id}>Price:{e.price}</p>
                                                                    </div>
                                                                    <div className=" text-center">
                                                                        <button type="button" className="addcartbtn btn btn-success">Add to Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            )
                                        }
                                    }//sort low to high

                                })
                            }
                            {!sheepFlag &&
                                products.map((product: any, i) => {
                                    if (sortValue === "default") {
                                        if (product.locationName === location) {
                                            return (
                                                product.sheepMarkets.map((e: any, i: any) => {

                                                    let imagePath = "";
                                                    if (typeof e.image === 'object') {
                                                        imagePath = serverUrl + e.image.filename;
                                                    }
                                                    return (
                                                        <div key={i}>

                                                            <div className="card mb-4">
                                                                <div className="card-body" id={e._id}>
                                                                    {!inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => addtoWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                                                                    }
                                                                    {inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => deleteFromWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                    }                                                                    <div onClick={productDataHandler}>
                                                                        <img className="productImage" id={e._id} src={imagePath} />

                                                                        <h5 className="card-id" id={e._id}>Animal ID: {e._id}</h5>

                                                                        <p className="card-price" id={e._id}>Price:{e.price}</p>
                                                                    </div>
                                                                    <div className="  text-center">
                                                                        <button type="button" className="addcartbtn btn btn-success">Add to Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            )
                                        }
                                    }// sort default end
                                    else if (sortValue === "highToLow") {
                                        if (product.locationName === location) {
                                            const highToLowData = [].concat(product.sheepMarkets).sort((a: any, b: any) => a.price < b.price ? 1 : -1)


                                            return (
                                                highToLowData.map((e: any, i: any) => {

                                                    let imagePath = "";
                                                    if (typeof e.image === 'object') {
                                                        imagePath = serverUrl + e.image.filename;
                                                    }
                                                    // console.log(e)
                                                    return (
                                                        <div key={i}>

                                                            <div className="card mb-4">
                                                                <div className="card-body" id={e._id}>
                                                                    {!inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => addtoWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                                                                    }
                                                                    {inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => deleteFromWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                    }                                                                    <div onClick={productDataHandler}>

                                                                        <img className="productImage" id={e._id} src={imagePath} />

                                                                        <h5 className="card-id" id={e._id}>Animal ID: {e._id}</h5>

                                                                        <p className="card-price" id={e._id}>Price:{e.price}</p>
                                                                    </div>
                                                                    <div className=" text-center">
                                                                        <button type="button" className="addcartbtn btn btn-success">Add to Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            )
                                        }
                                    }//sort high to low
                                    else if (sortValue === "lowToHigh") {
                                        if (product.locationName === location) {
                                            const lowToHighData = [].concat(product.sheepMarkets).sort((a: any, b: any) => a.price < b.price ? -1 : 1)
                                            return (
                                                lowToHighData.map((e: any, i: any) => {

                                                    let imagePath = "";
                                                    if (typeof e.image === 'object') {
                                                        imagePath = serverUrl + e.image.filename;
                                                    }
                                                    return (
                                                        <div key={i}>

                                                            <div className="card mb-4">
                                                                <div className="card-body" id={e._id}>
                                                                    {!inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => addtoWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>

                                                                    }
                                                                    {inWhishlist &&
                                                                        <button className="wishListButton" onClick={() => deleteFromWishlist(e)}><img className="wishListImg" src={require("./assets/wishlistimage.png")}></img></button>
                                                                    }                                                                    <div onClick={productDataHandler}>
                                                                        <img className="productImage" id={e._id} src={imagePath} />

                                                                        <h5 className="card-id" id={e._id}>Animal ID: {e._id}</h5>

                                                                        <p className="card-price" id={e._id}>Price:{e.price}</p>
                                                                    </div>
                                                                    <div className=" text-center">
                                                                        <button type="button" className="addcartbtn btn btn-success">Add to Cart</button>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    )
                                                })

                                            )
                                        }
                                    }//sort low to high

                                })
                            }
                        </div>
                    </div>
                </div>

            </div>


        </div >
    )
}
const mapStateToProps = (state: any) => {
    console.log(state);
    return { state }
}
const mapDispatchToProps = (dispatch: Function) => {
    return {

        setProductDetails: (productData: any) => dispatch({ type: 'storeProductData', payload: productData })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)


