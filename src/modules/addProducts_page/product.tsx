import React from "react"
import "./product.css";


class Product extends React.Component <any, any>{

    constructor(props:any) {
        super(props);
        this.state = {
            image: "",
            quantity: "",
            weight: "",
            breed: "",
            source: "",
            location: "",

            breedErrMsg: "",
            locErrMsg: "",
            imgErrMsg: "",
            weightErrMsg: "",
            sourceErrMsg: "",
            quantityErrMsg: ""

        }
    }
    fieldChangeHandler = (e:any) => {
        // console.log(e);
        this.setState({ [e.target.name]: e.target.value });
    }
    imageChangeHandler = (e:any) => {
        if (e.target.files.length === 0) {
            return;
        }
        let profileImg = e.target.files[0];
        this.setState({ profileImg })
    }
    submitHandler = (e:any) => {
        // const isValid = this.validations()
        // if(this.validations()){
        //     this.setState(defaultstate);
        //     console.warn(this.state);
        // }
        e.preventDefault();
        console.log(this.state);
    }
    validations = (e:any) => {
        let isValid = true;
        if (e.target.name === 'image') {
            // let {imgErrMsg } = this.state;
            let imgErrMsg = "";
            if (e.target.files.length === 0) {
                imgErrMsg = "Please upload image";
            }
            else {
                imgErrMsg = "";
                this.setState({ [e.target.name]: e.target.files[0] });
            }
            this.setState({ imgErrMsg });
        }

        if (e.target.name === 'quantity') {
            let quantity = e.target.value;
            let quantityErrMsg = '';
            if (quantity == undefined || quantity.length === 0) {
                quantityErrMsg = "Please enter quantity."
                this.setState({ quantityErrMsg })
                e.target.classList.add("field-error")
            } else {
                let quantityReg = /^0*[1-9]\d*$/
                console.log(quantity);
                console.log(quantityReg);
                console.log(quantityReg.test(quantity));
                if (!quantityReg.test(quantity)) {
                    let quantityErrMsg = "Quantity value must be greater thaan 0"
                    this.setState({ quantityErrMsg })
                    e.target.classList.add("field-error")
                }
                else {
                    let quantityErrMsg = ""
                    this.setState({ quantityErrMsg })
                    e.target.classList.remove("field-error")
                }
            }
        }
        if (e.target.name === 'weight') {
            let weight = e.target.value;
            let weightErrMsg = "";
            if (weight == undefined || weight.length === 0) {
                weightErrMsg = "Please enter weight."
                this.setState({ weightErrMsg })
                e.target.classList.add("field-error")

            } else {
                let weightReg = /^[1-9]+(\Bkg|Kg)/
                console.log(weight);
                console.log(weightReg);
                console.log(weightReg.test(weight));
                if (!weightReg.test(weight)) {
                    let weightErrMsg = "Enter a valid weight"
                    this.setState({ weightErrMsg })
                    e.target.classList.add("field-error")
                }
                else {
                    let weightErrMsg = ""
                    this.setState({ weightErrMsg })
                    e.target.classList.remove("field-error")
                }
            }
        }

        if (e.target.name === 'breed') {
            let breed = e.target.value;
            let breedErrMsg = '';
            if (breed == undefined || breed.length === 0) {
                breedErrMsg = "Please enter Breed."
                this.setState({ breedErrMsg })
                e.target.classList.add("field-error")
            }
            else {
                let breedReg = /^([a-zA-Z]{5,10})$/
                console.log(breed);
                console.log(breedReg);
                console.log(breedReg.test(breed));
                if (!breedReg.test(breed)) {
                    let breedErrMsg = "Enter a valid breed Name"
                    this.setState({ breedErrMsg })
                    e.target.classList.add("field-error")
                }
                else {
                    breedErrMsg = ''
                    e.target.classList.remove("field-error")
                    this.setState({ breedErrMsg })
                }
            }

        }

        if (e.target.name === 'source') {
            let source = e.target.value;
            let sourceErrMsg = "";
            if (source == undefined || source.length === 0) {
                sourceErrMsg = "Please enter source."
                this.setState({ sourceErrMsg })
                e.target.classList.add("field-error")
            } else {
                let sourceErrMsg = ""
                this.setState({ sourceErrMsg })
                e.target.classList.remove("field-error")
            }
        }

        if (e.target.name === 'location') {
            let location = e.target.value;

            if (location == "Select Location") {
                let locErrMsg = "Please select the location."
                this.setState({ locErrMsg })
                e.target.classList.add("field-error")
            } else {
                let locErrMsg = ""
                this.setState({ locErrMsg })
                e.target.classList.remove("field-error")
            }
        }
    }
    render() {
        let {
            breed, source, quantity, weight, location
        } = this.state;

        return (
            <div>
                <main id="mainContent">
                    <section className="productSection">
                        <div className="header">
                            <div className="headingText">
                                <h2>Product Catalogue</h2>
                            </div>
                        </div>
                        <main className="formContainer container-fluid " id='productBlock'>
                            <section className="container">
                                <form onSubmit={this.submitHandler} onBlur={this.validations}>
                                    <p>Fields with <span className="text-danger">*</span> are required</p>
                                    <div>
                                        <label htmlFor="image">Upload Image <span className="text-danger">*</span></label>
                                        <input type="file" id="image" name="image" onChange={this.imageChangeHandler}
                                            onBlur={this.validations}></input>
                                        <span className="text-danger">{this.state.imgErrMsg}</span>
                                    </div>
                                    <label className="field" htmlFor="quantity">Quantity<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="number" id="quantity" name="quantity" className="inputBox" min="1"
                                                placeholder="Enter Quantity" value={quantity} onChange={this.fieldChangeHandler}
                                                onBlur={this.validations}></input>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-danger">{this.state.quantityErrMsg}</span>
                                    </div>
                                    <label htmlFor="weight" className="field">Weight<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="weight" name="weight" value={weight} className="inputBox "
                                                placeholder="Enter Weight"  onChange={this.fieldChangeHandler}
                                                onBlur={this.validations}></input>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-danger">{this.state.weightErrMsg}</span>
                                    </div>
                                    <label htmlFor="breed" className="field">Breed<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="breed" name="breed" className="inputBox "
                                                placeholder="Enter Breed" value={breed} onChange={this.fieldChangeHandler}
                                                onBlur={this.validations}></input>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-danger">{this.state.breedErrMsg}</span>
                                    </div>
                                    <label htmlFor="source" className="field">Source<span className="text-danger">*</span></label>
                                    <div className="row">
                                        <div className="col-md-11 col-sm-11 col-10">
                                            <input type="text" id="source" name="source" className="inputBox " value={source}
                                                placeholder="Enter Source" onChange={this.fieldChangeHandler}
                                                onBlur={this.validations}></input>
                                        </div>
                                    </div>
                                    <div>
                                        <span className="text-danger">{this.state.sourceErrMsg}</span>
                                    </div>
                                    <label htmlFor="location" className="field">Location<span className="text-danger">*</span></label>
                                    <select name="location" id="location" className="form-select"
                                        onChange={this.fieldChangeHandler} onBlur={this.validations}>
                                        <option>Select Location</option>
                                        <option value={location}>Hyderabad</option>
                                        <option value={location}>Vijayawada</option>
                                        <option value={location}>Bangalore</option>
                                    </select>
                                    <div>
                                        <span className="text-danger">{this.state.locErrMsg}</span>
                                    </div>
                                    <div className="bt">
                                        <button type="submit" name="update" id="createButton"
                                            className="btn btn-primary">Create</button>
                                        <button name="update" id="updateButton" className="btn btn-success">Update</button>
                                    </div>
                                </form>
                            </section>
                        </main>
                    </section>
                </main>
            </div>
        )
    }
}
export default Product;