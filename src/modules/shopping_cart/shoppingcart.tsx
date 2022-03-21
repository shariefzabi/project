import "./shopping_cart.css";
import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Modal from "@mui/material/Modal";
import Orderdisplay from "../ordercreation/components/orderdisplay/orderdisplay";

class Cart extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      count: 1,
      open: false,
    };
  }
  addProductToCart = () => {
    const updatedQuantity = this.props.redux.quantity;
    updatedQuantity[0] = updatedQuantity[0] + 1;
    this.props.updateProductQuantity(updatedQuantity);
  };
  removeProductToCart = () => {
    if (this.props.redux.quantity[0] > 1) {
      const updatedQuantity = this.props.redux.quantity;
      updatedQuantity[0] = updatedQuantity[0] - 1;
      if (updatedQuantity[0] < 1) {
        return;
      } else {
        this.props.updateProductQuantity(updatedQuantity);
      }
    }
  };
  handleOpen = () => this.setState({ open: true });
  handleClose = () => this.setState({ open: false });
  render() {
    console.log(this.props.redux.quantity);
    return (
      <>
        <main id="mainContent" className="small-conatiner">
          <section className="container">
            <div>
              <div className="cart_nav">
                <Link to="/">
                  <li className="cart_link">
                    Home <span>/</span>
                  </li>
                </Link>

                <Link to="/products">
                  <li className="cart_link">
                    {" "}
                    Lagos <span>/</span>
                  </li>
                </Link>

                <Link to="/products">
                  <li className="cart_link">
                    {" "}
                    Cattle Market <span>/</span>
                  </li>
                </Link>

                <Link to="/products">
                  <li className="cart_link">Cart</li>
                </Link>
                <br></br>
              </div>
            </div>

            {/* <header> */}
            <div className="cart_heading">
              <p>
                Shopping Cart{" "}
                <span className="item_count">
                  ({this.props.redux.quantity[0]} item)
                </span>
              </p>
            </div>
            {/* </header> */}

            <hr />
          </section>
          <div className="table_res">
            <div className="container tab">
              <table className="tablecol">
                <thead>
                  <tr>
                    <th className="product text-start">Product Details</th>

                    <th className="text-start">Quantity</th>
                    <th>Price</th>

                    <th>Delivery Details</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      {" "}
                      <span className="first-line">
                        ID - {this.props.redux.quantity[2]}
                      </span>
                      {/* <span className="second-line">20/19/2019</span> */}
                    </td>

                    <td>
                      <div className="row quantity ms-0 addbtn2 detail">
                        <button
                          className="btn btn-primary col"
                          onClick={this.removeProductToCart}
                          // {() =>
                          // this.setState({ count: this.state.count - 1 })
                          // }
                        >
                          -
                        </button>

                        <p className="col m-auto">
                          {/* {this.state.count} */}
                          {this.props.redux.quantity[0]}
                        </p>
                        {/* {this.props.redux.quantity[0]} */}
                        <button
                          className="btn btn-primary col"
                          onClick={this.addProductToCart}
                          // {() =>
                          //   this.setState({ count: this.state.count + 1 })
                          // }
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td className="detail">
                      {this.props.redux.quantity[0] *
                        this.props.redux.quantity[1]}
                      {/* // this.props.redux.quantity[]} */}
                      Rs
                    </td>

                    <td className="detail">
                      <span>
                        Pick- up date
                        <br /> 2022-03-31
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="container">
              <button
                className=" btn btn-success check_btn"
                onClick={this.handleOpen}
              >
                Proceed Checkout
              </button>
            </div>
            <div className="pay">
              <Modal
                open={this.state.open}
                onClose={this.handleClose}
                aria-describedby="modal-modal-description"
                sx={{ overflow: "auto" }}
              >
                <Orderdisplay></Orderdisplay>
              </Modal>
            </div>
          </div>
        </main>
      </>
    );
  }
}
const mapStateToProps = (state: any) => {
  console.log("team6", state);

  return {
    redux: state,
  };
};
const mapDispatchToProps = (dispatch: Function) => {
  return {
    updateProductQuantity: (updatedQuantity: any) =>
      dispatch({ type: "updateProductQuantity", payload: updatedQuantity }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
