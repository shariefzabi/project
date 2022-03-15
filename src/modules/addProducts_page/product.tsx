import React, { useState } from "react";
import "./product.scss";
// import ReactDOM from 'react-dom';
import { useFormik } from "formik";
import axios from "axios";
import { connect } from "react-redux";

const validateProduct = (productData: any) => {
  const errors: any = {};
  if (productData.image === null) {
    errors.image = "Please Upload an image";
  } else if (!/\.(jpg|jpeg|png)$/.test(productData.image)) {
    errors.image = "image format should be in .jpeg/.png/jpg.";
  }
  if (!productData.quantity) {
    errors.quantity = "Please Enter Quantity";
  } else if (!/^0*[1-9]\d*$/i.test(productData.quantity)) {
    //accepts numbers only
    errors.quantity = "Enter a valid quantity";
  }
  if (!productData.weight) {
    errors.weight = "Please Enter Weight";
  } else if (!/^[0-9- ]+(\Bkg|Kg)$/.test(productData.weight)) {
    //accepts numbers and ends with kg
    errors.weight = "Enter valid weight";
  }
  if (!productData.breed) {
    errors.breed = "Please Enter Breed";
  } else if (!/^([a-zA-Z ]{1,30})$/i.test(productData.breed)) {
    //accepts alphabets and space
    errors.breed = "Enter a valid breed";
  }
  if (!productData.source) {
    errors.source = "Please Enter Source";
  } else if (!/^([a-zA-Z0-9 ]){4,}$/i.test(productData.source)) {
    //accepts alphanumeric,spacing
    errors.source = "Enter a valid source";
  }

  if (productData.location === "Select Location") {
    errors.location = "Please Enter Location";
  }
  if (productData.certification==="Select Certification") {
    errors.certification = "Please Choose cerification";
  }
  if (productData.availability === "Select Availability") {
    errors.availability = "Please Choose availability";
  }
  if (productData.market === "Select Market") {
    errors.market = "Please Choose Market";

  }
  if (!productData.price) {
    errors.price = "Please Enter Price";
  } else if (!/^[0-9]+(\BRs|RS)$/.test(productData.price)) {
    errors.price = "Enter Price in Rs";
  }
  return errors;
};
function AddProducts(props: any) {
  const formik = useFormik({
    initialValues: {
      image: null,
      quantity: "",
      weight: "",
      breed: "",
      source: "",
      price: "",
      certification: "Select Certification",
      availability: "Select Availability",
      market: "Select Market",
      location: "Select Location"
    },
    validate: validateProduct,
    onSubmit: (productDetails: any) => {
      // alert(JSON.stringify(values));
      // values.preventDefault();
      // console.log(values);
      storeProductData(productDetails);
      console.log("Latest Product:", productDetails);
      props.store_products(productDetails);
    }
  });
  const storeProductData = (async (prodData: any) => {

    try {
      const response = await axios.post("http://localhost:3005/market/updateDetails", prodData);
      console.log('res', response);

    } catch (err) {

      console.error(err)
    }
  });

  const [locationNames, setLocationNames] = useState([]);
  const fetchLocations = (async () => {

    try {
      const response = await axios.get("http://localhost:3005/market/Locations")
      setLocationNames(response.data);

    } catch (err) {

      console.error(err)
    }
  });
  return (
    <div>
      <main id="mainContent">
        <section className="productSection">
          <div className="header">
            <div className="headingText">
              <h2>Product Catalogue</h2>
            </div>
          </div>
          <main className="formContainer container-fluid " id="productBlock">
            <section className="container">
              <form onSubmit={formik.handleSubmit}>
                <p>
                  Fields with <span className="text-danger">*</span> are
                  required
                </p>
                <div>
                  <label htmlFor="image">
                    Upload Image<span className="text-danger">*</span>{" "}
                  </label>
                  <input
                    type="file"
                    name="image"
                    id="image" //value={formik.values.Id}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  ></input>
                  {formik.touched.image && formik.errors.image ? (
                    <span style={{ color: "red" }}>{formik.errors.image}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="quantity">
                  Quantity<span className="text-danger">*</span>
                </label>
                <input
                  type="number"
                  id="quantity"
                  name="quantity"
                  className="form-control"
                  min="1"
                  placeholder="Enter Quantity"
                  value={formik.values.quantity}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                <div>
                  {formik.touched.quantity && formik.errors.quantity ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.quantity}
                    </span>
                  ) : null}
                </div>

                <label className="field" htmlFor="weight">
                  Weight<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="weight"
                  name="weight"
                  className="form-control"
                  placeholder="Enter Weight"
                  value={formik.values.weight}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                <div>
                  {formik.touched.weight && formik.errors.weight ? (
                    <span style={{ color: "red" }}>{formik.errors.weight}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="breed">
                  Breed<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="breed"
                  name="breed"
                  className="form-control"
                  placeholder="Enter Breed"
                  value={formik.values.breed}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                <div>
                  {formik.touched.breed && formik.errors.breed ? (
                    <span style={{ color: "red" }}>{formik.errors.breed}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="source">
                  Source<span className="text-danger">*</span>
                </label>
                <input
                  type="text"
                  id="source"
                  name="source"
                  className="form-control"
                  placeholder="Enter Source"
                  value={formik.values.source}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                ></input>
                <div>
                  {formik.touched.source && formik.errors.source ? (
                    <span style={{ color: "red" }}>{formik.errors.source}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="price">
                Price<span className="text-danger">*</span>
                </label>
                    <input
                      type="text"
                      id="price"
                      name="price"
                      className="form-control"
                      placeholder="Enter Price"
                      value={formik.values.price}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                <div>
                  {formik.touched.price && formik.errors.price ? (
                    <span style={{ color: "red" }}>{formik.errors.price}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="certification">
                  Certification<span className="text-danger">*</span>
                </label>
                <select
                  name="certification"
                  id="certification"
                  className="form-select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value={formik.values.certification}>
                    Select Certification
                  </option>
                  <option value="Certified">Certified</option>
                  <option value= "Not Certified">Not Certified</option>
                </select >
                <div>
                  {formik.touched.certification && formik.errors.certification ? (
                    <span style={{ color: "red" }}>{formik.errors.certification}</span>
                  ) : null}
                </div>
                <label htmlFor="location" className="field">
                  Location<span className="text-danger">*</span>
                </label>
                <select
                  name="location"
                  id="location"
                  className="form-select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  onClick={fetchLocations}
                >
                  <option value={formik.values.location}>
                    Select Location
                  </option>
                  {
                    locationNames.map((obj: any) => {
                      return (
                        <option className="dropdownItem" key={obj}>
                          {obj}
                        </option>)
                    })
                  }
                </select>
                <div>
                  {formik.touched.location && formik.errors.location ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.location}
                    </span>
                  ) : null}
                </div>

                <label htmlFor="market" className="field">
                  Market<span className="text-danger">*</span>
                </label>
                <select
                  name="market"
                  id="market"
                  className="form-select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value={formik.values.market}>
                    Select Market
                  </option>
                  <option value="Cattle Market">Cattle Market</option>
                  <option value="Sheep Market">Sheep Market</option>
                </select>
                <div>
                  {formik.touched.market && formik.errors.market ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.market}
                    </span>
                  ) : null}
                </div>
                <label htmlFor="availability" className="field">
                  Availability<span className="text-danger">*</span>
                </label>
                <select
                  name="availability"
                  id="availability"
                  className="form-select"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value={formik.values.availability}>
                    Select Availability
                  </option>
                  <option value="In Stock">In Stock</option>
                  <option value= "Out of Stock">Out of Stock</option>
                </select >
                <div>
                  {formik.touched.availability && formik.errors.availability ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.availability}
                    </span>
                  ) : null}
                </div>

                <div className="bt">
                  <button
                    type="submit"
                    name="create"
                    id="createButton"
                    className="btn btn-primary"
                  // onClick={() => {
                  //   props.store_productdetails(productDetails);
                  // }}
                  >
                    Create
                  </button>
                </div>
              </form>
            </section>
          </main>
        </section>
      </main>
    </div>
  );
}

// export default ProductDetails;
const mapStateToProps = (state: any) => {
  console.log(state);

  return {
    redux: state
  };
};

const mapDispatchToProps = (dispatch: Function) => {
  return {
    store_products: (productDetails: any) =>
      dispatch({ type: "store_products", productDetails })
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProducts);
