import React from "react";

import "./assets/styles.css";
import Image from "./image";
import Middle from "./middle";
import Form from "./form";



class Final extends React.Component{
  render(){
      return(
          <div>
              <Image></Image>
              <Middle></Middle>
              <Form></Form>
          </div>
      )
  }
}

export default Final;
