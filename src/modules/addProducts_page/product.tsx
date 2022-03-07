import React from "react";
import "./product.css";
// import ReactDOM from 'react-dom';
import { useFormik } from "formik";
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
  } else if (!/^[0-9]+(\Bkg|Kg)$/.test(productData.weight)) {
    //accepts numbers and ends with kg
    errors.weight = "Enter valid weight";
  }
  if (!productData.breed) {
    errors.breed = "Please Enter Breed";
  } else if (!/^([a-zA-Z ]{1,10})$/i.test(productData.breed)) {
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

  return errors;
};

function ProductDetails(props: any) {
  const formik = useFormik({
    initialValues: {
      image: null,
      quantity: "",
      weight: "",
      breed: "",
      source: "",
      location: "Select Location"
    },
    validate: validateProduct,
    onSubmit: (productDetails: any) => {
      // alert(JSON.stringify(values));
      // values.preventDefault();
      // console.log(values);
      console.log("Latest Product:", productDetails);
      props.store_products(productDetails);
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
                <div className="row">
                  <div className="col-md-11 col-sm-11 col-10">
                    <input
                      type="number"
                      id="quantity"
                      name="quantity"
                      className="inputBox"
                      min="1"
                      placeholder="Enter Quantity"
                      value={formik.values.quantity}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                  </div>
                </div>
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
                <div className="row">
                  <div className="col-md-11 col-sm-11 col-10">
                    <input
                      type="text"
                      id="weight"
                      name="weight"
                      className="inputBox"
                      placeholder="Enter Weight"
                      value={formik.values.weight}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                  </div>
                </div>
                <div>
                  {formik.touched.weight && formik.errors.weight ? (
                    <span style={{ color: "red" }}>{formik.errors.weight}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="breed">
                  Breed<span className="text-danger">*</span>
                </label>
                <div className="row">
                  <div className="col-md-11 col-sm-11 col-10">
                    <input
                      type="text"
                      id="breed"
                      name="breed"
                      className="inputBox"
                      placeholder="Enter Breed"
                      value={formik.values.breed}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                  </div>
                </div>
                <div>
                  {formik.touched.breed && formik.errors.breed ? (
                    <span style={{ color: "red" }}>{formik.errors.breed}</span>
                  ) : null}
                </div>
                <label className="field" htmlFor="source">
                  Source<span className="text-danger">*</span>
                </label>
                <div className="row">
                  <div className="col-md-11 col-sm-11 col-10">
                    <input
                      type="text"
                      id="source"
                      name="source"
                      className="inputBox"
                      placeholder="Enter Source"
                      value={formik.values.source}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    ></input>
                  </div>
                </div>
                <div>
                  {formik.touched.source && formik.errors.source ? (
                    <span style={{ color: "red" }}>{formik.errors.source}</span>
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
                >
                  <option value={formik.values.location}>
                    Select Location
                  </option>
                  <option>Hyderabad</option>
                  <option>Vijayawada</option>
                  <option>Bangalore</option>
                </select>
                <div>
                  {formik.touched.location && formik.errors.location ? (
                    <span style={{ color: "red" }}>
                      {formik.errors.location}
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
                  <button
                    type="button"
                    name="update"
                    id="updateButton"
                    className="btn btn-success"
                  >
                    Update
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails);
