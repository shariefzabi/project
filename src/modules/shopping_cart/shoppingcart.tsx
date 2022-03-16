import './shopping_cart.css';
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import appStore from '../../state/app_store';
import { addToCart } from './newcomponet/redux/Shopping/shopping-actions';
import { Breadcrumb } from 'react-bootstrap';

class Cart extends React.Component<any, any> {
  buttonData: any;
  getReduxData: any;
  constructor(props: any) {
    super(props);
    this.state = {
      items: [],
      DataisLaoded: false,
      datalength: 0,
      id: 3,
      reduxData: '',
      buttonData: '',
    };
    this.clickHandler = this.clickHandler.bind(this);
  }

  componentDidMount() {
    this.fetchProducts();
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }
  getButtonData() {
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }

  fetchProducts = () => {
    fetch('http://localhost:3005/animal/get-animal/Chennai/8')
      // this.setState({ items: getData.payload })
      .then((res: any) => res.json())
      // .then((res) => console.log(res))
      .then((res) => {
        this.setState({ items: res.payload });
      });
    // console.log("++", getData);
  };

  clickHandler(id: any, price: any) {
    addToCart(id, price);
    this.buttonData = appStore.getState();
    this.setState({
      datalength: this.buttonData.length,
    });
  }

  render() {
    const { DataisLoaded, items, datalength, id } = this.state;
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

                <p>Shopping Cart <span className="item_count">(1 item)</span></p>

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

                  <td> <span className="first-line">ID - 900085000597636</span>
                    <span className="second-line">20/19/2019</span>

                  </td>


                  <td className="rectangle ">

                    {/* {datalength} */}

                    <p

                      className="fas fa-plus incre"

                      onClick={(e) =>

                        this.clickHandler(items.animalId, items.price)

                      }

                    ></p>

                  </td>

                  {/* <td className='hitcount quantity_1'>

                    <p className="col "></p>

                    <button className="btn btn-primary col" >+</button>

                  </td> */}

                  <td>Out of Stock</td>

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

export default Cart;
