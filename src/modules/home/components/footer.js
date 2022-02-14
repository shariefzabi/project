import React from "react";
import sub from "./assets/img/Group 3.png";
import gpay from  "./assets/img/Google Play.png";
import appstore from "./assets/img/Appstore.png";


class Footer extends React.Component{
  render(){
      return(
          <div>
              <footer class="container-fluid  section-c">
    <section class="d-flex img-section">
    <div class="container theroy-z text-white">
      <p class="latestnews">Get our latest news</p>
      <p class="newsletter">Newsletter</p>
    </div>
    <div class="container search text-white">
      <form class="searchbar d-flex">
        <input class="searchinput" type="text" placeholder="Email Address" name="search" size="25"></input>
        <button class="text-white">Subscribe <img src={sub} class="ps-3"/>
        </button>
      </form>
    </div>
    </section>
    <section class="footer-2 text-white">
      <div class="container">
        <div class="row">
          <div class="col">
            <div class="paragraph">
              <p>The vision of Livestock247.com is to mitigate the spread of zoonotic diseases through the  provision of fit-for-slaughter and traceable livestock to our customers.
              </p>
            </div>
          </div>
          <div class="col">
            <ul>
              <li>
                <h3>Quicklinks</h3>
              </li>
            </ul>
            <ul class="in-li">
              <li>Home</li>
              <li>About Us</li>
              <li>Be a Partner</li>
              <li>Blog</li>
            </ul>
          </div>
          <div class="col">
            <ul>
              <li>
                <h3>CONTACTS</h3>
              </li>
            </ul>
            <div class="row">
              <div class="col">
                <ul>
                  <li>Phone</li>
                  <li>E-mail</li>
                  <li>Address</li>
                </ul>
              </div>
              <div class="col">
                <ul>
                  <li>09062-2903550</li>
                  <li>@Livestock247.com</li>
                  <li>4th Floor ,valley view Plazza,
                    99 Opebi Road,IKeja,Lagesngeria
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="text-center">
        <img src={gpay} alt="googleplay" height="50px" width="130px"/>
        <img src={appstore} alt="apple" height="50px" width="130px"/>
      </div>
      <div class="container">
        <div class="row">
          <div class="col-2">
            <span>&#169; 2018 LIVESTOCK</span>
          </div>
          <div class="col-8 faq">
            <ul class="d-flex footer-list">
              <li>FAQ</li>
              <li class="privacy">PRIVACY</li>
              <li>TERMS & CONDITIONS</li>
            </ul>
          </div>
          <div class="col-2 text-end">
            <i class="fa fa-facebook"></i>
            <i class="fa fa-google"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-instagram"></i>
          </div>
        </div>
      </div>
    </section>
  </footer>
          </div>
      )
  }
}

export default Footer;