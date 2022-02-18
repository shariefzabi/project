import React from "react";

import "./assets/styles.css";
import Image from "./image";
import Middle from "./middle";
import Form from "./form";
import Menu from "../menubar/menu";



class Finalblog extends React.Component{
  render(){
      return(
          <div>
              <Menu></Menu>
              <Image></Image>
              <Middle></Middle>
              <Form></Form>
          </div>
      )
  }
}

export default Finalblog;
