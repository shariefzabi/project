import React from "react";

// import "./assets/styles.scss";
import Image from "./image";
import Middle from "./middle";
import Form from "./form";



class Blog extends React.Component{
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

export default Blog;
