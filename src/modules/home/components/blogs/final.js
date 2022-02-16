import React from "react";
import Blogtable from "./blogs";
// import Menu from "./menu";
import "./assets/styles.css";
import Footer from "./footer";

class Final extends React.Component{
  render(){
      return(
          <div>
              {/* <Menu></Menu> */}
              <Blogtable></Blogtable>
              <Footer></Footer>
          </div>
      )
  }
}

export default Final;
