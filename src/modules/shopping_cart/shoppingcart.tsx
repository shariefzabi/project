import './shopping_cart.css';
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import appStore from '../../state/app_store';
import { addToCart } from './newcomponet/redux/Shopping/shopping-actions';
import { Breadcrumb } from 'react-bootstrap';
import { connect } from 'react-redux';

class Cart extends React.Component<any, any> {
  

  
  constructor(props: any) {
    super(props);
      // let [count, setCount] = useState(1)
       

  // componentDidMount() {
  //   this.fetchProducts();
  //   this.buttonData = appStore.getState();
  //   this.setState({
  //     datalength: this.buttonData.length,
  //   });
  // }
  // getButtonData() {
  //   this.buttonData = appStore.getState();
  //   this.setState({
  //     datalength: this.buttonData.length,
  //   });
  // }

  // fetchProducts = () => {
  //   fetch('http://localhost:3005/animal/get-animal/Chennai/8')
  //     // this.setState({ items: getData.payload })
  //     .then((res: any) => res.json())
  //     // .then((res) => console.log(res))
  //     .then((res) => {
  //       this.setState({ items: res.payload });
  //     });
  //   // console.log("++", getData);
  // };

  // clickHandler(id: any, price: any) {
  //   addToCart(id, price);
  //   this.buttonData = appStore.getState();
  //   this.setState({
  //     datalength: this.buttonData.length,
  //   });
  // }
//   let countHandler = () => {
//     let count=0;
//     let setCount(count + 1);
// }
// const decrement = () => {
//     setCount(count - 1)
// }
// function addToCart() {
//     let items = [count, parseInt(`${product.price}`), product._id]
//     props.quantity(items);
// }
  }

  render() {
    return (
      <>

        <main id="mainContent" className="small-conatiner">

          <section className='container'>

            <div >

              <div className="cart_nav">

                <Link to='/'><li className="cart_link">Home <span>/</span></li></Link>

                <Link to='/products'><li className="cart_link"> Lagos <span>/</span></li></Link>

                <Link to='/products'><li className="cart_link"> Cattle Market  <span>/</span></li></Link>

                <Link to='/products'><li className="cart_link">Cart</li></Link>
                <br></br>



                {/* <li className="cart_link">Home <span>/</span></li>
                <li className="cart_link">Lagos <span>/</span></li>

                <li className="cart_link">Cattle Market <span>/</span></li> */}

                {/* <li className="cart_link">Cart</li><br /> */}

              </div>

            </div>

            <header>
              <div className="cart_heading">

                <p>Shopping Cart <span className="item_count">({this.props.redux.quantity[0]} item)</span></p>

              </div>

            </header>

            <hr />
          </section>

          <div className="container tab">

            <table className="tablecol">

              <thead>

                <tr >

                  <th>Product Details</th>

                  <th>Quantity</th>
                  <th>Price</th>

                  <th>Delivery Details</th>

                </tr>

              </thead>



              <tbody>



                <tr>

                  <td> <span className="first-line">ID - {this.props.redux.quantity[2]}</span>
                    <span className="second-line">20/19/2019</span>

                  </td>


                  <td>
                  
                            <div className="row quantity ms-0 addbtn2">
                                <button className="btn btn-primary col"  >-</button>
                                <p className="col m-auto">{this.props.redux.quantity[0]}</p>
                                <button className="btn btn-primary col" onClick={() => this.setState({ count: this.state.count + 1 })} >+</button>
                                </div>


                      


                  </td>

                  {/* <td className='hitcount quantity_1'>

                    <p className="col "></p>

                    <button className="btn btn-primary col" >+</button>

                  </td> */}

                  <td>{this.props.redux.quantity[1] * this.props.redux.quantity[0]}Rs</td>

                  <td><span>Awaiting Payment</span></td>

                </tr>



              </tbody>

            </table>

          </div>

          <div className="container">

            <button className=" btn btn-success check_btn">Proceed Checkout</button>

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
// const mapDispatchToProps = (dispatch: Function) => {
//   return {

//       quantity: (count: any) => dispatch({ type: 'itemslength', payload: count })
//   }
// }
// export default Cart;
export default connect(mapStateToProps )(Cart);
